import React, { useState, useEffect } from 'react';
import { Card } from '../components/common/Card';
import { StatCard } from '../components/common/StatCard';
import { Badge } from '../components/common/Badge';
import { Button } from '../components/common/Button';
import { Modal } from '../components/common/Modal';
import { IconClock, IconUser, IconAward } from '../components/common/Icons';

const classSections = [
  { id: 'SEC-1', course: 'CS302 - Data Structures & Algorithms', section: 'Section A', totalStudents: 64, time: '09:00 AM', room: 'Auditorium 2' },
  { id: 'SEC-2', course: 'CS305 - Advanced Algorithm Design', section: 'Section B', totalStudents: 58, time: '11:00 AM', room: 'Lab 2, Block C' },
  { id: 'SEC-3', course: 'CS302 - Data Structures & Algorithms', section: 'Section C', totalStudents: 42, time: '02:00 PM', room: 'Room 204' },
  { id: 'SEC-4', course: 'CS310 - Data Structures Practical Lab', section: 'Section B', totalStudents: 58, time: '04:00 PM', room: 'Lab 4, Block C' },
];

const mockStudentsList = [
  { id: 'S1', name: 'Aarav Sharma', roll: '22BCS042', currentAttendance: '85%' },
  { id: 'S2', name: 'Neha Gupta', roll: '22BCS027', currentAttendance: '71%' },
  { id: 'S3', name: 'Vikram Malhotra', roll: '22BCS018', currentAttendance: '68%' },
  { id: 'S4', name: 'Riya Patel', roll: '22BCS035', currentAttendance: '92%' },
  { id: 'S5', name: 'Kabir Singh', roll: '22BCS088', currentAttendance: '78%' },
  { id: 'S6', name: 'Ananya Desai', roll: '22BCS015', currentAttendance: '95%' },
];

const initialAttendanceLog = [
  { id: 'AL-1', date: 'Aug 16, 2026', course: 'CS302', section: 'Section A', present: 58, absent: 6, percentage: '90.6%' },
  { id: 'AL-2', date: 'Aug 16, 2026', course: 'CS305', section: 'Section B', present: 52, absent: 6, percentage: '89.7%' },
  { id: 'AL-3', date: 'Aug 14, 2026', course: 'CS302', section: 'Section A', present: 60, absent: 4, percentage: '93.8%' },
  { id: 'AL-4', date: 'Aug 14, 2026', course: 'CS310', section: 'Section B', present: 50, absent: 8, percentage: '86.2%' },
  { id: 'AL-5', date: 'Aug 13, 2026', course: 'CS302', section: 'Section C', present: 38, absent: 4, percentage: '90.5%' },
];

