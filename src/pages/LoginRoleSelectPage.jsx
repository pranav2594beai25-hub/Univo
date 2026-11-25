import React, { useState } from 'react';
import { Button } from '../components/common/Button';
import { Badge } from '../components/common/Badge';
import { IconStudent, IconTeacher, IconArrowLeft, IconChevronRight } from '../components/common/Icons';
import '../styles/login.css';

export const LoginRoleSelectPage = ({ onBackHome, onSelectRole }) => {
  const [selectedRole, setSelectedRole] = useState(null);

  const handleContinue = (role) => {
    setSelectedRole(role);
    if (onSelectRole) {
      onSelectRole(role);
    }
  };

  return (
    <div className="login-selection-container animate-fade-in">
      <div className="login-bg-glow" />

      {/* Top Header with Back to Home Button */}
      <header className="login-top-bar">
        <button className="back-home-btn" onClick={onBackHome}>
          <IconArrowLeft size={16} /> ← Back to Home
        </button>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <div className="landing-logo-badge" style={{ width: '32px', height: '32px', fontSize: '1rem' }}>U</div>
          <span className="landing-logo-text" style={{ fontSize: '1.1rem' }}>UNIVO</span>
        </div>
      </header>

      {/* Main Content Box */}
      <main className="login-content-box">
        <div className="login-header-section">
          <div className="login-brand-icon">U</div>
          <h1 className="login-welcome-title">Welcome to Univo 👋</h1>
          <p className="login-subtitle">How would you like to continue?</p>
        </div>

        {/* Two Large Role Cards Grid */}
        <div className="role-cards-grid">
          {/* Card 1: Student */}
          <div
            className={`role-card ${selectedRole === 'student' ? 'selected' : ''}`}
            onClick={() => handleContinue('student')}
          >
            <div className="role-icon-box student">
              <IconStudent size={36} />
            </div>

            <div className="role-title-row">
              <h2 className="role-card-title">Student</h2>
              <Badge variant="blue">Learner</Badge>
            </div>

            <p className="role-desc">
              Access your registered courses, view attendance metrics, check daily timetables, submit assignments, and stay updated with campus notices.
            </p>

            <div className="role-action-btn">
              <Button
                variant="primary"
                size="lg"
                className="role-action-btn"
                onClick={(e) => {
                  e.stopPropagation();
                  handleContinue('student');
                }}
              >
                Continue as Student <IconChevronRight size={18} />
              </Button>
            </div>
          </div>

          {/* Card 2: Teacher */}
          <div
            className={`role-card ${selectedRole === 'teacher' ? 'selected' : ''}`}
            onClick={() => handleContinue('teacher')}
          >
            <div className="role-icon-box teacher">
              <IconTeacher size={36} />
            </div>

            <div className="role-title-row">
              <h2 className="role-card-title">Teacher</h2>
              <Badge variant="purple">Faculty</Badge>
            </div>

            <p className="role-desc">
              Manage course modules, record class attendance, grade digital assignments, broadcast official notices, and track student performance.
            </p>

            <div className="role-action-btn">
              <Button
                variant="primary"
                size="lg"
                className="role-action-btn"
                onClick={(e) => {
                  e.stopPropagation();
                  handleContinue('teacher');
                }}
              >
                Continue as Teacher <IconChevronRight size={18} />
              </Button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};
