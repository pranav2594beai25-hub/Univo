import React, { useState } from 'react';
import { Button } from '../components/common/Button';
import { IconArrowLeft, IconEye, IconEyeOff, IconStudent } from '../components/common/Icons';
import '../styles/login.css';

export const StudentLoginPage = ({ onBackToRoleSelect, onLoginSuccess }) => {
  const [identifier, setIdentifier] = useState('22BCS042');
  const [password, setPassword] = useState('student123');
  const [showPassword, setShowPassword] = useState(false);
  const [forgotMsg, setForgotMsg] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!identifier.trim() || !password.trim()) {
      alert('Please fill in both your Email/Enrollment number and password.');
      return;
    }
    // Mock login success -> navigate to Student Dashboard
    onLoginSuccess();
  };

  return (
    <div className="login-selection-container animate-fade-in">
      <div className="login-bg-glow" />

      {/* Top Bar with Back to Role Selection Button */}
      <header className="login-top-bar">
        <button className="back-home-btn" onClick={onBackToRoleSelect}>
          <IconArrowLeft size={16} /> ← Back to Role Selection
        </button>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <div className="landing-logo-badge" style={{ width: '32px', height: '32px', fontSize: '1rem' }}>U</div>
          <span className="landing-logo-text" style={{ fontSize: '1.1rem' }}>UNIVO</span>
        </div>
      </header>

      {/* Form Area */}
      <main className="login-content-box">
        <div className="login-header-section" style={{ marginBottom: '1.75rem' }}>
          <div className="login-brand-icon" style={{ background: 'linear-gradient(135deg, var(--primary-600), #3b82f6)' }}>
            <IconStudent size={28} color="white" />
          </div>
          <h1 className="login-welcome-title">Welcome back, Student 👋</h1>
          <p className="login-subtitle">Enter your university credentials to access your portal</p>
        </div>

        <form className="form-card" onSubmit={handleSubmit}>
          {/* Email / Enrollment Number Field */}
          <div className="form-group">
            <label className="form-label" htmlFor="student-id">
              Email or Enrollment Number
            </label>
            <div className="form-input-wrapper">
              <input
                id="student-id"
                type="text"
                className="form-input"
                placeholder="e.g. 22BCS042 or aarav@univo.edu"
                value={identifier}
                onChange={(e) => setIdentifier(e.target.value)}
                required
              />
            </div>
          </div>

          {/* Password Field */}
          <div className="form-group">
            <label className="form-label" htmlFor="student-password">
              Password
            </label>
            <div className="form-input-wrapper">
              <input
                id="student-password"
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
              onClick={() => setForgotMsg(true)}
            >
              Forgot password?
            </span>
          </div>

          {forgotMsg && (
            <div style={{ fontSize: '0.8125rem', color: 'var(--accent-amber)', marginBottom: '1rem', padding: '0.5rem', background: '#fffbeb', borderRadius: 'var(--radius-sm)' }}>
              ℹ️ Password reset instructions sent to student portal support.
            </div>
          )}

          {/* Submit Button */}
          <Button variant="primary" size="lg" type="submit" style={{ width: '100%' }}>
            Login as Student
          </Button>

          {/* Mock Demo Credentials Box */}
          <div className="demo-credentials-hint">
            💡 <strong>Evaluation Demo:</strong> Pre-filled with mock student credentials (<code>22BCS042</code>). Click "Login as Student" to continue.
          </div>
        </form>
      </main>
    </div>
  );
};
