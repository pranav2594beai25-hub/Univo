import React, { useState } from 'react';
import { Card } from '../components/common/Card';
import { StatCard } from '../components/common/StatCard';
import { Badge } from '../components/common/Badge';
import { Button } from '../components/common/Button';
import { IconLibrary, IconClock, IconAward } from '../components/common/Icons';
import { mockIssuedBooks, mockEResources, mockFines } from '../data/mockLibrary';

export const LibraryPage = () => {
  const [renewedBooks, setRenewedBooks] = useState({});
  const [selectedSlot, setSelectedSlot] = useState('');
  const [podReserved, setPodReserved] = useState(false);

  const handleRenew = (bookId) => {
    setRenewedBooks((prev) => ({ ...prev, [bookId]: true }));
  };

  const handleReservePod = () => {
    if (selectedSlot) {
      setPodReserved(true);
      setTimeout(() => setPodReserved(false), 3000);
    }
  };

  const activeBooks = mockIssuedBooks.filter((b) => b.status !== 'Returned').length;

  const getStatusBadgeVariant = (status) => {
    switch (status) {
      case 'Due Soon': return 'amber';
      case 'Overdue': return 'amber';
      case 'Active': return 'blue';
      case 'Returned': return 'emerald';
      default: return 'gray';
    }
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.75rem' }}>
      {/* Page Header */}
      <div>
        <h2>Digital Library Services</h2>
        <p>Issued books tracker, e-resource catalog, and quiet study room reservations</p>
      </div>

      {/* Stat Cards */}
      <div className="grid-3">
        <StatCard
          label="Books Currently Issued"
          value={`${activeBooks} Books`}
          trend={`${mockIssuedBooks.length} total this semester`}
          icon={IconLibrary}
          color="blue"
        />
        <StatCard
          label="Overdue / Fines"
          value={mockFines.totalFine}
          trend={`${mockFines.pendingBooks} book overdue`}
          icon={IconClock}
          color="amber"
        />
        <StatCard
          label="E-Resources Available"
          value={`${mockEResources.length} Platforms`}
          trend="Full campus proxy access"
          icon={IconAward}
          color="emerald"
        />
      </div>

      {/* Overdue Warning */}
      {mockFines.pendingBooks > 0 && (
        <div style={{
          backgroundColor: '#fef2f2',
          border: '1px solid #fecaca',
          borderRadius: 'var(--radius-lg)',
          padding: '1rem 1.5rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '1rem',
          flexWrap: 'wrap'
        }}>
          <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center' }}>
            <span style={{ fontSize: '1.5rem' }}>📕</span>
            <div>
              <h4 style={{ fontSize: '0.95rem', fontWeight: 600, color: '#991b1b' }}>
                Overdue Book: Database System Concepts
              </h4>
              <p style={{ fontSize: '0.85rem', color: '#b91c1c', marginTop: '2px' }}>
                Due date was Aug 10, 2026. Fine accruing at ₹10/day. Please return or renew immediately.
              </p>
            </div>
          </div>
          <Button variant="outline" size="sm" onClick={() => alert('Renewal request sent for overdue book')}>
            Request Renewal
          </Button>
        </div>
      )}

      {/* Main Grid: Books + E-Resources/Study */}
      <div className="grid-2">
        {/* Left: Issued Books */}
        <Card title="Issued Books Tracker" subtitle="Physical library book records">
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginTop: '0.5rem' }}>
            {mockIssuedBooks.map((book) => {
              const isRenewed = renewedBooks[book.id];
              return (
                <div
                  key={book.id}
                  style={{
                    padding: '1rem 1.25rem',
                    border: '1px solid var(--border-light)',
                    borderRadius: 'var(--radius-md)',
                    borderLeft: `4px solid ${book.coverColor}`,
                    backgroundColor: book.status === 'Overdue' ? '#fef2f2' : 'var(--bg-card)'
                  }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.3rem' }}>
                    <h4 style={{ fontSize: '0.9375rem', fontWeight: 600, flex: 1, paddingRight: '0.5rem' }}>{book.title}</h4>
                    <Badge variant={getStatusBadgeVariant(book.status)}>
                      {isRenewed ? 'Renewed ✓' : book.status}
                    </Badge>
                  </div>
                  <p style={{ fontSize: '0.8125rem', color: 'var(--text-subtle)' }}>
                    Author: {book.author}
                  </p>
                  <p style={{ fontSize: '0.75rem', color: 'var(--text-subtle)', marginTop: '0.15rem' }}>
                    ISBN: {book.isbn} • {book.department}
                  </p>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '0.625rem', fontSize: '0.75rem', color: 'var(--text-subtle)' }}>
                    <span>Issued: {book.issueDate}</span>
                    <span>Due: <strong style={{
                      color: book.status === 'Overdue' ? 'var(--accent-rose)' :
                             book.status === 'Due Soon' ? 'var(--accent-amber)' : 'var(--text-main)'
                    }}>{book.dueDate}</strong></span>
                  </div>
                  {book.status !== 'Returned' && !isRenewed && (
                    <Button variant="outline" size="sm" style={{ marginTop: '0.625rem' }} onClick={() => handleRenew(book.id)}>
                      Renew Book
                    </Button>
                  )}
                </div>
              );
            })}
          </div>
        </Card>

        {/* Right Column: E-Resources + Study Room */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          {/* E-Resource Access */}
          <Card title="E-Resource Access" subtitle="Institutional research portals">
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginTop: '0.5rem' }}>
              {mockEResources.map((res) => (
                <div key={res.id} style={{
                  padding: '1rem',
                  backgroundColor: 'var(--bg-subtle)',
                  borderRadius: 'var(--radius-md)',
                  border: '1px solid var(--border-light)'
                }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.3rem' }}>
                    <h4 style={{ fontSize: '0.9375rem', fontWeight: 600 }}>{res.name}</h4>
                    <Badge variant={res.accessLevel === 'Full' ? 'emerald' : 'amber'}>
                      {res.accessLevel} Access
                    </Badge>
                  </div>
                  <p style={{ fontSize: '0.8125rem', color: 'var(--text-muted)', marginBottom: '0.625rem', lineHeight: 1.4 }}>
                    {res.description}
                  </p>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <Badge variant="gray">{res.type}</Badge>
                    <Button variant="secondary" size="sm" onClick={() => alert(`Launching ${res.name} portal...`)}>
                      Launch Portal
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </Card>

          {/* Study Room Booking */}
          <Card title="Study Room Booking" subtitle="Central Library 3rd Floor pods">
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginTop: '0.5rem' }}>
              <div style={{ padding: '0.875rem 1rem', backgroundColor: '#ecfdf5', borderRadius: 'var(--radius-md)', border: '1px solid #a7f3d0' }}>
                <span style={{ fontSize: '0.85rem', color: '#065f46', fontWeight: 500 }}>
                  🟢 3 pods available today • 2-hour max session
                </span>
              </div>

              <div>
                <label style={{ fontSize: '0.8125rem', fontWeight: 600, display: 'block', marginBottom: '0.3rem' }}>Select Date</label>
                <input type="date" className="form-input" defaultValue="2026-08-16" />
              </div>

              <div>
                <label style={{ fontSize: '0.8125rem', fontWeight: 600, display: 'block', marginBottom: '0.3rem' }}>Preferred Time Slot</label>
                <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                  {['Morning (9-11 AM)', 'Afternoon (1-3 PM)', 'Evening (4-6 PM)'].map((slot) => (
                    <button
                      key={slot}
                      onClick={() => setSelectedSlot(slot)}
                      className={`btn ${selectedSlot === slot ? 'btn-primary' : 'btn-secondary'} btn-sm`}
                    >
                      {slot}
                    </button>
                  ))}
                </div>
              </div>

              <Button variant="primary" onClick={handleReservePod} disabled={!selectedSlot}>
                Reserve Study Pod
              </Button>

              {podReserved && (
                <div style={{ padding: '0.75rem', backgroundColor: '#d1fae5', color: '#065f46', borderRadius: 'var(--radius-md)', textAlign: 'center', fontSize: '0.875rem', fontWeight: 600 }}>
                  ✅ Study pod reserved for {selectedSlot} today!
                </div>
              )}
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};
