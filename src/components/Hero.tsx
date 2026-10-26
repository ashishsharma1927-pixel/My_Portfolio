import React, { useState } from 'react';
import { ArrowRight, Sparkles, FileText, User } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { personalInfo } from '../data/portfolioData';

export const Hero: React.FC = () => {
  const [imageError, setImageError] = useState(false);

  return (
    <section
      id="home"
      style={{
        paddingTop: 'calc(var(--nav-height) + 2rem)',
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
          {/* Left Column: Typography & CTAs */}
          <div className="hero-text-col" style={{ width: '100%', maxWidth: '720px' }}>
            {/* Tag Pill with Sparkle */}
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                padding: '0.375rem 0.875rem',
                borderRadius: 'var(--radius-pill)',
                backgroundColor: 'var(--bg-subtle)',
                border: '1px solid var(--border-color)',
                fontSize: '0.875rem',
                fontWeight: 600,
                color: 'var(--text-primary)',
                marginBottom: '1.25rem',
              }}
            >
              <Sparkles size={15} style={{ color: 'var(--text-primary)' }} />
              <span>{personalInfo.title}</span>
            </div>

            {/* Fluid Responsive Headline */}
            <h1
              className="hero-greeting"
              style={{
                fontSize: 'clamp(2.5rem, 5.5vw, 4.25rem)',
                lineHeight: 1.08,
                fontWeight: 800,
                color: 'var(--text-primary)',
                marginBottom: '1.25rem',
                letterSpacing: '-0.03em',
              }}
            >
              Hi, I'm<br />
              <span style={{ color: 'var(--text-primary)' }}>Ashish!</span>
            </h1>

            {/* Description Paragraph */}
            <p
              style={{
                fontSize: 'clamp(1rem, 1.8vw, 1.1875rem)',
                lineHeight: 1.75,
                color: 'var(--text-secondary)',
                marginBottom: '2rem',
                maxWidth: '620px',
              }}
            >
              Creative and detail-oriented Python Backend Developer creating robust REST APIs,
              clean database architectures, and scalable web solutions that power modern applications.
            </p>

            {/* Pill Action Buttons */}
            <div
              className="hero-actions"
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '0.875rem',
                alignItems: 'center',
                marginBottom: '2.25rem',
              }}
            >
              <a href="#projects" className="btn btn-primary" style={{ padding: '0.8125rem 1.625rem' }}>
                <span>View My Work</span>
                <ArrowRight size={16} />
              </a>

              <a href="#contact" className="btn btn-secondary" style={{ padding: '0.8125rem 1.625rem' }}>
                <span>Get in Touch</span>
              </a>

              <a
                href={personalInfo.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-subtle"
                style={{ padding: '0.8125rem 1.375rem' }}
                title="View Ashish Sharma's Resume PDF"
              >
                <FileText size={16} />
                <span>Resume PDF</span>
              </a>
            </div>

            {/* Social Links & Tech Badges */}
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                alignItems: 'center',
                gap: '1.25rem',
                paddingTop: '0.25rem',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
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
                    fontWeight: 600,
                  }}
                  onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = 'var(--text-primary)')}
                  onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = 'var(--text-secondary)')}
                >
                  <GithubIcon size={18} />
                  <span>GitHub</span>
                </a>

                <span style={{ color: 'var(--border-color)' }}>•</span>

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
                    fontWeight: 600,
                  }}
                  onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = 'var(--text-primary)')}
                  onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = 'var(--text-secondary)')}
                >
                  <LinkedinIcon size={18} />
                  <span>LinkedIn</span>
                </a>
              </div>

              <div
                style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: '0.5rem',
                  alignItems: 'center',
                }}
              >
                {personalInfo.heroTechLabels.map((tech) => (
                  <span
                    key={tech}
                    style={{
                      fontSize: '0.75rem',
                      fontWeight: 600,
                      color: 'var(--text-primary)',
                      backgroundColor: 'var(--bg-subtle)',
                      padding: '0.25rem 0.625rem',
                      borderRadius: 'var(--radius-pill)',
                    }}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Clean, Elegant Square Frame */}
          <div
            className="hero-image-col"
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              width: '100%',
            }}
          >
            <div
              className="hero-square-wrapper"
              style={{
                position: 'relative',
                width: '100%',
                maxWidth: '380px',
              }}
            >
              {/* Square Portrait Container */}
              <div
                style={{
                  width: '100%',
                  aspectRatio: '1 / 1',
                  borderRadius: '20px',
                  backgroundColor: '#FFFFFF',
                  border: '8px solid #FFFFFF',
                  boxShadow: '0 20px 40px -10px rgba(53, 35, 27, 0.14), 0 6px 16px rgba(53, 35, 27, 0.05)',
                  overflow: 'hidden',
                  position: 'relative',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                {!imageError ? (
                  <img
                    src="/profile.jpg"
                    alt={personalInfo.name}
                    onError={() => setImageError(true)}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      objectPosition: 'center 22%',
                      borderRadius: '12px',
                      display: 'block',
                    }}
                  />
                ) : (
                  <div
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      justifyContent: 'center',
                      padding: '2rem',
                      textAlign: 'center',
                      color: 'var(--text-secondary)',
                    }}
                  >
                    <User size={64} style={{ color: 'var(--text-primary)', marginBottom: '0.75rem' }} />
                    <div style={{ fontWeight: 700, color: 'var(--text-primary)' }}>Ashish Sharma</div>
                    <div style={{ fontSize: '0.8125rem' }}>Python Backend Developer</div>
                  </div>
                )}
              </div>

              {/* Signature Floating Badge at Bottom Corner */}
              <div
                style={{
                  position: 'absolute',
                  bottom: '-12px',
                  left: '-12px',
                  backgroundColor: '#FFFFFF',
                  padding: '0.5rem 1.125rem',
                  borderRadius: '14px',
                  boxShadow: '0 8px 20px -4px rgba(53, 35, 27, 0.12)',
                  border: '1px solid var(--border-color)',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  zIndex: 2,
                }}
              >
                <span
                  style={{
                    fontFamily: 'var(--font-script)',
                    fontSize: '1.4rem',
                    fontWeight: 700,
                    color: 'var(--text-primary)',
                    whiteSpace: 'nowrap',
                    lineHeight: 1,
                  }}
                >
                  APIs with purpose ✨
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (min-width: 960px) {
          .hero-grid {
            grid-template-columns: 1.25fr 0.85fr !important;
            gap: 4rem !important;
          }
        }
        @media (max-width: 640px) {
          .hero-square-wrapper {
            max-width: 280px !important;
            margin: 0 auto !important;
          }
          .hero-actions {
            flex-direction: column !important;
            align-items: stretch !important;
          }
          .hero-actions .btn {
            width: 100% !important;
          }
        }
      `}</style>
    </section>
  );
};
