import React, { useState } from 'react';
import { Button } from '../components/common/Button';
import { IconArrowLeft, IconEye, IconEyeOff, IconTeacher } from '../components/common/Icons';
import '../styles/login.css';

export const TeacherLoginPage = ({ onBackToRoleSelect, onLoginSuccess }) => {
  const [identifier, setIdentifier] = useState('FAC-1042');
  const [password, setPassword] = useState('faculty123');
  const [showPassword, setShowPassword] = useState(false);
  const [forgotMsg, setForgotMsg] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!identifier.trim() || !password.trim()) {
      alert('Please fill in both your Faculty ID/Email and password.');
      return;
    }
    // Mock login success -> navigate to Teacher Dashboard
    onLoginSuccess();
  };

  return (
    <div className="login-selection-container animate-fade-in">
      <div className="login-bg-glow" style={{ background: 'radial-gradient(circle, rgba(124, 58, 237, 0.12) 0%, rgba(37, 99, 235, 0.05) 50%, rgba(248, 250, 252, 0) 70%)' }} />

      {/* Top Bar with Back to Role Selection Button */}
      <header className="login-top-bar">
        <button className="back-home-btn" onClick={onBackToRoleSelect}>
          <IconArrowLeft size={16} /> ← Back to Role Selection
        </button>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <div className="landing-logo-badge" style={{ width: '32px', height: '32px', fontSize: '1rem', background: 'linear-gradient(135deg, var(--accent-purple), var(--primary-600))' }}>U</div>
          <span className="landing-logo-text" style={{ fontSize: '1.1rem' }}>UNIVO</span>
        </div>
      </header>

      {/* Form Area */}
      <main className="login-content-box">
        <div className="login-header-section" style={{ marginBottom: '1.75rem' }}>
          <div className="login-brand-icon" style={{ background: 'linear-gradient(135deg, var(--accent-purple), #9333ea)' }}>
            <IconTeacher size={28} color="white" />
          </div>
          <h1 className="login-welcome-title">Welcome back, Faculty 👋</h1>
          <p className="login-subtitle">Enter your faculty credentials to access the teaching portal</p>
        </div>

        <form className="form-card" onSubmit={handleSubmit} style={{ borderTop: '4px solid var(--accent-purple)' }}>
          {/* Faculty ID / Email Field */}
          <div className="form-group">
            <label className="form-label" htmlFor="teacher-id">
              Faculty ID or University Email
            </label>
            <div className="form-input-wrapper">
              <input
                id="teacher-id"
                type="text"
                className="form-input"
                placeholder="e.g. FAC-1042 or ananya.roy@univo.edu"
                value={identifier}
                onChange={(e) => setIdentifier(e.target.value)}
                required
              />
            </div>
          </div>

          {/* Password Field */}
          <div className="form-group">
            <label className="form-label" htmlFor="teacher-password">
              Password
            </label>
            <div className="form-input-wrapper">
              <input
                id="teacher-password"
                type={showPassword ? 'text' : 'password'}
                className="form-input"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <button
                type="button"
                className="password-toggle-btn"
                onClick={() => setShowPassword(!showPassword)}
                aria-label={showPassword ? "Hide password" : "Show password"}
              >
                {showPassword ? <IconEyeOff size={18} /> : <IconEye size={18} />}
              </button>
            </div>
          </div>

          {/* Forgot Password Link */}
          <div className="form-actions-row">
            <span
              className="forgot-password-link"
              style={{ color: 'var(--accent-purple)' }}
              onClick={() => setForgotMsg(true)}
            >
              Forgot password?
            </span>
          </div>

          {forgotMsg && (
            <div style={{ fontSize: '0.8125rem', color: 'var(--accent-amber)', marginBottom: '1rem', padding: '0.5rem', background: '#fffbeb', borderRadius: 'var(--radius-sm)' }}>
              ℹ️ Faculty credential recovery link dispatched to your department email.
            </div>
          )}

          {/* Submit Button */}
          <Button
            variant="primary"
            size="lg"
            type="submit"
            style={{ width: '100%', background: 'linear-gradient(135deg, var(--accent-purple), #9333ea)', borderColor: 'transparent' }}
          >
            Login as Teacher
          </Button>

          {/* Mock Demo Credentials Box */}
          <div className="demo-credentials-hint" style={{ background: '#f3e8ff', color: '#581c87', borderColor: 'rgba(124, 58, 237, 0.2)' }}>
            👩‍🏫 <strong>Faculty Demo:</strong> Pre-filled with mock teacher credentials (<code>FAC-1042</code>). Click "Login as Teacher" to enter dashboard.
          </div>
        </form>
      </main>
    </div>
  );
};
