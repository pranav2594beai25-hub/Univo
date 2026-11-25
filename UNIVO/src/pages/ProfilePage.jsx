import React from 'react';
import { Card } from '../components/common/Card';
import { Badge } from '../components/common/Badge';
import { mockUser } from '../data/mockUser';

export const ProfilePage = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
      <div>
        <h2>Student Digital Identity</h2>
        <p>Verified University Student Information & Academic Status</p>
      </div>

      <div className="grid-2">
        {/* Digital ID Card */}
        <Card>
          <div style={{
            background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)',
            color: 'white',
            borderRadius: 'var(--radius-lg)',
            padding: '1.75rem',
            boxShadow: 'var(--shadow-md)',
            position: 'relative',
            overflow: 'hidden'
          }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1.5rem' }}>
              <div>
                <span style={{ fontSize: '0.75rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: '#94a3b8' }}>
                  UNIVO DIGITAL STUDENT CARD
                </span>
                <h3 style={{ color: 'white', fontSize: '1.35rem', marginTop: '0.2rem' }}>{mockUser.name}</h3>
              </div>
              <Badge variant="blue">ACTIVE STUDENT</Badge>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', fontSize: '0.85rem' }}>
              <div>
                <span style={{ color: '#94a3b8', fontSize: '0.75rem' }}>Roll Number</span>
                <p style={{ fontWeight: 600, color: 'white' }}>{mockUser.rollNo}</p>
              </div>
              <div>
                <span style={{ color: '#94a3b8', fontSize: '0.75rem' }}>Program</span>
                <p style={{ fontWeight: 600, color: 'white' }}>Semester {mockUser.semester}</p>
              </div>
              <div>
                <span style={{ color: '#94a3b8', fontSize: '0.75rem' }}>Department</span>
                <p style={{ fontWeight: 600, color: 'white' }}>Engineering</p>
              </div>
              <div>
                <span style={{ color: '#94a3b8', fontSize: '0.75rem' }}>Student ID</span>
                <p style={{ fontWeight: 600, color: 'white' }}>{mockUser.id}</p>
              </div>
            </div>
          </div>
        </Card>

        {/* Academic Performance Overview */}
        <Card title="Academic Summary">
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginTop: '0.5rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', paddingBottom: '0.5rem', borderBottom: '1px solid var(--border-light)' }}>
              <span style={{ color: 'var(--text-subtle)', fontSize: '0.9rem' }}>Cumulative GPA</span>
              <span style={{ fontWeight: 700, fontSize: '0.95rem' }}>{mockUser.stats.gpa}</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', paddingBottom: '0.5rem', borderBottom: '1px solid var(--border-light)' }}>
              <span style={{ color: 'var(--text-subtle)', fontSize: '0.9rem' }}>Overall Attendance</span>
              <span style={{ fontWeight: 700, fontSize: '0.95rem', color: 'var(--accent-emerald)' }}>{mockUser.stats.attendance}</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', paddingBottom: '0.5rem', borderBottom: '1px solid var(--border-light)' }}>
              <span style={{ color: 'var(--text-subtle)', fontSize: '0.9rem' }}>Completed Credits</span>
              <span style={{ fontWeight: 700, fontSize: '0.95rem' }}>{mockUser.stats.completedCredits} / 120</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <span style={{ color: 'var(--text-subtle)', fontSize: '0.9rem' }}>Institutional Email</span>
              <span style={{ fontWeight: 600, fontSize: '0.85rem', color: 'var(--primary-600)' }}>{mockUser.email}</span>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};
