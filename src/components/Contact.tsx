import React, { useState } from 'react';
import { Mail, Copy, Check, MapPin, Phone, ArrowUpRight } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { personalInfo } from '../data/portfolioData';

export const Contact: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="section">
      <div className="container">
        <div style={{ maxWidth: '780px', margin: '0 auto', textAlign: 'center' }}>
          {/* Header */}
          <div className="section-header" style={{ marginBottom: '2rem' }}>
            <span className="section-label">Get In Touch</span>
            <h2 className="section-heading">Let's Build Something Together</h2>
            <p className="section-subtitle" style={{ margin: '0.75rem auto 0', maxWidth: '580px' }}>
              Have a backend project, a development opportunity, or an idea to discuss? Feel free to get in touch.
            </p>
          </div>

          {/* Main Contact Card */}
          <div
            className="card"
            style={{
              padding: '2.5rem 2rem',
              backgroundColor: '#FFFFFF',
              boxShadow: 'var(--shadow-card-hover)',
              borderRadius: 'var(--radius-lg)',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '1.5rem',
            }}
          >
            {/* Email Actions */}
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'center',
                gap: '0.875rem',
                width: '100%',
              }}
            >
              <a
                href={`mailto:${personalInfo.email}?subject=Backend%20Developer%20Inquiry%20-%20Ashish%20Sharma`}
                className="btn btn-primary"
                style={{ padding: '0.75rem 1.75rem', fontSize: '1rem' }}
              >
                <Mail size={18} />
                Send an Email
                <ArrowUpRight size={16} />
              </a>

              <button
                type="button"
                onClick={handleCopyEmail}
                className="btn btn-secondary"
                style={{ padding: '0.75rem 1.25rem', fontSize: '0.9375rem' }}
                aria-label="Copy email address"
              >
                {copied ? (
                  <>
                    <Check size={16} style={{ color: '#10B981' }} />
                    <span style={{ color: '#10B981', fontWeight: 600 }}>Copied to Clipboard!</span>
                  </>
                ) : (
                  <>
                    <Copy size={16} />
                    <span>Copy: {personalInfo.email}</span>
                  </>
                )}
              </button>
            </div>

            {/* Quick Details Bar */}
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'center',
                gap: '1.75rem',
                paddingTop: '1rem',
                borderTop: '1px solid var(--border-color)',
                width: '100%',
                fontSize: '0.875rem',
                color: 'var(--text-secondary)',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.375rem' }}>
                <MapPin size={15} style={{ color: 'var(--color-accent)' }} />
                <span>{personalInfo.location}</span>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '0.375rem' }}>
                <Phone size={15} style={{ color: 'var(--color-accent)' }} />
                <a
                  href={`tel:${personalInfo.phone.replace(/\s+/g, '')}`}
                  style={{ color: 'var(--text-secondary)' }}
                  onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = 'var(--text-primary)')}
                  onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = 'var(--text-secondary)')}
                >
                  {personalInfo.phone}
                </a>
              </div>
            </div>

            {/* Social Links Row */}
            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                gap: '1.25rem',
                paddingTop: '0.5rem',
              }}
            >
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary btn-sm"
              >
                <GithubIcon size={16} />
                <span>GitHub Profile</span>
                <ArrowUpRight size={13} />
              </a>

              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary btn-sm"
              >
                <LinkedinIcon size={16} />
                <span>LinkedIn Profile</span>
                <ArrowUpRight size={13} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
