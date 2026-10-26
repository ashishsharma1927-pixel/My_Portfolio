import React from 'react';
import { ArrowRight, Sparkles, FileText } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { PythonFrame } from './PythonFrame';
import { personalInfo } from '../data/portfolioData';

export const Hero: React.FC = () => {

  return (
    <section
      id="home"
      style={{
        paddingTop: 'calc(var(--nav-height) + 2.5rem)',
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
            gap: '3.5rem',
            alignItems: 'center',
          }}
        >
          {/* Left Column: Typography & CTAs (Matched to reference layout) */}
          <div style={{ maxWidth: '580px' }}>
            {/* Tag Pill with Sparkle (Matched to '✨ Graphic Designer') */}
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
                marginBottom: '1.5rem',
              }}
            >
              <Sparkles size={15} style={{ color: 'var(--text-primary)' }} />
              <span>{personalInfo.title}</span>
            </div>

            {/* Headline (Matched to 'Hi, I'm Fatima!') */}
            <h1
              className="hero-greeting"
              style={{
                fontSize: '3.5rem',
                lineHeight: 1.08,
                fontWeight: 800,
                color: 'var(--text-primary)',
                marginBottom: '1.5rem',
                letterSpacing: '-0.03em',
              }}
            >
              Hi, I'm<br />
              <span style={{ color: 'var(--text-primary)' }}>Ashish!</span>
            </h1>

            {/* Description Paragraph */}
            <p
              style={{
                fontSize: '1.125rem',
                lineHeight: 1.7,
                color: 'var(--text-secondary)',
                marginBottom: '2rem',
                maxWidth: '520px',
              }}
            >
              Creative and detail-oriented Python Backend Developer creating robust REST APIs,
              clean database architectures, and scalable web solutions that power modern applications.
            </p>

            {/* Pill Action Buttons (Matched to 'View My Work ->' & 'Get in Touch') */}
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '1rem',
                alignItems: 'center',
                marginBottom: '2rem',
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
                paddingTop: '0.5rem',
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

          {/* Right Column: Custom Python Logo Frame */}
          <PythonFrame />
        </div>
      </div>

      <style>{`
        @media (min-width: 890px) {
          .hero-grid {
            grid-template-columns: 1.15fr 0.85fr !important;
          }
        }
        @media (max-width: 640px) {
          .hero-greeting {
            font-size: 2.75rem !important;
          }
        }
      `}</style>
    </section>
  );
};
