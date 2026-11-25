import React from 'react';
import { Button } from '../common/Button';

export const LandingNavbar = ({ onOpenPortal, onScrollTo }) => {
  return (
    <header className="landing-navbar">
      <div className="landing-nav-inner">
        {/* Brand Logo */}
        <div className="landing-logo" onClick={() => onScrollTo && onScrollTo('hero')}>
          <div className="landing-logo-badge">U</div>
          <span className="landing-logo-text">UNIVO</span>
        </div>

        {/* Navigation Links */}
        <ul className="landing-nav-links">
          <li>
            <button className="landing-nav-link" onClick={() => onScrollTo && onScrollTo('features')}>
              Features
            </button>
          </li>
          <li>
            <button className="landing-nav-link" onClick={() => onScrollTo && onScrollTo('modules')}>
              University Services
            </button>
          </li>
          <li>
            <button className="landing-nav-link" onClick={() => onScrollTo && onScrollTo('stats')}>
              Impact
            </button>
          </li>
          <li>
            <button className="landing-nav-link" onClick={() => onScrollTo && onScrollTo('about')}>
              About Univo
            </button>
          </li>
        </ul>

        {/* Top Right Corner Login / Portal Access Button */}
        <div>
          <Button variant="primary" onClick={onOpenPortal}>
            Student / Faculty Login
          </Button>
        </div>
      </div>
    </header>
  );
};
