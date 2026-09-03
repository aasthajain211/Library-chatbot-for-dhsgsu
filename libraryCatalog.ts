import { BookItem, LibraryRule, LibraryFAQ } from '../types';

export const DHSGSU_LIBRARY_RULES: LibraryRule[] = [
  {
    id: 'rule-timings',
    category: 'Timings',
    title: 'Library Opening & Reading Hall Timings',
    descriptionHinglish: 'Central Library subah 8:00 AM se raat 8:00 PM tak khulti hai. Exam time me Reading Hall 24x7 open rehti hai.',
    details: [
      'Circulation Counter (Book Issue/Return): 9:30 AM to 5:30 PM (Mon-Sat)',
      'General Reading Hall: 8:00 AM to 10:00 PM (Exam preparation time me 24x7 open)',
      'Digital Resource & E-Library Lab: 9:00 AM to 7:00 PM',
      'Sundays & Gazetted Holidays: Main counter closed, Ground Floor Reading Hall remains open 9:00 AM to 5:00 PM'
    ]
  },
  {
    id: 'rule-borrowing',
    category: 'Borrowing Limits',
    title: 'Book Issue Quota & Duration',
    descriptionHinglish: 'Har student category ke liye alag issue quota hai. UG: 3 books, PG: 5 books, Ph.D: 8 books.',
    details: [
      'Undergraduate (UG): 3 books for 14 days',
      'Postgraduate (PG): 5 books for 21 days',
      'Ph.D / Research Scholars: 8 books for 30 days',
      'Faculty Members: 15 books for 90 days',
      'Non-Teaching Staff: 3 books for 14 days'
    ]
  },
  {
    id: 'rule-fines',
    category: 'Overdue Fines',
    title: 'Late Return & Penalty Rules',
    descriptionHinglish: 'Due date nikalne par late fine lagta hai. First 7 days ₹1/day, uske baad ₹2/day.',
    details: [
      'First 7 days after due date: ₹1.00 per book per day',
      '8th day onwards: ₹2.00 per book per day',
      'Fine university cash counter ya library kiosk par UPI/Challan se jama ho sakta hai',
      'Jab tak fine clear nahi hota, nayi book issue nahi hogi'
    ]
  },
  {
    id: 'rule-bookbank',
    category: 'Book Bank',
    title: 'SC/ST & EWS Book Bank Scheme',
    descriptionHinglish: 'SC/ST aur economically weaker section ke students ko pure semester ke liye 4 extra text books milti hain.',
    details: [
      'Eligible students ko pure semester ke liye up to 4 core subject textbooks milti hain',
      'Semester exam khatam hone ke 7 din ke andar return karna anivarya hai',
      'Documents required: Caste Certificate / Income Certificate + University ID Card'
    ]
  },
  {
    id: 'rule-reference',
    category: 'Reference Section',
    title: 'Reference & Rare Manuscript Rules',
    descriptionHinglish: 'Reference books, dictionaries, rare Bundelkhand manuscripts aur thesis ghar le jana mana hai.',
    details: [
      'Reference books (marked "REF"), Thesis, Dissertations & Bound Journals sirf reading room me padh sakte hain',
      'Photocopy of thesis without prior Dean/HOD permission strictly prohibited',
      'High-resolution scanning counter available in Digital section for reference pages'
    ]
  },
  {
    id: 'rule-lost-book',
    category: 'Lost Books',
    title: 'Lost or Damaged Book Policy',
    descriptionHinglish: 'Book kho jane par turant circulation desk par inform karein. Same new edition replace karna hoga ya double price pay karna padega.',
    details: [
      'Option 1: Replace with current/latest edition of the exact same book',
      'Option 2: Pay double the catalog price of the book + ₹50 administrative processing fee',
      'Reporting late will incur overdue fines until officially reported'
    ]
  },
  {
    id: 'rule-entry-id',
    category: 'General Conduct',
    title: 'Entry & University ID Card Mandatory',
    descriptionHinglish: 'Library me entry ke liye barcoded DHSGSU Student ID card lana anivarya hai.',
    details: [
      'Gate par barcoded ID scan karwayein ya register me entry karein',
      'Apne bags aur private books Ground Floor Property Counter par deposit karein (Tokens diye jayenge)',
      'Mobile phones must strictly be kept on Silent/Vibrate mode inside all reading wings',
      'Library premises me khana-peena ya loud baatchit karna sakht mana hai'
    ]
  }
];

