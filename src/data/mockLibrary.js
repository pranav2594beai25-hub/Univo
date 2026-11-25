// Univo - Library Services Mock Data

export const mockIssuedBooks = [
  {
    id: "LIB-1",
    title: "Clean Code: A Handbook of Agile Software Craftsmanship",
    author: "Robert C. Martin",
    issueDate: "Aug 02, 2026",
    dueDate: "Aug 17, 2026",
    status: "Due Soon",
    coverColor: "#3b82f6",
    isbn: "978-0132350884",
    department: "Computer Science"
  },
  {
    id: "LIB-2",
    title: "Introduction to Algorithms (4th Edition)",
    author: "Cormen, Leiserson, Rivest, Stein",
    issueDate: "Jul 20, 2026",
    dueDate: "Aug 28, 2026",
    status: "Active",
    coverColor: "#059669",
    isbn: "978-0262046305",
    department: "Computer Science"
  },
  {
    id: "LIB-3",
    title: "Database System Concepts (7th Edition)",
    author: "Silberschatz, Korth, Sudarshan",
    issueDate: "Jul 15, 2026",
    dueDate: "Aug 10, 2026",
    status: "Overdue",
    coverColor: "#e11d48",
    isbn: "978-0078022159",
    department: "Computer Science"
  },
  {
    id: "LIB-4",
    title: "The Pragmatic Programmer (20th Anniversary)",
    author: "David Thomas, Andrew Hunt",
    issueDate: "Jun 25, 2026",
    dueDate: "Jul 25, 2026",
    status: "Returned",
    coverColor: "#7c3aed",
    isbn: "978-0135957059",
    department: "Computer Science"
  }
];

export const mockEResources = [
  {
    id: "ER-1",
    name: "IEEE Xplore Digital Library",
    description: "Access thousands of research papers, conference proceedings, and technical standards in engineering and technology.",
    type: "Journal",
    accessLevel: "Full"
  },
  {
    id: "ER-2",
    name: "ACM Digital Library",
    description: "Full-text collection of every article published by ACM including journals, magazines, and conference proceedings.",
    type: "Database",
    accessLevel: "Full"
  },
  {
    id: "ER-3",
    name: "GitHub Education Pack",
    description: "Free access to developer tools, cloud credits, and learning resources for students with verified university email.",
    type: "Repository",
    accessLevel: "Limited"
  }
];

export const mockFines = {
  totalFine: "₹150",
  pendingBooks: 1,
  lastPaid: "Jul 28, 2026"
};