export const TeacherAttendancePage = () => {
  const [markedSections, setMarkedSections] = useState(() => {
    const saved = localStorage.getItem('univo_markedSections');
    return saved ? JSON.parse(saved) : {};
  });
  
  const [activeSection, setActiveSection] = useState(null);
  const [attendanceState, setAttendanceState] = useState({});
  
  const [recentAttendanceLog, setRecentAttendanceLog] = useState(() => {
    const saved = localStorage.getItem('univo_recentAttendanceLog');
    return saved ? JSON.parse(saved) : initialAttendanceLog;
  });
  
  const [showSuccess, setShowSuccess] = useState(false);

  // Sync to local storage whenever they change
  useEffect(() => {
    localStorage.setItem('univo_markedSections', JSON.stringify(markedSections));
  }, [markedSections]);

  useEffect(() => {
    localStorage.setItem('univo_recentAttendanceLog', JSON.stringify(recentAttendanceLog));
  }, [recentAttendanceLog]);

  const openAttendanceModal = (section) => {
    setActiveSection(section);
    // Initialize all to Present
    const initialObj = {};
    mockStudentsList.forEach(s => { initialObj[s.id] = 'Present'; });
    setAttendanceState(initialObj);
  };

  const handleSetAll = (status) => {
    const nextObj = {};
    mockStudentsList.forEach(s => { nextObj[s.id] = status; });
    setAttendanceState(nextObj);
  };

  const handleSaveAttendance = () => {
    if (!activeSection) return;
    
    setMarkedSections((prev) => ({ ...prev, [activeSection.id]: true }));
    
    const presentCount = Object.values(attendanceState).filter(s => s === 'Present' || s === 'Late').length;
    const absentCount = Object.values(attendanceState).filter(s => s === 'Absent').length;
    const total = mockStudentsList.length;
    const pct = ((presentCount / total) * 100).toFixed(1) + '%';
    
    setRecentAttendanceLog(prev => {
      const newLog = [{
        id: `AL-NEW-${Date.now()}`,
        date: 'Aug 16, 2026 (Today)',
        course: activeSection.course.split(' - ')[0],
        section: activeSection.section,
        present: activeSection.totalStudents - absentCount,
        absent: absentCount,
        percentage: pct
      }, ...prev];
      return newLog;
    });

    setActiveSection(null);
    setShowSuccess(true);
    setTimeout(() => setShowSuccess(false), 3000);
  };

  const currentPresentCount = Object.values(attendanceState).filter(s => s === 'Present').length;
  const currentLateCount = Object.values(attendanceState).filter(s => s === 'Late').length;
  const currentAbsentCount = Object.values(attendanceState).filter(s => s === 'Absent').length;
  const counterText = currentLateCount > 0 
    ? `${currentPresentCount} Present • ${currentLateCount} Late • ${currentAbsentCount} Absent`
    : `${currentPresentCount} Present • ${currentAbsentCount} Absent`;

  const totalTodayClasses = 4;
  const submittedTodayClasses = Object.keys(markedSections).length;
  const pendingClasses = Math.max(0, totalTodayClasses - submittedTodayClasses);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.75rem' }}>
      <div>
        <h2>Attendance Management</h2>
        <p>Mark class attendance, view attendance logs, and monitor student engagement</p>
      </div>

      {showSuccess && (
        <div className="animate-fade-in" style={{ padding: '1rem', backgroundColor: '#d1fae5', color: '#065f46', borderRadius: 'var(--radius-md)', display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: 600 }}>
          ✅ Attendance saved successfully.
        </div>
      )}

      <div className="grid-3">
        <StatCard 
          label="Today's Classes" 
          value={`${pendingClasses} Pending`} 
          trend={`${Math.min(submittedTodayClasses, totalTodayClasses)} of ${totalTodayClasses} submitted`} 
          icon={IconClock} 
          color="purple" 
        />
        <StatCard label="Average Attendance" value="92.5%" trend="This semester" icon={IconAward} color="emerald" />
        <StatCard label="Low Attendance Students" value="7 Flagged" trend="Below 75% threshold" icon={IconUser} color="amber" />
      </div>

      {/* Mark Attendance Section */}
      <Card title="Mark Today's Attendance" subtitle="Saturday, August 16, 2026">
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginTop: '0.5rem' }}>
          {classSections.map((section) => {
            const isMarked = markedSections[section.id];
            return (
              <div key={section.id} style={{
                display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                padding: '1.25rem 1.5rem', border: '1px solid var(--border-light)',
                borderRadius: 'var(--radius-lg)',
                borderLeft: isMarked ? '4px solid var(--accent-emerald)' : '4px solid var(--accent-purple)',
                backgroundColor: isMarked ? '#f0fdf4' : 'var(--bg-card)',
                gap: '1rem', flexWrap: 'wrap'
              }}>
                <div style={{ flex: 1, minWidth: '200px' }}>
                  <h4 style={{ fontSize: '1rem', fontWeight: 600, marginBottom: '0.2rem' }}>{section.course}</h4>
                  <div style={{ display: 'flex', gap: '1rem', fontSize: '0.8125rem', color: 'var(--text-subtle)' }}>
                    <span>{section.section}</span>
                    <span>🕐 {section.time}</span>
                    <span>📍 {section.room}</span>
                    <span>👥 {section.totalStudents} students</span>
                  </div>
                </div>
                {isMarked ? (
                  <Badge variant="emerald">✓ Attendance Submitted</Badge>
                ) : (
                  <Button variant="primary" size="sm" onClick={() => openAttendanceModal(section)}>
                    Mark Attendance
                  </Button>
                )}
              </div>
            );
          })}
        </div>
      </Card>

      {/* Recent Attendance Log */}
      <Card title="Recent Attendance Log" subtitle="Last recorded sessions">
        <div style={{ marginTop: '0.5rem' }}>
          <div style={{
            display: 'grid', gridTemplateColumns: '1fr 1fr 1fr 1fr 1fr 1fr',
            gap: '0.75rem', padding: '0.75rem 1rem',
            backgroundColor: 'var(--bg-subtle)', borderRadius: 'var(--radius-md)',
            fontSize: '0.75rem', fontWeight: 600, color: 'var(--text-subtle)',
            textTransform: 'uppercase', letterSpacing: '0.04em'
          }}>
            <span>Date</span><span>Course</span><span>Section</span><span>Present</span><span>Absent</span><span>Rate</span>
          </div>
          {recentAttendanceLog.map((log) => (
            <div key={log.id} style={{
              display: 'grid', gridTemplateColumns: '1fr 1fr 1fr 1fr 1fr 1fr',
              gap: '0.75rem', padding: '0.875rem 1rem',
              borderBottom: '1px solid var(--border-light)',
              fontSize: '0.875rem', alignItems: 'center'
            }}>
              <span style={{ color: 'var(--text-muted)' }}>{log.date}</span>
              <Badge variant="blue">{log.course}</Badge>
              <span style={{ color: 'var(--text-muted)' }}>{log.section}</span>
              <span style={{ fontWeight: 600, color: 'var(--accent-emerald)' }}>{log.present}</span>
              <span style={{ fontWeight: 600, color: 'var(--accent-rose)' }}>{log.absent}</span>
              <span style={{ fontWeight: 600 }}>{log.percentage}</span>
            </div>
          ))}
        </div>
      </Card>

      {/* Attendance Interface Modal */}
      <Modal
        isOpen={!!activeSection}
        onClose={() => setActiveSection(null)}
        title={activeSection ? `Mark Attendance: ${activeSection.course.split(' - ')[0]} (${activeSection.section})` : ''}
        footer={
          <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%', alignItems: 'center' }}>
            <div style={{ fontSize: '0.8125rem', color: 'var(--text-subtle)' }}>
              {counterText}
            </div>
            <div style={{ display: 'flex', gap: '0.75rem' }}>
              <Button variant="secondary" onClick={() => setActiveSection(null)}>Cancel</Button>
              <Button variant="primary" onClick={handleSaveAttendance}>Save Attendance</Button>
            </div>
          </div>
        }
      >
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', backgroundColor: 'var(--bg-subtle)', padding: '0.75rem 1rem', borderRadius: 'var(--radius-md)' }}>
            <span style={{ fontSize: '0.875rem', fontWeight: 500, color: 'var(--text-muted)' }}>Quick Actions:</span>
            <div style={{ display: 'flex', gap: '0.5rem' }}>
              <Button variant="secondary" size="sm" onClick={() => handleSetAll('Present')}>✅ Mark All Present</Button>
              <Button variant="secondary" size="sm" onClick={() => handleSetAll('Absent')}>❌ Mark All Absent</Button>
            </div>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            {mockStudentsList.map(student => {
              const status = attendanceState[student.id];
              const isLow = parseFloat(student.currentAttendance) < 75;
              return (
                <div key={student.id} style={{
                  display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                  padding: '0.75rem 1rem', border: '1px solid var(--border-light)',
                  borderRadius: 'var(--radius-md)', backgroundColor: status === 'Absent' ? '#fef2f2' : 'var(--bg-card)'
                }}>
                  <div>
                    <div style={{ fontWeight: 600, fontSize: '0.9375rem', color: 'var(--text-main)' }}>{student.name}</div>
                    <div style={{ display: 'flex', gap: '0.75rem', fontSize: '0.75rem', color: 'var(--text-subtle)', marginTop: '0.15rem' }}>
                      <span>{student.roll}</span>
                      <span style={{ color: isLow ? 'var(--accent-rose)' : 'var(--text-subtle)', fontWeight: isLow ? 600 : 400 }}>
                        {student.currentAttendance} Attendance
                      </span>
                    </div>
                  </div>
                  
                  <div style={{ display: 'flex', backgroundColor: 'var(--bg-subtle)', padding: '0.2rem', borderRadius: 'var(--radius-md)', gap: '0.2rem' }}>
                    <button
                      onClick={() => setAttendanceState(prev => ({ ...prev, [student.id]: 'Present' }))}
                      style={{
                        padding: '0.35rem 0.75rem', fontSize: '0.8125rem', fontWeight: 600, cursor: 'pointer',
                        backgroundColor: status === 'Present' ? 'var(--accent-emerald)' : 'transparent',
                        color: status === 'Present' ? 'white' : 'var(--text-muted)',
                        border: 'none', borderRadius: '4px', transition: 'all 0.15s'
                      }}
                    >P</button>
                    <button
                      onClick={() => setAttendanceState(prev => ({ ...prev, [student.id]: 'Late' }))}
                      style={{
                        padding: '0.35rem 0.75rem', fontSize: '0.8125rem', fontWeight: 600, cursor: 'pointer',
                        backgroundColor: status === 'Late' ? 'var(--accent-amber)' : 'transparent',
                        color: status === 'Late' ? 'white' : 'var(--text-muted)',
                        border: 'none', borderRadius: '4px', transition: 'all 0.15s'
                      }}
                    >L</button>
                    <button
                      onClick={() => setAttendanceState(prev => ({ ...prev, [student.id]: 'Absent' }))}
                      style={{
                        padding: '0.35rem 0.75rem', fontSize: '0.8125rem', fontWeight: 600, cursor: 'pointer',
                        backgroundColor: status === 'Absent' ? 'var(--accent-rose)' : 'transparent',
                        color: status === 'Absent' ? 'white' : 'var(--text-muted)',
                        border: 'none', borderRadius: '4px', transition: 'all 0.15s'
                      }}
                    >A</button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </Modal>
    </div>
  );
};


