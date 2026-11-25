import React, { useState } from 'react';
import { Card } from '../components/common/Card';
import { StatCard } from '../components/common/StatCard';
import { Badge } from '../components/common/Badge';
import { Button } from '../components/common/Button';
import { IconUser, IconClock, IconAward, IconSearch } from '../components/common/Icons';

const allStudents = [
  { id: 'STU-001', name: 'Aarav Sharma', rollNo: '22BCS042', course: 'CS302', email: 'aarav.sharma@univo.edu', attendance: '94.2%', gpa: '3.85', status: 'Regular' },
  { id: 'STU-002', name: 'Rohan Mehta', rollNo: '22BCS015', course: 'CS302', email: 'rohan.mehta@univo.edu', attendance: '88.5%', gpa: '3.62', status: 'Regular' },
  { id: 'STU-003', name: 'Priya Patel', rollNo: '22BCS038', course: 'CS302', email: 'priya.patel@univo.edu', attendance: '91.0%', gpa: '3.90', status: 'Regular' },
  { id: 'STU-004', name: 'Vikram Malhotra', rollNo: '22BCS018', course: 'CS302', email: 'vikram.m@univo.edu', attendance: '68.5%', gpa: '2.95', status: 'At Risk' },
  { id: 'STU-005', name: 'Neha Gupta', rollNo: '22BCS027', course: 'CS305', email: 'neha.gupta@univo.edu', attendance: '71.0%', gpa: '3.10', status: 'At Risk' },
  { id: 'STU-006', name: 'Shruti Iyer', rollNo: '22BCS033', course: 'CS310', email: 'shruti.iyer@univo.edu', attendance: '66.7%', gpa: '2.80', status: 'At Risk' },
  { id: 'STU-007', name: 'Ankit Joshi', rollNo: '22BCS045', course: 'CS302', email: 'ankit.joshi@univo.edu', attendance: '73.5%', gpa: '3.25', status: 'Warning' },
  { id: 'STU-008', name: 'Pooja Nair', rollNo: '22BCS051', course: 'CS305', email: 'pooja.nair@univo.edu', attendance: '72.0%', gpa: '3.15', status: 'Warning' },
  { id: 'STU-009', name: 'Deepak Verma', rollNo: '22BCS011', course: 'CS310', email: 'deepak.v@univo.edu', attendance: '69.8%', gpa: '2.88', status: 'At Risk' },
  { id: 'STU-010', name: 'Megha Kapoor', rollNo: '22BCS029', course: 'CS302', email: 'megha.k@univo.edu', attendance: '96.0%', gpa: '3.95', status: 'Regular' },
  { id: 'STU-011', name: 'Aditya Singh', rollNo: '22BCS006', course: 'CS305', email: 'aditya.s@univo.edu', attendance: '89.2%', gpa: '3.70', status: 'Regular' },
  { id: 'STU-012', name: 'Kavya Reddy', rollNo: '22BCS021', course: 'CS310', email: 'kavya.r@univo.edu', attendance: '85.5%', gpa: '3.50', status: 'Regular' },
];

export const TeacherMyStudentsPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [courseFilter, setCourseFilter] = useState('All');
  const [statusFilter, setStatusFilter] = useState('All');

  const filtered = allStudents.filter((s) => {
    const matchSearch = s.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                        s.rollNo.toLowerCase().includes(searchTerm.toLowerCase());
    const matchCourse = courseFilter === 'All' || s.course === courseFilter;
    const matchStatus = statusFilter === 'All' || s.status === statusFilter;
    return matchSearch && matchCourse && matchStatus;
  });

  const atRiskCount = allStudents.filter((s) => s.status === 'At Risk' || s.status === 'Warning').length;

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.75rem' }}>
      <div>
        <h2>My Students</h2>
        <p>Complete roster of students across your assigned courses</p>
      </div>

      <div className="grid-3">
        <StatCard label="Total Students" value={allStudents.length} trend="Across 3 courses" icon={IconUser} color="purple" />
        <StatCard label="At Risk Students" value={atRiskCount} trend="Below 75% attendance" icon={IconClock} color="amber" />
        <StatCard label="Average GPA" value="3.39" trend="Batch performance" icon={IconAward} color="emerald" />
      </div>

      {/* Filters */}
      <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', alignItems: 'center' }}>
        <div className="search-bar" style={{ maxWidth: '280px' }}>
          <span className="search-icon"><IconSearch size={16} /></span>
          <input className="search-input" placeholder="Search by name or roll no..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
        </div>
        <div style={{ display: 'flex', gap: '0.5rem' }}>
          {['All', 'CS302', 'CS305', 'CS310'].map((c) => (
            <button key={c} onClick={() => setCourseFilter(c)} className={`btn ${courseFilter === c ? 'btn-primary' : 'btn-secondary'} btn-sm`}>{c}</button>
          ))}
        </div>
        <div style={{ display: 'flex', gap: '0.5rem' }}>
          {['All', 'Regular', 'Warning', 'At Risk'].map((s) => (
            <button key={s} onClick={() => setStatusFilter(s)} className={`btn ${statusFilter === s ? 'btn-primary' : 'btn-secondary'} btn-sm`}>{s}</button>
          ))}
        </div>
      </div>

      {/* Student Table */}
      <Card>
        {/* Header Row */}
        <div style={{
          display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr 1fr 1fr 1fr',
          gap: '0.75rem', padding: '0.75rem 1rem',
          backgroundColor: 'var(--bg-subtle)', borderRadius: 'var(--radius-md)',
          fontSize: '0.75rem', fontWeight: 600, color: 'var(--text-subtle)',
          textTransform: 'uppercase', letterSpacing: '0.04em'
        }}>
          <span>Student</span><span>Roll No</span><span>Course</span><span>Attendance</span><span>GPA</span><span>Status</span><span>Action</span>
        </div>

        {filtered.map((student) => (
          <div key={student.id} style={{
            display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr 1fr 1fr 1fr',
            gap: '0.75rem', padding: '0.875rem 1rem',
            borderBottom: '1px solid var(--border-light)',
            alignItems: 'center', fontSize: '0.875rem'
          }}>
            <div>
              <span style={{ fontWeight: 600, color: 'var(--text-main)' }}>{student.name}</span>
              <span style={{ display: 'block', fontSize: '0.75rem', color: 'var(--text-subtle)' }}>{student.email}</span>
            </div>
            <span style={{ color: 'var(--text-muted)' }}>{student.rollNo}</span>
            <Badge variant="blue">{student.course}</Badge>
            <span style={{
              fontWeight: 600,
              color: parseFloat(student.attendance) < 75 ? 'var(--accent-rose)' : 'var(--accent-emerald)'
            }}>{student.attendance}</span>
            <span style={{ fontWeight: 600 }}>{student.gpa}</span>
            <Badge variant={student.status === 'Regular' ? 'emerald' : student.status === 'Warning' ? 'amber' : 'amber'}>
              {student.status}
            </Badge>
            <Button variant="outline" size="sm" onClick={() => alert(`Viewing profile: ${student.name}`)}>View</Button>
          </div>
        ))}

        {filtered.length === 0 && (
          <div style={{ padding: '2rem', textAlign: 'center', color: 'var(--text-subtle)' }}>
            No students match your filters.
          </div>
        )}
      </Card>
    </div>
  );
};
