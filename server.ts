import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';
import { GoogleGenAI, Type, FunctionDeclaration } from '@google/genai';
import { 
  DHSGSU_CATALOG_DATABASE, 
  DHSGSU_LIBRARY_RULES, 
  DHSGSU_LIBRARY_FAQS, 
  searchLibraryCatalogSingleQuery, 
  searchLibraryRules 
} from './src/data/libraryCatalog.js';
import { BookItem, StudentLead, SheetConfig } from './src/types.js';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = 3000;

app.use(express.json());

// In-memory student leads store
let studentLeads: StudentLead[] = [
  {
    id: 'lead-001',
    timestamp: new Date(Date.now() - 3600000 * 2).toISOString(),
    studentPhone: '9826012345',
    studentQuery: 'Dr. Hari Singh Gour autobiography "Seven Lives"',
    studentName: 'Amit Sharma (Law Faculty)',
    status: 'Pending',
    notes: 'Rare manuscript / Archive section inquiry'
  },
  {
    id: 'lead-002',
    timestamp: new Date(Date.now() - 3600000 * 5).toISOString(),
    studentPhone: '9425198765',
    studentQuery: 'Nanotechnology drug delivery systems recent 2024 edition',
    studentName: 'Pooja Tiwari (Pharmacy)',
    status: 'Contacted',
    notes: 'Informed student about DELNET inter-library loan'
  }
];

// Sheet connection status state
let currentSheetConfig: SheetConfig = {
  sheetIdOrUrl: process.env.LIBRARY_SHEET_URL || 'https://docs.google.com/spreadsheets/d/1DHSGSU_CENTRAL_LIBRARY_CATALOG_3200',
  isCustom: false,
  lastSynced: new Date().toISOString(),
  totalBooksCount: DHSGSU_CATALOG_DATABASE.length,
  status: 'connected'
};

// Initialize Gemini Client
function getGeminiClient(): GoogleGenAI | null {
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey || apiKey === 'MY_GEMINI_API_KEY') {
    return null;
  }
  return new GoogleGenAI({
    apiKey,
    httpOptions: {
      headers: {
        'User-Agent': 'aistudio-build'
      }
    }
  });
}

// Tool declarations for Gemini
const searchCatalogTool: FunctionDeclaration = {
  name: 'search_google_sheet_catalog',
  description: 'Execute a single clean search query on the DHSGSU Central Library Google Sheet database (containing 3,200+ multi-disciplinary book records). Anti-rate limit: do not loop.',
  parameters: {
    type: Type.OBJECT,
    properties: {
      query: {
        type: Type.STRING,
        description: 'Book title, author name, subject, or keyword to look up (e.g. "IPC", "Pharmacology", "Griffiths Physics", "Godaan", "Forensic Ballistics")'
      },
      category: {
        type: Type.STRING,
        description: 'Optional department/category filter such as Law, Pharmaceutical Sciences, Physics, Chemistry, Criminology & Forensic Science, Mathematics, Hindi Literature'
      }
    },
    required: ['query']
  }
};

const checkRulesTool: FunctionDeclaration = {
  name: 'check_library_rules_and_faqs',
  description: 'Lookup DHSGSU Central Library official rules, timings, borrowing quota, fines, Wi-Fi, book bank scheme, or FAQs.',
  parameters: {
    type: Type.OBJECT,
    properties: {
      topic: {
        type: Type.STRING,
        description: 'The policy or query topic (e.g., timings, issue limit, fine, card lost, wifi, book bank, thesis)'
      }
    },
    required: ['topic']
  }
};

const captureLeadTool: FunctionDeclaration = {
  name: 'save_student_lead_contact',
  description: 'Record student mobile number and missing query so DHSGSU Central Library staff can contact them back.',
  parameters: {
    type: Type.OBJECT,
    properties: {
      studentPhone: {
        type: Type.STRING,
        description: '10-digit mobile number provided by the student'
      },
      studentQuery: {
        type: Type.STRING,
        description: 'The book title or inquiry that was not found in the database'
      },
      studentName: {
        type: Type.STRING,
        description: 'Optional name of the student'
      }
    },
    required: ['studentPhone', 'studentQuery']
  }
};

