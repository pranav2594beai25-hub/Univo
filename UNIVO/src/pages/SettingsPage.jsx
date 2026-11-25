import React, { useState } from 'react';
import { Card } from '../components/common/Card';
import { Badge } from '../components/common/Badge';
import { Button } from '../components/common/Button';
import { mockUser } from '../data/mockUser';

export const SettingsPage = () => {
  const [displayDensity, setDisplayDensity] = useState('comfortable');
  const [profileSaved, setProfileSaved] = useState(false);
  const [passwordSaved, setPasswordSaved] = useState(false);
  const [prefsSaved, setPrefsSaved] = useState(false);

  const handleProfileSave = () => {
    setProfileSaved(true);
    setTimeout(() => setProfileSaved(false), 2500);
  };

  const handlePasswordSave = () => {
    setPasswordSaved(true);
    setTimeout(() => setPasswordSaved(false), 2500);
  };

  const handlePrefsSave = () => {
    setPrefsSaved(true);
    setTimeout(() => setPrefsSaved(false), 2500);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.75rem' }}>
      {/* Page Header */}
      <div>
        <h2>Account & Portal Settings</h2>
        <p>Manage your profile, security credentials, notification preferences, and portal configuration</p>
      </div>

      {/* Profile Overview Card */}
      <Card>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem', flexWrap: 'wrap' }}>
          {/* Avatar */}
          <div style={{
            width: '56px',
            height: '56px',
            borderRadius: 'var(--radius-full)',
            backgroundColor: 'var(--primary-600)',
            color: 'white',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '1.25rem',
            fontWeight: 700,
            flexShrink: 0
          }}>
            {mockUser.avatarInitials}
          </div>

          {/* Info */}
          <div style={{ flex: 1, minWidth: '200px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.2rem' }}>
              <h3 style={{ fontSize: '1.2rem', fontWeight: 700, color: 'var(--text-main)' }}>{mockUser.name}</h3>
              <Badge variant="blue">Semester {mockUser.semester}</Badge>
            </div>
            <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)' }}>
              {mockUser.rollNo} • {mockUser.program}
            </p>
            <p style={{ fontSize: '0.8125rem', color: 'var(--text-subtle)', marginTop: '0.15rem' }}>
              {mockUser.email} • {mockUser.department}
            </p>
          </div>

          {/* Stats Summary */}
          <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap' }}>
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--primary-600)' }}>{mockUser.stats.gpa}</div>
              <div style={{ fontSize: '0.7rem', color: 'var(--text-subtle)', textTransform: 'uppercase', letterSpacing: '0.04em' }}>GPA</div>
            </div>
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--accent-emerald)' }}>{mockUser.stats.attendance}</div>
              <div style={{ fontSize: '0.7rem', color: 'var(--text-subtle)', textTransform: 'uppercase', letterSpacing: '0.04em' }}>Attendance</div>
            </div>
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--accent-purple)' }}>{mockUser.stats.completedCredits}</div>
              <div style={{ fontSize: '0.7rem', color: 'var(--text-subtle)', textTransform: 'uppercase', letterSpacing: '0.04em' }}>Credits</div>
            </div>
          </div>
        </div>
      </Card>

      {/* Settings Grid: 2x2 */}
      <div className="grid-2">
        {/* Profile Information */}
        <Card title="Profile Information" subtitle="Update your personal details">
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginTop: '0.5rem' }}>
            <div>
              <label style={{ fontSize: '0.8125rem', fontWeight: 600, display: 'block', marginBottom: '0.2rem' }}>Full Name</label>
              <input type="text" className="form-input" defaultValue={mockUser.name} />
            </div>
            <div>
              <label style={{ fontSize: '0.8125rem', fontWeight: 600, display: 'block', marginBottom: '0.2rem' }}>University Email</label>
              <input type="email" className="form-input" defaultValue={mockUser.email} disabled style={{ opacity: 0.6, cursor: 'not-allowed' }} />
            </div>
            <div>
              <label style={{ fontSize: '0.8125rem', fontWeight: 600, display: 'block', marginBottom: '0.2rem' }}>Department</label>
              <input type="text" className="form-input" defaultValue={mockUser.department} disabled style={{ opacity: 0.6, cursor: 'not-allowed' }} />
            </div>
            <div>
              <label style={{ fontSize: '0.8125rem', fontWeight: 600, display: 'block', marginBottom: '0.2rem' }}>Phone Number</label>
              <input type="tel" className="form-input" placeholder="Enter your phone number" />
            </div>
            <Button variant="primary" onClick={handleProfileSave}>
              Update Profile
            </Button>
            {profileSaved && (
              <div style={{ padding: '0.5rem', backgroundColor: '#d1fae5', color: '#065f46', borderRadius: 'var(--radius-md)', textAlign: 'center', fontSize: '0.8125rem', fontWeight: 600 }}>
                ✅ Profile updated successfully!
              </div>
            )}
          </div>
        </Card>

        {/* Security & Credentials */}
        <Card title="Security & Credentials" subtitle="Change your login password">
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginTop: '0.5rem' }}>
            <div>
              <label style={{ fontSize: '0.8125rem', fontWeight: 600, display: 'block', marginBottom: '0.2rem' }}>Current Password</label>
              <input type="password" className="form-input" placeholder="Enter current password" />
            </div>
            <div>
              <label style={{ fontSize: '0.8125rem', fontWeight: 600, display: 'block', marginBottom: '0.2rem' }}>New Password</label>
              <input type="password" className="form-input" placeholder="Enter new password" />
            </div>
            <div>
              <label style={{ fontSize: '0.8125rem', fontWeight: 600, display: 'block', marginBottom: '0.2rem' }}>Confirm New Password</label>
              <input type="password" className="form-input" placeholder="Re-enter new password" />
            </div>
            <Button variant="primary" onClick={handlePasswordSave}>
              Update Password
            </Button>
            {passwordSaved && (
              <div style={{ padding: '0.5rem', backgroundColor: '#d1fae5', color: '#065f46', borderRadius: 'var(--radius-md)', textAlign: 'center', fontSize: '0.8125rem', fontWeight: 600 }}>
                ✅ Password updated successfully!
              </div>
            )}
          </div>
        </Card>

        {/* Notification Preferences */}
        <Card title="Notification Preferences" subtitle="Control which alerts you receive">
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.875rem', marginTop: '0.5rem' }}>
            {[
              { label: 'Low Attendance Alerts (below 75%)', defaultChecked: true },
              { label: 'Assignment Deadline Reminders', defaultChecked: true },
              { label: 'New Campus Notices & Announcements', defaultChecked: true },
              { label: 'Placement Drive Updates', defaultChecked: true },
              { label: 'Library Book Due Date Reminders', defaultChecked: false },
              { label: 'Event Registration Confirmations', defaultChecked: false }
            ].map((pref, idx) => (
              <label
                key={idx}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.75rem',
                  fontSize: '0.875rem',
                  cursor: 'pointer',
                  padding: '0.5rem 0.625rem',
                  borderRadius: 'var(--radius-md)',
                  transition: 'background-color var(--transition-fast)'
                }}
                onMouseOver={(e) => e.currentTarget.style.backgroundColor = 'var(--bg-subtle)'}
                onMouseOut={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
              >
                <input
                  type="checkbox"
                  defaultChecked={pref.defaultChecked}
                  style={{ width: '16px', height: '16px', accentColor: 'var(--primary-600)', cursor: 'pointer' }}
                />
                <span style={{ color: 'var(--text-main)' }}>{pref.label}</span>
              </label>
            ))}
            <Button variant="secondary" onClick={handlePrefsSave}>
              Save Preferences
            </Button>
            {prefsSaved && (
              <div style={{ padding: '0.5rem', backgroundColor: '#d1fae5', color: '#065f46', borderRadius: 'var(--radius-md)', textAlign: 'center', fontSize: '0.8125rem', fontWeight: 600 }}>
                ✅ Notification preferences saved!
              </div>
            )}
          </div>
        </Card>

        {/* Appearance & Account Actions */}
        <Card title="Appearance & Account" subtitle="Display settings and account actions">
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', marginTop: '0.5rem' }}>
            {/* Language */}
            <div>
              <label style={{ fontSize: '0.8125rem', fontWeight: 600, display: 'block', marginBottom: '0.2rem' }}>Language</label>
              <select className="form-input" defaultValue="english">
                <option value="english">English</option>
                <option value="hindi">हिन्दी (Hindi)</option>
                <option value="marathi">मराठी (Marathi)</option>
              </select>
            </div>

            {/* Display Density */}
            <div>
              <label style={{ fontSize: '0.8125rem', fontWeight: 600, display: 'block', marginBottom: '0.5rem' }}>Display Density</label>
              <div style={{ display: 'flex', gap: '0.75rem' }}>
                {['comfortable', 'compact'].map((density) => (
                  <label
                    key={density}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.5rem',
                      fontSize: '0.875rem',
                      cursor: 'pointer',
                      padding: '0.5rem 1rem',
                      borderRadius: 'var(--radius-md)',
                      border: `1px solid ${displayDensity === density ? 'var(--primary-600)' : 'var(--border-light)'}`,
                      backgroundColor: displayDensity === density ? 'var(--primary-50)' : 'transparent',
                      transition: 'all var(--transition-fast)'
                    }}
                  >
                    <input
                      type="radio"
                      name="density"
                      value={density}
                      checked={displayDensity === density}
                      onChange={() => setDisplayDensity(density)}
                      style={{ accentColor: 'var(--primary-600)', cursor: 'pointer' }}
                    />
                    <span style={{
                      textTransform: 'capitalize',
                      fontWeight: displayDensity === density ? 600 : 400,
                      color: displayDensity === density ? 'var(--primary-600)' : 'var(--text-main)'
                    }}>
                      {density}
                    </span>
                  </label>
                ))}
              </div>
            </div>

            {/* Divider */}
            <div style={{ borderTop: '1px solid var(--border-light)', paddingTop: '1rem' }}>
              <span style={{ fontSize: '0.8125rem', fontWeight: 600, color: 'var(--text-subtle)', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                Account Actions
              </span>
            </div>

            {/* Action Buttons */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.625rem' }}>
              <Button variant="outline" onClick={() => alert('Preparing your data export...')}>
                📥 Download My Data
              </Button>
              <button
                onClick={() => alert('Logging out from all devices...')}
                style={{
                  padding: '0.625rem 1.25rem',
                  fontSize: '0.875rem',
                  fontWeight: 500,
                  borderRadius: 'var(--radius-md)',
                  border: '1px solid #fecaca',
                  backgroundColor: '#fef2f2',
                  color: '#b91c1c',
                  cursor: 'pointer',
                  transition: 'all var(--transition-fast)'
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.backgroundColor = '#fee2e2';
                  e.currentTarget.style.borderColor = '#fca5a5';
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.backgroundColor = '#fef2f2';
                  e.currentTarget.style.borderColor = '#fecaca';
                }}
              >
                🔒 Logout from All Devices
              </button>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};
