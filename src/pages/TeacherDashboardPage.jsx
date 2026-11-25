import React, { useState, useEffect } from 'react';
import { Card } from '../components/common/Card';
import { StatCard } from '../components/common/StatCard';
import { Badge } from '../components/common/Badge';
import { Button } from '../components/common/Button';
import { IconUser, IconCourses, IconClock, IconAward, IconBell, IconCalendar, IconMapPin, IconChevronRight } from '../components/common/Icons';
import {
  mockTeacher,
  mockTodaysClasses,
  mockAttendanceAlerts,
  mockPendingAssignments,
  mockFacultyNotices
} from '../data/mockTeacher';

export const TeacherDashboardPage = () => {
  const [attendanceMarked, setAttendanceMarked] = useState(() => {
    const saved = localStorage.getItem('univo_markedSections');
    return saved ? JSON.parse(saved) : {};
  });
  
  const [notifiedStudents, setNotifiedStudents] = useState({});

  useEffect(() => {
    localStorage.setItem('univo_markedSections', JSON.stringify(attendanceMarked));
  }, [attendanceMarked]);

  const handleMarkAttendance = (classId) => {
    setAttendanceMarked((prev) => ({ ...prev, [classId]: true }));
  };

  const handleNotifyStudent = (studentId) => {
    setNotifiedStudents((prev) => ({ ...prev, [studentId]: true }));
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.75rem' }}>
      {/* Faculty Welcome Banner */}
      <div style={{
        background: 'linear-gradient(135deg, #4c1d95 0%, #7c3aed 50%, #6d28d9 100%)',
        color: 'white',
        borderRadius: 'var(--radius-xl)',
        padding: '2rem 2.25rem',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        boxShadow: '0 8px 32px rgba(124, 58, 237, 0.25)',
        flexWrap: 'wrap',
        gap: '1rem'
      }}>
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.5rem' }}>
            <Badge variant="purple">FACULTY PORTAL</Badge>
            <span style={{ fontSize: '0.8125rem', color: '#e9d5ff' }}>ID: {mockTeacher.id}</span>
          </div>
          <h1 style={{ color: 'white', fontSize: '1.65rem', marginBottom: '0.3rem', fontWeight: 700 }}>
            Welcome back, {mockTeacher.name}! 👩‍🏫
          </h1>
          <p style={{ color: '#e9d5ff', fontSize: '0.9375rem' }}>
            {mockTeacher.title} • {mockTeacher.department}
          </p>
          <p style={{ color: '#c4b5fd', fontSize: '0.8125rem', marginTop: '0.35rem' }}>
            Office: {mockTeacher.office} • {mockTeacher.email}
          </p>
        </div>
        <div style={{ display: 'flex', gap: '0.625rem', flexWrap: 'wrap' }}>
          <Button variant="secondary" onClick={() => alert('Creating new announcement...')}>
            + New Announcement
          </Button>
          <Button variant="secondary" onClick={() => alert('Upload grades portal...')}>
            📊 Upload Grades
          </Button>
        </div>
      </div>

      {/* Overview Stat Cards */}
      <div className="grid-4">
        <StatCard
          label="Classes Today"
          value={mockTeacher.stats.classesToday}
          trend="See full schedule"
          icon={IconCalendar}
          color="purple"
        />
        <StatCard
          label="Total Students"
          value={mockTeacher.stats.totalStudents}
          trend="Across 3 courses"
          icon={IconUser}
          color="blue"
        />
        <StatCard
          label="Pending Assignments"
          value={`${mockTeacher.stats.pendingGrading} to Grade`}
          trend="Review needed"
          icon={IconAward}
          color="amber"
        />
        <StatCard
          label="Attendance Alerts"
          value={`${mockTeacher.stats.attendanceAlerts} Students`}
          trend="Below 75%"
          icon={IconClock}
          color="amber"
        />
      </div>

      {/* Today's Classes Section */}
      <Card
        title="Today's Classes"
        subtitle="Saturday, August 16, 2026"
        action={
          <Badge variant="purple">{mockTodaysClasses.length} Scheduled</Badge>
        }
      >
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginTop: '0.25rem' }}>
          {mockTodaysClasses.map((cls) => {
            const isMarked = attendanceMarked[cls.id];
            return (
              <div
                key={cls.id}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '1.25rem 1.5rem',
                  border: '1px solid var(--border-light)',
                  borderRadius: 'var(--radius-lg)',
                  backgroundColor: isMarked ? '#f0fdf4' : 'var(--bg-card)',
                  borderLeft: isMarked ? '4px solid var(--accent-emerald)' : '4px solid var(--accent-purple)',
                  gap: '1rem',
                  flexWrap: 'wrap',
                  transition: 'all var(--transition-fast)'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', flex: 1, minWidth: '200px' }}>
                  {/* Time Block */}
                  <div style={{
                    minWidth: '130px',
                    padding: '0.5rem 0.75rem',
                    backgroundColor: 'var(--bg-subtle)',
                    borderRadius: 'var(--radius-md)',
                    textAlign: 'center'
                  }}>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.3rem', color: 'var(--accent-purple)', fontWeight: 700, fontSize: '0.85rem' }}>
                      <IconClock size={14} /> {cls.time.split(' - ')[0]}
                    </div>
                    <span style={{ fontSize: '0.7rem', color: 'var(--text-subtle)' }}>
                      to {cls.time.split(' - ')[1]}
                    </span>
                  </div>

                  {/* Subject Info */}
                  <div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.25rem' }}>
                      <h4 style={{ fontSize: '1.025rem', fontWeight: 600, color: 'var(--text-main)' }}>
                        {cls.subject}
                      </h4>
                      <Badge variant={cls.type === 'Lab' ? 'purple' : cls.type === 'Tutorial' ? 'amber' : 'blue'}>
                        {cls.type}
                      </Badge>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', fontSize: '0.8125rem', color: 'var(--text-subtle)' }}>
                      <span style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                        <IconMapPin size={13} /> {cls.room}
                      </span>
                      <span>{cls.section}</span>
                      <span style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                        <IconUser size={13} /> {cls.students} Students
                      </span>
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  {isMarked ? (
                    <Badge variant="emerald">✓ Attendance Marked</Badge>
                  ) : (
                    <Button variant="primary" size="sm" onClick={() => handleMarkAttendance(cls.id)}>
                      Take Attendance
                    </Button>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </Card>

      {/* Attendance Alerts + Pending Assignments Grid */}
      <div className="grid-2">
        {/* Attendance Alerts */}
        <Card
          title="⚠ Attendance Alerts"
          subtitle="Students below 75% threshold"
          action={<Badge variant="amber">{mockAttendanceAlerts.length} Flagged</Badge>}
        >
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', marginTop: '0.25rem' }}>
            {mockAttendanceAlerts.map((student) => {
              const isNotified = notifiedStudents[student.id];
              return (
                <div
                  key={student.id}
                  style={{
                    padding: '0.875rem 1rem',
                    border: '1px solid var(--border-light)',
                    borderRadius: 'var(--radius-md)',
                    borderLeft: '3px solid var(--accent-amber)',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    gap: '0.75rem',
                    flexWrap: 'wrap'
                  }}
                >
                  <div style={{ flex: 1, minWidth: '180px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.2rem' }}>
                      <h4 style={{ fontSize: '0.9rem', fontWeight: 600, color: 'var(--text-main)' }}>
                        {student.name}
                      </h4>
                      <span style={{ fontSize: '0.75rem', color: 'var(--text-subtle)' }}>
                        {student.rollNo}
                      </span>
                    </div>
                    <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                      {student.course}
                    </p>
                    <div style={{ display: 'flex', gap: '0.75rem', marginTop: '0.3rem', fontSize: '0.75rem', color: 'var(--text-subtle)' }}>
                      <span>Absent: <strong style={{ color: 'var(--accent-rose)' }}>{student.classesAbsent} classes</strong></span>
                      <span>Last seen: {student.lastAttended}</span>
                    </div>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.625rem' }}>
                    <span style={{
                      fontSize: '1rem',
                      fontWeight: 700,
                      color: parseFloat(student.attendance) < 70 ? 'var(--accent-rose)' : 'var(--accent-amber)'
                    }}>
                      {student.attendance}
                    </span>
                    {isNotified ? (
                      <Badge variant="emerald">Notified ✓</Badge>
                    ) : (
                      <Button variant="outline" size="sm" onClick={() => handleNotifyStudent(student.id)}>
                        Notify
                      </Button>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </Card>

        {/* Pending Assignments */}
        <Card
          title="📝 Pending Assignments"
          subtitle="Submissions awaiting evaluation"
          action={<Badge variant="purple">{mockPendingAssignments.length} Pending</Badge>}
        >
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginTop: '0.25rem' }}>
            {mockPendingAssignments.map((asg) => (
              <div
                key={asg.id}
                style={{
                  padding: '1rem 1.25rem',
                  border: '1px solid var(--border-light)',
                  borderRadius: 'var(--radius-md)',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.5rem'
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                  <div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.15rem' }}>
                      <span style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--accent-purple)' }}>
                        {asg.course}
                      </span>
                      <Badge variant={asg.status === 'Grading' ? 'amber' : 'blue'}>
                        {asg.status}
                      </Badge>
                    </div>
                    <h4 style={{ fontSize: '0.95rem', fontWeight: 600 }}>{asg.title}</h4>
                  </div>
                </div>

                {/* Submission Progress Bar */}
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.75rem', color: 'var(--text-subtle)', marginBottom: '0.3rem' }}>
                    <span>{asg.submissions} / {asg.total} submissions received</span>
                    <span>Deadline: {asg.deadline}</span>
                  </div>
                  <div style={{ width: '100%', backgroundColor: 'var(--bg-subtle)', height: '6px', borderRadius: '3px', overflow: 'hidden' }}>
                    <div style={{
                      width: `${(asg.submissions / asg.total) * 100}%`,
                      backgroundColor: asg.submissions === asg.total ? 'var(--accent-emerald)' : 'var(--accent-purple)',
                      height: '100%',
                      transition: 'width 0.3s ease'
                    }} />
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '0.5rem', marginTop: '0.25rem' }}>
                  <Button variant="primary" size="sm" onClick={() => alert(`Opening grading portal for ${asg.title}`)}>
                    Start Grading <IconChevronRight size={14} />
                  </Button>
                  <Button variant="secondary" size="sm" onClick={() => alert(`Viewing all submissions for ${asg.title}`)}>
                    View Submissions
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>

      {/* Recent Notices + Quick Actions */}
      <div className="grid-2">
        {/* Recent Notices */}
        <Card
          title="Recent Notices"
          subtitle="University & department announcements"
        >
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', marginTop: '0.25rem' }}>
            {mockFacultyNotices.map((notice) => (
              <div
                key={notice.id}
                style={{
                  padding: '0.875rem 1rem',
                  borderBottom: '1px solid var(--border-light)',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  gap: '0.75rem'
                }}
              >
                <div style={{ flex: 1 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.2rem' }}>
                    <Badge variant={notice.priority === 'high' ? 'amber' : 'gray'}>
                      {notice.tag}
                    </Badge>
                    <span style={{ fontSize: '0.75rem', color: 'var(--text-subtle)' }}>
                      {notice.date}
                    </span>
                  </div>
                  <h4 style={{ fontSize: '0.9rem', fontWeight: 600, color: 'var(--text-main)' }}>
                    {notice.title}
                  </h4>
                </div>
                <IconChevronRight size={16} color="var(--text-subtle)" />
              </div>
            ))}
          </div>
        </Card>

        {/* Quick Actions */}
        <Card
          title="Quick Actions"
          subtitle="Frequently used faculty tools"
        >
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.875rem', marginTop: '0.25rem' }}>
            {[
              { label: '📋 Mark Attendance', desc: 'Open attendance portal', action: 'Opening attendance portal...' },
              { label: '📝 Create Assignment', desc: 'New task or project', action: 'Opening assignment creator...' },
              { label: '📊 Upload Grades', desc: 'Submit batch marks', action: 'Opening grade upload...' },
              { label: '📢 Post Announcement', desc: 'Notify all students', action: 'Opening announcement editor...' },
              { label: '📄 Generate Report', desc: 'Attendance & grade reports', action: 'Generating report...' },
              { label: '🗓️ Schedule Exam', desc: 'Set exam dates & rooms', action: 'Opening exam scheduler...' }
            ].map((item, idx) => (
              <button
                key={idx}
                onClick={() => alert(item.action)}
                style={{
                  padding: '1rem 1.25rem',
                  backgroundColor: 'var(--bg-subtle)',
                  border: '1px solid var(--border-light)',
                  borderRadius: 'var(--radius-md)',
                  cursor: 'pointer',
                  textAlign: 'left',
                  transition: 'all var(--transition-fast)',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.25rem'
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.backgroundColor = 'var(--bg-hover)';
                  e.currentTarget.style.borderColor = '#cbd5e1';
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.backgroundColor = 'var(--bg-subtle)';
                  e.currentTarget.style.borderColor = 'var(--border-light)';
                }}
              >
                <span style={{ fontSize: '0.9375rem', fontWeight: 600, color: 'var(--text-main)' }}>
                  {item.label}
                </span>
                <span style={{ fontSize: '0.75rem', color: 'var(--text-subtle)' }}>
                  {item.desc}
                </span>
              </button>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
};
