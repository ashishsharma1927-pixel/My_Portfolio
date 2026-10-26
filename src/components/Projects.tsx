import React from 'react';
import { ExternalLink, CheckCircle2, Server, Globe, Users, Building, ShieldCheck } from 'lucide-react';
import { GithubIcon } from './Icons';
import { projectsData } from '../data/portfolioData';
import { SegsPreview } from './SegsPreview';

const HrmsPreview: React.FC = () => {
  const [imgError, setImgError] = React.useState(false);

  return (
    <div
      className="hrms-mockup-wrapper"
      style={{
        backgroundColor: '#FFFFFF',
        border: '1px solid var(--border-color)',
        borderRadius: 'var(--radius-md)',
        overflow: 'hidden',
        boxShadow: 'var(--shadow-card-hover)',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      {/* Dashboard Top Browser Bar */}
      <div
        style={{
          padding: '0.75rem 1.125rem',
          backgroundColor: 'var(--bg-subtle)',
          borderBottom: '1px solid var(--border-color)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '0.5rem',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.625rem' }}>
          {/* Browser Dots */}
          <div style={{ display: 'flex', gap: '5px' }}>
            <span style={{ width: '9px', height: '9px', borderRadius: '50%', backgroundColor: '#EF4444', display: 'inline-block' }} />
            <span style={{ width: '9px', height: '9px', borderRadius: '50%', backgroundColor: '#F59E0B', display: 'inline-block' }} />
            <span style={{ width: '9px', height: '9px', borderRadius: '50%', backgroundColor: '#10B981', display: 'inline-block' }} />
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.375rem' }}>
            <Building size={14} style={{ color: 'var(--text-primary)' }} />
            <span style={{ fontSize: '0.8125rem', fontWeight: 700, color: 'var(--text-primary)' }}>
              it infonity • HRMS Portal
            </span>
          </div>
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

      {/* Actual Dashboard Screenshot Preview */}
      <div style={{ position: 'relative', overflow: 'hidden', backgroundColor: '#0F172A' }}>
        <a
          href="https://hrms-frontend-cr1h.vercel.app/login"
          target="_blank"
          rel="noopener noreferrer"
          title="Open HRMS Portal Live Application"
          className="hrms-img-container"
        >
          {!imgError ? (
            <img
              src="/hrms-dashboard.png"
              alt="IT Infonity HRMS Portal CEO Dashboard"
              onError={() => setImgError(true)}
              style={{
                width: '100%',
                height: 'auto',
                display: 'block',
                transition: 'transform 0.35s ease',
              }}
            />
          ) : (
            <div style={{ padding: '2.5rem 1.5rem', textAlign: 'center', color: '#FFFFFF' }}>
              <Building size={32} style={{ marginBottom: '0.5rem', opacity: 0.8 }} />
              <div style={{ fontWeight: 700 }}>IT Infonity HRMS Portal</div>
              <div style={{ fontSize: '0.8125rem', opacity: 0.8 }}>Employee &amp; Department Management</div>
            </div>
          )}

          {/* Hover Overlay */}
          <div className="hrms-img-overlay">
            <span className="hrms-hover-badge">
              <Globe size={13} />
              Open Live Portal
              <ExternalLink size={12} />
            </span>
          </div>
        </a>
      </div>

      {/* Key Stats Bar from the Dashboard */}
      <div
        style={{
          padding: '0.75rem 1rem',
          backgroundColor: '#FFFFFF',
          borderTop: '1px solid var(--border-color)',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(110px, 1fr))',
          gap: '0.5rem',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.375rem' }}>
          <Users size={13} style={{ color: 'var(--text-secondary)' }} />
          <span style={{ fontSize: '0.75rem', color: 'var(--text-secondary)' }}>
            <strong style={{ color: 'var(--text-primary)' }}>7</strong> Staff Registered
          </span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.375rem' }}>
          <Building size={13} style={{ color: 'var(--text-secondary)' }} />
          <span style={{ fontSize: '0.75rem', color: 'var(--text-secondary)' }}>
            <strong style={{ color: 'var(--text-primary)' }}>6</strong> Departments
          </span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.375rem' }}>
          <ShieldCheck size={13} style={{ color: '#2D6A4F' }} />
          <span style={{ fontSize: '0.75rem', color: 'var(--text-secondary)' }}>
            Role-Based Access
          </span>
        </div>
      </div>

      {/* Preview Footer Note */}
      <div
        style={{
          padding: '0.5rem 1rem',
          backgroundColor: 'var(--bg-subtle)',
          borderTop: '1px solid var(--border-color)',
          fontSize: '0.6875rem',
          color: 'var(--text-secondary)',
          textAlign: 'center',
        }}
      >
        Actual production dashboard of the HRMS People Operations Portal
      </div>
    </div>
  );
};

export const Projects: React.FC = () => {
  return (
    <section id="projects" className="section" style={{ backgroundColor: '#FFFFFF', borderTop: '1px solid var(--border-color)', borderBottom: '1px solid var(--border-color)' }}>
      <div className="container">
        <div className="section-header">
          <span className="section-label">Portfolio</span>
          <h2 className="section-heading">Featured Engineering Projects</h2>
          <p className="section-subtitle">
            Demonstrating hands-on experience designing full-stack platforms, 3D WebGL spatial commerce, scalable REST APIs, and production deployments.
          </p>
        </div>

        {/* Projects List */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
          {projectsData.map((project) => (
            <div
              key={project.id}
              className="card project-card"
            >
              {/* Project Left: Information, Details & Actions */}
              <div className="project-info-col">
                {/* Header & Category Badges */}
                <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '0.625rem', marginBottom: '0.875rem' }}>
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
                    {project.category || 'Web Application'}
                  </span>
                </div>

                {/* Project Title */}
                <h3 className="project-title">
                  {project.title}
                </h3>

                {/* Tagline / Subtitle */}
                {project.tagline && (
                  <div
                    style={{
                      fontSize: '0.9375rem',
                      fontWeight: 600,
                      color: 'var(--text-secondary)',
                      marginBottom: '0.875rem',
                    }}
                  >
                    {project.tagline}
                  </div>
                )}

                {/* Description */}
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
                <div className="project-links">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-primary"
                    >
                      <Globe size={16} />
                      {project.id === 'segs' ? 'Explore Live Storefront' : 'Live Application'}
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
                      <GithubIcon size={16} />
                      GitHub Repo
                      <ExternalLink size={14} />
                    </a>
                  )}
                </div>
              </div>

              {/* Project Right: Interactive Project-Specific Visual Preview */}
              <div className="project-preview-col">
                {project.id === 'segs' ? <SegsPreview /> : <HrmsPreview />}
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .project-card {
          padding: clamp(1.5rem, 3.5vw, 3rem);
          border-radius: var(--radius-lg);
          display: grid;
          grid-template-columns: 1fr;
          gap: clamp(1.75rem, 3vw, 3.5rem);
          align-items: center;
          background-color: var(--bg-main);
          border: 1px solid var(--border-color);
        }

        .project-title {
          font-size: clamp(1.4rem, 2.5vw, 1.75rem);
          font-weight: 800;
          color: var(--text-primary);
          margin-bottom: 0.35rem;
          letter-spacing: -0.02em;
          line-height: 1.25;
        }

        .project-links {
          display: flex;
          flex-wrap: wrap;
          gap: 0.875rem;
          align-items: center;
        }

        .project-preview-col {
          width: 100%;
          min-width: 0;
        }

        .project-info-col {
          width: 100%;
          min-width: 0;
        }

        @media (min-width: 960px) {
          .project-card {
            grid-template-columns: 1.15fr 0.95fr !important;
            gap: 3.5rem !important;
          }
        }

        @media (max-width: 640px) {
          .project-card {
            padding: 1.25rem !important;
            gap: 1.75rem !important;
            border-radius: var(--radius-md) !important;
          }

          .project-links {
            flex-direction: column !important;
            align-items: stretch !important;
            gap: 0.625rem !important;
          }

          .project-links .btn {
            width: 100% !important;
            justify-content: center !important;
          }
        }

        .hrms-img-container {
          display: block;
          position: relative;
          text-decoration: none;
          overflow: hidden;
        }

        .hrms-img-container:hover img {
          transform: scale(1.02);
        }

        .hrms-img-overlay {
          position: absolute;
          inset: 0;
          background: rgba(15, 23, 42, 0.45);
          opacity: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: opacity 0.25s ease;
          backdrop-filter: blur(2px);
        }

        .hrms-img-container:hover .hrms-img-overlay {
          opacity: 1;
        }

        .hrms-hover-badge {
          background: #FFFFFF;
          color: var(--text-primary);
          font-size: 0.8125rem;
          font-weight: 700;
          padding: 0.5rem 1rem;
          border-radius: var(--radius-pill);
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
          box-shadow: 0 4px 16px rgba(0, 0, 0, 0.25);
          transform: translateY(4px);
          transition: transform 0.25s ease;
        }

        .hrms-img-container:hover .hrms-hover-badge {
          transform: translateY(0);
        }
      `}</style>
    </section>
  );
};
