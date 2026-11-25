import React from 'react';
import { Card } from '../common/Card';
import { Badge } from '../common/Badge';
import { Button } from '../common/Button';
import { mockAnnouncements } from '../../data/mockAnnouncements';

export const RecentNoticesCard = ({ onNavigate }) => {
  return (
    <Card
      title="Recent Notices"
      subtitle="Latest campus circulars & department updates"
      action={
        <Button variant="outline" size="sm" onClick={() => onNavigate && onNavigate('notices')}>
          All Notices
        </Button>
      }
    >
      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.875rem', marginTop: '0.5rem' }}>
        {mockAnnouncements.slice(0, 3).map((notice) => (
          <div
            key={notice.id}
            style={{
              paddingBottom: '0.75rem',
              borderBottom: '1px solid var(--border-light)',
              display: 'flex',
              flexDirection: 'column',
              gap: '0.25rem'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <Badge variant={notice.priority === 'high' ? 'amber' : 'purple'}>
                {notice.tag}
              </Badge>
              <span style={{ fontSize: '0.75rem', color: 'var(--text-subtle)' }}>{notice.date}</span>
            </div>
            <h4 style={{ fontSize: '0.9rem', fontWeight: 600, color: 'var(--text-main)' }}>
              {notice.title}
            </h4>
            <p style={{ fontSize: '0.8125rem', color: 'var(--text-muted)' }}>
              {notice.summary}
            </p>
          </div>
        ))}
      </div>
    </Card>
  );
};
