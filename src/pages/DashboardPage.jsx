import React from 'react';
import { StatCard } from '../components/common/StatCard';
import { IconAward, IconCourses, IconClock, IconBell } from '../components/common/Icons';
import { mockUser } from '../data/mockUser';

// Modular Dashboard Components
import { StudentProfileHeader } from '../components/dashboard/StudentProfileHeader';
import { PulseWidget } from '../components/dashboard/PulseWidget';
import { AttendanceSummaryCard } from '../components/dashboard/AttendanceSummaryCard';
import { AssignmentSummaryCard } from '../components/dashboard/AssignmentSummaryCard';
import { UpcomingClassesCard } from '../components/dashboard/UpcomingClassesCard';
import { RecentNoticesCard } from '../components/dashboard/RecentNoticesCard';
import { UpcomingEventsCard } from '../components/dashboard/UpcomingEventsCard';

export const DashboardPage = ({ onNavigate }) => {
  const handlePulseAction = (item) => {
    if (item.id === 'PULSE-101') {
      onNavigate('attendance');
    } else if (item.id === 'PULSE-102') {
      onNavigate('assignments');
    } else if (item.id === 'PULSE-103') {
      onNavigate('notices');
    } else if (item.id === 'PULSE-104') {
      onNavigate('library');
    } else {
      alert(`Navigating to ${item.title}`);
    }
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.75rem' }}>
      {/* 1. Student Profile Header Banner */}
      <StudentProfileHeader onNavigate={onNavigate} />

      {/* 2. Today's Overview Metric Cards */}
      <div className="grid-4">
        <StatCard
          label="Current GPA"
          value={mockUser.stats.gpa}
          trend="+0.12 this term"
          icon={IconAward}
          color="purple"
        />
        <StatCard
          label="Overall Attendance"
          value={mockUser.stats.attendance}
          trend="Good Standing"
          icon={IconClock}
          color="emerald"
        />
        <StatCard
          label="Enrolled Courses"
          value={`${mockUser.stats.enrolledCourses} Active`}
          icon={IconCourses}
          color="blue"
        />
        <StatCard
          label="Pending Tasks"
          value={`${mockUser.stats.upcomingDeadlines} Due Soon`}
          icon={IconBell}
          color="amber"
        />
      </div>

      {/* 3. PULSE SECTION - Attention Feed */}
      <PulseWidget onActionClick={handlePulseAction} />

      {/* 4. Main Dashboard Grid Layout */}
      <div className="grid-2">
        <UpcomingClassesCard onNavigate={onNavigate} />
        <AttendanceSummaryCard />
      </div>

      <div className="grid-2">
        <AssignmentSummaryCard />
        <RecentNoticesCard onNavigate={onNavigate} />
      </div>

      <UpcomingEventsCard />
    </div>
  );
};
