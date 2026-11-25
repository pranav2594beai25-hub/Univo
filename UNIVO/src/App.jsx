import React, { useState } from 'react';
import { LandingPage } from './pages/LandingPage';
import { LoginRoleSelectPage } from './pages/LoginRoleSelectPage';
import { StudentLoginPage } from './pages/StudentLoginPage';
import { TeacherLoginPage } from './pages/TeacherLoginPage';
import { Layout } from './components/layout/Layout';
import { DashboardPage } from './pages/DashboardPage';
import { AttendancePage } from './pages/AttendancePage';
import { AssignmentsPage } from './pages/AssignmentsPage';
import { TimetablePage } from './pages/TimetablePage';
import { NoticesPage } from './pages/NoticesPage';
import { EventsPage } from './pages/EventsPage';
import { LibraryPage } from './pages/LibraryPage';
import { HostelPage } from './pages/HostelPage';
import { PlacementsPage } from './pages/PlacementsPage';
import { SettingsPage } from './pages/SettingsPage';
import { TeacherDashboardPage } from './pages/TeacherDashboardPage';
import { TeacherMyStudentsPage } from './pages/TeacherMyStudentsPage';
import { TeacherAttendancePage } from './pages/TeacherAttendancePage';
import { TeacherAssignmentsPage } from './pages/TeacherAssignmentsPage';
import { TeacherCoursesPage } from './pages/TeacherCoursesPage';
import { TeacherTimetablePage } from './pages/TeacherTimetablePage';
import { TeacherNoticesPage } from './pages/TeacherNoticesPage';
import { TeacherAnalyticsPage } from './pages/TeacherAnalyticsPage';
import { TeacherEventsPage } from './pages/TeacherEventsPage';
import { TeacherSettingsPage } from './pages/TeacherSettingsPage';
import { Button } from './components/common/Button';
import './styles/global.css';
import './styles/layout.css';
import './styles/components.css';

export function App() {
  // Navigation View Modes: 'landing' | 'login-select' | 'login-student' | 'login-teacher' | 'portal'
  const [viewMode, setViewMode] = useState('landing');
  const [userRole, setUserRole] = useState('student');
  const [activeTab, setActiveTab] = useState('dashboard');

  // Render Landing Page
  if (viewMode === 'landing') {
    return (
      <LandingPage
        onOpenPortal={() => setViewMode('login-select')}
      />
    );
  }

  // Render Dedicated Login Role Selection Screen
  if (viewMode === 'login-select') {
    return (
      <LoginRoleSelectPage
        onBackHome={() => setViewMode('landing')}
        onSelectRole={(role) => {
          setUserRole(role);
          if (role === 'student') {
            setViewMode('login-student');
          } else if (role === 'teacher') {
            setViewMode('login-teacher');
          }
        }}
      />
    );
  }

  // Render Student Login Page
  if (viewMode === 'login-student') {
    return (
      <StudentLoginPage
        onBackToRoleSelect={() => setViewMode('login-select')}
        onLoginSuccess={() => {
          setUserRole('student');
          setActiveTab('dashboard');
          setViewMode('portal');
        }}
      />
    );
  }

  // Render Teacher Login Page
  if (viewMode === 'login-teacher') {
    return (
      <TeacherLoginPage
        onBackToRoleSelect={() => setViewMode('login-select')}
        onLoginSuccess={() => {
          setUserRole('teacher');
          setActiveTab('dashboard');
          setViewMode('portal');
        }}
      />
    );
  }

  // Render Active Student vs Faculty Page
  const renderActivePage = () => {
    if (userRole === 'teacher') {
      switch (activeTab) {
        case 'dashboard':
          return <TeacherDashboardPage />;
        case 'my-students':
          return <TeacherMyStudentsPage />;
        case 'attendance':
          return <TeacherAttendancePage />;
        case 'assignments':
          return <TeacherAssignmentsPage />;
        case 'courses':
          return <TeacherCoursesPage />;
        case 'timetable':
          return <TeacherTimetablePage />;
        case 'notices':
          return <TeacherNoticesPage />;
        case 'analytics':
          return <TeacherAnalyticsPage />;
        case 'events':
          return <TeacherEventsPage />;
        case 'settings':
          return <TeacherSettingsPage />;
        default:
          return <TeacherDashboardPage />;
      }
    }

    switch (activeTab) {
      case 'dashboard':
        return <DashboardPage onNavigate={(tab) => setActiveTab(tab)} />;
      case 'attendance':
        return <AttendancePage />;
      case 'assignments':
        return <AssignmentsPage />;
      case 'timetable':
        return <TimetablePage />;
      case 'notices':
        return <NoticesPage />;
      case 'events':
        return <EventsPage />;
      case 'library':
        return <LibraryPage />;
      case 'hostel':
        return <HostelPage />;
      case 'placements':
        return <PlacementsPage />;
      case 'settings':
        return <SettingsPage />;
      default:
        return <DashboardPage onNavigate={(tab) => setActiveTab(tab)} />;
    }
  };

  return (
    <div>
      {/* Top Banner on Portal View */}
      <div style={{
        backgroundColor: userRole === 'teacher' ? '#2e1065' : '#0f172a',
        color: userRole === 'teacher' ? '#e9d5ff' : '#94a3b8',
        padding: '0.5rem 1.5rem',
        fontSize: '0.8125rem',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderBottom: '1px solid rgba(255,255,255,0.1)'
      }}>
        <span>
          🎓 Univo {userRole === 'teacher' ? 'Faculty Teaching' : 'Student'} Portal View
        </span>
        <Button variant="secondary" size="sm" onClick={() => setViewMode('landing')}>
          ← Back to Landing Page
        </Button>
      </div>

      <Layout activeTab={activeTab} onSelectTab={(tab) => setActiveTab(tab)} userRole={userRole}>
        {renderActivePage()}
      </Layout>
    </div>
  );
}

export default App;
