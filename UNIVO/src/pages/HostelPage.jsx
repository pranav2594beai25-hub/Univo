import React, { useState } from 'react';
import { Card } from '../components/common/Card';
import { StatCard } from '../components/common/StatCard';
import { Badge } from '../components/common/Badge';
import { Button } from '../components/common/Button';
import { IconHostel, IconClock, IconCalendar } from '../components/common/Icons';
import { mockHostelInfo, mockMessMenu, mockComplaints, mockLeaveHistory } from '../data/mockHostel';

export const HostelPage = () => {
  const [leaveSubmitted, setLeaveSubmitted] = useState(false);
  const [complaintSubmitted, setComplaintSubmitted] = useState(false);
  const dayNames = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
  const todayIndex = new Date().getDay();
  const todayName = todayIndex === 0 ? 'Sunday' : dayNames[todayIndex - 1];
  const [selectedDay, setSelectedDay] = useState(todayName);

  const handleLeaveSubmit = () => {
    setLeaveSubmitted(true);
    setTimeout(() => setLeaveSubmitted(false), 3000);
  };

  const handleNewComplaint = () => {
    setComplaintSubmitted(true);
    setTimeout(() => setComplaintSubmitted(false), 3000);
  };

  const getComplaintBadge = (status) => {
    switch (status) {
      case 'Resolved': return 'emerald';
      case 'In Progress': return 'amber';
      case 'Pending': return 'purple';
      default: return 'gray';
    }
  };

  const getCategoryBadge = (category) => {
    switch (category) {
      case 'Maintenance': return 'blue';
      case 'Electrical': return 'amber';
      case 'Plumbing': return 'purple';
      default: return 'gray';
    }
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.75rem' }}>
      {/* Page Header */}
      <div>
        <h2>Hostel & Residence Portal</h2>
        <p>Room allocation, mess menu, leave pass applications, and maintenance requests</p>
      </div>

      {/* Stat Cards */}
      <div className="grid-3">
        <StatCard
          label="Room Allocation"
          value={`Room ${mockHostelInfo.roomNumber}`}
          trend={`${mockHostelInfo.block} • ${mockHostelInfo.floor}`}
          icon={IconHostel}
          color="blue"
        />
        <StatCard
          label="Mess Subscription"
          value="Active"
          trend={mockHostelInfo.messPlan}
          icon={IconClock}
          color="emerald"
        />
        <StatCard
          label="Monthly Fee"
          value={mockHostelInfo.monthlyFee}
          trend={`Since ${mockHostelInfo.checkInDate}`}
          icon={IconCalendar}
          color="purple"
        />
      </div>

      {/* Main Grid: Room Details + Leave Application */}
      <div className="grid-2">
        {/* Room & Allotment Details */}
        <Card title="Room & Allotment Details" subtitle="Your hostel allocation information">
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0', marginTop: '0.5rem' }}>
            {[
              { label: 'Hostel Block', value: mockHostelInfo.block },
              { label: 'Room Number', value: `Room ${mockHostelInfo.roomNumber} (${mockHostelInfo.roomType})` },
              { label: 'Floor', value: mockHostelInfo.floor },
              { label: 'Warden', value: mockHostelInfo.warden.name },
              { label: 'Warden Contact', value: mockHostelInfo.warden.phone },
              { label: 'Warden Email', value: mockHostelInfo.warden.email },
              { label: 'Check-in Date', value: mockHostelInfo.checkInDate },
              { label: 'Mess Plan', value: mockHostelInfo.messPlan }
            ].map((row, idx) => (
              <div
                key={idx}
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  padding: '0.7rem 0',
                  borderBottom: '1px solid var(--border-light)',
                  fontSize: '0.875rem'
                }}
              >
                <span style={{ color: 'var(--text-subtle)' }}>{row.label}</span>
                <span style={{ fontWeight: 600, color: 'var(--text-main)', textAlign: 'right' }}>{row.value}</span>
              </div>
            ))}
          </div>
        </Card>

        {/* Leave Application */}
        <Card title="Outstation Leave Application" subtitle="Apply for hostel leave pass">
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginTop: '0.5rem' }}>
            <div>
              <label style={{ fontSize: '0.8125rem', fontWeight: 600, display: 'block', marginBottom: '0.2rem' }}>Leave Reason</label>
              <input type="text" className="form-input" placeholder="e.g. Weekend Home Visit" defaultValue="Family Function Visit" />
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem' }}>
              <div>
                <label style={{ fontSize: '0.8125rem', fontWeight: 600, display: 'block', marginBottom: '0.2rem' }}>From Date</label>
                <input type="date" className="form-input" defaultValue="2026-08-22" />
              </div>
              <div>
                <label style={{ fontSize: '0.8125rem', fontWeight: 600, display: 'block', marginBottom: '0.2rem' }}>Return Date</label>
                <input type="date" className="form-input" defaultValue="2026-08-24" />
              </div>
            </div>
            <div>
              <label style={{ fontSize: '0.8125rem', fontWeight: 600, display: 'block', marginBottom: '0.2rem' }}>Guardian Contact</label>
              <input type="tel" className="form-input" placeholder="Guardian phone number" defaultValue="+91 9123456780" />
            </div>
            <Button variant="primary" onClick={handleLeaveSubmit}>
              Submit Leave Pass Application
            </Button>
            {leaveSubmitted && (
              <div style={{ padding: '0.75rem', backgroundColor: '#d1fae5', color: '#065f46', borderRadius: 'var(--radius-md)', textAlign: 'center', fontSize: '0.875rem', fontWeight: 600 }}>
                ✅ Leave pass request submitted to Warden approval queue!
              </div>
            )}
          </div>
        </Card>
      </div>

      {/* Mess Menu + Complaints Grid */}
      <div className="grid-2">
        {/* Mess Menu */}
        <Card title="Mess Menu" subtitle="Weekly dining schedule">
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginTop: '0.5rem' }}>
            {/* Day Selector */}
            <div style={{ display: 'flex', gap: '0.35rem', flexWrap: 'wrap' }}>
              {dayNames.map((day) => (
                <button
                  key={day}
                  onClick={() => setSelectedDay(day)}
                  className={`btn ${selectedDay === day ? 'btn-primary' : 'btn-secondary'} btn-sm`}
                  style={{ fontSize: '0.75rem', padding: '0.3rem 0.6rem' }}
                >
                  {day.slice(0, 3)}
                </button>
              ))}
            </div>

            {/* Selected Day Menu */}
            {mockMessMenu[selectedDay] && (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                {[
                  { emoji: '🌅', label: 'Breakfast', value: mockMessMenu[selectedDay].breakfast },
                  { emoji: '☀️', label: 'Lunch', value: mockMessMenu[selectedDay].lunch },
                  { emoji: '🌙', label: 'Dinner', value: mockMessMenu[selectedDay].dinner }
                ].map((meal, idx) => (
                  <div key={idx} style={{
                    padding: '0.875rem 1rem',
                    backgroundColor: 'var(--bg-subtle)',
                    borderRadius: 'var(--radius-md)',
                    border: '1px solid var(--border-light)'
                  }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.3rem' }}>
                      <span style={{ fontSize: '1.1rem' }}>{meal.emoji}</span>
                      <span style={{ fontSize: '0.8125rem', fontWeight: 700, color: 'var(--primary-600)', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                        {meal.label}
                      </span>
                    </div>
                    <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', lineHeight: 1.5 }}>
                      {meal.value}
                    </p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </Card>

        {/* Maintenance & Complaints */}
        <Card title="Maintenance & Complaints" subtitle="Track your service requests">
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.875rem', marginTop: '0.5rem' }}>
            {mockComplaints.map((complaint) => (
              <div
                key={complaint.id}
                style={{
                  padding: '0.875rem 1rem',
                  border: '1px solid var(--border-light)',
                  borderRadius: 'var(--radius-md)',
                  borderLeft: `3px solid ${
                    complaint.status === 'Resolved' ? 'var(--accent-emerald)' :
                    complaint.status === 'In Progress' ? 'var(--accent-amber)' :
                    'var(--accent-purple)'
                  }`
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.3rem' }}>
                  <h4 style={{ fontSize: '0.9rem', fontWeight: 600, flex: 1 }}>{complaint.title}</h4>
                  <Badge variant={getComplaintBadge(complaint.status)}>{complaint.status}</Badge>
                </div>
                <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginBottom: '0.35rem', lineHeight: 1.4 }}>
                  {complaint.description}
                </p>
                <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center', fontSize: '0.75rem', color: 'var(--text-subtle)' }}>
                  <Badge variant={getCategoryBadge(complaint.category)}>{complaint.category}</Badge>
                  <span>Filed: {complaint.dateSubmitted}</span>
                </div>
              </div>
            ))}

            <Button variant="outline" onClick={handleNewComplaint}>
              + Raise New Complaint
            </Button>

            {complaintSubmitted && (
              <div style={{ padding: '0.75rem', backgroundColor: '#d1fae5', color: '#065f46', borderRadius: 'var(--radius-md)', textAlign: 'center', fontSize: '0.875rem', fontWeight: 600 }}>
                ✅ Complaint registered! Ticket ID: CMP-{Math.floor(Math.random() * 900) + 100}
              </div>
            )}
          </div>
        </Card>
      </div>

      {/* Leave Pass History */}
      <Card title="Leave Pass History" subtitle="Previous approved and pending leave requests">
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0', marginTop: '0.5rem' }}>
          {/* Table Header */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: '2fr 1fr 1fr 1fr 2fr',
            gap: '1rem',
            padding: '0.75rem 1rem',
            backgroundColor: 'var(--bg-subtle)',
            borderRadius: 'var(--radius-md) var(--radius-md) 0 0',
            fontSize: '0.75rem',
            fontWeight: 600,
            color: 'var(--text-subtle)',
            textTransform: 'uppercase',
            letterSpacing: '0.04em'
          }}>
            <span>Reason</span>
            <span>From</span>
            <span>To</span>
            <span>Status</span>
            <span>Approved By</span>
          </div>

          {/* Table Rows */}
          {mockLeaveHistory.map((leave) => (
            <div
              key={leave.id}
              style={{
                display: 'grid',
                gridTemplateColumns: '2fr 1fr 1fr 1fr 2fr',
                gap: '1rem',
                padding: '0.875rem 1rem',
                borderBottom: '1px solid var(--border-light)',
                fontSize: '0.85rem',
                alignItems: 'center'
              }}
            >
              <span style={{ fontWeight: 500, color: 'var(--text-main)' }}>{leave.reason}</span>
              <span style={{ color: 'var(--text-subtle)' }}>{leave.fromDate}</span>
              <span style={{ color: 'var(--text-subtle)' }}>{leave.toDate}</span>
              <Badge variant={leave.status === 'Approved' ? 'emerald' : 'amber'}>{leave.status}</Badge>
              <span style={{ color: 'var(--text-subtle)', fontSize: '0.8rem' }}>{leave.approvedBy}</span>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
};
