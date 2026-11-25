import React from 'react';

export const LandingFooter = ({ onOpenPortal, onScrollTo }) => {
  return (
    <footer className="landing-footer" id="about">
      <div className="footer-inner">
        <div className="footer-brand">
          <div className="landing-logo" onClick={() => onScrollTo && onScrollTo('hero')}>
            <div className="landing-logo-badge">U</div>
            <span className="landing-logo-text">UNIVO</span>
          </div>
          <p>
            The unified campus operating system designed for modern university academic, administrative, and student life excellence.
          </p>
        </div>

        <div>
          <h4 className="footer-col-title">Platform Modules</h4>
          <ul className="footer-links">
            <li><a href="#features" onClick={(e) => { e.preventDefault(); onScrollTo('features'); }}>Academics & Attendance</a></li>
            <li><a href="#features" onClick={(e) => { e.preventDefault(); onScrollTo('features'); }}>Digital Assignments</a></li>
            <li><a href="#features" onClick={(e) => { e.preventDefault(); onScrollTo('features'); }}>Notices & Events</a></li>
            <li><a href="#features" onClick={(e) => { e.preventDefault(); onScrollTo('features'); }}>Hostel & Library</a></li>
          </ul>
        </div>

        <div>
          <h4 className="footer-col-title">University Services</h4>
          <ul className="footer-links">
            <li><a href="#portal" onClick={(e) => { e.preventDefault(); onOpenPortal(); }}>Student Portal</a></li>
            <li><a href="#portal" onClick={(e) => { e.preventDefault(); onOpenPortal(); }}>Faculty Gateway</a></li>
            <li><a href="#portal" onClick={(e) => { e.preventDefault(); onOpenPortal(); }}>Placement Cell</a></li>
            <li><a href="#portal" onClick={(e) => { e.preventDefault(); onOpenPortal(); }}>Campus Helpdesk</a></li>
          </ul>
        </div>

        <div>
          <h4 className="footer-col-title">Evaluation Project</h4>
          <ul className="footer-links">
            <li><span style={{ fontSize: '0.875rem', color: 'var(--text-muted)' }}>3rd Semester Frontend Eval</span></li>
            <li><span style={{ fontSize: '0.875rem', color: 'var(--text-muted)' }}>React JS & Vanilla CSS</span></li>
            <li><span style={{ fontSize: '0.875rem', color: 'var(--text-muted)' }}>No External DB / Pure Frontend</span></li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <span>&copy; {new Date().getFullYear()} Univo Campus Platform. All rights reserved.</span>
        <span>Built with React & Vanilla CSS</span>
      </div>
    </footer>
  );
};
