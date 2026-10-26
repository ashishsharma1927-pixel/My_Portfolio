import React from 'react';
import { ExternalLink, CheckCircle2, Server, Globe, Users, Building, ShieldCheck } from 'lucide-react';
import { projectsData } from '../data/portfolioData';

export const Projects: React.FC = () => {
  return (
    <section id="projects" className="section" style={{ backgroundColor: '#FFFFFF', borderTop: '1px solid var(--border-color)', borderBottom: '1px solid var(--border-color)' }}>
      <div className="container">
        <div className="section-header">
          <span className="section-label">Portfolio</span>
          <h2 className="section-heading">Projects I've Worked On</h2>
          <p className="section-subtitle">
            Demonstrating hands-on experience designing REST APIs, data schemas, serializer validations, and production deployments.
          </p>
        </div>

        {/* Projects List */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
          {projectsData.map((project) => (
            <div
              key={project.id}
              className="card project-card"
              style={{
                padding: '2.25rem',
                borderRadius: 'var(--radius-lg)',
                display: 'grid',
                gridTemplateColumns: '1fr',
                gap: '2.5rem',
                alignItems: 'center',
                backgroundColor: 'var(--bg-main)',
                border: '1px solid var(--border-color)',
              }}
            >
              {/* Project Left: Information, Details & Actions */}
              <div>
                {/* Header & Badges */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.625rem', marginBottom: '0.875rem' }}>
                  {project.badge && (
                    <span className="badge badge-accent" style={{ fontWeight: 700 }}>
                      {project.badge}
                    </span>
                  )}
                  <span
                    style={{
                      fontSize: '0.8125rem',
                      fontFamily: 'var(--font-mono)',
                      color: 'var(--text-secondary)',
                      fontWeight: 600,
                    }}
                  >
                    Django REST API
                  </span>
                </div>

                <h3
                  style={{
                    fontSize: '1.625rem',
                    fontWeight: 800,
                    color: 'var(--text-primary)',
                    marginBottom: '0.625rem',
                    letterSpacing: '-0.02em',
                  }}
                >
                  {project.title}
                </h3>

                <p
                  style={{
                    fontSize: '1.0625rem',
                    lineHeight: 1.65,
                    color: 'var(--text-secondary)',
                    marginBottom: '1.5rem',
                  }}
                >
                  {project.description}
                </p>

                {/* Key Contributions */}
                <div style={{ marginBottom: '1.5rem' }}>
                  <div
                    style={{
                      fontSize: '0.8125rem',
                      fontWeight: 800,
                      textTransform: 'uppercase',
                      letterSpacing: '0.06em',
                      color: 'var(--text-primary)',
                      marginBottom: '0.75rem',
                    }}
                  >
                    Key Implementation Highlights
                  </div>
                  <ul
                    style={{
                      listStyle: 'none',
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '0.625rem',
                    }}
                  >
                    {project.details.map((detail, index) => (
                      <li
                        key={index}
                        style={{
                          display: 'flex',
                          alignItems: 'flex-start',
                          gap: '0.625rem',
                          fontSize: '0.9375rem',
                          lineHeight: 1.55,
                          color: 'var(--text-secondary)',
                        }}
                      >
                        <CheckCircle2
                          size={17}
                          style={{
                            color: 'var(--text-primary)',
                            flexShrink: 0,
                            marginTop: '0.2rem',
                          }}
                        />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tech Badges */}
                <div
                  style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: '0.5rem',
                    marginBottom: '2rem',
                  }}
                >
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      style={{
                        padding: '0.3125rem 0.6875rem',
                        fontSize: '0.8125rem',
                        fontWeight: 600,
                        backgroundColor: '#FFFFFF',
                        border: '1px solid var(--border-color)',
                        borderRadius: 'var(--radius-pill)',
                        color: 'var(--text-primary)',
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Project Links */}
                <div
                  style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: '0.875rem',
                    alignItems: 'center',
                  }}
                >
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-primary"
                    >
                      <Globe size={16} />
                      Live Application
                      <ExternalLink size={14} />
                    </a>
                  )}

                  {project.backendUrl && (
                    <a
                      href={project.backendUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-secondary"
                    >
                      <Server size={16} />
                      Backend API
                      <ExternalLink size={14} />
                    </a>
                  )}

                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-secondary"
                    >
                      GitHub Repo
                      <ExternalLink size={14} />
                    </a>
                  )}
                </div>
              </div>

              {/* Project Right: Lightweight HR Dashboard Preview */}
              <div>
                <div
                  style={{
                    backgroundColor: '#FFFFFF',
                    border: '1px solid var(--border-color)',
                    borderRadius: 'var(--radius-md)',
                    overflow: 'hidden',
                    boxShadow: 'var(--shadow-card-hover)',
                  }}
                >
                  {/* Dashboard Top Header */}
                  <div
                    style={{
                      padding: '0.875rem 1.125rem',
                      backgroundColor: 'var(--bg-subtle)',
                      borderBottom: '1px solid var(--border-color)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      <Building size={16} style={{ color: 'var(--text-primary)' }} />
                      <span style={{ fontSize: '0.875rem', fontWeight: 700, color: 'var(--text-primary)' }}>
                        HRMS Employee Portal
                      </span>
                    </div>
                    <span
                      style={{
                        fontSize: '0.6875rem',
                        fontWeight: 700,
                        color: '#2D6A4F',
                        backgroundColor: '#E8F5E9',
                        padding: '0.2rem 0.6rem',
                        borderRadius: 'var(--radius-pill)',
                        border: '1px solid #C8E6C9',
                      }}
                    >
                      DRF API • Online
                    </span>
                  </div>

                  {/* Dashboard Content */}
                  <div style={{ padding: '1.25rem' }}>
                    {/* Small KPI Cards */}
                    <div
                      style={{
                        display: 'grid',
                        gridTemplateColumns: '1fr 1fr',
                        gap: '0.75rem',
                        marginBottom: '1rem',
                      }}
                    >
                      <div
                        style={{
                          backgroundColor: 'var(--bg-main)',
                          padding: '0.875rem',
                          borderRadius: 'var(--radius-sm)',
                          border: '1px solid var(--border-color)',
                        }}
                      >
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.375rem', marginBottom: '0.25rem' }}>
                          <Users size={14} style={{ color: 'var(--text-primary)' }} />
                          <span style={{ fontSize: '0.6875rem', color: 'var(--text-secondary)', fontWeight: 600 }}>
                            Total Staff
                          </span>
                        </div>
                        <div style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--text-primary)' }}>
                          128 Records
                        </div>
                      </div>

                      <div
                        style={{
                          backgroundColor: 'var(--bg-main)',
                          padding: '0.875rem',
                          borderRadius: 'var(--radius-sm)',
                          border: '1px solid var(--border-color)',
                        }}
                      >
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.375rem', marginBottom: '0.25rem' }}>
                          <ShieldCheck size={14} style={{ color: '#2D6A4F' }} />
                          <span style={{ fontSize: '0.6875rem', color: 'var(--text-secondary)', fontWeight: 600 }}>
                            Endpoints
                          </span>
                        </div>
                        <div style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--text-primary)' }}>
                          100% Tested
                        </div>
                      </div>
                    </div>

                    {/* Mini Data Table Preview */}
                    <div
                      style={{
                        backgroundColor: '#FFFFFF',
                        border: '1px solid var(--border-color)',
                        borderRadius: 'var(--radius-sm)',
                        overflow: 'hidden',
                        fontSize: '0.78125rem',
                      }}
                    >
                      <div
                        style={{
                          display: 'grid',
                          gridTemplateColumns: '1.2fr 1.2fr 0.8fr',
                          padding: '0.625rem 0.75rem',
                          backgroundColor: 'var(--bg-subtle)',
                          borderBottom: '1px solid var(--border-color)',
                          fontWeight: 700,
                          color: 'var(--text-primary)',
                        }}
                      >
                        <span>Employee</span>
                        <span>Department</span>
                        <span style={{ textAlign: 'right' }}>Status</span>
                      </div>

                      <div
                        style={{
                          display: 'grid',
                          gridTemplateColumns: '1.2fr 1.2fr 0.8fr',
                          padding: '0.5rem 0.75rem',
                          borderBottom: '1px solid #F1F5F9',
                          alignItems: 'center',
                        }}
                      >
                        <span style={{ fontWeight: 600, color: 'var(--text-primary)' }}>Priya Sen</span>
                        <span style={{ color: 'var(--text-secondary)' }}>Engineering</span>
                        <span style={{ textAlign: 'right', color: '#2D6A4F', fontWeight: 700 }}>Active</span>
                      </div>

                      <div
                        style={{
                          display: 'grid',
                          gridTemplateColumns: '1.2fr 1.2fr 0.8fr',
                          padding: '0.5rem 0.75rem',
                          borderBottom: '1px solid #F1F5F9',
                          alignItems: 'center',
                        }}
                      >
                        <span style={{ fontWeight: 600, color: 'var(--text-primary)' }}>Rahul Verma</span>
                        <span style={{ color: 'var(--text-secondary)' }}>Operations</span>
                        <span style={{ textAlign: 'right', color: '#2D6A4F', fontWeight: 700 }}>Active</span>
                      </div>

                      <div
                        style={{
                          display: 'grid',
                          gridTemplateColumns: '1.2fr 1.2fr 0.8fr',
                          padding: '0.5rem 0.75rem',
                          alignItems: 'center',
                        }}
                      >
                        <span style={{ fontWeight: 600, color: 'var(--text-primary)' }}>Aman Gill</span>
                        <span style={{ color: 'var(--text-secondary)' }}>HR &amp; Admin</span>
                        <span style={{ textAlign: 'right', color: '#2D6A4F', fontWeight: 700 }}>Active</span>
                      </div>
                    </div>

                    {/* Preview Label Note */}
                    <div
                      style={{
                        marginTop: '0.875rem',
                        fontSize: '0.75rem',
                        color: 'var(--text-secondary)',
                        textAlign: 'center',
                        fontStyle: 'italic',
                      }}
                    >
                      Visual preview of HRMS department &amp; employee data schema
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (min-width: 860px) {
          .project-card {
            grid-template-columns: 1.15fr 0.85fr !important;
          }
        }
      `}</style>
    </section>
  );
};
