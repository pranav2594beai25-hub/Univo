import React from 'react';
import {
  IconDashboard,
  IconClock,
  IconAssignment,
  IconCalendar,
  IconBell,
  IconCourses,
  IconLibrary,
  IconHostel,
  IconPlacements,
  IconSettings,
  IconUser,
  IconAward
} from '../common/Icons';

const studentNavItems = [
  { id: 'dashboard', label: 'Dashboard', icon: IconDashboard },
  { id: 'attendance', label: 'Attendance', icon: IconClock },
  { id: 'assignments', label: 'Assignments', icon: IconAssignment },
  { id: 'timetable', label: 'Timetable', icon: IconCalendar },
  { id: 'notices', label: 'Notices', icon: IconBell },
  { id: 'events', label: 'Events', icon: IconCourses },
  { id: 'library', label: 'Library', icon: IconLibrary },
  { id: 'hostel', label: 'Hostel', icon: IconHostel },
  { id: 'placements', label: 'Placements', icon: IconPlacements },
  { id: 'settings', label: 'Settings', icon: IconSettings },
];

const teacherNavItems = [
  { id: 'dashboard', label: 'Dashboard', icon: IconDashboard },
  { id: 'my-students', label: 'My Students', icon: IconUser },
  { id: 'attendance', label: 'Attendance', icon: IconClock },
  { id: 'assignments', label: 'Assignments', icon: IconAssignment },
  { id: 'courses', label: 'Courses', icon: IconCourses },
  { id: 'timetable', label: 'Timetable', icon: IconCalendar },
  { id: 'notices', label: 'Notices', icon: IconBell },
  { id: 'analytics', label: 'Analytics', icon: IconAward },
  { id: 'events', label: 'Events', icon: IconCalendar },
  { id: 'settings', label: 'Settings', icon: IconSettings },
];

export const Sidebar = ({ activeTab, onSelectTab, user, userRole = 'student', isMobileOpen, onCloseMobile }) => {
  const navItems = userRole === 'teacher' ? teacherNavItems : studentNavItems;
  const isTeacher = userRole === 'teacher';

  return (
    <aside className={`app-sidebar ${isMobileOpen ? 'open' : ''} ${isTeacher ? 'sidebar-teacher' : ''}`}>
      <div className="sidebar-header">
        <div className="brand-logo-icon" style={isTeacher ? { backgroundColor: '#7c3aed' } : {}}>U</div>
        <div className="brand-text">
          <span className="brand-title">UNIVO</span>
          <span className="brand-subtitle">{isTeacher ? 'Faculty Portal' : 'Student Portal'}</span>
        </div>
      </div>

      <nav className="sidebar-nav">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeTab === item.id;
          return (
            <button
              key={item.id}
              className={`nav-item ${isActive ? 'active' : ''}`}
              onClick={() => {
                onSelectTab(item.id);
                if (onCloseMobile) onCloseMobile();
              }}
              style={isActive && isTeacher ? {
                backgroundColor: '#f3e8ff',
                color: '#7c3aed',
                borderColor: '#7c3aed'
              } : {}}
            >
              <span className="nav-item-icon">
                <Icon size={20} color={isActive ? (isTeacher ? '#7c3aed' : 'var(--primary-600)') : 'var(--text-muted)'} />
              </span>
              <span>{item.label}</span>
            </button>
          );
        })}
      </nav>

      <div className="sidebar-footer">
        <div className="user-mini-card">
          <div className="user-avatar" style={isTeacher ? { backgroundColor: '#7c3aed' } : {}}>
            {user.avatarInitials || (isTeacher ? 'FC' : 'ST')}
          </div>
          <div className="user-info">
            <span className="user-name">{user.name}</span>
            <span className="user-role">{isTeacher ? user.title || 'Faculty' : user.rollNo}</span>
          </div>
        </div>
      </div>
    </aside>
  );
};
