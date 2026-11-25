import React, { useState } from 'react';
import { Sidebar } from './Sidebar';
import { Header } from './Header';
import { mockUser } from '../../data/mockUser';
import { mockTeacher } from '../../data/mockTeacher';

const studentPageTitles = {
  'dashboard': 'Student Dashboard',
  'attendance': 'Attendance Tracker',
  'assignments': 'Assignments & Projects',
  'timetable': 'Academic Timetable',
  'notices': 'Campus Notices & Announcements',
  'events': 'Campus Events & Societies',
  'library': 'Digital Library Services',
  'hostel': 'Hostel & Residence Portal',
  'placements': 'Career & Placements Cell',
  'settings': 'Account Settings'
};

const teacherPageTitles = {
  'dashboard': 'Faculty Dashboard',
  'my-students': 'My Students',
  'attendance': 'Attendance Management',
  'assignments': 'Assignments & Grading',
  'courses': 'Course Management',
  'timetable': 'Teaching Schedule',
  'notices': 'Notices & Announcements',
  'analytics': 'Academic Analytics',
  'events': 'Faculty Events & Workshops',
  'settings': 'Account Settings'
};

export const Layout = ({ activeTab, onSelectTab, userRole = 'student', children }) => {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const pageTitles = userRole === 'teacher' ? teacherPageTitles : studentPageTitles;
  const currentTitle = pageTitles[activeTab] || (userRole === 'teacher' ? 'Univo Faculty Portal' : 'Univo Student Portal');
  const userData = userRole === 'teacher' ? mockTeacher : mockUser;

  return (
    <div className="app-shell">
      <Sidebar
        activeTab={activeTab}
        onSelectTab={onSelectTab}
        user={userData}
        userRole={userRole}
        isMobileOpen={isMobileOpen}
        onCloseMobile={() => setIsMobileOpen(false)}
      />

      <div className="app-main">
        <Header
          currentTitle={currentTitle}
          onToggleMobileMenu={() => setIsMobileOpen(!isMobileOpen)}
          searchValue={searchQuery}
          onSearchChange={setSearchQuery}
        />
        <main className="page-content animate-fade-in">
          {children}
        </main>
      </div>
    </div>
  );
};
