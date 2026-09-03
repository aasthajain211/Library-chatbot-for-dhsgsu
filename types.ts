export interface BookItem {
  id: string;
  title: string;
  author: string;
  callNumber: string;
  rackLocation: string;
  category: string;
  copiesAvailable: number;
  totalCopies: number;
  status: 'Available' | 'Issued' | 'Reference Only';
  edition?: string;
  publisher?: string;
  year?: number;
}

export interface LibraryRule {
  id: string;
  category: string;
  title: string;
  descriptionHinglish: string;
  details: string[];
}

export interface LibraryFAQ {
  id: string;
  question: string;
  answerHinglish: string;
  category: string;
}

export interface StudentLead {
  id: string;
  timestamp: string;
  studentPhone: string;
  studentQuery: string;
  studentName?: string;
  status: 'Pending' | 'Contacted' | 'Resolved';
  notes?: string;
}

export interface ChatMessage {
  id: string;
  sender: 'user' | 'assistant';
  text: string;
  timestamp: string;
  booksFound?: BookItem[];
  isFallbackTriggered?: boolean;
  unansweredQuery?: string;
  capturedLeadPhone?: string;
}

export interface SheetConfig {
  sheetIdOrUrl: string;
  isCustom: boolean;
  lastSynced: string;
  totalBooksCount: number;
  status: 'connected' | 'syncing' | 'error';
}
