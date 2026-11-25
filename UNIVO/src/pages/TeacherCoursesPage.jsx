import React, { useState } from 'react';
import { Card } from '../components/common/Card';
import { StatCard } from '../components/common/StatCard';
import { Badge } from '../components/common/Badge';
import { Button } from '../components/common/Button';
import { IconCourses, IconUser, IconAward, IconClock } from '../components/common/Icons';
import { mockTeacher } from '../data/mockTeacher';

const courseDetails = [
  {
    id: 'CS302', code: 'CS302', title: 'Data Structures & Algorithms',
    description: 'Core course covering linear & non-linear data structures, sorting, searching, graph algorithms, and complexity analysis.',
    semester: 3, credits: 4, enrolledStudents: 64,
    schedule: 'Tue, Thu • 09:00 AM - 10:30 AM', room: 'Auditorium 2',
    progress: { completed: 6, total: 14 },
    syllabus: ['Arrays & Linked Lists', 'Stacks & Queues', 'Trees & BST', 'Heaps & Priority Queues', 'Graph Algorithms', 'Sorting Algorithms', 'Dynamic Programming'],
    completedTopics: ['Arrays & Linked Lists', 'Stacks & Queues', 'Trees & BST'],
    resources: 3, assignments: 4
  },
  {
    id: 'CS305', code: 'CS305', title: 'Advanced Algorithm Design',
    description: 'Elective course on advanced algorithmic paradigms: greedy methods, divide & conquer, network flow, and NP-completeness.',
    semester: 3, credits: 3, enrolledStudents: 58,
    schedule: 'Mon, Wed • 02:00 PM - 03:30 PM', room: 'Lab 2, Block C',
    progress: { completed: 5, total: 14 },
    syllabus: ['Greedy Algorithms', 'Divide & Conquer', 'Backtracking', 'Network Flow', 'String Matching', 'NP-Completeness'],
    completedTopics: ['Greedy Algorithms', 'Divide & Conquer'],
    resources: 2, assignments: 3
  },
  {
    id: 'CS310', code: 'CS310', title: 'Data Structures Practical Lab',
    description: 'Hands-on lab course implementing core data structures in C/C++ with performance benchmarking and code reviews.',
    semester: 3, credits: 2, enrolledStudents: 58,
    schedule: 'Fri • 10:00 AM - 01:00 PM', room: 'Lab 4, Block C',
    progress: { completed: 6, total: 14 },
    syllabus: ['Array Operations Lab', 'Linked List Implementation', 'Stack & Queue Lab', 'BST Operations', 'Graph Traversal Lab', 'Sorting Benchmark'],
    completedTopics: ['Array Operations Lab', 'Linked List Implementation', 'Stack & Queue Lab'],
    resources: 5, assignments: 6
  }
];