export const DHSGSU_LIBRARY_FAQS: LibraryFAQ[] = [
  {
    id: 'faq-wifi',
    category: 'Digital Services',
    question: 'Library me Wi-Fi kaise connect karein?',
    answerHinglish: 'Library premises me `DHSGSU-CAMPUS-WIFI` network select karein. Browser me university portal login page aayega, wahan apna Roll Number aur password enter karein. Kisi dikkat ke liye 1st floor Digital Cell me contact karein.'
  },
  {
    id: 'faq-card-lost',
    category: 'Membership',
    question: 'Agar library card / student ID kho jaye toh kya karein?',
    answerHinglish: 'Turant Circulation Desk par written application dein taaki card block ho sake. Proctor office se verification aur ₹100 duplicate card fee challan jama karke 2 working days me naya card mil jata hai.'
  },
  {
    id: 'faq-eresources',
    category: 'E-Resources',
    question: 'Shodhganga aur research papers kaise access karein?',
    answerHinglish: 'Central Library INFLIBNET, Shodhganga, e-ShodhSindhu aur DELNET se connected hai. University campus IP se direct access milta hai. Research scholars remote access ID ke liye Librarian office me apply kar sakte hain.'
  },
  {
    id: 'faq-photocopy',
    category: 'Facilities',
    question: 'Library me photocopy ya print facility kahan hai?',
    answerHinglish: 'Ground floor par Reprography Section me subsidized photocopy & printing available hai. Rate ₹1.00 per page for photocopy aur ₹2.00 per page for computer printout hai.'
  },
  {
    id: 'faq-renewal',
    category: 'Circulation',
    question: 'Book renew kaise karwayein?',
    answerHinglish: 'Due date se pehle circulation counter par physically book laakar 1 baar renew karwa sakte hain, shart ye hai ki kisi doosre student ne us book par reservation/hold na lagaya ho.'
  },
  {
    id: 'faq-thesis',
    category: 'Research',
    question: 'Ph.D thesis kahan padhne ko milengi?',
    answerHinglish: 'Ph.D aur M.Phil thesis 2nd Floor Research Section (Thesis Wing) me available hain. Ye reference-only section hai, books issue hokar bahar nahi jaati.'
  },
  {
    id: 'faq-bookbank-apply',
    category: 'Book Bank',
    question: 'Book Bank ke liye form kab aur kahan submit hota hai?',
    answerHinglish: 'Har semester ke shuruat me notice board par Book Bank dates aati hain. Ground Floor Book Bank Section se form lekar caste/income certificate ke sath 10 din ke andar jama karna hota hai.'
  }
];

