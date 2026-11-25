import React from 'react';
import { LandingNavbar } from '../components/landing/LandingNavbar';
import { LandingHero } from '../components/landing/LandingHero';
import { LandingFeatures } from '../components/landing/LandingFeatures';
import { LandingStats } from '../components/landing/LandingStats';
import { LandingFooter } from '../components/landing/LandingFooter';
import { Button } from '../components/common/Button';
import '../styles/landing.css';

export const LandingPage = ({ onOpenPortal }) => {
  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="landing-container">
      {/* Top Navbar with TOP RIGHT Login button */}
      <LandingNavbar
        onOpenPortal={onOpenPortal}
        onScrollTo={scrollToSection}
      />

      {/* Hero Section */}
      <LandingHero
        onOpenPortal={onOpenPortal}
        onExploreModules={() => scrollToSection('features')}
      />

      {/* Features Showcase Grid */}
      <LandingFeatures />

      {/* Stats Social Proof Banner */}
      <LandingStats />

      {/* Primary Callout Banner */}
      <section className="landing-cta-section">
        <div className="cta-box">
          <h2>Ready to experience Univo?</h2>
          <p>
            Join thousands of students and faculty members managing their entire campus journey on one unified platform.
          </p>
          <Button variant="secondary" size="lg" onClick={onOpenPortal}>
            Launch Student Portal
          </Button>
        </div>
      </section>

      {/* Clean Footer */}
      <LandingFooter
        onOpenPortal={onOpenPortal}
        onScrollTo={scrollToSection}
      />
    </div>
  );
};