export const TeacherCoursesPage = () => {
  const [expandedCourse, setExpandedCourse] = useState(null);

  const totalStudents = courseDetails.reduce((sum, c) => sum + c.enrolledStudents, 0);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.75rem' }}>
      <div>
        <h2>Course Management</h2>
        <p>Manage your assigned courses, syllabus progress, and course materials</p>
      </div>

      <div className="grid-4">
        <StatCard label="Active Courses" value={courseDetails.length} trend="This semester" icon={IconCourses} color="purple" />
        <StatCard label="Total Students" value={totalStudents} trend="Across all courses" icon={IconUser} color="blue" />
        <StatCard label="Avg Progress" value="40%" trend="Syllabus covered" icon={IconClock} color="amber" />
        <StatCard label="Total Credits" value="9 Credits" trend="Teaching load" icon={IconAward} color="emerald" />
      </div>

      {/* Course Cards */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
        {courseDetails.map((course) => {
          const isExpanded = expandedCourse === course.id;
          const progressPercent = Math.round((course.progress.completed / course.progress.total) * 100);

          return (
            <Card key={course.id} hoverable>
              {/* Course Header */}
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '1rem' }}>
                <div style={{ flex: 1, minWidth: '250px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.35rem' }}>
                    <span style={{ fontSize: '0.8125rem', fontWeight: 700, color: 'var(--accent-purple)' }}>{course.code}</span>
                    <Badge variant="blue">{course.credits} Credits</Badge>
                    <Badge variant="purple">{course.enrolledStudents} Students</Badge>
                  </div>
                  <h3 style={{ fontSize: '1.15rem', marginBottom: '0.3rem' }}>{course.title}</h3>
                  <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '0.5rem', lineHeight: 1.4 }}>{course.description}</p>
                  <div style={{ fontSize: '0.8125rem', color: 'var(--text-subtle)' }}>
                    🕐 {course.schedule} &nbsp;•&nbsp; 📍 {course.room}
                  </div>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '0.5rem', minWidth: '140px' }}>
                  <div style={{ textAlign: 'right' }}>
                    <span style={{ fontSize: '1.5rem', fontWeight: 700, color: 'var(--primary-600)' }}>{progressPercent}%</span>
                    <span style={{ display: 'block', fontSize: '0.75rem', color: 'var(--text-subtle)' }}>Week {course.progress.completed} of {course.progress.total}</span>
                  </div>
                  <Button variant="outline" size="sm" onClick={() => setExpandedCourse(isExpanded ? null : course.id)}>
                    {isExpanded ? 'Collapse' : 'View Syllabus'}
                  </Button>
                </div>
              </div>

              {/* Progress Bar */}
              <div style={{ marginTop: '1rem' }}>
                <div style={{ width: '100%', backgroundColor: 'var(--bg-subtle)', height: '8px', borderRadius: '4px', overflow: 'hidden' }}>
                  <div style={{ width: `${progressPercent}%`, backgroundColor: 'var(--accent-purple)', height: '100%', transition: 'width 0.3s ease' }} />
                </div>
              </div>

              {/* Quick Stats Row */}
              <div style={{ display: 'flex', gap: '2rem', marginTop: '1rem', fontSize: '0.8125rem', color: 'var(--text-subtle)' }}>
                <span>📝 {course.assignments} Assignments</span>
                <span>📁 {course.resources} Resources Uploaded</span>
                <span>📊 Semester {course.semester}</span>
              </div>

              {/* Expanded Syllabus */}
              {isExpanded && (
                <div style={{ marginTop: '1.25rem', padding: '1.25rem', backgroundColor: 'var(--bg-subtle)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-light)' }}>
                  <h4 style={{ fontSize: '0.9rem', fontWeight: 600, marginBottom: '0.75rem', color: 'var(--text-main)' }}>
                    Syllabus Checklist
                  </h4>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                    {course.syllabus.map((topic, idx) => {
                      const isCompleted = course.completedTopics.includes(topic);
                      return (
                        <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '0.625rem', fontSize: '0.875rem' }}>
                          <span style={{
                            width: '20px', height: '20px', borderRadius: '4px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.75rem',
                            backgroundColor: isCompleted ? '#d1fae5' : 'var(--bg-card)',
                            border: isCompleted ? '1px solid #a7f3d0' : '1px solid var(--border-light)',
                            color: isCompleted ? '#065f46' : 'var(--text-subtle)'
                          }}>
                            {isCompleted ? '✓' : idx + 1}
                          </span>
                          <span style={{
                            color: isCompleted ? 'var(--text-muted)' : 'var(--text-main)',
                            textDecoration: isCompleted ? 'line-through' : 'none'
                          }}>
                            {topic}
                          </span>
                          {isCompleted && <Badge variant="emerald">Done</Badge>}
                        </div>
                      );
                    })}
                  </div>
                  <div style={{ display: 'flex', gap: '0.5rem', marginTop: '1rem' }}>
                    <Button variant="primary" size="sm" onClick={() => alert(`Uploading materials for ${course.code}`)}>Upload Resource</Button>
                    <Button variant="secondary" size="sm" onClick={() => alert(`Creating assignment for ${course.code}`)}>Create Assignment</Button>
                  </div>
                </div>
              )}
            </Card>
          );
        })}
      </div>
    </div>
  );
};
