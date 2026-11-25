import React, { useState } from 'react';
import { Card } from '../components/common/Card';
import { Badge } from '../components/common/Badge';
import { Button } from '../components/common/Button';
import { Modal } from '../components/common/Modal';
import { mockCourses } from '../data/mockCourses';
import { IconMapPin, IconClock } from '../components/common/Icons';

export const CoursesPage = () => {
  const [selectedCourse, setSelectedCourse] = useState(null);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
      <div>
        <h2>Registered Subjects & Syllabus Overview</h2>
        <p>3rd Semester Computer Science Core Curriculum</p>
      </div>

      <div className="grid-2">
        {mockCourses.map((course) => (
          <Card key={course.id} hoverable>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.75rem' }}>
              <Badge variant={course.badgeColor}>{course.category}</Badge>
              <span style={{ fontSize: '0.8125rem', fontWeight: 600, color: 'var(--text-subtle)' }}>
                {course.credits} Credits
              </span>
            </div>

            <h3 style={{ fontSize: '1.15rem', marginBottom: '0.35rem' }}>{course.title}</h3>
            <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '1rem' }}>
              Instructor: <strong>{course.instructor}</strong>
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem', fontSize: '0.8125rem', color: 'var(--text-subtle)', marginBottom: '1.25rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <IconClock size={16} /> {course.schedule}
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <IconMapPin size={16} /> {course.room}
              </div>
            </div>

            <div style={{ borderTop: '1px solid var(--border-light)', paddingTop: '1rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <div>
                <span style={{ fontSize: '0.75rem', color: 'var(--text-subtle)' }}>Attendance</span>
                <p style={{ fontSize: '0.9375rem', fontWeight: 700, color: 'var(--accent-emerald)' }}>{course.attendance}</p>
              </div>
              <Button variant="secondary" size="sm" onClick={() => setSelectedCourse(course)}>
                Course Details
              </Button>
            </div>
          </Card>
        ))}
      </div>

      {/* Course Detail Modal */}
      <Modal
        isOpen={Boolean(selectedCourse)}
        onClose={() => setSelectedCourse(null)}
        title={selectedCourse?.title}
        footer={
          <Button variant="primary" onClick={() => setSelectedCourse(null)}>
            Close Details
          </Button>
        }
      >
        {selectedCourse && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <div>
              <span style={{ fontSize: '0.8125rem', color: 'var(--text-subtle)' }}>Subject Code</span>
              <p style={{ fontSize: '1rem', fontWeight: 600 }}>{selectedCourse.code}</p>
            </div>
            <div>
              <span style={{ fontSize: '0.8125rem', color: 'var(--text-subtle)' }}>Faculty</span>
              <p style={{ fontSize: '1rem', fontWeight: 600 }}>{selectedCourse.instructor}</p>
            </div>
            <div>
              <span style={{ fontSize: '0.8125rem', color: 'var(--text-subtle)' }}>Venue & Schedule</span>
              <p style={{ fontSize: '0.9375rem' }}>{selectedCourse.room} ({selectedCourse.schedule})</p>
            </div>
            <div>
              <span style={{ fontSize: '0.8125rem', color: 'var(--text-subtle)' }}>Module Syllabus</span>
              <ul style={{ paddingLeft: '1.25rem', marginTop: '0.35rem', fontSize: '0.875rem', color: 'var(--text-muted)' }}>
                <li>Unit 1: Fundamentals and Architecture Overview</li>
                <li>Unit 2: Implementation & Component Design</li>
                <li>Unit 3: Evaluation Criteria & Project Demo</li>
              </ul>
            </div>
          </div>
        )}
      </Modal>
    </div>
  );
};
