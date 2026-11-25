import React, { useState } from 'react';
import { Card } from '../components/common/Card';
import { StatCard } from '../components/common/StatCard';
import { Badge } from '../components/common/Badge';
import { Button } from '../components/common/Button';
import { IconPlacements, IconAward, IconClock, IconCalendar } from '../components/common/Icons';
import { mockPlacementDrives, mockPlacementStats, mockUpcomingInterviews } from '../data/mockPlacements';

export const PlacementsPage = () => {
  const [filter, setFilter] = useState('All');
  const [applied, setApplied] = useState({});

  const filteredDrives = filter === 'All'
    ? mockPlacementDrives
    : mockPlacementDrives.filter((job) => job.type === filter);

  const handleApply = (jobId) => {
    setApplied((prev) => ({ ...prev, [jobId]: true }));
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.75rem' }}>
      {/* Page Header */}
      <div>
        <h2>Career & Placement Cell</h2>
        <p>Recruitment drives, interview scheduling, and campus hiring opportunities</p>
      </div>

      {/* Placement Stats */}
      <div className="grid-4">
        <StatCard
          label="Companies Visited"
          value={mockPlacementStats.totalCompanies}
          trend="This academic year"
          icon={IconPlacements}
          color="blue"
        />
        <StatCard
          label="Students Placed"
          value={mockPlacementStats.studentsPlaced}
          trend="2025-26 batch"
          icon={IconAward}
          color="emerald"
        />
        <StatCard
          label="Highest Package"
          value={mockPlacementStats.highestPackage}
          trend="Google India"
          icon={IconAward}
          color="purple"
        />
        <StatCard
          label="Average Package"
          value={mockPlacementStats.averagePackage}
          trend="Across all roles"
          icon={IconClock}
          color="amber"
        />
      </div>

      {/* Upcoming Interviews */}
      {mockUpcomingInterviews.length > 0 && (
        <Card title="Your Upcoming Interviews" subtitle="Scheduled campus placement rounds">
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.875rem', marginTop: '0.5rem' }}>
            {mockUpcomingInterviews.map((interview) => (
              <div
                key={interview.id}
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  padding: '1rem 1.25rem',
                  border: '1px solid var(--border-light)',
                  borderRadius: 'var(--radius-md)',
                  borderLeft: '4px solid var(--accent-purple)',
                  gap: '1rem',
                  flexWrap: 'wrap'
                }}
              >
                <div style={{ flex: 1, minWidth: '200px' }}>
                  <h4 style={{ fontSize: '1rem', fontWeight: 600, color: 'var(--primary-600)', marginBottom: '0.15rem' }}>
                    {interview.company}
                  </h4>
                  <p style={{ fontSize: '0.875rem', color: 'var(--text-main)' }}>{interview.role}</p>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <div style={{ textAlign: 'right', fontSize: '0.8125rem', color: 'var(--text-subtle)' }}>
                    <div style={{ fontWeight: 600 }}>{interview.date}</div>
                    <div>{interview.time}</div>
                  </div>
                  <Badge variant={interview.type === 'Online' ? 'blue' : 'purple'}>
                    {interview.type}
                  </Badge>
                  <Badge variant={interview.status === 'Confirmed' ? 'emerald' : 'amber'}>
                    {interview.status}
                  </Badge>
                </div>
              </div>
            ))}
          </div>
        </Card>
      )}

      {/* Filter Tabs */}
      <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
        {['All', 'Full-Time', 'Internship'].map((type) => (
          <button
            key={type}
            onClick={() => setFilter(type)}
            className={`btn ${filter === type ? 'btn-primary' : 'btn-secondary'} btn-sm`}
          >
            {type} Roles
          </button>
        ))}
      </div>

      {/* Placement Drives List */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
        {filteredDrives.map((job) => {
          const isApplied = applied[job.id];
          return (
            <Card key={job.id} hoverable>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '1rem' }}>
                {/* Left: Job Info */}
                <div style={{ flex: 1, minWidth: '250px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.35rem' }}>
                    <span style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--primary-600)' }}>
                      {job.company}
                    </span>
                    <Badge variant="purple">{job.eligibility}</Badge>
                    <Badge variant={job.type === 'Full-Time' ? 'blue' : 'amber'}>{job.type}</Badge>
                  </div>
                  <h3 style={{ fontSize: '1.15rem', marginBottom: '0.3rem' }}>{job.role}</h3>
                  <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '0.5rem', lineHeight: 1.5 }}>
                    {job.description}
                  </p>
                  <div style={{ fontSize: '0.85rem', color: 'var(--text-subtle)', marginBottom: '0.75rem' }}>
                    💰 <strong>{job.package}</strong> &nbsp;•&nbsp; 📍 {job.location} &nbsp;•&nbsp; 👥 {job.openPositions} positions
                  </div>

                  {/* Skills Tags */}
                  <div style={{ display: 'flex', gap: '0.375rem', flexWrap: 'wrap' }}>
                    {job.skills.map((skill, idx) => (
                      <span key={idx} className="badge badge-gray">{skill}</span>
                    ))}
                  </div>
                </div>

                {/* Right: Deadline + Apply */}
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '0.625rem', minWidth: '160px' }}>
                  <span style={{ fontSize: '0.8125rem', color: 'var(--text-subtle)' }}>
                    Deadline: <strong>{job.deadline}</strong>
                  </span>
                  <Button
                    variant={isApplied ? 'secondary' : 'primary'}
                    size="sm"
                    disabled={isApplied}
                    onClick={() => handleApply(job.id)}
                  >
                    {isApplied ? 'Applied ✓' : 'Apply to Drive'}
                  </Button>
                  {isApplied && (
                    <span style={{ fontSize: '0.75rem', color: 'var(--accent-emerald)', fontWeight: 600 }}>
                      Application submitted
                    </span>
                  )}
                </div>
              </div>
            </Card>
          );
        })}
      </div>
    </div>
  );
};