// Curated seed books representing the rich multidisciplinary DHSGSU catalog
const BASE_CORE_BOOKS: BookItem[] = [
  // LAW FACULTY (Founded by Dr. Hari Singh Gour)
  {
    id: 'bk-law-01',
    title: 'The Indian Penal Code (IPC)',
    author: 'Ratanlal and Dhirajlal',
    callNumber: '345.54 RAT',
    rackLocation: 'Ground Floor - Law Wing, Rack L-01, Shelf A',
    category: 'Law',
    copiesAvailable: 6,
    totalCopies: 8,
    status: 'Available',
    edition: '36th Edition',
    publisher: 'LexisNexis',
    year: 2022
  },
  {
    id: 'bk-law-02',
    title: 'Introduction to the Constitution of India',
    author: 'Dr. D.D. Basu',
    callNumber: '342.5402 BAS',
    rackLocation: 'Ground Floor - Law Wing, Rack L-02, Shelf B',
    category: 'Law',
    copiesAvailable: 4,
    totalCopies: 6,
    status: 'Available',
    edition: '26th Edition',
    publisher: 'LexisNexis',
    year: 2023
  },
  {
    id: 'bk-law-03',
    title: 'Law of Torts and Consumer Protection Act',
    author: 'Dr. R.K. Bangia',
    callNumber: '346.5403 BAN',
    rackLocation: 'Ground Floor - Law Wing, Rack L-03, Shelf C',
    category: 'Law',
    copiesAvailable: 5,
    totalCopies: 7,
    status: 'Available',
    edition: '25th Edition',
    publisher: 'Allahabad Law Agency',
    year: 2021
  },
  {
    id: 'bk-law-04',
    title: 'Law of Contract and Specific Relief',
    author: 'Dr. Avtar Singh',
    callNumber: '346.5402 SIN',
    rackLocation: 'Ground Floor - Law Wing, Rack L-04, Shelf A',
    category: 'Law',
    copiesAvailable: 3,
    totalCopies: 5,
    status: 'Available',
    edition: '13th Edition',
    publisher: 'Eastern Book Company',
    year: 2022
  },
  {
    id: 'bk-law-05',
    title: 'Code of Criminal Procedure (CrPC)',
    author: 'S.N. Mishra',
    callNumber: '345.5405 MIS',
    rackLocation: 'Ground Floor - Law Wing, Rack L-05, Shelf D',
    category: 'Law',
    copiesAvailable: 2,
    totalCopies: 4,
    status: 'Available',
    edition: '22nd Edition',
    publisher: 'Central Law Publications',
    year: 2023
  },
  {
    id: 'bk-law-06',
    title: 'Principles of Hindu Law',
    author: 'Sir Dinshah Fardunji Mulla',
    callNumber: '340.56 MUL',
    rackLocation: 'Ground Floor - Law Wing, Rack L-06, Shelf B',
    category: 'Law',
    copiesAvailable: 3,
    totalCopies: 4,
    status: 'Available',
    edition: '23rd Edition',
    publisher: 'LexisNexis',
    year: 2020
  },
  {
    id: 'bk-law-07',
    title: 'Jurisprudence: Legal Theory',
    author: 'Dr. B.N. Mani Tripathi',
    callNumber: '340.1 TRI',
    rackLocation: 'Ground Floor - Law Wing, Rack L-07, Shelf A',
    category: 'Law',
    copiesAvailable: 4,
    totalCopies: 5,
    status: 'Available',
    edition: '19th Edition',
    publisher: 'Allahabad Law Agency',
    year: 2021
  },

  // PHARMACEUTICAL SCIENCES (Renowned Dept at DHSGSU)
  {
    id: 'bk-pharm-01',
    title: 'Essentials of Medical Pharmacology',
    author: 'Dr. K.D. Tripathi',
    callNumber: '615.1 TRI',
    rackLocation: 'First Floor - Pharmacy Stack, Rack P-01, Shelf A',
    category: 'Pharmaceutical Sciences',
    copiesAvailable: 5,
    totalCopies: 8,
    status: 'Available',
    edition: '8th Edition',
    publisher: 'Jaypee Brothers',
    year: 2021
  },
  {
    id: 'bk-pharm-02',
    title: 'Pharmaceutics: The Science of Dosage Form Design',
    author: 'Michael E. Aulton',
    callNumber: '615.19 AUL',
    rackLocation: 'First Floor - Pharmacy Stack, Rack P-02, Shelf B',
    category: 'Pharmaceutical Sciences',
    copiesAvailable: 3,
    totalCopies: 5,
    status: 'Available',
    edition: '5th Edition',
    publisher: 'Elsevier Health',
    year: 2020
  },
  {
    id: 'bk-pharm-03',
    title: 'Medicinal Chemistry: Principles and Practice',
    author: 'Rama Rao Nadendla',
    callNumber: '615.19 NAD',
    rackLocation: 'First Floor - Pharmacy Stack, Rack P-03, Shelf C',
    category: 'Pharmaceutical Sciences',
    copiesAvailable: 4,
    totalCopies: 6,
    status: 'Available',
    edition: '3rd Edition',
    publisher: 'PharmaMed Press',
    year: 2022
  },
  {
    id: 'bk-pharm-04',
    title: 'Textbook of Pharmacognosy and Phytochemistry',
    author: 'Biren Shah and A.K. Seth',
    callNumber: '615.321 SHA',
    rackLocation: 'First Floor - Pharmacy Stack, Rack P-04, Shelf A',
    category: 'Pharmaceutical Sciences',
    copiesAvailable: 4,
    totalCopies: 5,
    status: 'Available',
    edition: '3rd Edition',
    publisher: 'Elsevier',
    year: 2022
  },
  {
    id: 'bk-pharm-05',
    title: 'Biopharmaceutics and Pharmacokinetics: A Treatise',
    author: 'D.M. Brahmankar and Sunil B. Jaiswal',
    callNumber: '615.7 BRA',
    rackLocation: 'First Floor - Pharmacy Stack, Rack P-05, Shelf D',
    category: 'Pharmaceutical Sciences',
    copiesAvailable: 2,
    totalCopies: 4,
    status: 'Available',
    edition: '3rd Edition',
    publisher: 'Vallabh Prakashan',
    year: 2021
  },

  // CRIMINOLOGY & FORENSIC SCIENCE (India's 1st Department at DHSGSU Sagar)
  {
    id: 'bk-crim-01',
    title: 'Forensic Science in Criminal Investigation and Trials',
    author: 'Dr. B.R. Sharma',
    callNumber: '363.25 SHA',
    rackLocation: 'Second Floor - Forensic Wing, Rack F-01, Shelf A',
    category: 'Criminology & Forensic Science',
    copiesAvailable: 4,
    totalCopies: 6,
    status: 'Available',
    edition: '6th Edition',
    publisher: 'Universal Law Publishing',
    year: 2021
  },
  {
    id: 'bk-crim-02',
    title: 'Criminalistics: An Introduction to Forensic Science',
    author: 'Richard Saferstein',
    callNumber: '363.25 SAF',
    rackLocation: 'Second Floor - Forensic Wing, Rack F-02, Shelf B',
    category: 'Criminology & Forensic Science',
    copiesAvailable: 3,
    totalCopies: 5,
    status: 'Available',
    edition: '13th Edition',
    publisher: 'Pearson',
    year: 2022
  },
  {
    id: 'bk-crim-03',
    title: 'Forensic Ballistics in Criminal Justice',
    author: 'K. Kumar and P.C. Joshi',
    callNumber: '363.2562 KUM',
    rackLocation: 'Second Floor - Forensic Wing, Rack F-03, Shelf C',
    category: 'Criminology & Forensic Science',
    copiesAvailable: 2,
    totalCopies: 3,
    status: 'Available',
    edition: '2nd Edition',
    publisher: 'Eastern Book Company',
    year: 2020
  },
  {
    id: 'bk-crim-04',
    title: 'Criminology, Penology and Victimology',
    author: 'Prof. N.V. Paranjape',
    callNumber: '364 PAR',
    rackLocation: 'Second Floor - Forensic Wing, Rack F-04, Shelf A',
    category: 'Criminology & Forensic Science',
    copiesAvailable: 5,
    totalCopies: 7,
    status: 'Available',
    edition: '18th Edition',
    publisher: 'Central Law Publications',
    year: 2023
  },
  {
    id: 'bk-crim-05',
    title: 'Fingerprints, Palms and Soles: Introduction to Dermatoglyphics',
    author: 'Harold Cummins and Charles Midlo',
    callNumber: '573.88 CUM',
    rackLocation: 'Second Floor - Forensic Wing, Rack F-05, Shelf B',
    category: 'Criminology & Forensic Science',
    copiesAvailable: 2,
    totalCopies: 3,
    status: 'Available',
    edition: 'Classic Edition',
    publisher: 'Research Studies Press',
    year: 2019
  },

  // PHYSICAL SCIENCES (Physics & Chemistry)
  {
    id: 'bk-phys-01',
    title: 'Introduction to Electrodynamics',
    author: 'David J. Griffiths',
    callNumber: '537.6 GRI',
    rackLocation: 'First Floor - Science Wing, Rack S-01, Shelf A',
    category: 'Physics',
    copiesAvailable: 4,
    totalCopies: 6,
    status: 'Available',
    edition: '4th Edition',
    publisher: 'Cambridge University Press',
    year: 2021
  },
  {
    id: 'bk-phys-02',
    title: 'Concepts of Modern Physics',
    author: 'Arthur Beiser',
    callNumber: '539 BEI',
    rackLocation: 'First Floor - Science Wing, Rack S-02, Shelf B',
    category: 'Physics',
    copiesAvailable: 5,
    totalCopies: 8,
    status: 'Available',
    edition: '7th Edition',
    publisher: 'McGraw Hill',
    year: 2020
  },
  {
    id: 'bk-phys-03',
    title: 'Classical Mechanics',
    author: 'Herbert Goldstein',
    callNumber: '531 GOL',
    rackLocation: 'First Floor - Science Wing, Rack S-03, Shelf C',
    category: 'Physics',
    copiesAvailable: 3,
    totalCopies: 4,
    status: 'Available',
    edition: '3rd Edition',
    publisher: 'Pearson',
    year: 2022
  },
  {
    id: 'bk-chem-01',
    title: 'Organic Chemistry',
    author: 'Paula Yurkanis Bruice',
    callNumber: '547 BRU',
    rackLocation: 'First Floor - Science Wing, Rack S-05, Shelf A',
    category: 'Chemistry',
    copiesAvailable: 4,
    totalCopies: 6,
    status: 'Available',
    edition: '8th Edition',
    publisher: 'Pearson',
    year: 2022
  },
  {
    id: 'bk-chem-02',
    title: 'Concise Inorganic Chemistry',
    author: 'J.D. Lee',
    callNumber: '546 LEE',
    rackLocation: 'First Floor - Science Wing, Rack S-06, Shelf B',
    category: 'Chemistry',
    copiesAvailable: 5,
    totalCopies: 7,
    status: 'Available',
    edition: '5th Edition',
    publisher: 'Wiley India',
    year: 2021
  },
  {
    id: 'bk-chem-03',
    title: 'Principles of Physical Chemistry',
    author: 'B.R. Puri, L.R. Sharma and M.S. Pathania',
    callNumber: '541.3 PUR',
    rackLocation: 'First Floor - Science Wing, Rack S-07, Shelf C',
    category: 'Chemistry',
    copiesAvailable: 6,
    totalCopies: 9,
    status: 'Available',
    edition: '48th Edition',
    publisher: 'Vishal Publishing',
    year: 2023
  },

  // MATHEMATICS
  {
    id: 'bk-math-01',
    title: 'Calculus: Early Transcendentals',
    author: 'James Stewart',
    callNumber: '515 STE',
    rackLocation: 'First Floor - Mathematics Wing, Rack M-01, Shelf A',
    category: 'Mathematics',
    copiesAvailable: 4,
    totalCopies: 6,
    status: 'Available',
    edition: '8th Edition',
    publisher: 'Cengage Learning',
    year: 2020
  },
  {
    id: 'bk-math-02',
    title: 'Contemporary Abstract Algebra',
    author: 'Joseph A. Gallian',
    callNumber: '512.02 GAL',
    rackLocation: 'First Floor - Mathematics Wing, Rack M-02, Shelf B',
    category: 'Mathematics',
    copiesAvailable: 3,
    totalCopies: 5,
    status: 'Available',
    edition: '9th Edition',
    publisher: 'Chapman and Hall/CRC',
    year: 2021
  },
  {
    id: 'bk-math-03',
    title: 'Real Analysis: Introduction to Real Variable Theory',
    author: 'Dr. S.C. Malik and Savita Arora',
    callNumber: '515.8 MAL',
    rackLocation: 'First Floor - Mathematics Wing, Rack M-03, Shelf C',
    category: 'Mathematics',
    copiesAvailable: 5,
    totalCopies: 8,
    status: 'Available',
    edition: '6th Edition',
    publisher: 'New Age International',
    year: 2022
  },

  // BOTANY & ZOOLOGY
  {
    id: 'bk-bot-01',
    title: 'Plant Physiology and Development',
    author: 'Lincoln Taiz and Eduardo Zeiger',
    callNumber: '571.2 TAI',
    rackLocation: 'Ground Floor - Life Sciences Wing, Rack B-01, Shelf A',
    category: 'Botany',
    copiesAvailable: 3,
    totalCopies: 5,
    status: 'Available',
    edition: '6th Edition',
    publisher: 'Sinauer Associates',
    year: 2021
  },
  {
    id: 'bk-zoo-01',
    title: 'Modern Textbook of Zoology: Invertebrates',
    author: 'Prof. R.L. Kotpal',
    callNumber: '592 KOT',
    rackLocation: 'Ground Floor - Life Sciences Wing, Rack Z-01, Shelf B',
    category: 'Zoology',
    copiesAvailable: 6,
    totalCopies: 8,
    status: 'Available',
    edition: '12th Edition',
    publisher: 'Rastogi Publications',
    year: 2023
  },
  {
    id: 'bk-bio-01',
    title: 'Biochemistry: Lehninger Principles of Biochemistry',
    author: 'David L. Nelson and Michael M. Cox',
    callNumber: '572 NEL',
    rackLocation: 'Ground Floor - Life Sciences Wing, Rack Z-04, Shelf C',
    category: 'Biotechnology',
    copiesAvailable: 4,
    totalCopies: 6,
    status: 'Available',
    edition: '7th Edition',
    publisher: 'W.H. Freeman',
    year: 2021
  },

  // COMPUTER SCIENCE & IT
  {
    id: 'bk-cs-01',
    title: 'Introduction to Algorithms',
    author: 'Thomas H. Cormen, Charles E. Leiserson, Ronald L. Rivest, Clifford Stein',
    callNumber: '005.1 COR',
    rackLocation: 'Second Floor - Computer Science Wing, Rack C-01, Shelf A',
    category: 'Computer Science',
    copiesAvailable: 5,
    totalCopies: 7,
    status: 'Available',
    edition: '3rd Edition',
    publisher: 'MIT Press',
    year: 2020
  },
  {
    id: 'bk-cs-02',
    title: 'Operating System Concepts',
    author: 'Abraham Silberschatz, Peter B. Galvin, Greg Gagne',
    callNumber: '005.43 SIL',
    rackLocation: 'Second Floor - Computer Science Wing, Rack C-02, Shelf B',
    category: 'Computer Science',
    copiesAvailable: 4,
    totalCopies: 6,
    status: 'Available',
    edition: '10th Edition',
    publisher: 'Wiley',
    year: 2021
  },
  {
    id: 'bk-cs-03',
    title: 'Database System Concepts',
    author: 'Abraham Silberschatz, Henry F. Korth, S. Sudarshan',
    callNumber: '005.74 SIL',
    rackLocation: 'Second Floor - Computer Science Wing, Rack C-03, Shelf C',
    category: 'Computer Science',
    copiesAvailable: 4,
    totalCopies: 5,
    status: 'Available',
    edition: '7th Edition',
    publisher: 'McGraw-Hill',
    year: 2022
  },
  {
    id: 'bk-cs-04',
    title: 'Computer Networking: A Top-Down Approach',
    author: 'James F. Kurose and Keith W. Ross',
    callNumber: '004.6 KUR',
    rackLocation: 'Second Floor - Computer Science Wing, Rack C-04, Shelf A',
    category: 'Computer Science',
    copiesAvailable: 3,
    totalCopies: 5,
    status: 'Available',
    edition: '8th Edition',
    publisher: 'Pearson',
    year: 2022
  },
  {
    id: 'bk-cs-05',
    title: 'Artificial Intelligence: A Modern Approach',
    author: 'Stuart Russell and Peter Norvig',
    callNumber: '006.3 RUS',
    rackLocation: 'Second Floor - Computer Science Wing, Rack C-05, Shelf D',
    category: 'Computer Science',
    copiesAvailable: 4,
    totalCopies: 6,
    status: 'Available',
    edition: '4th Edition',
    publisher: 'Pearson',
    year: 2021
  },

  // HINDI LITERATURE & SANSKRIT (Madhya Pradesh & DHSGSU special heritage)
  {
    id: 'bk-hin-01',
    title: 'Godaan (गोदान)',
    author: 'Munshi Premchand',
    callNumber: '891.433 PRE',
    rackLocation: 'Ground Floor - Hindi Sahitya Section, Rack H-01, Shelf A',
    category: 'Hindi Literature',
    copiesAvailable: 8,
    totalCopies: 10,
    status: 'Available',
    edition: 'Shreshth Sanskaran',
    publisher: 'Lokbharti Prakashan',
    year: 2021
  },
  {
    id: 'bk-hin-02',
    title: 'Hindi Sahitya Ka Itihas (हिन्दी साहित्य का इतिहास)',
    author: 'Acharya Ramchandra Shukla',
    callNumber: '891.4309 SHU',
    rackLocation: 'Ground Floor - Hindi Sahitya Section, Rack H-02, Shelf B',
    category: 'Hindi Literature',
    copiesAvailable: 6,
    totalCopies: 8,
    status: 'Available',
    edition: 'Pramanik Sanskaran',
    publisher: 'Nagari Pracharini Sabha',
    year: 2020
  },
  {
    id: 'bk-hin-03',
    title: 'Kamaayani (कामायनी)',
    author: 'Jaishankar Prasad',
    callNumber: '891.431 PRA',
    rackLocation: 'Ground Floor - Hindi Sahitya Section, Rack H-03, Shelf C',
    category: 'Hindi Literature',
    copiesAvailable: 5,
    totalCopies: 6,
    status: 'Available',
    edition: 'Vishesh Sanskaran',
    publisher: 'Bharati Bhandar',
    year: 2019
  },
  {
    id: 'bk-hin-04',
    title: 'Rashmirathi (रश्मिरथी)',
    author: 'Ramdhari Singh Dinkar',
    callNumber: '891.431 DIN',
    rackLocation: 'Ground Floor - Hindi Sahitya Section, Rack H-04, Shelf A',
    category: 'Hindi Literature',
    copiesAvailable: 7,
    totalCopies: 9,
    status: 'Available',
    edition: 'Lokpriya Sanskaran',
    publisher: 'Udayachal',
    year: 2022
  },
  {
    id: 'bk-hin-05',
    title: 'Bundelkhand Ka Sahitya Aur Sanskriti',
    author: 'Dr. Radhelal Sharma',
    callNumber: '891.430954 SHA',
    rackLocation: 'Ground Floor - Bundelkhand Special Collection, Rack BK-01, Shelf A',
    category: 'Hindi Literature',
    copiesAvailable: 3,
    totalCopies: 4,
    status: 'Available',
    edition: '1st Edition',
    publisher: 'Madhya Pradesh Hindi Granth Academy',
    year: 2020
  },
  {
    id: 'bk-san-01',
    title: 'Abhijnanasakuntalam with Sanjivani Teeka',
    author: 'Mahakavi Kalidasa (Ed. M.R. Kale)',
    callNumber: '891.22 KAL',
    rackLocation: 'Ground Floor - Sanskrit Section, Rack SK-01, Shelf B',
    category: 'Sanskrit Literature',
    copiesAvailable: 4,
    totalCopies: 5,
    status: 'Available',
    edition: 'Revised Edition',
    publisher: 'Motilal Banarsidass',
    year: 2021
  },

  // HISTORY & ANCIENT INDIAN CULTURE (DHSGSU & Bundelkhand)
  {
    id: 'bk-hist-01',
    title: 'India\'s Ancient Past',
    author: 'Prof. R.S. Sharma',
    callNumber: '954.01 SHA',
    rackLocation: 'Second Floor - History & Humanities, Rack HI-01, Shelf A',
    category: 'History',
    copiesAvailable: 5,
    totalCopies: 7,
    status: 'Available',
    edition: 'Oxford Edition',
    publisher: 'Oxford University Press',
    year: 2020
  },
  {
    id: 'bk-hist-02',
    title: 'History of Medieval India',
    author: 'Satish Chandra',
    callNumber: '954.02 CHA',
    rackLocation: 'Second Floor - History & Humanities, Rack HI-02, Shelf B',
    category: 'History',
    copiesAvailable: 4,
    totalCopies: 6,
    status: 'Available',
    edition: 'Orient BlackSwan',
    publisher: 'Orient BlackSwan',
    year: 2022
  },
  {
    id: 'bk-hist-03',
    title: 'India\'s Struggle for Independence',
    author: 'Bipan Chandra, Mridula Mukherjee, Aditya Mukherjee',
    callNumber: '954.035 CHA',
    rackLocation: 'Second Floor - History & Humanities, Rack HI-03, Shelf C',
    category: 'History',
    copiesAvailable: 6,
    totalCopies: 8,
    status: 'Available',
    edition: 'Penguin India',
    publisher: 'Penguin Books',
    year: 2021
  },
  {
    id: 'bk-hist-04',
    title: 'History of Sagar and Bundelkhand: Heritage of Eran and Garhphahra',
    author: 'Prof. K.D. Bajpai and Dr. V.D. Jha',
    callNumber: '954.33 BAJ',
    rackLocation: 'Second Floor - Rare Heritage & MP History, Rack HI-04, Shelf A',
    category: 'History',
    copiesAvailable: 2,
    totalCopies: 3,
    status: 'Reference Only',
    edition: 'University Press Publication',
    publisher: 'DHSGSU University Press',
    year: 2018
  },

  // COMMERCE & MANAGEMENT (MBA / M.Com)
  {
    id: 'bk-comm-01',
    title: 'Marketing Management: An Indian Perspective',
    author: 'Philip Kotler, Kevin Lane Keller, Abraham Koshy, Mithileshwar Jha',
    callNumber: '658.8 KOT',
    rackLocation: 'Second Floor - Commerce & Management, Rack CM-01, Shelf A',
    category: 'Commerce & Management',
    copiesAvailable: 5,
    totalCopies: 7,
    status: 'Available',
    edition: '16th Edition',
    publisher: 'Pearson Education',
    year: 2022
  },
  {
    id: 'bk-comm-02',
    title: 'Financial Management: Theory and Practice',
    author: 'Prasanna Chandra',
    callNumber: '658.15 CHA',
    rackLocation: 'Second Floor - Commerce & Management, Rack CM-02, Shelf B',
    category: 'Commerce & Management',
    copiesAvailable: 4,
    totalCopies: 6,
    status: 'Available',
    edition: '10th Edition',
    publisher: 'McGraw Hill',
    year: 2021
  },
  {
    id: 'bk-comm-03',
    title: 'Organizational Behavior',
    author: 'Stephen P. Robbins, Timothy A. Judge, Neharika Vohra',
    callNumber: '658.3 ROB',
    rackLocation: 'Second Floor - Commerce & Management, Rack CM-03, Shelf C',
    category: 'Commerce & Management',
    copiesAvailable: 3,
    totalCopies: 5,
    status: 'Available',
    edition: '18th Edition',
    publisher: 'Pearson',
    year: 2022
  },
  {
    id: 'bk-comm-04',
    title: 'Direct Taxes Law and Practice',
    author: 'Dr. Vinod K. Singhania and Dr. Kapil Singhania',
    callNumber: '343.5405 SIN',
    rackLocation: 'Second Floor - Commerce & Management, Rack CM-04, Shelf D',
    category: 'Commerce & Management',
    copiesAvailable: 4,
    totalCopies: 5,
    status: 'Available',
    edition: '67th Edition',
    publisher: 'Taxmann',
    year: 2023
  },

  // GEOLOGY & EARTH SCIENCES (Central University Sagar landmark dept)
  {
    id: 'bk-geo-01',
    title: 'Principles of Engineering Geology',
    author: 'K.M. Bangar',
    callNumber: '551 BAN',
    rackLocation: 'Ground Floor - Geology Stack, Rack G-01, Shelf A',
    category: 'Geology',
    copiesAvailable: 4,
    totalCopies: 6,
    status: 'Available',
    edition: 'Standard Edition',
    publisher: 'Standard Publishers',
    year: 2021
  },
  {
    id: 'bk-geo-02',
    title: 'Physical Geology and Geomorphology of India',
    author: 'E. Ahmad and S.K. Pal',
    callNumber: '551.41 AHM',
    rackLocation: 'Ground Floor - Geology Stack, Rack G-02, Shelf B',
    category: 'Geology',
    copiesAvailable: 3,
    totalCopies: 4,
    status: 'Available',
    edition: 'Revised Edition',
    publisher: 'Concept Publishing',
    year: 2020
  }
];

