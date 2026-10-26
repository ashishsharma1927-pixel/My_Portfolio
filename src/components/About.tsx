import React from 'react';
import { MapPin, GraduationCap, Cpu } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export const About: React.FC = () => {
  const infoCards = [
    {
      icon: <MapPin size={20} style={{ color: 'var(--color-accent)' }} />,
      label: 'Location',
      value: personalInfo.location,
    },
    {
      icon: <GraduationCap size={20} style={{ color: 'var(--color-accent)' }} />,
      label: 'Education',
      value: 'B.Sc. Mathematics',
      subtext: 'Himachal Pradesh University',
    },
    {
      icon: <Cpu size={20} style={{ color: 'var(--color-accent)' }} />,
      label: 'Focus',
      value: 'Backend Development',
      subtext: 'APIs & Relational Databases',
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
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr',
            gap: '2.5rem',
            alignItems: 'start',
          }}
          className="about-grid"
        >
          {/* Paragraph */}
          <div>
            <p
              style={{
                fontSize: '1.125rem',
                lineHeight: 1.8,
                color: 'var(--text-secondary)',
                maxWidth: '680px',
              }}
            >
              {personalInfo.aboutText}
            </p>
          </div>

          {/* 3 Information Pills / Compact Cards */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
              gap: '1rem',
            }}
          >
            {infoCards.map((item) => (
              <div
                key={item.label}
                style={{
                  backgroundColor: 'var(--bg-main)',
                  border: '1px solid var(--border-color)',
                  borderRadius: 'var(--radius-md)',
                  padding: '1.25rem',
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '0.875rem',
                }}
              >
                <div
                  style={{
                    padding: '0.5rem',
                    backgroundColor: 'var(--card-bg)',
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
                      fontSize: '0.75rem',
                      fontWeight: 600,
                      textTransform: 'uppercase',
                      letterSpacing: '0.05em',
                      color: 'var(--text-secondary)',
                      marginBottom: '0.25rem',
                    }}
                  >
                    {item.label}
                  </div>
                  <div
                    style={{
                      fontSize: '0.9375rem',
                      fontWeight: 600,
                      color: 'var(--text-primary)',
                      lineHeight: 1.3,
                    }}
                  >
                    {item.value}
                  </div>
                  {item.subtext && (
                    <div
                      style={{
                        fontSize: '0.8125rem',
                        color: 'var(--text-secondary)',
                        marginTop: '0.125rem',
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
    </section>
  );
};
