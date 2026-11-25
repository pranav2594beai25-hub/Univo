// Univo - Pulse Attention Feed Mock Data
export const mockPulseItems = [
  {
    id: "PULSE-101",
    type: "warning",
    icon: "⚠️",
    title: "DBMS Attendance Warning",
    message: "Your attendance in Database Management Systems (CS303) is at 72.5%, which is below the 75% minimum threshold.",
    time: "Action Required",
    actionText: "View Attendance Log",
    badgeColor: "amber"
  },
  {
    id: "PULSE-102",
    type: "deadline",
    icon: "📝",
    title: "AI/ML Lab Assignment Due Tomorrow",
    message: "Machine Learning Model Training Lab Report 3 is due by Aug 17, 11:59 PM.",
    time: "Due in 14 hours",
    actionText: "Submit Assignment",
    badgeColor: "purple"
  },
  {
    id: "PULSE-103",
    type: "notice",
    icon: "🔔",
    title: "New University Notice Published",
    message: "Mid-Semester Examination Schedule and Hall Ticket Generation rules have been released.",
    time: "2 hours ago",
    actionText: "Read Notice",
    badgeColor: "blue"
  },
  {
    id: "PULSE-104",
    type: "library",
    icon: "📚",
    title: "Library Book Return Due Soon",
    message: "'Clean Code by Robert C. Martin' is due for return or renewal tomorrow.",
    time: "Due Tomorrow",
    actionText: "Renew Book",
    badgeColor: "emerald"
  }
];