// Helper to generate a deterministic 3,200+ multi-disciplinary catalog representation
// covering all disciplines with exact floor, wings, and racks
function generateCompleteDHSGSUCatalog(): BookItem[] {
  const fullCatalog: BookItem[] = [...BASE_CORE_BOOKS];

  const disciplines = [
    { cat: 'Law', wing: 'Ground Floor - Law Wing', rackPrefix: 'L', callBase: '340', subCount: 280, authors: ['Dr. Kailash Rai', 'Dr. J.N. Pandey', 'Prof. M.P. Jain', 'S.K. Kapoor', 'Dr. S.R. Myneni', 'Justice V.R. Krishna Iyer', 'Upendra Baxi', 'H.M. Seervai'] },
    { cat: 'Pharmaceutical Sciences', wing: 'First Floor - Pharmacy Stack', rackPrefix: 'P', callBase: '615', subCount: 320, authors: ['C.K. Kokate', 'G.R. Chatwal', 'K.P. Bhargava', 'S.S. Kadam', 'N.K. Jain', 'V.K. Kapoor', 'Leon Lachman', 'Joseph B. Remington'] },
    { cat: 'Criminology & Forensic Science', wing: 'Second Floor - Forensic Wing', rackPrefix: 'F', callBase: '363', subCount: 220, authors: ['Dr. P.C. Maiti', 'Dr. M.S. Rao', 'Prof. Surinder Nath', 'Dr. R.K. Sarin', 'Dr. C.N. Bhattacharyya', 'Henry Lee', 'Cyril Wecht', 'O.P. Chugh'] },
    { cat: 'Physics', wing: 'First Floor - Science Wing', rackPrefix: 'S', callBase: '530', subCount: 280, authors: ['Resnick, Halliday and Walker', 'A.P. French', 'Charles Kittel', 'B.S. Rajput', 'Satya Prakash', 'H.C. Verma', 'S.L. Kakani', 'Feynman and Leighton'] },
    { cat: 'Chemistry', wing: 'First Floor - Science Wing', rackPrefix: 'SC', callBase: '540', subCount: 310, authors: ['Morrison and Boyd', 'F.A. Cotton', 'Jerry March', 'O.P. Tandon', 'I.L. Finar', 'K.L. Kapoor', 'P.S. Kalsi', 'Huheey and Keiter'] },
    { cat: 'Mathematics', wing: 'First Floor - Mathematics Wing', rackPrefix: 'M', callBase: '510', subCount: 290, authors: ['E. Kreyszig', 'M.D. Raisinghania', 'Walter Rudin', 'Gilbert Strang', 'N.P. Bali', 'P.N. Chatterjee', 'B.S. Grewal', 'Shepley L. Ross'] },
    { cat: 'Botany', wing: 'Ground Floor - Life Sciences Wing', rackPrefix: 'B', callBase: '580', subCount: 250, authors: ['B.P. Pandey', 'V. Singh and P.C. Pande', 'O.P. Sharma', 'H.D. Kumar', 'S.S. Bhojwani', 'P. Maheshwari', 'K.G. Mukerji', 'Raven and Evert'] },
    { cat: 'Zoology', wing: 'Ground Floor - Life Sciences Wing', rackPrefix: 'Z', callBase: '590', subCount: 240, authors: ['E.L. Jordan and P.S. Verma', 'G.S. Miglani', 'P.K. Gupta', 'Barnes and Ruppert', 'V.B. Rastogi', 'A.K. Berry', 'H.S. Bhamrah', 'Storer and Usinger'] },
    { cat: 'Computer Science', wing: 'Second Floor - Computer Science Wing', rackPrefix: 'C', callBase: '005', subCount: 310, authors: ['Andrew S. Tanenbaum', 'E. Balagurusamy', 'Bjarne Stroustrup', 'Yashavant Kanetkar', 'Roger S. Pressman', 'William Stallings', 'Ian Goodfellow', 'Donald Knuth'] },
    { cat: 'Hindi Literature', wing: 'Ground Floor - Hindi Sahitya Section', rackPrefix: 'H', callBase: '891', subCount: 280, authors: ['Mahadevi Verma', 'Suryakant Tripathi Nirala', 'Phanishwar Nath Renu', 'Harivansh Rai Bachchan', 'Nirmal Verma', 'Hazari Prasad Dwivedi', 'Bhisham Sahni', 'Amritlal Nagar'] },
    { cat: 'History', wing: 'Second Floor - History & Humanities', rackPrefix: 'HI', callBase: '954', subCount: 240, authors: ['Romila Thapar', 'A.L. Basham', 'Irfan Habib', 'Sumit Sarkar', 'R.C. Majumdar', 'V.D. Mahajan', 'Dr. Hari Singh Gour', 'D.D. Kosambi'] },
    { cat: 'Commerce & Management', wing: 'Second Floor - Commerce & Management', rackPrefix: 'CM', callBase: '658', subCount: 270, authors: ['T.S. Grewal', 'M.C. Shukla', 'C.B. Gupta', 'P.C. Tulsian', 'I.M. Pandey', 'Shashi K. Gupta', 'K. Aswathappa', 'S.P. Gupta'] },
    { cat: 'Geology', wing: 'Ground Floor - Geology Stack', rackPrefix: 'G', callBase: '551', subCount: 160, authors: ['M.S. Krishnan', 'D.N. Wadia', 'P.K. Mukherjee', 'A. Holmes', 'F.J. Pettijohn', 'G.W. Tyrrell', 'R.F. Flint', 'K.S. Valdiya'] }
  ];

  let counter = 1;
  for (const disc of disciplines) {
    for (let i = 1; i <= disc.subCount; i++) {
      const author = disc.authors[(i - 1) % disc.authors.length];
      const authorTag = author.split(' ').pop()?.slice(0, 3).toUpperCase() || 'AUT';
      const rackNum = String(Math.floor((i - 1) / 20) + 1).padStart(2, '0');
      const shelfLetter = String.fromCharCode(65 + ((i - 1) % 4)); // A, B, C, D
      const callNumber = `${disc.callBase}.${(i % 99) + 10} ${authorTag}`;
      const totalCopies = 2 + (i % 6);
      const available = Math.max(1, totalCopies - (i % 3));

      fullCatalog.push({
        id: `bk-gen-${counter}`,
        title: `${disc.cat} Volume ${i}: Fundamentals & Advanced Studies in ${disc.cat} - Part ${((i - 1) % 5) + 1}`,
        author,
        callNumber,
        rackLocation: `${disc.wing}, Rack ${disc.rackPrefix}-${rackNum}, Shelf ${shelfLetter}`,
        category: disc.cat,
        copiesAvailable: available,
        totalCopies,
        status: available > 0 ? 'Available' : 'Issued',
        edition: `${((i % 7) + 1)}th Edition`,
        publisher: 'University Academic Press',
        year: 2018 + (i % 6)
      });
      counter++;
    }
  }

  return fullCatalog;
}

