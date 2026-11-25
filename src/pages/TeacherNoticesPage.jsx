import React, { useState } from 'react';
import { Card } from '../components/common/Card';
import { Badge } from '../components/common/Badge';
import { Button } from '../components/common/Button';
import { Modal } from '../components/common/Modal';
import { mockFacultyNotices } from '../data/mockTeacher';

const allNotices = [
  ...mockFacultyNotices,
  { id: 'FN-5', title: 'Annual Convocation Ceremony Rehearsal', date: 'Aug 12, 2026', tag: 'Administrative', priority: 'normal', author: 'Dean of Academics', content: 'All faculty members are requested to attend the convocation rehearsal on Aug 20 at the Central Amphitheatre.' },
  { id: 'FN-6', title: 'Research Paper Submission Deadline Extended', date: 'Aug 10, 2026', tag: 'Research', priority: 'high', author: 'Research & Innovation Cell', content: 'Deadline for IEEE conference paper submissions has been extended to Sep 15, 2026.' },
];

export const TeacherNoticesPage = () => {
  const [showCompose, setShowCompose] = useState(false);
  const [published, setPublished] = useState(false);
  const [filter, setFilter] = useState('All');

  const categories = ['All', 'Examination', 'Academic', 'Workshop', 'Administrative', 'Research', 'Facilities'];
  const filtered = filter === 'All' ? allNotices : allNotices.filter((n) => n.tag === filter);

  const handlePublish = () => {
    setPublished(true);
    setTimeout(() => { setPublished(false); setShowCompose(false); }, 1500);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.75rem' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '1rem' }}>
        <div>
          <h2>Notices & Announcements</h2>
          <p>View university notices and publish department announcements</p>
        </div>
        <Button variant="primary" onClick={() => setShowCompose(true)}>📢 Post New Notice</Button>
      </div>

      <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
        {categories.map((cat) => (
          <button key={cat} onClick={() => setFilter(cat)} className={`btn ${filter === cat ? 'btn-primary' : 'btn-secondary'} btn-sm`}>{cat}</button>
        ))}
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
        {filtered.map((notice) => (
          <Card key={notice.id} hoverable>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <Badge variant={notice.priority === 'high' ? 'amber' : 'gray'}>{notice.tag}</Badge>
                {notice.priority === 'high' && <Badge variant="amber">High Priority</Badge>}
              </div>
              <span style={{ fontSize: '0.8125rem', color: 'var(--text-subtle)' }}>{notice.date}</span>
            </div>
            <h3 style={{ fontSize: '1.1rem', marginBottom: '0.35rem' }}>{notice.title}</h3>
            {notice.content && (
              <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)', lineHeight: 1.5, marginBottom: '0.5rem' }}>{notice.content}</p>
            )}
            {notice.author && (
              <span style={{ fontSize: '0.75rem', color: 'var(--text-subtle)', fontStyle: 'italic' }}>Published by: {notice.author}</span>
            )}
          </Card>
        ))}
      </div>

      <Modal isOpen={showCompose} onClose={() => setShowCompose(false)} title="Post New Notice"
        footer={<><Button variant="secondary" onClick={() => setShowCompose(false)}>Cancel</Button><Button variant="primary" onClick={handlePublish}>Publish Notice</Button></>}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <div><label style={{ fontSize: '0.8125rem', fontWeight: 600, display: 'block', marginBottom: '0.2rem' }}>Notice Title</label><input type="text" className="form-input" placeholder="e.g. DSA Mid-Semester Exam Date Announced" /></div>
          <div><label style={{ fontSize: '0.8125rem', fontWeight: 600, display: 'block', marginBottom: '0.2rem' }}>Category</label>
            <select className="form-input"><option>Academic</option><option>Examination</option><option>Workshop</option><option>Administrative</option></select>
          </div>
          <div><label style={{ fontSize: '0.8125rem', fontWeight: 600, display: 'block', marginBottom: '0.2rem' }}>Notice Content</label>
            <textarea className="form-input" rows="4" placeholder="Write the full notice content here..." style={{ resize: 'vertical', minHeight: '100px' }}></textarea>
          </div>
          <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.875rem', cursor: 'pointer' }}>
            <input type="checkbox" style={{ accentColor: 'var(--primary-600)' }} /> Send email notification to all students
          </label>
          {published && <div style={{ padding: '0.75rem', backgroundColor: '#d1fae5', color: '#065f46', borderRadius: 'var(--radius-md)', textAlign: 'center', fontSize: '0.875rem', fontWeight: 600 }}>✅ Notice published successfully!</div>}
        </div>
      </Modal>
    </div>
  );
};
