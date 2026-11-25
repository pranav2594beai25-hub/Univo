import React from 'react';
import { Card } from '../common/Card';
import { Badge } from '../common/Badge';
import { Button } from '../common/Button';
import { mockAssignments } from '../../data/mockAssignments';

export const AssignmentSummaryCard = () => {
  return (
    <Card
      title="Assignments Summary"
      subtitle="Pending deliverables and graded submissions"
    >
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginTop: '0.5rem' }}>
        {mockAssignments.map((asg) => {
          const isPending = asg.status === 'Pending';
          return (
            <div
              key={asg.id}
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
                  <span style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--primary-600)' }}>
                    {asg.courseCode}
                  </span>
                  <Badge variant={isPending ? 'purple' : 'emerald'}>{asg.status}</Badge>
                </div>
                <h4 style={{ fontSize: '0.9rem', fontWeight: 600 }}>{asg.title}</h4>
                <p style={{ fontSize: '0.8125rem', color: 'var(--text-subtle)', marginTop: '2px' }}>
                  {isPending ? `Due: ${asg.dueDate} (${asg.dueTime})` : `Score: ${asg.score}`}
                </p>
              </div>

              {isPending && (
                <Button variant="primary" size="sm" onClick={() => alert(`Submitting ${asg.title}`)}>
                  Submit
                </Button>
              )}
            </div>
          );
        })}
      </div>
    </Card>
  );
};