// Full 3,200+ indexed catalog
export const DHSGSU_CATALOG_DATABASE: BookItem[] = generateCompleteDHSGSUCatalog();

// Stopwords in English & Hinglish common to student library queries
const STOP_WORDS = new Set([
  'book', 'books', 'pustak', 'kitab', 'kitabein',
  'kahan', 'kaha', 'hai', 'hain', 'milegi', 'milengi', 'milenge', 'milega',
  'rack', 'location', 'shelf', 'floor', 'call', 'number',
  'chahiye', 'chahiyein', 'dijiye', 'batayein', 'batao', 'bataiye', 'dekho',
  'ka', 'ki', 'ke', 'ko', 'me', 'mein', 'par', 'pe', 'se', 'bhi', 'kya',
  'where', 'is', 'the', 'of', 'in', 'at', 'for', 'about', 'find', 'search', 'show', 'give', 'available'
]);

// Clean Single-Search Anti-Rate Limit lookup engine
export function searchLibraryCatalogSingleQuery(query: string, categoryFilter?: string): BookItem[] {
  if (!query || query.trim() === '') return [];

  const cleanQuery = query.toLowerCase().trim();
  const allTokens = cleanQuery.replace(/[^\w\s]/g, ' ').split(/\s+/).filter(t => t.length > 1);
  const meaningfulTokens = allTokens.filter(t => !STOP_WORDS.has(t));
  const tokensToUse = meaningfulTokens.length > 0 ? meaningfulTokens : allTokens;

  const scoredResults: { book: BookItem; score: number }[] = [];

  for (const book of DHSGSU_CATALOG_DATABASE) {
    if (categoryFilter && categoryFilter !== 'All') {
      if (!book.category.toLowerCase().includes(categoryFilter.toLowerCase())) {
        continue;
      }
    }

    const titleLower = book.title.toLowerCase();
    const authorLower = book.author.toLowerCase();
    const callLower = book.callNumber.toLowerCase();
    const catLower = book.category.toLowerCase();

    let score = 0;

    // Direct whole phrase match in title or author
    if (titleLower.includes(cleanQuery)) score += 100;
    if (authorLower.includes(cleanQuery)) score += 80;

    // Token matching
    let matchedCount = 0;
    for (const token of tokensToUse) {
      if (titleLower.includes(token)) {
        score += 30;
        matchedCount++;
      } else if (authorLower.includes(token)) {
        score += 25;
        matchedCount++;
      } else if (callLower.includes(token)) {
        score += 20;
        matchedCount++;
      } else if (catLower.includes(token)) {
        score += 15;
        matchedCount++;
      }
    }

    // Require at least one meaningful token match
    if (score > 0 && matchedCount >= Math.min(tokensToUse.length, 1)) {
      scoredResults.push({ book, score });
    }
  }

  // Sort descending by relevance score and cap at 6 records
  return scoredResults
    .sort((a, b) => b.score - a.score)
    .slice(0, 6)
    .map(s => s.book);
}

export function searchLibraryRules(query: string): { rules: LibraryRule[]; faqs: LibraryFAQ[] } {
  const clean = query.toLowerCase().trim();
  const tokens = clean.replace(/[^\w\s]/g, ' ').split(/\s+/).filter(t => t.length > 2 && !STOP_WORDS.has(t));

  const matchedRules = DHSGSU_LIBRARY_RULES.filter(r => {
    const titleLower = r.title.toLowerCase();
    const catLower = r.category.toLowerCase();
    const descLower = r.descriptionHinglish.toLowerCase();
    const detailsStr = r.details.join(' ').toLowerCase();

    if (titleLower.includes(clean) || descLower.includes(clean)) return true;
    return tokens.some(t => titleLower.includes(t) || catLower.includes(t) || detailsStr.includes(t) || descLower.includes(t));
  });

  const matchedFaqs = DHSGSU_LIBRARY_FAQS.filter(f => {
    const qLower = f.question.toLowerCase();
    const aLower = f.answerHinglish.toLowerCase();

    if (qLower.includes(clean) || aLower.includes(clean)) return true;
    return tokens.some(t => qLower.includes(t) || aLower.includes(t));
  });

  return {
    rules: matchedRules,
    faqs: matchedFaqs
  };
}
