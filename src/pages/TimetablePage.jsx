import React, { useState } from 'react';
import { Card } from '../components/common/Card';
import { Badge } from '../components/common/Badge';
import { IconMapPin, IconClock } from '../components/common/Icons';

export const TimetablePage = () => {
  const [selectedDay, setSelectedDay] = useState('Monday');
  const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];

  const weeklySchedule = {
    Monday: [
      { id: 'M1', time: '10:00 AM - 11:30 AM', subject: 'Web Technology & Frontend Systems', code: 'CS301', room: 'Lab 4, Block C', instructor: 'Prof. Rajesh Verma', type: 'Lab' },
      { id: 'M2', time: '01:30 PM - 03:00 PM', subject: 'Database Management Systems', code: 'CS303', room: 'Hall B, Engineering Annex', instructor: 'Prof. Michael Sterling', type: 'Lecture' }
    ],
    Tuesday: [
      { id: 'T1', time: '09:00 AM - 10:30 AM', subject: 'Data Structures & Algorithms', code: 'CS302', room: 'Auditorium 2', instructor: 'Dr. Ananya Roy', type: 'Lecture' },
      { id: 'T2', time: '11:00 AM - 12:30 PM', subject: 'Discrete Mathematics', code: 'MA301', room: 'Room 204, Science Block', instructor: 'Dr. K. S. Raman', type: 'Tutorial' }
    ],
    Wednesday: [
      { id: 'W1', time: '10:00 AM - 11:30 AM', subject: 'Web Technology & Frontend Systems', code: 'CS301', room: 'Lab 4, Block C', instructor: 'Prof. Rajesh Verma', type: 'Lecture' },
      { id: 'W2', time: '11:30 AM - 01:00 PM', subject: 'Software Engineering & Agile Methods', code: 'CS304', room: 'Seminar Room 102', instructor: 'Dr. Sunita Kulkarni', type: 'Lecture' }
    ],
    Thursday: [
      { id: 'TH1', time: '09:00 AM - 10:30 AM', subject: 'Data Structures & Algorithms', code: 'CS302', room: 'Auditorium 2', instructor: 'Dr. Ananya Roy', type: 'Lecture' },
      { id: 'TH2', time: '02:00 PM - 04:00 PM', subject: 'Database Management Systems Lab', code: 'CS303L', room: 'Lab 2, Block C', instructor: 'Prof. Michael Sterling', type: 'Lab' }
    ],
    Friday: [
      { id: 'F1', time: '11:30 AM - 01:00 PM', subject: 'Software Engineering & Agile Methods', code: 'CS304', room: 'Seminar Room 102', instructor: 'Dr. Sunita Kulkarni', type: 'Lecture' },
      { id: 'F2', time: '01:30 PM - 03:00 PM', subject: 'Database Management Systems', code: 'CS303', room: 'Hall B, Engineering Annex', instructor: 'Prof. Michael Sterling', type: 'Lecture' }
    ]
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.75rem' }}>
      <div>
        <h2>Academic Timetable & Schedule</h2>
        <p>3rd Semester Core Computer Science Weekly Lecture & Lab Slots</p>
      </div>

      {/* Day Selector Tabs */}
      <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
        {days.map((day) => (
          <button
            key={day}
            onClick={() => setSelectedDay(day)}
            className={`btn ${selectedDay === day ? 'btn-primary' : 'btn-secondary'} btn-md`}
          >
            {day}
          </button>
        ))}
      </div>

      {/* Selected Day Schedule View */}
      <Card title={`${selectedDay}'s Classes`}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', marginTop: '0.75rem' }}>
          {weeklySchedule[selectedDay]?.map((slot) => (
            <div
              key={slot.id}
              style={{
                display: 'flex',
                alignItems: 'center',
                justify: 'space-between',
                padding: '1.25rem',
                border: '1px solid var(--border-light)',
                borderRadius: 'var(--radius-lg)',
                backgroundColor: 'var(--bg-card)',
                gap: '1rem',
                flexWrap: 'wrap'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
                <div style={{ minWidth: '160px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', color: 'var(--primary-600)', fontWeight: 700, fontSize: '0.9375rem' }}>
                    <IconClock size={16} /> {slot.time}
                  </div>
                  <span style={{ fontSize: '0.75rem', color: 'var(--text-subtle)', marginTop: '2px', display: 'block' }}>
                    Slot Code: {slot.code}
                  </span>
                </div>

                <div>
                  <h3 style={{ fontSize: '1.05rem', fontWeight: 600 }}>{slot.subject}</h3>
                  <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginTop: '2px' }}>
                    Faculty: <strong>{slot.instructor}</strong>
                  </p>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', fontSize: '0.85rem', color: 'var(--text-subtle)' }}>
                  <IconMapPin size={16} /> {slot.room}
                </div>
                <Badge variant={slot.type === 'Lab' ? 'purple' : slot.type === 'Tutorial' ? 'amber' : 'blue'}>
                  {slot.type}
                </Badge>
              </div>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
};
