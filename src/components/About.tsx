import React from 'react';
import { MapPin, GraduationCap, Cpu } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export const About: React.FC = () => {
  const infoCards = [
    {
      icon: <MapPin size={22} style={{ color: 'var(--text-primary)' }} />,
      label: 'Location',
      value: personalInfo.location,
    },
    {
      icon: <GraduationCap size={22} style={{ color: 'var(--text-primary)' }} />,
      label: 'Education',
      value: 'B.Sc. Mathematics',
      subtext: 'Himachal Pradesh University (HPU)',
    },
    {
      icon: <Cpu size={22} style={{ color: 'var(--text-primary)' }} />,
      label: 'Focus',
      value: 'Backend Development',
      subtext: 'REST APIs & Relational Database Schemas',
    },
  ];

  return (
    <section id="about" className="section" style={{ backgroundColor: '#FFFFFF', borderTop: '1px solid var(--border-color)', borderBottom: '1px solid var(--border-color)' }}>
      <div className="container">
        <div className="section-header">
          <span className="section-label">Background</span>
          <h2 className="section-heading">A Little About Me</h2>
        </div>

        <div
          className="about-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr',
            gap: '3rem',
            alignItems: 'center',
          }}
        >
          {/* Paragraph */}
          <div>
            <p
              style={{
                fontSize: 'clamp(1.0625rem, 1.8vw, 1.25rem)',
                lineHeight: 1.85,
                color: 'var(--text-secondary)',
                marginBottom: '1.5rem',
              }}
            >
              {personalInfo.aboutText}
            </p>

            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '0.75rem',
                marginTop: '1.5rem',
              }}
            >
              <span className="badge" style={{ padding: '0.375rem 0.875rem' }}>
                🚀 RESTful Architecture
              </span>
              <span className="badge" style={{ padding: '0.375rem 0.875rem' }}>
                🛡️ Query Optimization &amp; Debugging
              </span>
              <span className="badge" style={{ padding: '0.375rem 0.875rem' }}>
                ⚡ End-to-End API Testing
              </span>
            </div>
          </div>

          {/* 3 Information Pills / Compact Cards */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '1rem',
              width: '100%',
            }}
          >
            {infoCards.map((item) => (
              <div
                key={item.label}
                style={{
                  backgroundColor: 'var(--bg-main)',
                  border: '1px solid var(--border-color)',
                  borderRadius: 'var(--radius-md)',
                  padding: '1.375rem 1.5rem',
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '1rem',
                  boxShadow: 'var(--shadow-subtle)',
                  transition: 'transform var(--transition-fast)',
                }}
              >
                <div
                  style={{
                    padding: '0.625rem',
                    backgroundColor: 'var(--bg-subtle)',
                    borderRadius: 'var(--radius-sm)',
                    border: '1px solid var(--border-color)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                  }}
                >
                  {item.icon}
                </div>
                <div>
                  <div
                    style={{
                      fontSize: '0.78125rem',
                      fontWeight: 700,
                      textTransform: 'uppercase',
                      letterSpacing: '0.06em',
                      color: 'var(--text-secondary)',
                      marginBottom: '0.25rem',
                    }}
                  >
                    {item.label}
                  </div>
                  <div
                    style={{
                      fontSize: '1.0625rem',
                      fontWeight: 700,
                      color: 'var(--text-primary)',
                      lineHeight: 1.3,
                    }}
                  >
                    {item.value}
                  </div>
                  {item.subtext && (
                    <div
                      style={{
                        fontSize: '0.875rem',
                        color: 'var(--text-secondary)',
                        marginTop: '0.2rem',
                      }}
                    >
                      {item.subtext}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (min-width: 900px) {
          .about-grid {
            grid-template-columns: 1.15fr 0.85fr !important;
            gap: 4rem !important;
          }
        }
      `}</style>
    </section>
  );
};