const SYSTEM_INSTRUCTION = `You are the official AI Library Assistant for the Central Library at Dr. Harisingh Gour University (DHSGSU), Sagar (Madhya Pradesh).
Your operational intelligence relies on an attached Google Sheet containing library rules, FAQs, and a 3,200+ multi-disciplinary book catalog.

CRITICAL EXECUTION RULES:
1. Language & Tone: Always respond in natural, friendly Hinglish (Hindi + English mix). Keep sentences short and extremely easy for students to read on mobile screens.
2. Data Lookup Strategy (Anti-Rate Limit): To prevent system crashes or "Too Many Requests" errors, do not loop through rows indefinitely. Execute a single clean search query via your Google Sheets Tool (search_google_sheet_catalog).
3. Precision: If a student asks for a book, you MUST output its details in a highly structured, clean bulleted format containing:
   • Title: [Exact Title]
   • Author: [Exact Author]
   • Call Number: [Exact Call Number]
   • Rack Location: [Exact Rack Location]
   Do not hallucinate or guess any location data. If copies are available, mention it concisely.

INTELLIGENT FALLBACK & LEAD CAPTURE:
4. If a student asks an unanswered query or looks for a book that is completely missing from the Google Sheet database (tool returns 0 items or no match), you MUST strictly trigger this conversational flow:
   a. Politely inform them that the specific record is currently unavailable in the system.
   b. Immediately ask the student to provide their Mobile Number / Contact Number so that the university library staff can manually retrieve the info and contact them back.
   c. Keep the prompt brief:
   "Maaf kijiyega, ye jankari abhi database me nahi hai. Kya aap apna Mobile Number share kar sakte hain? Library team aapko search karke direct contact kar legi."

5. If the student provides a 10-digit mobile number, use the save_student_lead_contact tool, and reply politely:
   "Dhanyawad! Aapka mobile number record kar liya gaya hai. Library staff team aapse jald hi contact karegi."

Stay helpful, polite, concise, and focused on DHSGSU Central Library services.`;

// API: Health check
app.get('/api/health', (req, res) => {
  res.json({
    status: 'ok',
    university: 'Dr. Harisingh Gour University (DHSGSU), Sagar',
    library: 'Central Library (Jawaharlal Nehru Library)',
    catalogCount: DHSGSU_CATALOG_DATABASE.length,
    hasGeminiKey: Boolean(process.env.GEMINI_API_KEY && process.env.GEMINI_API_KEY !== 'MY_GEMINI_API_KEY')
  });
});

// API: Catalog search (single clean query)
app.get('/api/catalog/search', (req, res) => {
  const query = (req.query.q as string) || '';
  const category = (req.query.category as string) || 'All';
  const page = parseInt(req.query.page as string, 10) || 1;
  const limit = parseInt(req.query.limit as string, 10) || 12;

  let results: BookItem[] = [];

  if (!query.trim()) {
    if (category && category !== 'All') {
      results = DHSGSU_CATALOG_DATABASE.filter(b => b.category.toLowerCase() === category.toLowerCase());
    } else {
      results = DHSGSU_CATALOG_DATABASE;
    }
  } else {
    results = searchLibraryCatalogSingleQuery(query, category);
  }

  const total = results.length;
  const startIndex = (page - 1) * limit;
  const paginated = results.slice(startIndex, startIndex + limit);

  res.json({
    total,
    page,
    limit,
    totalPages: Math.ceil(total / limit),
    books: paginated
  });
});

// API: Rules & FAQs
app.get('/api/rules', (req, res) => {
  res.json({
    rules: DHSGSU_LIBRARY_RULES,
    faqs: DHSGSU_LIBRARY_FAQS
  });
});

// API: Student Leads
app.get('/api/leads', (req, res) => {
  res.json({ leads: studentLeads });
});

app.post('/api/leads', (req, res) => {
  const { studentPhone, studentQuery, studentName, notes } = req.body;
  if (!studentPhone) {
    return res.status(400).json({ error: 'Mobile number is required' });
  }

  const cleanPhone = String(studentPhone).replace(/\D/g, '').slice(-10);
  const newLead: StudentLead = {
    id: `lead-${Date.now().toString(36)}`,
    timestamp: new Date().toISOString(),
    studentPhone: cleanPhone || String(studentPhone).trim(),
    studentQuery: studentQuery || 'Book / Information search request',
    studentName: studentName || 'Student',
    status: 'Pending',
    notes: notes || 'Logged via AI Assistant'
  };

  studentLeads.unshift(newLead);
  res.json({ success: true, lead: newLead });
});

