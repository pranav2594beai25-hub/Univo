import React from 'react';

export const LandingStats = () => {
  return (
    <section className="stats-banner" id="stats">
      <div className="stats-container">
        <div>
          <div className="stat-num">50,000+</div>
          <div className="stat-desc">Active Student Users</div>
        </div>
        <div>
          <div className="stat-num">99.9%</div>
          <div className="stat-desc">Platform Uptime</div>
        </div>
        <div>
          <div className="stat-num">15+</div>
          <div className="stat-desc">University Campus Deployments</div>
        </div>
        <div>
          <div className="stat-num">2.5M+</div>
          <div className="stat-desc">Assignments & Notices Served</div>
        </div>
      </div>
    </section>
  );
};
