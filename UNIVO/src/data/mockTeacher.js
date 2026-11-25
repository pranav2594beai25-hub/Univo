// Univo - Teacher / Faculty Profile Mock Data
export const mockTeacher = {
  id: "FAC-1042",
  name: "Dr. Ananya Roy",
  title: "Associate Professor",
  department: "Department of Computer Science & Engineering",
  email: "ananya.roy@univo.edu",
  avatarInitials: "AR",
  office: "Block C, Room 304",
  stats: {
    totalStudents: 126,
    activeCourses: 3,
    pendingGrading: 18,
    avgAttendance: "92.5%",
    classesToday: 4,
    attendanceAlerts: 7
  },
  assignedCourses: [
    {
      id: "CS302",
      code: "CS302",
      title: "Data Structures & Algorithms",
      enrolledStudents: 64,
      schedule: "Tue, Thu • 09:00 AM - 10:30 AM",
      room: "Auditorium 2",
      progress: "Week 6 of 14",
      nextSession: "Today at 09:00 AM"
    },
    {
      id: "CS305",
      code: "CS305",
      title: "Advanced Algorithm Design",
      enrolledStudents: 58,
      schedule: "Mon, Wed • 02:00 PM - 03:30 PM",
      room: "Lab 2, Block C",
      progress: "Week 6 of 14",
      nextSession: "Tomorrow at 02:00 PM"
    },
    {
      id: "CS310",
      code: "CS310",
      title: "Data Structures Practical Lab",
      enrolledStudents: 58,
      schedule: "Fri • 10:00 AM - 01:00 PM",
      room: "Lab 4, Block C",
      progress: "Week 6 of 14",
      nextSession: "Friday at 10:00 AM"
    }
  ]
};

// Today's Classes Schedule
export const mockTodaysClasses = [
  {
    id: "TC-1",
    subject: "Data Structures & Algorithms",
    code: "CS302",
    time: "09:00 AM - 10:30 AM",
    room: "Auditorium 2",
    students: 64,
    section: "Section A",
    type: "Lecture",
    attendanceMarked: false
  },
  {
    id: "TC-2",
    subject: "Advanced Algorithm Design",
    code: "CS305",
    time: "11:00 AM - 12:30 PM",
    room: "Lab 2, Block C",
    students: 58,
    section: "Section B",
    type: "Lab",
    attendanceMarked: false
  },
  {
    id: "TC-3",
    subject: "Data Structures & Algorithms",
    code: "CS302",
    time: "02:00 PM - 03:30 PM",
    room: "Room 204, Science Block",
    students: 42,
    section: "Section C",
    type: "Tutorial",
    attendanceMarked: false
  },
  {
    id: "TC-4",
    subject: "Data Structures Practical Lab",
    code: "CS310",
    time: "04:00 PM - 06:00 PM",
    room: "Lab 4, Block C",
    students: 58,
    section: "Section B",
    type: "Lab",
    attendanceMarked: false
  }
];

// Students with Low Attendance
export const mockAttendanceAlerts = [
  { id: "SA-1", name: "Vikram Malhotra", rollNo: "22BCS018", course: "CS302 - DSA", attendance: "68.5%", classesAbsent: 8, lastAttended: "Aug 10, 2026" },
  { id: "SA-2", name: "Neha Gupta", rollNo: "22BCS027", course: "CS302 - DSA", attendance: "71.0%", classesAbsent: 7, lastAttended: "Aug 12, 2026" },
  { id: "SA-3", name: "Rahul Deshmukh", rollNo: "22BCS009", course: "CS305 - Algorithm Design", attendance: "70.2%", classesAbsent: 6, lastAttended: "Aug 11, 2026" },
  { id: "SA-4", name: "Shruti Iyer", rollNo: "22BCS033", course: "CS310 - DSA Lab", attendance: "66.7%", classesAbsent: 10, lastAttended: "Aug 08, 2026" },
  { id: "SA-5", name: "Ankit Joshi", rollNo: "22BCS045", course: "CS302 - DSA", attendance: "73.5%", classesAbsent: 5, lastAttended: "Aug 14, 2026" },
  { id: "SA-6", name: "Pooja Nair", rollNo: "22BCS051", course: "CS305 - Algorithm Design", attendance: "72.0%", classesAbsent: 6, lastAttended: "Aug 13, 2026" },
  { id: "SA-7", name: "Deepak Verma", rollNo: "22BCS011", course: "CS310 - DSA Lab", attendance: "69.8%", classesAbsent: 7, lastAttended: "Aug 09, 2026" }
];

// Pending Assignments to Grade
export const mockPendingAssignments = [
  { id: "PA-1", title: "Assignment 2: Binary Search Trees", course: "CS302", submissions: 58, total: 64, deadline: "Aug 14, 2026", status: "Grading" },
  { id: "PA-2", title: "Lab Report 4: Graph Traversals", course: "CS310", submissions: 52, total: 58, deadline: "Aug 15, 2026", status: "Grading" },
  { id: "PA-3", title: "Quiz 3: Sorting Algorithms", course: "CS302", submissions: 64, total: 64, deadline: "Aug 12, 2026", status: "Grading" },
  { id: "PA-4", title: "Mini Project: Algorithm Visualizer", course: "CS305", submissions: 45, total: 58, deadline: "Aug 20, 2026", status: "Accepting" }
];

// Faculty Recent Notices
export const mockFacultyNotices = [
  { id: "FN-1", title: "Mid-Semester Exam Schedule Released", date: "Aug 16, 2026", tag: "Examination", priority: "high" },
  { id: "FN-2", title: "Faculty Development Program: AI in Education", date: "Aug 15, 2026", tag: "Workshop", priority: "normal" },
  { id: "FN-3", title: "Grade Submission Deadline: Aug 25, 2026", date: "Aug 14, 2026", tag: "Academic", priority: "high" },
  { id: "FN-4", title: "Campus Wi-Fi Maintenance on Aug 18", date: "Aug 13, 2026", tag: "Facilities", priority: "normal" }
];