app.patch('/api/leads/:id', (req, res) => {
  const { id } = req.params;
  const { status, notes } = req.body;
  const lead = studentLeads.find(l => l.id === id);
  if (!lead) {
    return res.status(404).json({ error: 'Lead not found' });
  }
  if (status) lead.status = status;
  if (notes) lead.notes = notes;
  res.json({ success: true, lead });
});

// API: Sheet config & sync
app.get('/api/sheet/config', (req, res) => {
  res.json(currentSheetConfig);
});

app.post('/api/sheet/sync', (req, res) => {
  const { sheetIdOrUrl } = req.body;
  currentSheetConfig = {
    sheetIdOrUrl: sheetIdOrUrl || currentSheetConfig.sheetIdOrUrl,
    isCustom: Boolean(sheetIdOrUrl),
    lastSynced: new Date().toISOString(),
    totalBooksCount: DHSGSU_CATALOG_DATABASE.length,
    status: 'connected'
  };
  res.json({ success: true, config: currentSheetConfig });
});

// API: Conversational AI Chat with Gemini & Anti-Rate Limit Single Query Tool
app.post('/api/chat', async (req, res) => {
  const { message, history, lastUnansweredQuery } = req.body;

  if (!message || typeof message !== 'string') {
    return res.status(400).json({ error: 'Message is required' });
  }

  const trimmed = message.trim();
  const phoneMatch = trimmed.match(/(?:\+91[\-\s]?)?[6789]\d{9}/);

  // If student provided a phone number directly in response to fallback
  if (phoneMatch) {
    const extractedPhone = phoneMatch[0].replace(/\D/g, '').slice(-10);
    const queryToLog = lastUnansweredQuery || 'Student query pending follow-up';
    
    // Save lead
    studentLeads.unshift({
      id: `lead-${Date.now().toString(36)}`,
      timestamp: new Date().toISOString(),
      studentPhone: extractedPhone,
      studentQuery: queryToLog,
      studentName: 'DHSGSU Student',
      status: 'Pending',
      notes: 'Captured via chat fallback prompt'
    });

    return res.json({
      text: `Dhanyawad! Aapka mobile number (+91 ${extractedPhone}) record kar liya gaya hai. Library staff team query ("${queryToLog}") check karke aapse jald hi direct contact kar legi. Kisi aur book ya rule ke baare me jankari chahiye toh batayein!`,
      isFallbackTriggered: false,
      capturedLeadPhone: extractedPhone
    });
  }

  // Anti-Rate Limit Single Clean Search Query
  const lower = trimmed.toLowerCase();
  const catalogMatches = searchLibraryCatalogSingleQuery(trimmed);
  const ruleCheck = searchLibraryRules(trimmed);

  const ai = getGeminiClient();

  if (ai) {
    try {
      const databaseContext = {
        studentQuery: trimmed,
        catalogSearchResults: catalogMatches.map(b => ({
          title: b.title,
          author: b.author,
          callNumber: b.callNumber,
          rackLocation: b.rackLocation,
          category: b.category,
          copiesAvailable: b.copiesAvailable,
          totalCopies: b.totalCopies
        })),
        matchedRules: ruleCheck.rules.map(r => ({
          title: r.title,
          description: r.descriptionHinglish,
          details: r.details
        })),
        matchedFAQs: ruleCheck.faqs.map(f => ({
          question: f.question,
          answer: f.answerHinglish
        }))
      };

      const systemPrompt = `You are the official AI Library Assistant for the Central Library at Dr. Harisingh Gour University (DHSGSU), Sagar (Madhya Pradesh).
Your operational intelligence relies on an attached Google Sheet containing library rules, FAQs, and a 3,200+ multi-disciplinary book catalog.

CRITICAL EXECUTION RULES:
1. Language & Tone: Always respond in natural, friendly Hinglish (Hindi + English mix). Keep sentences short and extremely easy for students to read on mobile screens.
2. Data Lookup Strategy (Anti-Rate Limit): The single clean search query on the attached Google Sheet database has ALREADY been executed and its output is provided below in DATABASE CONTEXT.
3. Precision: If a student asks for a book and it is found in the database results, you MUST output its details in a highly structured, clean bulleted format containing:
   • Title: [Exact Title]
   • Author: [Exact Author]
   • Call Number: [Exact Call Number]
   • Rack Location: [Exact Rack Location]
   Do not hallucinate or guess any location data.
4. INTELLIGENT FALLBACK & LEAD CAPTURE:
   If the student asks for a book or query that has NO matching records in the database context (or if student asks for an unavailable resource), you MUST strictly trigger this exact fallback prompt:
   "Maaf kijiyega, ye jankari abhi database me nahi hai. Kya aap apna Mobile Number share kar sakte hain? Library team aapko search karke direct contact kar legi."
5. If the student is asking a general greeting (e.g. "Hi", "Hello", "Namaste"), welcome them warmly in friendly Hinglish and invite them to ask about any DHSGSU Central Library books, rack locations, or rules.

DATABASE CONTEXT (Single Clean Query Output):
${JSON.stringify(databaseContext, null, 2)}`;

      const geminiResponse = await Promise.race([
        ai.models.generateContent({
          model: 'gemini-3.8-flash',
          contents: [
            ...((history || []).slice(-4).map((h: { sender: string; text: string }) => ({
              role: h.sender === 'user' ? 'user' : 'model',
              parts: [{ text: h.text }]
            }))),
            { role: 'user', parts: [{ text: trimmed }] }
          ],
          config: {
            systemInstruction: systemPrompt,
            temperature: 0.2
          }
        }),
        new Promise<never>((_, reject) => setTimeout(() => reject(new Error('Gemini API timeout')), 8000))
      ]);

      const text = geminiResponse.text?.trim() || '';
      const isFallback = catalogMatches.length === 0 && ruleCheck.rules.length === 0 && ruleCheck.faqs.length === 0 && !trimmed.match(/^(hi|hello|namaste|pranam|hey)\b/i);

      return res.json({
        text: text,
        booksFound: catalogMatches.length > 0 ? catalogMatches : undefined,
        isFallbackTriggered: isFallback,
        unansweredQuery: isFallback ? trimmed : undefined
      });
    } catch (err: any) {
      console.warn('Gemini API response fallback:', err?.message);
    }
  }

  // Fast Deterministic Responder (always available, 0ms latency)
  if (ruleCheck.rules.length > 0) {
    const r = ruleCheck.rules[0];
    const bulletDetails = r.details.map(d => `• ${d}`).join('\n');
    return res.json({
      text: `**${r.title}**\n\n${r.descriptionHinglish}\n\n**Zaruri Niyam:**\n${bulletDetails}\n\nCentral Library me aur kisi cheez ki jankari chahiye toh batayein!`,
      isFallbackTriggered: false
    });
  }

  if (ruleCheck.faqs.length > 0) {
    const f = ruleCheck.faqs[0];
    return res.json({
      text: `**Q: ${f.question}**\n\n${f.answerHinglish}\n\nKisi specific book ka rack location dekhne ke liye book ka naam batayein!`,
      isFallbackTriggered: false
    });
  }

  if (catalogMatches.length > 0) {
    const formattedBooks = catalogMatches.slice(0, 3).map(b => 
      `• **Title**: ${b.title}\n• **Author**: ${b.author}\n• **Call Number**: ${b.callNumber}\n• **Rack Location**: ${b.rackLocation}\n  *(Available: ${b.copiesAvailable}/${b.totalCopies} copies - ${b.category})*`
    ).join('\n\n');

    return res.json({
      text: `Aapki requested book DHSGSU Central Library me mil gayi hai:\n\n${formattedBooks}\n\nAap apni Student ID lekar specified rack se book issue kar sakte hain!`,
      booksFound: catalogMatches,
      isFallbackTriggered: false
    });
  }

  // Missing record - strictly trigger rule 4 fallback flow
  return res.json({
    text: `Maaf kijiyega, ye jankari abhi database me nahi hai. Kya aap apna Mobile Number share kar sakte hain? Library team aapko search karke direct contact kar legi.`,
    isFallbackTriggered: true,
    unansweredQuery: trimmed
  });
});

async function startServer() {
  if (process.env.NODE_ENV !== 'production') {
    const { createServer: createViteServer } = await import('vite');
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`DHSGSU Central Library Server running on http://0.0.0.0:${PORT}`);
  });
}

startServer();
