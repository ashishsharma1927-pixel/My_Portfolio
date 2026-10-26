import React from 'react';
import { ArrowUp } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { personalInfo } from '../data/portfolioData';

const currentYear = new Date().getFullYear();

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer
      style={{
        borderTop: '1px solid var(--border-color)',
        backgroundColor: '#FFFFFF',
        padding: '2.5rem 0',
      }}
    >
      <div
        className="container"
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '1.5rem',
        }}
      >
        {/* Left: Name and Title */}
        <div>
          <div
            style={{
              fontWeight: 700,
              fontSize: '1rem',
              color: 'var(--text-primary)',
            }}
          >
            {personalInfo.name}
          </div>
          <div
            style={{
              fontSize: '0.875rem',
              color: 'var(--text-secondary)',
              marginTop: '0.125rem',
            }}
          >
            {personalInfo.title} • {currentYear}
          </div>
        </div>

        {/* Right: Social Links & Back to Top */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '1.25rem',
          }}
        >
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            style={{
              color: 'var(--text-secondary)',
              display: 'flex',
              alignItems: 'center',
              gap: '0.375rem',
              fontSize: '0.875rem',
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
            aria-label="LinkedIn"
            style={{
              color: 'var(--text-secondary)',
              display: 'flex',
              alignItems: 'center',
              gap: '0.375rem',
              fontSize: '0.875rem',
            }}
            onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = 'var(--color-accent)')}
            onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = 'var(--text-secondary)')}
          >
            <LinkedinIcon size={18} />
            <span>LinkedIn</span>
          </a>

          <button
            onClick={scrollToTop}
            aria-label="Scroll to top"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '34px',
              height: '34px',
              borderRadius: 'var(--radius-sm)',
              border: '1px solid var(--border-color)',
              backgroundColor: '#F8FAFC',
              color: 'var(--text-secondary)',
              marginLeft: '0.5rem',
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.color = 'var(--color-accent)';
              (e.currentTarget as HTMLElement).style.borderColor = 'var(--color-accent-border)';
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.color = 'var(--text-secondary)';
              (e.currentTarget as HTMLElement).style.borderColor = 'var(--border-color)';
            }}
          >
            <ArrowUp size={16} />
          </button>
        </div>
      </div>
    </footer>
  );
};
