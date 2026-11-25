import React from 'react';
import { Card } from '../components/common/Card';
import { StatCard } from '../components/common/StatCard';
import { Badge } from '../components/common/Badge';
import { IconAward, IconUser, IconClock, IconCourses } from '../components/common/Icons';

const coursePerformance = [
  { code: 'CS302', name: 'Data Structures & Algorithms', avgAttendance: '91.2%', avgGrade: 'B+', passRate: '95%', topPerformer: 'Megha Kapoor (96.0%)', enrolledStudents: 64, atRisk: 3 },
  { code: 'CS305', name: 'Advanced Algorithm Design', avgAttendance: '88.4%', avgGrade: 'B', passRate: '90%', topPerformer: 'Aditya Singh (94.5%)', enrolledStudents: 58, atRisk: 2 },
  { code: 'CS310', name: 'Data Structures Practical Lab', avgAttendance: '85.1%', avgGrade: 'B+', passRate: '93%', topPerformer: 'Kavya Reddy (92.0%)', enrolledStudents: 58, atRisk: 2 },
];

const gradeDistribution = [
  { grade: 'A+', count: 12, color: '#059669' },
  { grade: 'A', count: 28, color: '#10b981' },
  { grade: 'B+', count: 35, color: '#3b82f6' },
  { grade: 'B', count: 22, color: '#6366f1' },
  { grade: 'C+', count: 15, color: '#f59e0b' },
  { grade: 'C', count: 8, color: '#ef4444' },
  { grade: 'F', count: 2, color: '#dc2626' },
];

const attendanceTrends = [
  { week: 'Week 1', rate: '95%' },
  { week: 'Week 2', rate: '93%' },
  { week: 'Week 3', rate: '91%' },
  { week: 'Week 4', rate: '94%' },
  { week: 'Week 5', rate: '89%' },
  { week: 'Week 6', rate: '92%' },
];

export const TeacherAnalyticsPage = () => {
  const totalStudents = coursePerformance.reduce((sum, c) => sum + c.enrolledStudents, 0);
  const totalAtRisk = coursePerformance.reduce((sum, c) => sum + c.atRisk, 0);
  const maxGradeCount = Math.max(...gradeDistribution.map((g) => g.count));

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.75rem' }}>
      <div>
        <h2>Academic Analytics</h2>
        <p>Performance insights, attendance trends, and grade distribution across your courses</p>
      </div>

      <div className="grid-4">
        <StatCard label="Total Students" value={totalStudents} trend="Active enrollment" icon={IconUser} color="blue" />
        <StatCard label="Avg Attendance" value="88.2%" trend="Across all courses" icon={IconClock} color="emerald" />
        <StatCard label="Avg Grade" value="B+" trend="Mid-semester average" icon={IconAward} color="purple" />
        <StatCard label="At-Risk Students" value={totalAtRisk} trend="Need attention" icon={IconCourses} color="amber" />
      </div>

      {/* Course Performance Cards */}
      <Card title="Course-Wise Performance" subtitle="Detailed metrics for each assigned course">
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginTop: '0.5rem' }}>
          {coursePerformance.map((course) => (
            <div key={course.code} style={{
              padding: '1.25rem', border: '1px solid var(--border-light)',
              borderRadius: 'var(--radius-lg)', borderLeft: '4px solid var(--accent-purple)'
            }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '1rem' }}>
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.25rem' }}>
                    <Badge variant="blue">{course.code}</Badge>
                    <h4 style={{ fontSize: '1rem', fontWeight: 600 }}>{course.name}</h4>
                  </div>
                  <span style={{ fontSize: '0.8125rem', color: 'var(--text-subtle)' }}>
                    🏆 Top: {course.topPerformer}
                  </span>
                </div>
                <div style={{ display: 'flex', gap: '1.5rem', textAlign: 'center' }}>
                  <div>
                    <div style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--accent-emerald)' }}>{course.avgAttendance}</div>
                    <div style={{ fontSize: '0.7rem', color: 'var(--text-subtle)' }}>Attendance</div>
                  </div>
                  <div>
                    <div style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--primary-600)' }}>{course.avgGrade}</div>
                    <div style={{ fontSize: '0.7rem', color: 'var(--text-subtle)' }}>Avg Grade</div>
                  </div>
                  <div>
                    <div style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--accent-purple)' }}>{course.passRate}</div>
                    <div style={{ fontSize: '0.7rem', color: 'var(--text-subtle)' }}>Pass Rate</div>
                  </div>
                  <div>
                    <div style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--accent-amber)' }}>{course.atRisk}</div>
                    <div style={{ fontSize: '0.7rem', color: 'var(--text-subtle)' }}>At Risk</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Card>

      <div className="grid-2">
        {/* Grade Distribution */}
        <Card title="Grade Distribution" subtitle="Aggregate across all courses">
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.625rem', marginTop: '0.75rem' }}>
            {gradeDistribution.map((g) => (
              <div key={g.grade} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <span style={{ minWidth: '30px', fontSize: '0.875rem', fontWeight: 600, color: 'var(--text-main)' }}>{g.grade}</span>
                <div style={{ flex: 1, backgroundColor: 'var(--bg-subtle)', height: '24px', borderRadius: '4px', overflow: 'hidden', position: 'relative' }}>
                  <div style={{
                    width: `${(g.count / maxGradeCount) * 100}%`,
                    backgroundColor: g.color,
                    height: '100%', borderRadius: '4px',
                    transition: 'width 0.5s ease',
                    display: 'flex', alignItems: 'center', paddingLeft: '0.5rem'
                  }}>
                    <span style={{ fontSize: '0.7rem', fontWeight: 600, color: 'white' }}>{g.count}</span>
                  </div>
                </div>
                <span style={{ minWidth: '45px', fontSize: '0.75rem', color: 'var(--text-subtle)', textAlign: 'right' }}>{g.count} students</span>
              </div>
            ))}
          </div>
        </Card>

        {/* Attendance Trend */}
        <Card title="Weekly Attendance Trend" subtitle="Last 6 weeks">
          <div style={{ display: 'flex', alignItems: 'flex-end', gap: '1rem', marginTop: '1rem', height: '180px', padding: '0 0.5rem' }}>
            {attendanceTrends.map((week) => {
              const rate = parseFloat(week.rate);
              const heightPercent = ((rate - 80) / 20) * 100;
              return (
                <div key={week.week} style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.35rem' }}>
                  <span style={{ fontSize: '0.75rem', fontWeight: 600, color: 'var(--text-main)' }}>{week.rate}</span>
                  <div style={{
                    width: '100%', maxWidth: '48px',
                    height: `${Math.max(heightPercent, 20)}%`,
                    backgroundColor: rate >= 92 ? 'var(--accent-emerald)' : rate >= 90 ? 'var(--primary-600)' : 'var(--accent-amber)',
                    borderRadius: '6px 6px 2px 2px',
                    transition: 'height 0.5s ease'
                  }} />
                  <span style={{ fontSize: '0.65rem', color: 'var(--text-subtle)' }}>{week.week}</span>
                </div>
              );
            })}
          </div>
        </Card>
      </div>
    </div>
  );
};
