import React, { useState } from 'react';
import { Card } from '../components/common/Card';
import { Badge } from '../components/common/Badge';
import { Button } from '../components/common/Button';
import { mockTeacher } from '../data/mockTeacher';

export const TeacherSettingsPage = () => {
  const [profileSaved, setProfileSaved] = useState(false);
  const [passwordSaved, setPasswordSaved] = useState(false);
  const [prefsSaved, setPrefsSaved] = useState(false);

  const handleProfileSave = () => { setProfileSaved(true); setTimeout(() => setProfileSaved(false), 2500); };
  const handlePasswordSave = () => { setPasswordSaved(true); setTimeout(() => setPasswordSaved(false), 2500); };
  const handlePrefsSave = () => { setPrefsSaved(true); setTimeout(() => setPrefsSaved(false), 2500); };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.75rem' }}>
      <div>
        <h2>Account Settings</h2>
        <p>Manage your faculty profile, security credentials, and portal preferences</p>
      </div>

      {/* Profile Overview */}
      <Card>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem', flexWrap: 'wrap' }}>
          <div style={{
            width: '56px', height: '56px', borderRadius: 'var(--radius-full)',
            backgroundColor: '#7c3aed', color: 'white',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontSize: '1.25rem', fontWeight: 700, flexShrink: 0
          }}>{mockTeacher.avatarInitials}</div>
          <div style={{ flex: 1, minWidth: '200px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.2rem' }}>
              <h3 style={{ fontSize: '1.2rem', fontWeight: 700 }}>{mockTeacher.name}</h3>
              <Badge variant="purple">Faculty</Badge>
            </div>
            <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)' }}>{mockTeacher.title} • {mockTeacher.department}</p>
            <p style={{ fontSize: '0.8125rem', color: 'var(--text-subtle)', marginTop: '0.15rem' }}>{mockTeacher.email} • Office: {mockTeacher.office}</p>
          </div>
          <div style={{ display: 'flex', gap: '1.5rem' }}>
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--accent-purple)' }}>{mockTeacher.stats.activeCourses}</div>
              <div style={{ fontSize: '0.7rem', color: 'var(--text-subtle)', textTransform: 'uppercase' }}>Courses</div>
            </div>
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--primary-600)' }}>{mockTeacher.stats.totalStudents}</div>
              <div style={{ fontSize: '0.7rem', color: 'var(--text-subtle)', textTransform: 'uppercase' }}>Students</div>
            </div>
          </div>
        </div>
      </Card>

      <div className="grid-2">
        {/* Profile Information */}
        <Card title="Profile Information" subtitle="Update your personal and academic details">
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginTop: '0.5rem' }}>
            <div><label style={{ fontSize: '0.8125rem', fontWeight: 600, display: 'block', marginBottom: '0.2rem' }}>Full Name</label><input type="text" className="form-input" defaultValue={mockTeacher.name} /></div>
            <div><label style={{ fontSize: '0.8125rem', fontWeight: 600, display: 'block', marginBottom: '0.2rem' }}>University Email</label><input type="email" className="form-input" defaultValue={mockTeacher.email} disabled style={{ opacity: 0.6, cursor: 'not-allowed' }} /></div>
            <div><label style={{ fontSize: '0.8125rem', fontWeight: 600, display: 'block', marginBottom: '0.2rem' }}>Office Location</label><input type="text" className="form-input" defaultValue={mockTeacher.office} /></div>
            <div><label style={{ fontSize: '0.8125rem', fontWeight: 600, display: 'block', marginBottom: '0.2rem' }}>Phone Number</label><input type="tel" className="form-input" placeholder="Enter phone number" defaultValue="+91 9876123456" /></div>
            <Button variant="primary" onClick={handleProfileSave}>Update Profile</Button>
            {profileSaved && <div style={{ padding: '0.5rem', backgroundColor: '#d1fae5', color: '#065f46', borderRadius: 'var(--radius-md)', textAlign: 'center', fontSize: '0.8125rem', fontWeight: 600 }}>✅ Profile updated!</div>}
          </div>
        </Card>

        {/* Security */}
        <Card title="Security & Credentials" subtitle="Change your login password">
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginTop: '0.5rem' }}>
            <div><label style={{ fontSize: '0.8125rem', fontWeight: 600, display: 'block', marginBottom: '0.2rem' }}>Current Password</label><input type="password" className="form-input" placeholder="Enter current password" /></div>
            <div><label style={{ fontSize: '0.8125rem', fontWeight: 600, display: 'block', marginBottom: '0.2rem' }}>New Password</label><input type="password" className="form-input" placeholder="Enter new password" /></div>
            <div><label style={{ fontSize: '0.8125rem', fontWeight: 600, display: 'block', marginBottom: '0.2rem' }}>Confirm Password</label><input type="password" className="form-input" placeholder="Re-enter new password" /></div>
            <Button variant="primary" onClick={handlePasswordSave}>Update Password</Button>
            {passwordSaved && <div style={{ padding: '0.5rem', backgroundColor: '#d1fae5', color: '#065f46', borderRadius: 'var(--radius-md)', textAlign: 'center', fontSize: '0.8125rem', fontWeight: 600 }}>✅ Password updated!</div>}
          </div>
        </Card>

        {/* Notification Preferences */}
        <Card title="Notification Preferences" subtitle="Control faculty notification alerts">
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.875rem', marginTop: '0.5rem' }}>
            {[
              { label: 'New Student Submissions', defaultChecked: true },
              { label: 'Low Attendance Alerts (Student < 75%)', defaultChecked: true },
              { label: 'Grade Submission Deadline Reminders', defaultChecked: true },
              { label: 'Faculty Meeting Notifications', defaultChecked: true },
              { label: 'University Policy Updates', defaultChecked: false },
              { label: 'Research Publication Opportunities', defaultChecked: false },
            ].map((pref, idx) => (
              <label key={idx} style={{
                display: 'flex', alignItems: 'center', gap: '0.75rem',
                fontSize: '0.875rem', cursor: 'pointer',
                padding: '0.5rem 0.625rem', borderRadius: 'var(--radius-md)'
              }}
              onMouseOver={(e) => e.currentTarget.style.backgroundColor = 'var(--bg-subtle)'}
              onMouseOut={(e) => e.currentTarget.style.backgroundColor = 'transparent'}>
                <input type="checkbox" defaultChecked={pref.defaultChecked} style={{ width: '16px', height: '16px', accentColor: '#7c3aed', cursor: 'pointer' }} />
                <span>{pref.label}</span>
              </label>
            ))}
            <Button variant="secondary" onClick={handlePrefsSave}>Save Preferences</Button>
            {prefsSaved && <div style={{ padding: '0.5rem', backgroundColor: '#d1fae5', color: '#065f46', borderRadius: 'var(--radius-md)', textAlign: 'center', fontSize: '0.8125rem', fontWeight: 600 }}>✅ Preferences saved!</div>}
          </div>
        </Card>

        {/* Account Actions */}
        <Card title="Account Actions" subtitle="Data and session management">
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginTop: '0.5rem' }}>
            <div><label style={{ fontSize: '0.8125rem', fontWeight: 600, display: 'block', marginBottom: '0.2rem' }}>Language</label>
              <select className="form-input" defaultValue="english"><option value="english">English</option><option value="hindi">हिन्दी (Hindi)</option></select>
            </div>
            <div style={{ borderTop: '1px solid var(--border-light)', paddingTop: '1rem', display: 'flex', flexDirection: 'column', gap: '0.625rem' }}>
              <Button variant="outline" onClick={() => alert('Exporting faculty data...')}>📥 Export My Data</Button>
              <button onClick={() => alert('Logging out...')} style={{
                padding: '0.625rem 1.25rem', fontSize: '0.875rem', fontWeight: 500,
                borderRadius: 'var(--radius-md)', border: '1px solid #fecaca',
                backgroundColor: '#fef2f2', color: '#b91c1c', cursor: 'pointer'
              }}>🔒 Logout from All Devices</button>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};
