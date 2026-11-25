import React from 'react';
import { Card } from '../components/common/Card';
import { StatCard } from '../components/common/StatCard';
import { Badge } from '../components/common/Badge';
import { Button } from '../components/common/Button';
import { IconClock, IconAward, IconChevronRight } from '../components/common/Icons';

export const AttendancePage = () => {
  const overallAttendance = "94.2%";

  const subjectsData = [
    {
      code: "CS301",
      name: "Web Technology & Frontend Systems",
      faculty: "Prof. Rajesh Verma",
      attended: 24,
      total: 25,
      percentage: 96.0,
      status: "Safe",
      badgeVariant: "emerald",
      recentLogs: [
        { date: "Aug 15, 2026", time: "10:45 AM", status: "Present" },
        { date: "Aug 13, 2026", time: "10:45 AM", status: "Present" },
        { date: "Aug 11, 2026", time: "10:45 AM", status: "Present" }
      ]
    },
    {
      code: "CS302",
      name: "Data Structures & Algorithms",
      faculty: "Dr. Ananya Roy",
      attended: 22,
      total: 24,
      percentage: 91.6,
      status: "Safe",
      badgeVariant: "emerald",
      recentLogs: [
        { date: "Aug 16, 2026", time: "09:00 AM", status: "Present" },
        { date: "Aug 14, 2026", time: "09:00 AM", status: "Absent" },
        { date: "Aug 12, 2026", time: "09:00 AM", status: "Present" }
      ]
    },
    {
      code: "CS303",
      name: "Database Management Systems",
      faculty: "Prof. Michael Sterling",
      attended: 15,
      total: 20,
      percentage: 72.5,
      status: "Warning",
      badgeVariant: "amber",
      recentLogs: [
        { date: "Aug 14, 2026", time: "01:30 PM", status: "Absent" },
        { date: "Aug 10, 2026", time: "01:30 PM", status: "Present" },
        { date: "Aug 07, 2026", time: "01:30 PM", status: "Present" }
      ]
    },
    {
      code: "CS304",
      name: "Software Engineering & Agile Methods",
      faculty: "Dr. Sunita Kulkarni",
      attended: 18,
      total: 20,
      percentage: 90.0,
      status: "Safe",
      badgeVariant: "emerald",
      recentLogs: [
        { date: "Aug 15, 2026", time: "11:30 AM", status: "Present" },
        { date: "Aug 13, 2026", time: "11:30 AM", status: "Present" },
        { date: "Aug 08, 2026", time: "11:30 AM", status: "Medical Leave" }
      ]
    }
  ];

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.75rem' }}>
      {/* Header Banner */}
      <div>
        <h2>Attendance Tracking Portal</h2>
        <p>Monitor subject-wise attendance percentages, threshold warnings, and daily class logs</p>
      </div>

      {/* Top Metric Cards */}
      <div className="grid-3">
        <StatCard
          label="Overall Cumulative Attendance"
          value={overallAttendance}
          trend="Above 75% Academic Requirement"
          icon={IconClock}
          color="emerald"
        />
        <StatCard
          label="Total Classes Attended"
          value="79 / 89 Sessions"
          trend="10 Absence Records"
          icon={IconAward}
          color="blue"
        />
        <StatCard
          label="Subjects at Risk"
          value="1 Subject Warning"
          trend="DBMS (CS303) at 72.5%"
          icon={IconClock}
          color="amber"
        />
      </div>

      {/* Warning Notice Banner if any subject < 75% */}
      <div style={{
        backgroundColor: '#fffbeb',
        border: '1px solid #fde68a',
        borderRadius: 'var(--radius-lg)',
        padding: '1.25rem 1.5rem',
        display: 'flex',
        alignItems: 'center',
        justify: 'space-between',
        gap: '1rem'
      }}>
        <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center' }}>
          <span style={{ fontSize: '1.5rem' }}>⚠️</span>
          <div>
            <h4 style={{ fontSize: '0.95rem', fontWeight: 600, color: '#92400e' }}>
              Attendance Alert: Database Management Systems (CS303)
            </h4>
            <p style={{ fontSize: '0.85rem', color: '#b45309', marginTop: '2px' }}>
              Your attendance is currently 72.5%. Attend the next 3 consecutive lectures to cross the 75% threshold.
            </p>
          </div>
        </div>
        <Button variant="outline" size="sm" onClick={() => alert('Medical leave / condonation application submitted')}>
          Apply Condonation
        </Button>
      </div>

      {/* Subject Wise Cards Grid */}
      <div className="grid-2">
        {subjectsData.map((subject) => {
          const isWarning = subject.status === "Warning";
          return (
            <Card key={subject.code} hoverable>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.75rem' }}>
                <div>
                  <span style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--primary-600)' }}>
                    {subject.code}
                  </span>
                  <h3 style={{ fontSize: '1.1rem', marginTop: '0.1rem' }}>{subject.name}</h3>
                  <p style={{ fontSize: '0.8125rem', color: 'var(--text-subtle)' }}>Faculty: {subject.faculty}</p>
                </div>
                <Badge variant={subject.badgeVariant}>
                  {subject.percentage}% ({subject.attended}/{subject.total})
                </Badge>
              </div>

              {/* Progress Bar */}
              <div style={{ width: '100%', backgroundColor: 'var(--bg-subtle)', height: '8px', borderRadius: '4px', overflow: 'hidden', margin: '0.75rem 0' }}>
                <div
                  style={{
                    width: `${subject.percentage}%`,
                    backgroundColor: isWarning ? 'var(--accent-amber)' : 'var(--accent-emerald)',
                    height: '100%'
                  }}
                />
              </div>

              {/* Recent Attendance Logs */}
              <div style={{ borderTop: '1px solid var(--border-light)', paddingTop: '0.75rem', marginTop: '0.75rem' }}>
                <span style={{ fontSize: '0.75rem', fontWeight: 600, color: 'var(--text-subtle)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                  Recent Class Logs
                </span>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.35rem', marginTop: '0.35rem' }}>
                  {subject.recentLogs.map((log, idx) => (
                    <div key={idx} style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.8125rem', color: 'var(--text-muted)' }}>
                      <span>{log.date} ({log.time})</span>
                      <span style={{
                        fontWeight: 600,
                        color: log.status === 'Present' ? 'var(--accent-emerald)' : log.status === 'Absent' ? 'var(--accent-rose)' : 'var(--accent-purple)'
                      }}>
                        {log.status}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </Card>
          );
        })}
      </div>
    </div>
  );
};
