import React from 'react';
import { GraduationCap, Award } from 'lucide-react';
import { educationData } from '../data/portfolioData';

export const Education: React.FC = () => {
  return (
    <section id="education" className="section" style={{ backgroundColor: '#FFFFFF', borderTop: '1px solid var(--border-color)', borderBottom: '1px solid var(--border-color)' }}>
      <div className="container">
        <div className="section-header">
          <span className="section-label">Academic Background</span>
          <h2 className="section-heading">Education</h2>
          <p className="section-subtitle">
            Academic qualifications and professional certifications in mathematics and computer applications.
          </p>
        </div>

        {/* Compact Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '1.25rem',
            maxWidth: '920px',
          }}
        >
          {educationData.map((edu) => (
            <div
              key={edu.id}
              className="card"
              style={{
                padding: '1.25rem',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                gap: '0.75rem',
              }}
            >
              <div>
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    marginBottom: '0.375rem',
                  }}
                >
                  <span
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.375rem',
                      fontSize: '0.75rem',
                      fontWeight: 600,
                      color: 'var(--color-accent)',
                    }}
                  >
                    <GraduationCap size={15} />
                    {edu.durationOrYear}
                  </span>
                  {edu.scoreOrDetail && edu.scoreOrDetail.includes('Score') && (
                    <span
                      style={{
                        fontSize: '0.75rem',
                        fontWeight: 600,
                        backgroundColor: '#ECFDF5',
                        color: '#059669',
                        padding: '0.125rem 0.375rem',
                        borderRadius: 'var(--radius-sm)',
                        border: '1px solid #A7F3D0',
                      }}
                    >
                      {edu.scoreOrDetail}
                    </span>
                  )}
                </div>

                <h3
                  style={{
                    fontSize: '1rem',
                    fontWeight: 700,
                    color: 'var(--text-primary)',
                    marginBottom: '0.25rem',
                  }}
                >
                  {edu.degree}
                </h3>

                <p
                  style={{
                    fontSize: '0.875rem',
                    color: 'var(--text-secondary)',
                    lineHeight: 1.4,
                  }}
                >
                  {edu.institution}
                </p>
              </div>

              {edu.scoreOrDetail && !edu.scoreOrDetail.includes('Score') && (
                <div
                  style={{
                    fontSize: '0.8125rem',
                    color: 'var(--text-secondary)',
                    borderTop: '1px solid #F1F5F9',
                    paddingTop: '0.5rem',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.375rem',
                  }}
                >
                  <Award size={13} style={{ color: 'var(--color-accent)' }} />
                  <span>{edu.scoreOrDetail}</span>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
