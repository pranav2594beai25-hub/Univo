import React, { useState } from 'react';
import { Card } from '../components/common/Card';
import { Badge } from '../components/common/Badge';
import { Button } from '../components/common/Button';
import { Modal } from '../components/common/Modal';
import { mockAssignments } from '../data/mockAssignments';

export const AssignmentsPage = () => {
  const [filter, setFilter] = useState('All');
  const [selectedAsg, setSelectedAsg] = useState(null);
  const [submittedMessage, setSubmittedMessage] = useState(false);

  const filtered = filter === 'All'
    ? mockAssignments
    : mockAssignments.filter((asg) => asg.status === filter);

  const handleSimulateSubmit = () => {
    setSubmittedMessage(true);
    setTimeout(() => {
      setSubmittedMessage(false);
      setSelectedAsg(null);
    }, 1500);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.75rem' }}>
      <div>
        <h2>Assignments & Project Deliverables</h2>
        <p>Digital submission portal, deadline countdowns, and evaluation scores</p>
      </div>

      {/* Filter Bar */}
      <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
        {['All', 'Pending', 'Submitted'].map((status) => (
          <button
            key={status}
            onClick={() => setFilter(status)}
            className={`btn ${filter === status ? 'btn-primary' : 'btn-secondary'} btn-sm`}
          >
            {status} Assignments
          </button>
        ))}
      </div>

      {/* Assignments Cards List */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
        {filtered.map((asg) => {
          const isPending = asg.status === 'Pending';
          return (
            <Card key={asg.id} hoverable>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '1rem' }}>
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.35rem' }}>
                    <span style={{ fontSize: '0.8125rem', fontWeight: 700, color: 'var(--primary-600)' }}>
                      {asg.courseCode}
                    </span>
                    <Badge variant={isPending ? 'purple' : 'emerald'}>
                      {asg.status}
                    </Badge>
                    <span style={{ fontSize: '0.75rem', color: 'var(--text-subtle)' }}>
                      Weightage: {asg.weightage}
                    </span>
                  </div>
                  <h3 style={{ fontSize: '1.15rem', marginBottom: '0.25rem' }}>{asg.title}</h3>
                  <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)' }}>{asg.courseName}</p>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '0.5rem' }}>
                  {isPending ? (
                    <>
                      <span style={{ fontSize: '0.8125rem', fontWeight: 600, color: 'var(--accent-amber)' }}>
                        Due: {asg.dueDate} ({asg.dueTime})
                      </span>
                      <Button variant="primary" size="sm" onClick={() => setSelectedAsg(asg)}>
                        Upload & Submit
                      </Button>
                    </>
                  ) : (
                    <>
                      <span style={{ fontSize: '0.9375rem', fontWeight: 700, color: 'var(--accent-emerald)' }}>
                        Grade: {asg.score}
                      </span>
                      <Button variant="outline" size="sm" onClick={() => alert(`Viewing submission details for ${asg.title}`)}>
                        View Receipt
                      </Button>
                    </>
                  )}
                </div>
              </div>
            </Card>
          );
        })}
      </div>

      {/* Submission Modal Simulation */}
      <Modal
        isOpen={Boolean(selectedAsg)}
        onClose={() => setSelectedAsg(null)}
        title={`Submit Deliverable: ${selectedAsg?.title}`}
        footer={
          <>
            <Button variant="secondary" onClick={() => setSelectedAsg(null)}>
              Cancel
            </Button>
            <Button variant="primary" onClick={handleSimulateSubmit}>
              Submit Assignment
            </Button>
          </>
        }
      >
        {selectedAsg && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <div style={{ padding: '0.875rem', backgroundColor: 'var(--bg-subtle)', borderRadius: 'var(--radius-md)' }}>
              <p style={{ fontSize: '0.875rem', color: 'var(--text-main)', fontWeight: 600 }}>
                Course: {selectedAsg.courseCode} - {selectedAsg.courseName}
              </p>
              <p style={{ fontSize: '0.8125rem', color: 'var(--text-subtle)', marginTop: '2px' }}>
                Deadline: {selectedAsg.dueDate} at {selectedAsg.dueTime}
              </p>
            </div>

            <div style={{
              border: '2px dashed var(--border-light)',
              borderRadius: 'var(--radius-lg)',
              padding: '2rem',
              textAlign: 'center',
              backgroundColor: '#fafafa',
              cursor: 'pointer'
            }}>
              <p style={{ fontSize: '0.9375rem', fontWeight: 600, color: 'var(--primary-600)' }}>
                📁 Click to upload or drag & drop files here
              </p>
              <p style={{ fontSize: '0.75rem', color: 'var(--text-subtle)', marginTop: '0.25rem' }}>
                Supported formats: PDF, ZIP, DOCX (Max size: 25MB)
              </p>
            </div>

            {submittedMessage && (
              <div style={{ padding: '0.75rem', backgroundColor: '#d1fae5', color: '#065f46', borderRadius: 'var(--radius-md)', textAlign: 'center', fontSize: '0.875rem', fontWeight: 600 }}>
                ✅ Assignment submitted successfully!
              </div>
            )}
          </div>
        )}
      </Modal>
    </div>
  );
};
