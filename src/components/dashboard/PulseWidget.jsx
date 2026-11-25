import React from 'react';
import { Card } from '../common/Card';
import { Badge } from '../common/Badge';
import { Button } from '../common/Button';
import { IconChevronRight } from '../common/Icons';
import { mockPulseItems } from '../../data/mockPulse';

export const PulseWidget = ({ onActionClick }) => {
  return (
    <Card
      title={
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
          <span style={{
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '28px',
            height: '28px',
            borderRadius: '50%',
            backgroundColor: '#fef3c7',
            color: '#d97706',
            fontSize: '1rem'
          }}>
            ⚡
          </span>
          <span>Pulse • Needs Your Attention</span>
        </div>
      }
      subtitle="Critical reminders, attendance alerts, and upcoming deadlines"
      className="pulse-container-card"
      style={{ borderLeft: '4px solid var(--primary-600)' }}
    >
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginTop: '0.75rem' }}>
        {mockPulseItems.map((item) => (
          <div
            key={item.id}
            style={{
              padding: '1rem 1.25rem',
              borderRadius: 'var(--radius-lg)',
              backgroundColor: item.type === 'warning' ? '#fffbeb' : item.type === 'deadline' ? '#f8fafc' : 'var(--bg-subtle)',
              border: `1px solid ${
                item.type === 'warning' ? '#fde68a' :
                item.type === 'deadline' ? 'rgba(124, 58, 237, 0.2)' : 'var(--border-light)'
              }`,
              display: 'flex',
              alignItems: 'flex-start',
              justifyContent: 'space-between',
              gap: '1rem',
              transition: 'transform 0.2s ease, box-shadow 0.2s ease'
            }}
          >
            <div style={{ display: 'flex', gap: '0.875rem', alignItems: 'flex-start' }}>
              <span style={{ fontSize: '1.4rem', lineHeight: 1 }}>{item.icon}</span>
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.2rem' }}>
                  <h4 style={{ fontSize: '0.9375rem', fontWeight: 600, color: 'var(--text-main)' }}>
                    {item.title}
                  </h4>
                  <Badge variant={item.badgeColor}>{item.time}</Badge>
                </div>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', lineHeight: 1.4 }}>
                  {item.message}
                </p>
              </div>
            </div>

            <Button
              variant={item.type === 'warning' ? 'outline' : 'secondary'}
              size="sm"
              onClick={() => onActionClick && onActionClick(item)}
              style={{ flexShrink: 0 }}
            >
              {item.actionText} <IconChevronRight size={14} />
            </Button>
          </div>
        ))}
      </div>
    </Card>
  );
};
