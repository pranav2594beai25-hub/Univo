import React, { useState } from 'react';
import { Card } from '../components/common/Card';
import { Badge } from '../components/common/Badge';
import { IconClock, IconMapPin } from '../components/common/Icons';

export const TeacherTimetablePage = () => {
  const [selectedDay, setSelectedDay] = useState('Monday');
  const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];

  const weeklySchedule = {
    Monday: [
      { id: 'M1', time: '02:00 PM - 03:30 PM', subject: 'Advanced Algorithm Design', code: 'CS305', room: 'Lab 2, Block C', section: 'Section B', students: 58, type: 'Lecture' },
    ],
    Tuesday: [
      { id: 'T1', time: '09:00 AM - 10:30 AM', subject: 'Data Structures & Algorithms', code: 'CS302', room: 'Auditorium 2', section: 'Section A', students: 64, type: 'Lecture' },
      { id: 'T2', time: '02:00 PM - 03:30 PM', subject: 'Data Structures & Algorithms', code: 'CS302', room: 'Room 204', section: 'Section C', students: 42, type: 'Tutorial' },
    ],
    Wednesday: [
      { id: 'W1', time: '02:00 PM - 03:30 PM', subject: 'Advanced Algorithm Design', code: 'CS305', room: 'Lab 2, Block C', section: 'Section B', students: 58, type: 'Lecture' },
      { id: 'W2', time: '04:00 PM - 05:00 PM', subject: 'Faculty Meeting', code: 'DEPT', room: 'Conference Hall, Admin Block', section: 'All Faculty', students: 0, type: 'Meeting' },
    ],
    Thursday: [
      { id: 'TH1', time: '09:00 AM - 10:30 AM', subject: 'Data Structures & Algorithms', code: 'CS302', room: 'Auditorium 2', section: 'Section A', students: 64, type: 'Lecture' },
    ],
    Friday: [
      { id: 'F1', time: '10:00 AM - 01:00 PM', subject: 'Data Structures Practical Lab', code: 'CS310', room: 'Lab 4, Block C', section: 'Section B', students: 58, type: 'Lab' },
      { id: 'F2', time: '02:00 PM - 03:00 PM', subject: 'Office Hours (Student Consultation)', code: 'OH', room: 'Block C, Room 304', section: 'Open', students: 0, type: 'Office Hours' },
    ]
  };

  const totalSlots = Object.values(weeklySchedule).reduce((sum, day) => sum + day.length, 0);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.75rem' }}>
      <div>
        <h2>Teaching Schedule</h2>
        <p>Your weekly lecture, lab, and consultation timetable — {totalSlots} slots per week</p>
      </div>

      {/* Weekly Summary Bar */}
      <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
        {days.map((day) => {
          const count = weeklySchedule[day]?.length || 0;
          const isSelected = selectedDay === day;
          return (
            <button
              key={day}
              onClick={() => setSelectedDay(day)}
              style={{
                flex: 1, minWidth: '120px', padding: '1rem',
                backgroundColor: isSelected ? '#f3e8ff' : 'var(--bg-card)',
                border: isSelected ? '2px solid var(--accent-purple)' : '1px solid var(--border-light)',
                borderRadius: 'var(--radius-lg)', cursor: 'pointer',
                textAlign: 'center', transition: 'all var(--transition-fast)'
              }}
            >
              <div style={{ fontSize: '0.875rem', fontWeight: 600, color: isSelected ? 'var(--accent-purple)' : 'var(--text-main)' }}>{day}</div>
              <div style={{ fontSize: '1.25rem', fontWeight: 700, color: isSelected ? 'var(--accent-purple)' : 'var(--text-muted)', marginTop: '0.2rem' }}>{count}</div>
              <div style={{ fontSize: '0.7rem', color: 'var(--text-subtle)' }}>{count === 1 ? 'class' : 'classes'}</div>
            </button>
          );
        })}
      </div>

      {/* Day Schedule */}
      <Card title={`${selectedDay}'s Schedule`} subtitle={`${weeklySchedule[selectedDay]?.length || 0} sessions`}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', marginTop: '0.75rem' }}>
          {weeklySchedule[selectedDay]?.length === 0 && (
            <div style={{ padding: '2rem', textAlign: 'center', color: 'var(--text-subtle)' }}>
              No classes scheduled for {selectedDay}.
            </div>
          )}
          {weeklySchedule[selectedDay]?.map((slot) => (
            <div key={slot.id} style={{
              display: 'flex', alignItems: 'center', justifyContent: 'space-between',
              padding: '1.25rem 1.5rem', border: '1px solid var(--border-light)',
              borderRadius: 'var(--radius-lg)', backgroundColor: 'var(--bg-card)',
              borderLeft: `4px solid ${
                slot.type === 'Lab' ? 'var(--accent-purple)' :
                slot.type === 'Meeting' ? 'var(--accent-amber)' :
                slot.type === 'Office Hours' ? 'var(--accent-emerald)' :
                slot.type === 'Tutorial' ? '#f59e0b' : 'var(--primary-600)'
              }`, gap: '1rem', flexWrap: 'wrap'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', flex: 1 }}>
                <div style={{ minWidth: '130px', padding: '0.5rem 0.75rem', backgroundColor: 'var(--bg-subtle)', borderRadius: 'var(--radius-md)', textAlign: 'center' }}>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.3rem', fontWeight: 700, fontSize: '0.85rem', color: 'var(--accent-purple)' }}>
                    <IconClock size={14} /> {slot.time.split(' - ')[0]}
                  </div>
                  <span style={{ fontSize: '0.7rem', color: 'var(--text-subtle)' }}>to {slot.time.split(' - ')[1]}</span>
                </div>
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.2rem' }}>
                    <h4 style={{ fontSize: '1rem', fontWeight: 600 }}>{slot.subject}</h4>
                    <Badge variant={slot.type === 'Lab' ? 'purple' : slot.type === 'Tutorial' ? 'amber' : slot.type === 'Meeting' ? 'amber' : slot.type === 'Office Hours' ? 'emerald' : 'blue'}>{slot.type}</Badge>
                  </div>
                  <div style={{ display: 'flex', gap: '1rem', fontSize: '0.8125rem', color: 'var(--text-subtle)' }}>
                    <span style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}><IconMapPin size={13} /> {slot.room}</span>
                    <span>{slot.section}</span>
                    {slot.students > 0 && <span>👥 {slot.students} students</span>}
                  </div>
                </div>
              </div>
              <Badge variant="gray">{slot.code}</Badge>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
};
