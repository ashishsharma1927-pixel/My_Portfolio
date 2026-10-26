import React from 'react';
import { ArrowDown, Mail, FileText, Server, Database } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { personalInfo } from '../data/portfolioData';

export const Hero: React.FC = () => {
  return (
    <section
      id="home"
      style={{
        paddingTop: 'calc(var(--nav-height) + 3rem)',
        paddingBottom: '5rem',
        minHeight: 'calc(100vh - var(--nav-height))',
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <div className="container">
        <div
          className="hero-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr',
            gap: '3rem',
            alignItems: 'center',
          }}
        >
          {/* Left Column: Text & CTAs */}
          <div>
            {/* Status / Title Pill */}
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                padding: '0.3125rem 0.75rem',
                borderRadius: 'var(--radius-full)',
                backgroundColor: 'var(--card-bg)',
                border: '1px solid var(--border-color)',
                fontSize: '0.8125rem',
                fontWeight: 600,
                color: 'var(--text-primary)',
                marginBottom: '1.25rem',
                boxShadow: 'var(--shadow-subtle)',
              }}
            >
              <span
                style={{
                  width: '8px',
                  height: '8px',
                  borderRadius: '50%',
                  backgroundColor: '#10B981',
                  display: 'inline-block',
                }}
              />
              <span>{personalInfo.title}</span>
            </div>

            {/* Main Headline */}
            <h1
              style={{
                fontSize: '2.5rem',
                lineHeight: 1.15,
                fontWeight: 800,
                color: 'var(--text-primary)',
                marginBottom: '1.25rem',
                letterSpacing: '-0.025em',
              }}
              className="hero-headline"
            >
              Building Reliable Backend Solutions with{' '}
              <span style={{ color: 'var(--color-accent)' }}>Python &amp; Django.</span>
            </h1>

            {/* Short Introduction */}
            <p
              style={{
                fontSize: '1.125rem',
                lineHeight: 1.7,
                color: 'var(--text-secondary)',
                marginBottom: '1.5rem',
                maxWidth: '560px',
              }}
            >
              {personalInfo.shortIntro}
            </p>

            {/* 3 Compact Tech Labels */}
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '0.625rem',
                marginBottom: '2rem',
              }}
            >
              {personalInfo.heroTechLabels.map((tech) => (
                <span
                  key={tech}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.375rem',
                    padding: '0.3125rem 0.75rem',
                    borderRadius: 'var(--radius-sm)',
                    fontSize: '0.8125rem',
                    fontWeight: 600,
                    backgroundColor: 'var(--card-bg)',
                    border: '1px solid var(--border-color)',
                    color: 'var(--text-primary)',
                  }}
                >
                  <span
                    style={{
                      width: '6px',
                      height: '6px',
                      borderRadius: '50%',
                      backgroundColor: 'var(--color-accent)',
                    }}
                  />
                  {tech}
                </span>
              ))}
            </div>

            {/* Primary Action Buttons */}
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '0.875rem',
                marginBottom: '2rem',
                alignItems: 'center',
              }}
            >
              <a href="#projects" className="btn btn-primary">
                Explore My Projects
                <ArrowDown size={16} />
              </a>

              <a href="#contact" className="btn btn-secondary">
                Contact Me
                <Mail size={16} />
              </a>

              <a
                href={personalInfo.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-subtle"
                title="View Ashish Sharma's Resume PDF"
              >
                <FileText size={16} />
                Resume PDF
              </a>
            </div>

            {/* Social Links from Resume */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '1rem',
                paddingTop: '0.5rem',
              }}
            >
              <span
                style={{
                  fontSize: '0.8125rem',
                  fontWeight: 600,
                  color: 'var(--text-secondary)',
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em',
                }}
              >
                Profiles
              </span>

              <div
                style={{
                  height: '16px',
                  width: '1px',
                  backgroundColor: 'var(--border-color)',
                }}
              />

              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Profile"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.375rem',
                  fontSize: '0.875rem',
                  color: 'var(--text-secondary)',
                  fontWeight: 500,
                }}
                onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = 'var(--color-accent)')}
                onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = 'var(--text-secondary)')}
              >
                <GithubIcon size={18} />
                <span>GitHub</span>
              </a>

              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.375rem',
                  fontSize: '0.875rem',
                  color: 'var(--text-secondary)',
                  fontWeight: 500,
                }}
                onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = 'var(--color-accent)')}
                onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = 'var(--text-secondary)')}
              >
                <LinkedinIcon size={18} />
                <span>LinkedIn</span>
              </a>
            </div>
          </div>

          {/* Right Column: Subtle, Elegant Backend Architecture Card */}
          <div className="hero-graphic-container">
            <div
              style={{
                backgroundColor: 'var(--card-bg)',
                borderRadius: 'var(--radius-lg)',
                border: '1px solid var(--border-color)',
                boxShadow: 'var(--shadow-card-hover)',
                overflow: 'hidden',
                maxWidth: '480px',
                marginLeft: 'auto',
                marginRight: 'auto',
                width: '100%',
              }}
            >
              {/* Window Header */}
              <div
                style={{
                  padding: '0.75rem 1rem',
                  backgroundColor: '#F1F5F9',
                  borderBottom: '1px solid var(--border-color)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                }}
              >
                <div style={{ display: 'flex', gap: '0.375rem', alignItems: 'center' }}>
                  <span style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: '#EF4444' }} />
                  <span style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: '#F59E0B' }} />
                  <span style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: '#10B981' }} />
                </div>
                <div
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.75rem',
                    color: 'var(--text-secondary)',
                    fontWeight: 500,
                  }}
                >
                  backend_service.py • Django 5
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                  <span
                    style={{
                      width: '6px',
                      height: '6px',
                      borderRadius: '50%',
                      backgroundColor: '#10B981',
                    }}
                  />
                  <span style={{ fontSize: '0.6875rem', color: '#10B981', fontWeight: 600 }}>RUNNING</span>
                </div>
              </div>

              {/* Backend Console & Endpoint Flow Simulation */}
              <div style={{ padding: '1.25rem' }}>
                {/* Code / Architecture Mini-Header */}
                <div
                  style={{
                    backgroundColor: '#0F172A',
                    color: '#E2E8F0',
                    borderRadius: 'var(--radius-sm)',
                    padding: '1rem',
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.8125rem',
                    marginBottom: '1rem',
                    lineHeight: 1.6,
                  }}
                >
                  <div style={{ color: '#94A3B8' }}># DRF API ViewSet definition</div>
                  <div>
                    <span style={{ color: '#F472B6' }}>class</span>{' '}
                    <span style={{ color: '#60A5FA' }}>EmployeeViewSet</span>
                    <span style={{ color: '#E2E8F0' }}>(viewsets.ModelViewSet):</span>
                  </div>
                  <div style={{ paddingLeft: '1rem' }}>
                    <span style={{ color: '#94A3B8' }}>serializer_class = </span>
                    <span style={{ color: '#34D399' }}>EmployeeSerializer</span>
                  </div>
                  <div style={{ paddingLeft: '1rem' }}>
                    <span style={{ color: '#94A3B8' }}>queryset = </span>
                    <span style={{ color: '#E2E8F0' }}>Employee.objects.select_related(</span>
                    <span style={{ color: '#FDE047' }}>'department'</span>
                    <span style={{ color: '#E2E8F0' }}>)</span>
                  </div>
                </div>

                {/* API Request Monitor Items */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.625rem' }}>
                  {/* Request 1 */}
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      padding: '0.625rem 0.75rem',
                      borderRadius: 'var(--radius-sm)',
                      backgroundColor: '#F8FAFC',
                      border: '1px solid var(--border-color)',
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.75rem',
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      <span
                        style={{
                          backgroundColor: '#EFF6FF',
                          color: '#2563EB',
                          padding: '0.125rem 0.375rem',
                          borderRadius: '4px',
                          fontWeight: 700,
                        }}
                      >
                        GET
                      </span>
                      <span style={{ color: 'var(--text-primary)' }}>/api/v1/employees/</span>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.375rem' }}>
                      <span style={{ color: '#059669', fontWeight: 600 }}>200 OK</span>
                      <span style={{ color: 'var(--text-secondary)' }}>• 18ms</span>
                    </div>
                  </div>

                  {/* Request 2 */}
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      padding: '0.625rem 0.75rem',
                      borderRadius: 'var(--radius-sm)',
                      backgroundColor: '#F8FAFC',
                      border: '1px solid var(--border-color)',
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.75rem',
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      <span
                        style={{
                          backgroundColor: '#ECFDF5',
                          color: '#059669',
                          padding: '0.125rem 0.375rem',
                          borderRadius: '4px',
                          fontWeight: 700,
                        }}
                      >
                        POST
                      </span>
                      <span style={{ color: 'var(--text-primary)' }}>/api/v1/departments/</span>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.375rem' }}>
                      <span style={{ color: '#059669', fontWeight: 600 }}>201 CREATED</span>
                      <span style={{ color: 'var(--text-secondary)' }}>• 24ms</span>
                    </div>
                  </div>
                </div>

                {/* Subsystem Status Indicators */}
                <div
                  style={{
                    display: 'grid',
                    gridTemplateColumns: '1fr 1fr',
                    gap: '0.5rem',
                    marginTop: '0.875rem',
                    paddingTop: '0.875rem',
                    borderTop: '1px solid var(--border-color)',
                  }}
                >
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.375rem',
                      fontSize: '0.75rem',
                      color: 'var(--text-secondary)',
                    }}
                  >
                    <Database size={13} style={{ color: 'var(--color-accent)' }} />
                    <span>PostgreSQL &amp; MySQL</span>
                  </div>

                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.375rem',
                      fontSize: '0.75rem',
                      color: 'var(--text-secondary)',
                    }}
                  >
                    <Server size={13} style={{ color: '#10B981' }} />
                    <span>Render &amp; Vercel Deployed</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (min-width: 890px) {
          .hero-grid {
            grid-template-columns: 1.15fr 0.85fr !important;
          }
        }
        @media (max-width: 640px) {
          .hero-headline {
            font-size: 2rem !important;
          }
        }
      `}</style>
    </section>
  );
};
