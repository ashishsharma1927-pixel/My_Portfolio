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

        {/* Projects List - cleanly scalable */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
          {projectsData.map((project) => (
            <div
              key={project.id}
              className="card project-card"
              style={{
                padding: '2rem',
                borderRadius: 'var(--radius-lg)',
                display: 'grid',
                gridTemplateColumns: '1fr',
                gap: '2.5rem',
                alignItems: 'center',
              }}
            >
              {/* Project Left: Information, Details & Actions */}
              <div>
                {/* Header & Badges */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.625rem', marginBottom: '0.875rem' }}>
                  {project.badge && (
                    <span className="badge badge-accent" style={{ fontWeight: 600 }}>
                      {project.badge}
                    </span>
                  )}
                  <span
                    style={{
                      fontSize: '0.8125rem',
                      fontFamily: 'var(--font-mono)',
                      color: 'var(--text-secondary)',
                    }}
                  >
                    REST API Backend
                  </span>
                </div>

                <h3
                  style={{
                    fontSize: '1.5rem',
                    fontWeight: 700,
                    color: 'var(--text-primary)',
                    marginBottom: '0.5rem',
                  }}
                >
                  {project.title}
                </h3>

                <p
                  style={{
                    fontSize: '1rem',
                    lineHeight: 1.6,
                    color: 'var(--text-secondary)',
                    marginBottom: '1.25rem',
                  }}
                >
                  {project.description}
                </p>

                {/* Key Contributions / Details */}
                <div style={{ marginBottom: '1.5rem' }}>
                  <div
                    style={{
                      fontSize: '0.8125rem',
                      fontWeight: 700,
                      textTransform: 'uppercase',
                      letterSpacing: '0.05em',
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
                      gap: '0.5rem',
                    }}
                  >
                    {project.details.map((detail, index) => (
                      <li
                        key={index}
                        style={{
                          display: 'flex',
                          alignItems: 'flex-start',
                          gap: '0.625rem',
                          fontSize: '0.875rem',
                          lineHeight: 1.55,
                          color: 'var(--text-secondary)',
                        }}
                      >
                        <CheckCircle2
                          size={16}
                          style={{
                            color: 'var(--color-accent)',
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
                    gap: '0.4375rem',
                    marginBottom: '1.75rem',
                  }}
                >
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      style={{
                        padding: '0.25rem 0.5rem',
                        fontSize: '0.75rem',
                        fontWeight: 500,
                        backgroundColor: '#F8FAFC',
                        border: '1px solid var(--border-color)',
                        borderRadius: 'var(--radius-sm)',
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
                    backgroundColor: 'var(--bg-main)',
                    border: '1px solid var(--border-color)',
                    borderRadius: 'var(--radius-md)',
                    overflow: 'hidden',
                    boxShadow: 'var(--shadow-subtle)',
                  }}
                >
                  {/* Dashboard Top Header */}
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
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      <Building size={16} style={{ color: 'var(--color-accent)' }} />
                      <span style={{ fontSize: '0.8125rem', fontWeight: 600, color: 'var(--text-primary)' }}>
                        HRMS Employee Portal
                      </span>
                    </div>
                    <span
                      style={{
                        fontSize: '0.6875rem',
                        fontWeight: 600,
                        color: '#059669',
                        backgroundColor: '#ECFDF5',
                        padding: '0.125rem 0.5rem',
                        borderRadius: 'var(--radius-sm)',
                        border: '1px solid #A7F3D0',
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
                          backgroundColor: '#FFFFFF',
                          padding: '0.75rem',
                          borderRadius: 'var(--radius-sm)',
                          border: '1px solid var(--border-color)',
                        }}
                      >
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.375rem', marginBottom: '0.25rem' }}>
                          <Users size={14} style={{ color: 'var(--color-accent)' }} />
                          <span style={{ fontSize: '0.6875rem', color: 'var(--text-secondary)', fontWeight: 500 }}>
                            Total Staff
                          </span>
                        </div>
                        <div style={{ fontSize: '1.125rem', fontWeight: 700, color: 'var(--text-primary)' }}>
                          128 Records
                        </div>
                      </div>

                      <div
                        style={{
                          backgroundColor: '#FFFFFF',
                          padding: '0.75rem',
                          borderRadius: 'var(--radius-sm)',
                          border: '1px solid var(--border-color)',
                        }}
                      >
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.375rem', marginBottom: '0.25rem' }}>
                          <ShieldCheck size={14} style={{ color: '#059669' }} />
                          <span style={{ fontSize: '0.6875rem', color: 'var(--text-secondary)', fontWeight: 500 }}>
                            Endpoints
                          </span>
                        </div>
                        <div style={{ fontSize: '1.125rem', fontWeight: 700, color: 'var(--text-primary)' }}>
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
                        fontSize: '0.75rem',
                      }}
                    >
                      <div
                        style={{
                          display: 'grid',
                          gridTemplateColumns: '1.2fr 1.2fr 0.8fr',
                          padding: '0.5rem 0.75rem',
                          backgroundColor: '#F8FAFC',
                          borderBottom: '1px solid var(--border-color)',
                          fontWeight: 600,
                          color: 'var(--text-secondary)',
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
                        <span style={{ textAlign: 'right', color: '#059669', fontWeight: 600 }}>Active</span>
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
                        <span style={{ textAlign: 'right', color: '#059669', fontWeight: 600 }}>Active</span>
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
                        <span style={{ textAlign: 'right', color: '#059669', fontWeight: 600 }}>Active</span>
                      </div>
                    </div>

                    {/* Preview Label Note */}
                    <div
                      style={{
                        marginTop: '0.875rem',
                        fontSize: '0.6875rem',
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
