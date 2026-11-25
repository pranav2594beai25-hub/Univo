import React, { useState } from 'react';
import { Card } from '../components/common/Card';
import { StatCard } from '../components/common/StatCard';
import { Badge } from '../components/common/Badge';
import { Button } from '../components/common/Button';
import { Modal } from '../components/common/Modal';
import { IconAssignment, IconClock, IconAward, IconChevronRight } from '../components/common/Icons';

const assignments = [
  { id: 'TA-1', title: 'Assignment 2: Binary Search Trees', course: 'CS302', type: 'Assignment', deadline: 'Aug 14, 2026', submissions: 58, total: 64, graded: 30, status: 'Grading', weightage: '10%' },
  { id: 'TA-2', title: 'Lab Report 4: Graph Traversals', course: 'CS310', type: 'Lab Report', deadline: 'Aug 15, 2026', submissions: 52, total: 58, graded: 12, status: 'Grading', weightage: '5%' },
  { id: 'TA-3', title: 'Quiz 3: Sorting Algorithms', course: 'CS302', type: 'Quiz', deadline: 'Aug 12, 2026', submissions: 64, total: 64, graded: 64, status: 'Completed', weightage: '5%' },
  { id: 'TA-4', title: 'Mini Project: Algorithm Visualizer', course: 'CS305', type: 'Project', deadline: 'Aug 20, 2026', submissions: 45, total: 58, graded: 0, status: 'Accepting', weightage: '20%' },
  { id: 'TA-5', title: 'Assignment 3: Dynamic Programming', course: 'CS302', type: 'Assignment', deadline: 'Aug 28, 2026', submissions: 0, total: 64, graded: 0, status: 'Draft', weightage: '10%' },
];

const recentSubmissions = [
  { id: 'RS-1', student: 'Aarav Sharma (22BCS042)', assignment: 'Binary Search Trees', course: 'CS302', submittedAt: 'Aug 14, 10:45 AM' },
  { id: 'RS-2', student: 'Priya Patel (22BCS038)', assignment: 'Binary Search Trees', course: 'CS302', submittedAt: 'Aug 14, 10:32 AM' },
  { id: 'RS-3', student: 'Rohan Mehta (22BCS015)', assignment: 'Graph Traversals', course: 'CS310', submittedAt: 'Aug 15, 02:15 PM' },
  { id: 'RS-4', student: 'Megha Kapoor (22BCS029)', assignment: 'Binary Search Trees', course: 'CS302', submittedAt: 'Aug 14, 09:58 AM' },
];

