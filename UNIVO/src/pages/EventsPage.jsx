import React, { useState } from 'react';
import { Card } from '../components/common/Card';
import { StatCard } from '../components/common/StatCard';
import { Badge } from '../components/common/Badge';
import { Button } from '../components/common/Button';
import { IconCalendar, IconAward, IconClock } from '../components/common/Icons';
import { mockEvents } from '../data/mockEvents';

export const EventsPage = () => {
  const [filter, setFilter] = useState('All');
  const [registered, setRegistered] = useState({});
  const categories = ['All', 'Hackathon', 'Seminar', 'Sports', 'Cultural', 'Workshop', 'Club'];

  const filteredEvents = filter === 'All'
    ? mockEvents
    : mockEvents.filter((evt) => evt.category === filter);

  const registeredCount = Object.keys(registered).length;

  const handleRegister = (id) => {
    setRegistered((prev) => ({ ...prev, [id]: true }));
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.75rem' }}>
      {/* Page Header */}
      <div>
        <h2>Campus Events & Activities</h2>
        <p>Discover hackathons, guest lectures, sports tournaments, cultural fests, and club activities</p>
      </div>

      {/* Stat Cards */}
      <div className="grid-3">
        <StatCard
          label="Upcoming Events"
          value={mockEvents.length}
          trend="This semester"
          icon={IconCalendar}
          color="purple"
        />
        <StatCard
          label="Your Registrations"
          value={registeredCount}
          trend={registeredCount > 0 ? 'Events joined' : 'Register below'}
          icon={IconAward}
          color="emerald"
        />
        <StatCard
          label="This Week"
          value="2 Events"
          trend="Aug 16 - Aug 22"
          icon={IconClock}
          color="blue"
        />
      </div>

      {/* Category Filter Tabs */}
      <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={`btn ${filter === cat ? 'btn-primary' : 'btn-secondary'} btn-sm`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Events Grid */}
      <div className="grid-2">
        {filteredEvents.map((evt) => {
          const isReg = registered[evt.id];
          const capacityPercent = Math.round((evt.attendees / evt.maxCapacity) * 100);
          return (
            <Card key={evt.id} hoverable>
              {/* Top Row: Category + Attendees */}
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.75rem' }}>
                <Badge variant={
                  evt.category === 'Hackathon' ? 'purple' :
                  evt.category === 'Sports' ? 'emerald' :
                  evt.category === 'Cultural' ? 'amber' :
                  'blue'
                }>
                  {evt.category}
                </Badge>
                <span style={{ fontSize: '0.8125rem', fontWeight: 600, color: 'var(--text-subtle)' }}>
                  {evt.attendees} / {evt.maxCapacity} Attending
                </span>
              </div>

              {/* Event Title & Description */}
              <h3 style={{ fontSize: '1.15rem', fontWeight: 600, marginBottom: '0.35rem' }}>{evt.title}</h3>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '0.875rem', lineHeight: 1.5 }}>
                {evt.description}
              </p>

              {/* Date, Time, Location */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.35rem', fontSize: '0.8125rem', color: 'var(--text-subtle)', marginBottom: '0.75rem' }}>
                <div>🗓️ {evt.date} ({evt.time})</div>
                <div>📍 {evt.location}</div>
                <div>🏢 Organized by: <strong>{evt.organizer}</strong></div>
              </div>

              {/* Capacity Progress Bar */}
              <div style={{ marginBottom: '0.875rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.7rem', color: 'var(--text-subtle)', marginBottom: '0.25rem' }}>
                  <span>Capacity filled</span>
                  <span>{capacityPercent}%</span>
                </div>
                <div style={{ width: '100%', backgroundColor: 'var(--bg-subtle)', height: '5px', borderRadius: '3px', overflow: 'hidden' }}>
                  <div style={{
                    width: `${capacityPercent}%`,
                    backgroundColor: capacityPercent > 80 ? 'var(--accent-amber)' : 'var(--accent-emerald)',
                    height: '100%'
                  }} />
                </div>
              </div>

              {/* Tags */}
              <div style={{ display: 'flex', gap: '0.375rem', flexWrap: 'wrap', marginBottom: '1rem' }}>
                {evt.tags.map((tag, idx) => (
                  <span key={idx} className="badge badge-gray">{tag}</span>
                ))}
              </div>

              {/* Bottom: Status + Action */}
              <div style={{ borderTop: '1px solid var(--border-light)', paddingTop: '0.875rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div>
                  <Badge variant={isReg ? 'emerald' : evt.status === 'Registration Open' ? 'purple' : 'blue'}>
                    {isReg ? 'Registered ✓' : evt.status}
                  </Badge>
                  <span style={{ fontSize: '0.7rem', color: 'var(--text-subtle)', marginLeft: '0.5rem' }}>
                    Deadline: {evt.registrationDeadline}
                  </span>
                </div>
                <Button
                  variant={isReg ? 'secondary' : 'primary'}
                  size="sm"
                  disabled={isReg}
                  onClick={() => handleRegister(evt.id)}
                >
                  {isReg ? 'Registered ✓' : 'Register Now'}
                </Button>
              </div>
            </Card>
          );
        })}
      </div>
    </div>
  );
};
