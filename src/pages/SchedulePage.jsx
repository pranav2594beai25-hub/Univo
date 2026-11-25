import React from 'react';
import { Card } from '../components/common/Card';
import { Badge } from '../components/common/Badge';
import { mockSchedule } from '../data/mockSchedule';

export const SchedulePage = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
      <div>
        <h2>Weekly Class Schedule & Timetable</h2>
        <p>Regular lectures and laboratory sessions for 3rd Semester CSE</p>
      </div>

      <Card title="Today's Timetable Grid">
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginTop: '0.75rem' }}>
          {mockSchedule.map((item) => (
            <div
              key={item.id}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '1.25rem',
                border: '1px solid var(--border-light)',
                borderRadius: 'var(--radius-lg)',
                backgroundColor: item.status === 'In Progress' ? 'var(--primary-50)' : 'var(--bg-card)'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
                <div style={{ minWidth: '150px' }}>
                  <span style={{ fontSize: '0.75rem', fontWeight: 600, color: 'var(--text-subtle)' }}>Time</span>
                  <p style={{ fontSize: '0.9375rem', fontWeight: 700, color: 'var(--primary-600)' }}>{item.time}</p>
                </div>
                <div>
                  <h4 style={{ fontSize: '1rem', fontWeight: 600 }}>{item.subject}</h4>
                  <p style={{ fontSize: '0.8125rem', color: 'var(--text-muted)', marginTop: '2px' }}>
                    {item.instructor} • Room: <strong>{item.room}</strong>
                  </p>
                </div>
              </div>
              <Badge variant={
                item.status === 'In Progress' ? 'blue' :
                item.status === 'Completed' ? 'emerald' : 'gray'
              }>
                {item.type} • {item.status}
              </Badge>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
};
