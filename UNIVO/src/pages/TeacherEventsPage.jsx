import React, { useState } from 'react';
import { Card } from '../components/common/Card';
import { Badge } from '../components/common/Badge';
import { Button } from '../components/common/Button';

const facultyEvents = [
  {
    id: 'FE-1', title: 'Faculty Development Program: AI in Higher Education',
    description: 'Two-day workshop on integrating AI tools into curriculum design, assessment methods, and student engagement strategies.',
    date: 'Aug 22-23, 2026', time: '09:00 AM - 05:00 PM',
    location: 'Conference Hall, Admin Block', organizer: 'IQAC Cell',
    category: 'Workshop', status: 'Upcoming', seats: 40
  },
  {
    id: 'FE-2', title: 'Research Symposium: Computing Frontiers 2026',
    description: 'Present your research papers and engage with industry experts from Google, Microsoft, and ISRO on emerging technologies.',
    date: 'Sep 05, 2026', time: '10:00 AM - 04:00 PM',
    location: 'Auditorium A', organizer: 'Research & Innovation Cell',
    category: 'Conference', status: 'Registration Open', seats: 100
  },
  {
    id: 'FE-3', title: 'Guest Lecture: Quantum Computing Applications',
    description: 'Dr. Priya Mehta from IIT Bombay discusses practical applications of quantum computing in cryptography and optimization.',
    date: 'Aug 28, 2026', time: '02:00 PM - 04:00 PM',
    location: 'Seminar Room 102', organizer: 'Department of CSE',
    category: 'Guest Lecture', status: 'Upcoming', seats: 80
  },
  {
    id: 'FE-4', title: 'Inter-Department Faculty Cricket Tournament',
    description: 'Annual friendly cricket tournament between departments. Register your team of 11 members by Aug 25.',
    date: 'Aug 30, 2026', time: '04:00 PM - 07:00 PM',
    location: 'University Sports Complex', organizer: 'Sports Council',
    category: 'Sports', status: 'Registration Open', seats: 60
  },
];

export const TeacherEventsPage = () => {
  const [registered, setRegistered] = useState({});

  const handleRegister = (id) => {
    setRegistered((prev) => ({ ...prev, [id]: true }));
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.75rem' }}>
      <div>
        <h2>Faculty Events & Workshops</h2>
        <p>Faculty development programs, research conferences, guest lectures, and community events</p>
      </div>

      <div className="grid-2">
        {facultyEvents.map((evt) => {
          const isReg = registered[evt.id];
          return (
            <Card key={evt.id} hoverable>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.75rem' }}>
                <Badge variant={
                  evt.category === 'Workshop' ? 'purple' :
                  evt.category === 'Conference' ? 'blue' :
                  evt.category === 'Sports' ? 'emerald' : 'amber'
                }>{evt.category}</Badge>
                <span style={{ fontSize: '0.8125rem', color: 'var(--text-subtle)' }}>{evt.seats} seats</span>
              </div>

              <h3 style={{ fontSize: '1.15rem', marginBottom: '0.35rem' }}>{evt.title}</h3>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '0.875rem', lineHeight: 1.5 }}>{evt.description}</p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.35rem', fontSize: '0.8125rem', color: 'var(--text-subtle)', marginBottom: '1.25rem' }}>
                <div>🗓️ {evt.date} ({evt.time})</div>
                <div>📍 {evt.location}</div>
                <div>🏢 Organized by: <strong>{evt.organizer}</strong></div>
              </div>

              <div style={{ borderTop: '1px solid var(--border-light)', paddingTop: '0.875rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <Badge variant={isReg ? 'emerald' : 'purple'}>
                  {isReg ? 'Registered ✓' : evt.status}
                </Badge>
                <Button
                  variant={isReg ? 'secondary' : 'primary'}
                  size="sm"
                  disabled={isReg}
                  onClick={() => handleRegister(evt.id)}
                >
                  {isReg ? 'Registered ✓' : 'Register'}
                </Button>
              </div>
            </Card>
          );
        })}
      </div>
    </div>
  );
};
