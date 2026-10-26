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
                padding: '1.5rem',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                gap: '0.875rem',
                backgroundColor: 'var(--bg-main)',
                border: '1px solid var(--border-color)',
                borderRadius: 'var(--radius-md)',
              }}
            >
              <div>
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    marginBottom: '0.5rem',
                  }}
                >
                  <span
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.375rem',
                      fontSize: '0.78125rem',
                      fontWeight: 700,
                      color: 'var(--text-primary)',
                      backgroundColor: 'var(--bg-subtle)',
                      padding: '0.2rem 0.6rem',
                      borderRadius: 'var(--radius-pill)',
                    }}
                  >
                    <GraduationCap size={14} />
                    {edu.durationOrYear}
                  </span>
                  {edu.scoreOrDetail && edu.scoreOrDetail.includes('Score') && (
                    <span
                      style={{
                        fontSize: '0.75rem',
                        fontWeight: 700,
                        backgroundColor: '#E8F5E9',
                        color: '#2D6A4F',
                        padding: '0.15rem 0.5rem',
                        borderRadius: 'var(--radius-pill)',
                        border: '1px solid #C8E6C9',
                      }}
                    >
                      {edu.scoreOrDetail}
                    </span>
                  )}
                </div>

                <h3
                  style={{
                    fontSize: '1.0625rem',
                    fontWeight: 800,
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
                    lineHeight: 1.45,
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
                    borderTop: '1px solid var(--border-color)',
                    paddingTop: '0.625rem',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.375rem',
                  }}
                >
                  <Award size={14} style={{ color: 'var(--text-primary)' }} />
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
