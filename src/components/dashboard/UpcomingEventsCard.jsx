import React from 'react';
import { Card } from '../common/Card';
import { Badge } from '../common/Badge';
import { Button } from '../common/Button';
import { mockEvents } from '../../data/mockEvents';

export const UpcomingEventsCard = () => {
  return (
    <Card
      title="Upcoming Campus Events"
      subtitle="Hackathons, technical summits & sports meets"
    >
      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.875rem', marginTop: '0.5rem' }}>
        {mockEvents.map((evt) => (
          <div
            key={evt.id}
            style={{
              padding: '0.875rem 1rem',
              borderRadius: 'var(--radius-md)',
              border: '1px solid var(--border-light)',
              backgroundColor: 'var(--bg-card)',
              display: 'flex',
              alignItems: 'center',
              justify: 'space-between',
              gap: '1rem'
            }}
          >
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.2rem' }}>
                <Badge variant="blue">{evt.category}</Badge>
                <span style={{ fontSize: '0.75rem', color: 'var(--text-subtle)' }}>{evt.date}</span>
              </div>
              <h4 style={{ fontSize: '0.9rem', fontWeight: 600 }}>{evt.title}</h4>
              <p style={{ fontSize: '0.8125rem', color: 'var(--text-subtle)', marginTop: '2px' }}>
                {evt.time} • {evt.location}
              </p>
            </div>
            <Button variant="outline" size="sm" onClick={() => alert(`Registering for ${evt.title}`)}>
              Register
            </Button>
          </div>
        ))}
      </div>
    </Card>
  );
};
