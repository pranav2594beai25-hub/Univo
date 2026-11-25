import React from 'react';
import {
  IconCourses,
  IconClock,
  IconAward,
  IconBell,
  IconCalendar,
  IconUser
} from '../common/Icons';

export const LandingFeatures = () => {
  const universityServices = [
    {
      icon: IconCourses,
      title: "Academics & Courses",
      desc: "Access course materials, syllabus progress, credit summaries, and lecture notes in one structured space.",
      badge: "Core"
    },
    {
      icon: IconClock,
      title: "Attendance Tracking",
      desc: "Monitor live attendance percentages across all enrolled subjects with proactive low-attendance warnings.",
      badge: "Analytics"
    },
    {
      icon: IconAward,
      title: "Assignment Portal",
      desc: "Submit assignments digitally, track grading rubrics, and never miss a submission deadline with smart alerts.",
      badge: "Submissions"
    },
    {
      icon: IconBell,
      title: "Real-Time Notices",
      desc: "Instant departmental notifications, exam schedules, and circulars sorted by priority and urgency.",
      badge: "Broadcasts"
    },
    {
      icon: IconCalendar,
      title: "Campus Events & Clubs",
      desc: "Discover hackathons, guest lectures, cultural fests, and sports leagues with one-tap registration.",
      badge: "Campus Life"
    },
    {
      icon: IconCourses,
      title: "Digital Library",
      desc: "Search catalog books, reserve e-resources, renew issued titles, and book quiet study rooms online.",
      badge: "Library"
    },
    {
      icon: IconUser,
      title: "Hostel & Amenities",
      desc: "Submit maintenance requests, apply for leave gate passes, and view daily hostel mess menus effortlessly.",
      badge: "Residence"
    },
    {
      icon: IconAward,
      title: "Career & Placements",
      desc: "Apply to campus recruitment drives, build ATS-friendly resumes, and track interview schedules.",
      badge: "Careers"
    }
  ];

  return (
    <section className="features-section" id="features">
      <div className="section-header">
        <span className="section-tag">Unified University Infrastructure</span>
        <h2 className="section-title">Everything campus life requires, simplified.</h2>
        <p style={{ color: 'var(--text-muted)' }}>
          Replace fragmented portals, physical notice boards, and scattered emails with one cohesive digital ecosystem.
        </p>
      </div>

      <div className="features-grid" id="modules">
        {universityServices.map((service, idx) => {
          const Icon = service.icon;
          return (
            <div key={idx} className="feature-card">
              <div className="feature-icon-box">
                <Icon size={24} />
              </div>
              <h3 className="feature-title">{service.title}</h3>
              <p className="feature-desc">{service.desc}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
};
