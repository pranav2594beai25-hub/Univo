import React from 'react';
import { Card } from '../common/Card';
import { Badge } from '../common/Badge';
import { Button } from '../common/Button';
import { mockSchedule } from '../../data/mockSchedule';

export const UpcomingClassesCard = ({ onNavigate }) => {
  return (
    <Card
      title="Upcoming Classes"
      subtitle="Today's live schedule timeline"
      action={
        <Button variant="outline" size="sm" onClick={() => onNavigate && onNavigate('schedule')}>
          Full Timetable
        </Button>
      }
    >
      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.875rem', marginTop: '0.5rem' }}>
        {mockSchedule.map((item) => (
          <div
            key={item.id}
            style={{
              display: 'flex',
              alignItems: 'center',
              justify: 'space-between',
              padding: '0.875rem 1rem',
              borderRadius: 'var(--radius-md)',
              backgroundColor: item.status === 'In Progress' ? 'var(--primary-50)' : 'var(--bg-subtle)',
              borderLeft: `4px solid ${
                item.status === 'In Progress' ? 'var(--primary-600)' :
                item.status === 'Completed' ? 'var(--accent-emerald)' : '#cbd5e1'
              }`
            }}
          >
            <div>
              <h4 style={{ fontSize: '0.9375rem', fontWeight: 600 }}>{item.subject}</h4>
              <p style={{ fontSize: '0.8125rem', color: 'var(--text-subtle)', marginTop: '2px' }}>
                {item.time} • Room: <strong>{item.room}</strong>
              </p>
            </div>
            <Badge variant={
              item.status === 'In Progress' ? 'blue' :
              item.status === 'Completed' ? 'emerald' : 'gray'
            }>
              {item.status}
            </Badge>
          </div>
        ))}
      </div>
    </Card>
  );
};
