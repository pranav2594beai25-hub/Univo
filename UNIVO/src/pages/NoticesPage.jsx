import React, { useState } from 'react';
import { Card } from '../components/common/Card';
import { Badge } from '../components/common/Badge';
import { mockAnnouncements } from '../data/mockAnnouncements';

export const NoticesPage = () => {
  const [filter, setFilter] = useState('All');
  const categories = ['All', 'Academic', 'Events', 'Facilities', 'Workshop'];

  const filteredNotices = filter === 'All'
    ? mockAnnouncements
    : mockAnnouncements.filter(item => item.category === filter);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
      <div>
        <h2>Campus Announcements & Notices</h2>
        <p>Official notices from University Administration & Department Heads</p>
      </div>

      {/* Filter Tabs */}
      <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={`btn ${filter === cat ? 'btn-primary' : 'btn-secondary'} btn-sm`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
        {filteredNotices.map((notice) => (
          <Card key={notice.id}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
              <Badge variant={notice.priority === 'high' ? 'amber' : 'purple'}>
                {notice.tag}
              </Badge>
              <span style={{ fontSize: '0.8125rem', color: 'var(--text-subtle)' }}>
                Published: {notice.date}
              </span>
            </div>
            <h3 style={{ fontSize: '1.15rem', marginBottom: '0.35rem' }}>{notice.title}</h3>
            <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', marginBottom: '0.75rem' }}>
              {notice.summary}
            </p>
            <div style={{ fontSize: '0.75rem', color: 'var(--text-subtle)', fontStyle: 'italic' }}>
              Issued by: {notice.publisher}
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};