export const TeacherAssignmentsPage = () => {
  const [filter, setFilter] = useState('All');
  const [showCreate, setShowCreate] = useState(false);
  const [created, setCreated] = useState(false);

  const filtered = filter === 'All' ? assignments : assignments.filter((a) => a.status === filter);

  const pendingGrading = assignments.filter((a) => a.status === 'Grading').reduce((sum, a) => sum + (a.submissions - a.graded), 0);

  const handleCreate = () => {
    setCreated(true);
    setTimeout(() => { setCreated(false); setShowCreate(false); }, 1500);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.75rem' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '1rem' }}>
        <div>
          <h2>Assignments & Grading</h2>
          <p>Create assignments, track submissions, and evaluate student work</p>
        </div>
        <Button variant="primary" onClick={() => setShowCreate(true)}>+ Create New Assignment</Button>
      </div>

      <div className="grid-3">
        <StatCard label="Total Assignments" value={assignments.length} trend="This semester" icon={IconAssignment} color="purple" />
        <StatCard label="Pending Grading" value={`${pendingGrading} Submissions`} trend="Needs evaluation" icon={IconClock} color="amber" />
        <StatCard label="Completion Rate" value="87%" trend="Average submission rate" icon={IconAward} color="emerald" />
      </div>

      {/* Filter */}
      <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
        {['All', 'Accepting', 'Grading', 'Completed', 'Draft'].map((s) => (
          <button key={s} onClick={() => setFilter(s)} className={`btn ${filter === s ? 'btn-primary' : 'btn-secondary'} btn-sm`}>{s}</button>
        ))}
      </div>

      {/* Assignments List */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
        {filtered.map((asg) => (
          <Card key={asg.id} hoverable>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '1rem' }}>
              <div style={{ flex: 1, minWidth: '250px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.3rem' }}>
                  <Badge variant="blue">{asg.course}</Badge>
                  <Badge variant={asg.type === 'Project' ? 'purple' : asg.type === 'Quiz' ? 'amber' : 'gray'}>{asg.type}</Badge>
                  <Badge variant={
                    asg.status === 'Completed' ? 'emerald' :
                    asg.status === 'Grading' ? 'amber' :
                    asg.status === 'Accepting' ? 'blue' : 'gray'
                  }>{asg.status}</Badge>
                </div>
                <h3 style={{ fontSize: '1.1rem', marginBottom: '0.3rem' }}>{asg.title}</h3>
                <div style={{ fontSize: '0.8125rem', color: 'var(--text-subtle)' }}>
                  Deadline: {asg.deadline} • Weightage: {asg.weightage}
                </div>
                {/* Progress */}
                <div style={{ marginTop: '0.75rem' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.75rem', color: 'var(--text-subtle)', marginBottom: '0.3rem' }}>
                    <span>Submissions: {asg.submissions}/{asg.total}</span>
                    <span>Graded: {asg.graded}/{asg.submissions}</span>
                  </div>
                  <div style={{ display: 'flex', gap: '4px', height: '6px' }}>
                    <div style={{ flex: asg.submissions, backgroundColor: 'var(--accent-emerald)', borderRadius: '3px 0 0 3px' }} />
                    <div style={{ flex: asg.total - asg.submissions, backgroundColor: 'var(--bg-subtle)', borderRadius: '0 3px 3px 0' }} />
                  </div>
                </div>
              </div>
              <div style={{ display: 'flex', gap: '0.5rem' }}>
                {asg.status === 'Grading' && (
                  <Button variant="primary" size="sm" onClick={() => alert(`Opening grading portal for ${asg.title}`)}>
                    Grade <IconChevronRight size={14} />
                  </Button>
                )}
                <Button variant="secondary" size="sm" onClick={() => alert(`Viewing submissions for ${asg.title}`)}>
                  View Details
                </Button>
              </div>
            </div>
          </Card>
        ))}
      </div>

      {/* Recent Submissions */}
      <Card title="Recent Submissions" subtitle="Latest student uploads">
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', marginTop: '0.5rem' }}>
          {recentSubmissions.map((sub) => (
            <div key={sub.id} style={{
              padding: '0.875rem 1rem', borderBottom: '1px solid var(--border-light)',
              display: 'flex', justifyContent: 'space-between', alignItems: 'center'
            }}>
              <div>
                <h4 style={{ fontSize: '0.9rem', fontWeight: 600 }}>{sub.assignment}</h4>
                <p style={{ fontSize: '0.8125rem', color: 'var(--text-muted)' }}>{sub.student} • {sub.course}</p>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <span style={{ fontSize: '0.75rem', color: 'var(--text-subtle)' }}>{sub.submittedAt}</span>
                <Button variant="outline" size="sm" onClick={() => alert(`Reviewing ${sub.student}`)}>Review</Button>
              </div>
            </div>
          ))}
        </div>
      </Card>

      {/* Create Assignment Modal */}
      <Modal isOpen={showCreate} onClose={() => setShowCreate(false)} title="Create New Assignment"
        footer={<><Button variant="secondary" onClick={() => setShowCreate(false)}>Cancel</Button><Button variant="primary" onClick={handleCreate}>Publish Assignment</Button></>}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <div><label style={{ fontSize: '0.8125rem', fontWeight: 600, display: 'block', marginBottom: '0.2rem' }}>Title</label><input type="text" className="form-input" placeholder="e.g. Assignment 4: Heap Sort" /></div>
          <div><label style={{ fontSize: '0.8125rem', fontWeight: 600, display: 'block', marginBottom: '0.2rem' }}>Course</label>
            <select className="form-input"><option>CS302 - Data Structures & Algorithms</option><option>CS305 - Advanced Algorithm Design</option><option>CS310 - DSA Practical Lab</option></select>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem' }}>
            <div><label style={{ fontSize: '0.8125rem', fontWeight: 600, display: 'block', marginBottom: '0.2rem' }}>Deadline</label><input type="date" className="form-input" /></div>
            <div><label style={{ fontSize: '0.8125rem', fontWeight: 600, display: 'block', marginBottom: '0.2rem' }}>Weightage</label><input type="text" className="form-input" placeholder="e.g. 10%" /></div>
          </div>
          {created && <div style={{ padding: '0.75rem', backgroundColor: '#d1fae5', color: '#065f46', borderRadius: 'var(--radius-md)', textAlign: 'center', fontSize: '0.875rem', fontWeight: 600 }}>✅ Assignment published successfully!</div>}
        </div>
      </Modal>
    </div>
  );
};
