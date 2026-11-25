import React from 'react';
import { Button } from '../common/Button';
import { mockUser } from '../../data/mockUser';

export const StudentProfileHeader = ({ onNavigate }) => {
  return (
    <div style={{
      background: 'linear-gradient(135deg, #1e3a8a 0%, #2563eb 100%)',
      color: 'white',
      borderRadius: 'var(--radius-xl)',
      padding: '1.75rem 2rem',
      display: 'flex',
      alignItems: 'center',
      justify: 'space-between',
      boxShadow: 'var(--shadow-md)',
      flexWrap: 'wrap',
      gap: '1rem'
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem' }}>
        <div style={{
          width: '56px',
          height: '56px',
          borderRadius: '50%',
          background: 'rgba(255, 255, 255, 0.2)',
          backdropFilter: 'blur(4px)',
          border: '2px solid rgba(255, 255, 255, 0.4)',
          display: 'flex',
          alignItems: 'center',
          justify: 'center',
          fontSize: '1.35rem',
          fontWeight: 700,
          color: 'white'
        }}>
          {mockUser.avatarInitials}
        </div>
        <div>
          <h1 style={{ color: 'white', fontSize: '1.65rem', marginBottom: '0.2rem', lineHeight: 1.2 }}>
            Welcome back, {mockUser.name}! 👋
          </h1>
          <p style={{ color: '#dbeafe', fontSize: '0.9375rem' }}>
            Roll No: <strong>{mockUser.rollNo}</strong> • Semester {mockUser.semester} • {mockUser.program}
          </p>
        </div>
      </div>

      <div style={{ display: 'flex', gap: '0.75rem' }}>
        <Button variant="secondary" onClick={() => onNavigate('profile')}>
          View Student ID
        </Button>
      </div>
    </div>
  );
};
