import React from 'react';
import { Briefcase, Calendar, CheckCircle2 } from 'lucide-react';
import { experienceData } from '../data/portfolioData';

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="section">
      <div className="container">
        <div className="section-header">
          <span className="section-label">Career</span>
          <h2 className="section-heading">Professional Experience</h2>
          <p className="section-subtitle">
            Hands-on software development and internship experience in backend API engineering and testing.
          </p>
        </div>

        {/* Minimal Experience Cards */}
        <div style={{ maxWidth: '800px', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          {experienceData.map((exp) => (
            <div
              key={exp.id}
              className="card"
              style={{
                padding: '1.75rem',
                borderLeft: '4px solid var(--color-accent)',
              }}
            >
              {/* Role & Company Header */}
              <div
                style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  alignItems: 'baseline',
                  justifyContent: 'space-between',
                  gap: '0.75rem',
                  marginBottom: '1rem',
                }}
              >
                <div>
                  <h3
                    style={{
                      fontSize: '1.25rem',
                      fontWeight: 700,
                      color: 'var(--text-primary)',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.5rem',
                    }}
                  >
                    <Briefcase size={18} style={{ color: 'var(--color-accent)' }} />
                    {exp.role}
                  </h3>
                  <div
                    style={{
                      fontSize: '1rem',
                      fontWeight: 600,
                      color: 'var(--color-accent)',
                      marginTop: '0.25rem',
                    }}
                  >
                    {exp.company}
                  </div>
                </div>

                <div
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.375rem',
                    padding: '0.25rem 0.625rem',
                    borderRadius: 'var(--radius-sm)',
                    backgroundColor: '#F1F5F9',
                    border: '1px solid var(--border-color)',
                    fontSize: '0.8125rem',
                    color: 'var(--text-secondary)',
                    fontWeight: 500,
                  }}
                >
                  <Calendar size={13} />
                  <span>{exp.duration}</span>
                </div>
              </div>

              {/* Responsibilities */}
              <ul
                style={{
                  listStyle: 'none',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.625rem',
                }}
              >
                {exp.responsibilities.map((bullet, idx) => (
                  <li
                    key={idx}
                    style={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: '0.625rem',
                      fontSize: '0.9375rem',
                      color: 'var(--text-secondary)',
                      lineHeight: 1.6,
                    }}
                  >
                    <CheckCircle2
                      size={16}
                      style={{
                        color: 'var(--color-accent)',
                        flexShrink: 0,
                        marginTop: '0.25rem',
                      }}
                    />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
