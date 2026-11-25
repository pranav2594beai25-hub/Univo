import React from 'react';
import { Card } from '../common/Card';
import { Badge } from '../common/Badge';

export const AttendanceSummaryCard = () => {
  const attendanceBreakdown = [
    { code: 'CS301', name: 'Web Technology & Frontend', percentage: 96, attended: '24 / 25', status: 'Safe' },
    { code: 'CS302', name: 'Data Structures & Algorithms', percentage: 92, attended: '22 / 24', status: 'Safe' },
    { code: 'CS303', name: 'Database Management Systems', percentage: 72.5, attended: '15 / 20', status: 'Warning' },
    { code: 'CS304', name: 'Software Engineering', percentage: 90, attended: '18 / 20', status: 'Safe' },
  ];

  return (
    <Card
      title="Attendance Summary"
      subtitle="Subject-by-subject percentage & 75% minimum threshold status"
    >
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginTop: '0.5rem' }}>
        {attendanceBreakdown.map((item) => {
          const isWarning = item.status === 'Warning';
          return (
            <div
              key={item.code}
              style={{
                padding: '0.875rem 1rem',
                borderRadius: 'var(--radius-md)',
                backgroundColor: isWarning ? '#fffbeb' : 'var(--bg-card)',
                border: `1px solid ${isWarning ? '#fde68a' : 'var(--border-light)'}`
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.4rem' }}>
                <div>
                  <span style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--primary-600)' }}>
                    {item.code}
                  </span>
                  <h4 style={{ fontSize: '0.875rem', fontWeight: 600 }}>{item.name}</h4>
                </div>
                <div style={{ textAlign: 'right' }}>
                  <Badge variant={isWarning ? 'amber' : 'emerald'}>
                    {item.percentage}% ({item.attended})
                  </Badge>
                </div>
              </div>

              {/* Progress Bar */}
              <div style={{ width: '100%', backgroundColor: 'var(--bg-subtle)', height: '6px', borderRadius: '4px', overflow: 'hidden' }}>
                <div
                  style={{
                    width: `${item.percentage}%`,
                    backgroundColor: isWarning ? 'var(--accent-amber)' : 'var(--accent-emerald)',
                    height: '100%'
                  }}
                />
              </div>
            </div>
          );
        })}
      </div>
    </Card>
  );
};
