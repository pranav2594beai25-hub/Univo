import React from 'react';
import { Button } from '../common/Button';
import { IconChevronRight } from '../common/Icons';
import { mockUser } from '../../data/mockUser';

export const LandingHero = ({ onOpenPortal, onExploreModules }) => {
  return (
    <section className="hero-section" id="hero">
      <div className="hero-bg-glow" />

      {/* Pill Badge */}
      <div className="hero-pill-badge">
        <span style={{ display: 'inline-block', width: '8px', height: '8px', borderRadius: '50%', backgroundColor: 'var(--primary-600)' }}></span>
        UNIVO 2.0 • Unified Campus Operating System
      </div>

      {/* Hero Headline */}
      <h1 className="hero-headline">
        One platform for your <br />
        <span className="gradient-text">entire university life.</span>
      </h1>

      {/* Short Description */}
      <p className="hero-subtitle">
        Univo seamlessly unifies academics, attendance, assignments, campus notices, events, digital library, hostel services, and career placements into one intuitive, student-first platform.
      </p>

      {/* Primary & Secondary CTAs */}
      <div className="hero-actions">
        <Button variant="primary" size="lg" onClick={onOpenPortal}>
          Launch Student Portal <IconChevronRight size={18} />
        </Button>
        <Button variant="secondary" size="lg" onClick={onExploreModules}>
          Explore University Services
        </Button>
      </div>

      {/* Interactive Hero Showcase Mockup */}
      <div className="hero-mockup-wrapper" onClick={onOpenPortal} style={{ cursor: 'pointer' }}>
        <div className="mockup-top-bar">
          <div className="mockup-dot red" />
          <div className="mockup-dot yellow" />
          <div className="mockup-dot green" />
          <div className="mockup-address">portal.univo.edu/student/dashboard</div>
        </div>

        {/* Live UI Mockup Preview */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', textAlign: 'left' }}>
          {/* Banner inside preview */}
          <div style={{
            background: 'linear-gradient(135deg, #1e3a8a 0%, #2563eb 100%)',
            color: 'white',
            borderRadius: 'var(--radius-lg)',
            padding: '1.25rem 1.5rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between'
          }}>
            <div>
              <h3 style={{ color: 'white', fontSize: '1.25rem' }}>Welcome back, {mockUser.name}!</h3>
              <p style={{ color: '#dbeafe', fontSize: '0.85rem' }}>{mockUser.program} • Semester {mockUser.semester}</p>
            </div>
            <span style={{
              background: 'rgba(255, 255, 255, 0.2)',
              backdropFilter: 'blur(4px)',
              padding: '0.4rem 0.875rem',
              borderRadius: 'var(--radius-full)',
              fontSize: '0.8125rem',
              fontWeight: 600
            }}>
              Interactive Live Demo
            </span>
          </div>

          {/* Stat Cards inside preview */}
          <div className="grid-4">
            <div style={{ padding: '1rem', background: '#f8fafc', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-light)' }}>
              <span style={{ fontSize: '0.75rem', color: 'var(--text-subtle)' }}>GPA</span>
              <p style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--text-main)' }}>3.85 / 4.0</p>
            </div>
            <div style={{ padding: '1rem', background: '#f8fafc', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-light)' }}>
              <span style={{ fontSize: '0.75rem', color: 'var(--text-subtle)' }}>Attendance</span>
              <p style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--accent-emerald)' }}>94.2%</p>
            </div>
            <div style={{ padding: '1rem', background: '#f8fafc', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-light)' }}>
              <span style={{ fontSize: '0.75rem', color: 'var(--text-subtle)' }}>Active Courses</span>
              <p style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--primary-600)' }}>6 Modules</p>
            </div>
            <div style={{ padding: '1rem', background: '#f8fafc', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-light)' }}>
              <span style={{ fontSize: '0.75rem', color: 'var(--text-subtle)' }}>Next Class</span>
              <p style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--accent-purple)' }}>10:45 AM</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
