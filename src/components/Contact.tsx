import React, { useState } from 'react';
import {
  Mail,
  Copy,
  Check,
  MapPin,
  Phone,
  ArrowUpRight,
  Send,
  X,
  ExternalLink,
  Loader2,
  Sparkles,
} from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { personalInfo } from '../data/portfolioData';

export const Contact: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const [modalCopied, setModalCopied] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Form State
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'Backend Developer Inquiry - Ashish Sharma',
    message: '',
  });

  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [statusMessage, setStatusMessage] = useState('');

  const handleCopyEmail = (isModal = false) => {
    navigator.clipboard.writeText(personalInfo.email);
    if (isModal) {
      setModalCopied(true);
      setTimeout(() => setModalCopied(false), 2000);
    } else {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const gmailComposeUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(
    personalInfo.email
  )}&su=${encodeURIComponent(formData.subject || 'Backend Developer Inquiry - Ashish Sharma')}&body=${encodeURIComponent(
    formData.message ? `Hi Ashish,\n\n${formData.message}\n\nFrom: ${formData.name} (${formData.email})` : ''
  )}`;

  const mailtoUrl = `mailto:${personalInfo.email}?subject=${encodeURIComponent(
    formData.subject || 'Backend Developer Inquiry - Ashish Sharma'
  )}&body=${encodeURIComponent(
    formData.message ? `Hi Ashish,\n\n${formData.message}\n\nFrom: ${formData.name} (${formData.email})` : ''
  )}`;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setFormStatus('error');
      setStatusMessage('Please fill in your name, email, and message.');
      return;
    }

    setFormStatus('submitting');
    setStatusMessage('');

    try {
      const response = await fetch(`https://formsubmit.co/ajax/${personalInfo.email}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          _subject: `Portfolio Inquiry: ${formData.subject} (from ${formData.name})`,
          message: formData.message,
        }),
      });

      if (response.ok) {
        setFormStatus('success');
        setStatusMessage('Your message has been sent directly to Ashish! He will get back to you shortly.');
        setFormData({
          name: '',
          email: '',
          subject: 'Backend Developer Inquiry - Ashish Sharma',
          message: '',
        });
      } else {
        throw new Error('Failed to send message via form endpoint.');
      }
    } catch (err) {
      console.warn('FormSubmit AJAX fallback triggered:', err);
      // Graceful fallback to opening mail client
      setFormStatus('error');
      setStatusMessage('Direct send encountered a network issue. You can click below to send via Gmail or your mail app!');
    }
  };

  return (
    <section id="contact" className="section">
      <div className="container">
        <div style={{ width: '100%', maxWidth: '960px', margin: '0 auto', textAlign: 'center' }}>
          {/* Header */}
          <div className="section-header" style={{ marginBottom: '2.5rem' }}>
            <span className="section-label">Get In Touch</span>
            <h2 className="section-heading">Let's Build Something Together</h2>
            <p className="section-subtitle" style={{ margin: '0.75rem auto 0', maxWidth: '640px' }}>
              Have a backend project, a development opportunity, or an idea to discuss? Reach out directly via email, contact form, or phone.
            </p>
          </div>

          {/* Main Contact Card */}
          <div
            className="card"
            style={{
              padding: 'clamp(2rem, 4.5vw, 3.5rem) 1.5rem',
              backgroundColor: '#FFFFFF',
              boxShadow: 'var(--shadow-card-hover)',
              borderRadius: 'var(--radius-lg)',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '2rem',
            }}
          >
            {/* Action Buttons Row */}
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'center',
                gap: '0.875rem',
                width: '100%',
              }}
            >
              {/* Primary: Opens Interactive Composer Modal */}
              <button
                type="button"
                onClick={() => setIsModalOpen(true)}
                className="btn btn-primary"
                style={{ padding: '0.875rem 1.875rem', fontSize: '1rem', cursor: 'pointer' }}
                title="Send an email to Ashish Sharma"
              >
                <Mail size={18} />
                <span>Send an Email</span>
                <ArrowUpRight size={16} />
              </button>

              {/* Instant Web Gmail Compose Link */}
              <a
                href={gmailComposeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary"
                style={{ padding: '0.875rem 1.375rem', fontSize: '0.9375rem' }}
                title="Open directly in Gmail web composer"
              >
                <ExternalLink size={16} />
                <span>Open in Gmail (Web)</span>
              </a>

              {/* Copy Email Button */}
              <button
                type="button"
                onClick={() => handleCopyEmail(false)}
                className="btn btn-secondary"
                style={{ padding: '0.875rem 1.375rem', fontSize: '0.9375rem' }}
                aria-label="Copy email address"
              >
                {copied ? (
                  <>
                    <Check size={16} style={{ color: '#2D6A4F' }} />
                    <span style={{ color: '#2D6A4F', fontWeight: 700 }}>Copied to Clipboard!</span>
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
                paddingTop: '1.25rem',
                borderTop: '1px solid var(--border-color)',
                width: '100%',
                fontSize: '0.9375rem',
                color: 'var(--text-secondary)',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <MapPin size={16} style={{ color: 'var(--text-primary)' }} />
                <span>{personalInfo.location}</span>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <Phone size={16} style={{ color: 'var(--text-primary)' }} />
                <a
                  href={`tel:${personalInfo.phone.replace(/\s+/g, '')}`}
                  style={{ color: 'var(--text-primary)', fontWeight: 600 }}
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
                gap: '1rem',
                paddingTop: '0.25rem',
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

      {/* Interactive Email Composer Modal */}
      {isModalOpen && (
        <div
          className="contact-modal-backdrop"
          onClick={() => setIsModalOpen(false)}
          style={{
            position: 'fixed',
            inset: 0,
            backgroundColor: 'rgba(36, 23, 18, 0.65)',
            backdropFilter: 'blur(6px)',
            zIndex: 1000,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '1rem',
            animation: 'fadeIn 0.2s ease-out',
          }}
        >
          <div
            className="contact-modal-dialog"
            onClick={(e) => e.stopPropagation()}
            style={{
              backgroundColor: '#FFFFFF',
              borderRadius: 'var(--radius-lg)',
              border: '1px solid var(--border-color)',
              boxShadow: '0 24px 60px rgba(53, 35, 27, 0.25)',
              width: '100%',
              maxWidth: '580px',
              maxHeight: '90vh',
              overflowY: 'auto',
              padding: 'clamp(1.5rem, 3.5vw, 2.25rem)',
              position: 'relative',
              textAlign: 'left',
              animation: 'slideUp 0.25s cubic-bezier(0.16, 1, 0.3, 1)',
            }}
          >
            {/* Modal Close Button */}
            <button
              type="button"
              onClick={() => setIsModalOpen(false)}
              aria-label="Close modal"
              style={{
                position: 'absolute',
                top: '1.25rem',
                right: '1.25rem',
                width: '32px',
                height: '32px',
                borderRadius: '50%',
                border: '1px solid var(--border-color)',
                backgroundColor: 'var(--bg-main)',
                color: 'var(--text-secondary)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                transition: 'all var(--transition-fast)',
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.backgroundColor = 'var(--bg-subtle)';
                (e.currentTarget as HTMLElement).style.color = 'var(--text-primary)';
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.backgroundColor = 'var(--bg-main)';
                (e.currentTarget as HTMLElement).style.color = 'var(--text-secondary)';
              }}
            >
              <X size={16} />
            </button>

            {/* Modal Header */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.5rem' }}>
              <div
                style={{
                  width: '42px',
                  height: '42px',
                  borderRadius: '12px',
                  backgroundColor: 'var(--bg-subtle)',
                  border: '1px solid var(--border-color)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--text-primary)',
                  flexShrink: 0,
                }}
              >
                <Mail size={22} />
              </div>
              <div>
                <h3 style={{ fontSize: '1.35rem', fontWeight: 800, color: 'var(--text-primary)', lineHeight: 1.2 }}>
                  Send an Email
                </h3>
                <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', marginTop: '0.15rem' }}>
                  Directly to <strong style={{ color: 'var(--text-primary)' }}>{personalInfo.email}</strong>
                </p>
              </div>
            </div>

            {/* Quick Launch Buttons Row */}
            <div
              style={{
                backgroundColor: 'var(--bg-main)',
                border: '1px solid var(--border-color)',
                borderRadius: 'var(--radius-md)',
                padding: '0.875rem',
                marginTop: '1.25rem',
                marginBottom: '1.5rem',
              }}
            >
              <div
                style={{
                  fontSize: '0.75rem',
                  fontWeight: 700,
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em',
                  color: 'var(--text-secondary)',
                  marginBottom: '0.5rem',
                }}
              >
                Instant 1-Click Launch Options:
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                <a
                  href={gmailComposeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-secondary btn-sm"
                  style={{ fontSize: '0.8125rem' }}
                >
                  <ExternalLink size={14} />
                  <span>Open in Gmail (Web)</span>
                </a>

                <a
                  href={mailtoUrl}
                  className="btn btn-secondary btn-sm"
                  style={{ fontSize: '0.8125rem' }}
                >
                  <Mail size={14} />
                  <span>Default Mail App</span>
                </a>

                <button
                  type="button"
                  onClick={() => handleCopyEmail(true)}
                  className="btn btn-secondary btn-sm"
                  style={{ fontSize: '0.8125rem' }}
                >
                  {modalCopied ? (
                    <>
                      <Check size={14} style={{ color: '#2D6A4F' }} />
                      <span style={{ color: '#2D6A4F', fontWeight: 700 }}>Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy size={14} />
                      <span>Copy Address</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* In-Modal Direct Message Form */}
            <div
              style={{
                fontSize: '0.8125rem',
                fontWeight: 700,
                color: 'var(--text-primary)',
                marginBottom: '0.875rem',
                display: 'flex',
                alignItems: 'center',
                gap: '0.4rem',
              }}
            >
              <Sparkles size={14} style={{ color: 'var(--text-primary)' }} />
              <span>Or compose and send your message directly:</span>
            </div>

            {formStatus === 'success' ? (
              <div
                style={{
                  padding: '1.75rem 1.25rem',
                  backgroundColor: '#E8F5E9',
                  border: '1px solid #C8E6C9',
                  borderRadius: 'var(--radius-md)',
                  textAlign: 'center',
                  color: '#2D6A4F',
                }}
              >
                <div
                  style={{
                    width: '48px',
                    height: '48px',
                    borderRadius: '50%',
                    backgroundColor: '#C8E6C9',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto 0.75rem',
                  }}
                >
                  <Check size={24} style={{ color: '#2D6A4F' }} />
                </div>
                <h4 style={{ fontSize: '1.125rem', fontWeight: 700, marginBottom: '0.5rem', color: '#2D6A4F' }}>
                  Message Sent Successfully!
                </h4>
                <p style={{ fontSize: '0.875rem', color: '#2D6A4F', lineHeight: 1.5 }}>
                  {statusMessage}
                </p>
                <button
                  type="button"
                  onClick={() => setFormStatus('idle')}
                  className="btn btn-secondary btn-sm"
                  style={{ marginTop: '1rem', backgroundColor: '#FFFFFF' }}
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '0.875rem' }}>
                {formStatus === 'error' && (
                  <div
                    style={{
                      padding: '0.75rem 1rem',
                      backgroundColor: '#FEE2E2',
                      border: '1px solid #FECACA',
                      borderRadius: 'var(--radius-sm)',
                      fontSize: '0.8125rem',
                      color: '#B91C1C',
                    }}
                  >
                    {statusMessage}
                  </div>
                )}

                {/* Name & Email Inputs Grid */}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '0.875rem' }}>
                  <div>
                    <label
                      htmlFor="sender-name"
                      style={{
                        display: 'block',
                        fontSize: '0.8125rem',
                        fontWeight: 700,
                        color: 'var(--text-primary)',
                        marginBottom: '0.35rem',
                      }}
                    >
                      Your Name <span style={{ color: '#DC2626' }}>*</span>
                    </label>
                    <input
                      id="sender-name"
                      type="text"
                      required
                      placeholder="e.g. John Doe / Hiring Team"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      style={{
                        width: '100%',
                        padding: '0.6875rem 0.875rem',
                        borderRadius: 'var(--radius-sm)',
                        border: '1.5px solid var(--border-color)',
                        backgroundColor: 'var(--bg-main)',
                        color: 'var(--text-primary)',
                        fontSize: '0.9375rem',
                        fontFamily: 'inherit',
                        outline: 'none',
                        transition: 'border-color var(--transition-fast)',
                      }}
                      onFocus={(e) => (e.target.style.borderColor = 'var(--text-primary)')}
                      onBlur={(e) => (e.target.style.borderColor = 'var(--border-color)')}
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="sender-email"
                      style={{
                        display: 'block',
                        fontSize: '0.8125rem',
                        fontWeight: 700,
                        color: 'var(--text-primary)',
                        marginBottom: '0.35rem',
                      }}
                    >
                      Your Email <span style={{ color: '#DC2626' }}>*</span>
                    </label>
                    <input
                      id="sender-email"
                      type="email"
                      required
                      placeholder="e.g. john@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      style={{
                        width: '100%',
                        padding: '0.6875rem 0.875rem',
                        borderRadius: 'var(--radius-sm)',
                        border: '1.5px solid var(--border-color)',
                        backgroundColor: 'var(--bg-main)',
                        color: 'var(--text-primary)',
                        fontSize: '0.9375rem',
                        fontFamily: 'inherit',
                        outline: 'none',
                        transition: 'border-color var(--transition-fast)',
                      }}
                      onFocus={(e) => (e.target.style.borderColor = 'var(--text-primary)')}
                      onBlur={(e) => (e.target.style.borderColor = 'var(--border-color)')}
                    />
                  </div>
                </div>

                {/* Subject Input */}
                <div>
                  <label
                    htmlFor="sender-subject"
                    style={{
                      display: 'block',
                      fontSize: '0.8125rem',
                      fontWeight: 700,
                      color: 'var(--text-primary)',
                      marginBottom: '0.35rem',
                    }}
                  >
                    Subject
                  </label>
                  <input
                    id="sender-subject"
                    type="text"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '0.6875rem 0.875rem',
                      borderRadius: 'var(--radius-sm)',
                      border: '1.5px solid var(--border-color)',
                      backgroundColor: 'var(--bg-main)',
                      color: 'var(--text-primary)',
                      fontSize: '0.9375rem',
                      fontFamily: 'inherit',
                      outline: 'none',
                      transition: 'border-color var(--transition-fast)',
                    }}
                    onFocus={(e) => (e.target.style.borderColor = 'var(--text-primary)')}
                    onBlur={(e) => (e.target.style.borderColor = 'var(--border-color)')}
                  />
                </div>

                {/* Message Textarea */}
                <div>
                  <label
                    htmlFor="sender-message"
                    style={{
                      display: 'block',
                      fontSize: '0.8125rem',
                      fontWeight: 700,
                      color: 'var(--text-primary)',
                      marginBottom: '0.35rem',
                    }}
                  >
                    Message <span style={{ color: '#DC2626' }}>*</span>
                  </label>
                  <textarea
                    id="sender-message"
                    required
                    rows={4}
                    placeholder="Write your message, project idea, or opportunity here..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '0.6875rem 0.875rem',
                      borderRadius: 'var(--radius-sm)',
                      border: '1.5px solid var(--border-color)',
                      backgroundColor: 'var(--bg-main)',
                      color: 'var(--text-primary)',
                      fontSize: '0.9375rem',
                      fontFamily: 'inherit',
                      outline: 'none',
                      resize: 'vertical',
                      transition: 'border-color var(--transition-fast)',
                    }}
                    onFocus={(e) => (e.target.style.borderColor = 'var(--text-primary)')}
                    onBlur={(e) => (e.target.style.borderColor = 'var(--border-color)')}
                  />
                </div>

                {/* Submit & Action Buttons */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem', marginTop: '0.5rem', alignItems: 'center' }}>
                  <button
                    type="submit"
                    disabled={formStatus === 'submitting'}
                    className="btn btn-primary"
                    style={{
                      padding: '0.75rem 1.625rem',
                      fontSize: '0.9375rem',
                      flex: '1 1 180px',
                      justifyContent: 'center',
                      opacity: formStatus === 'submitting' ? 0.75 : 1,
                      cursor: formStatus === 'submitting' ? 'not-allowed' : 'pointer',
                    }}
                  >
                    {formStatus === 'submitting' ? (
                      <>
                        <Loader2 size={16} className="spin-animation" />
                        <span>Sending Message...</span>
                      </>
                    ) : (
                      <>
                        <Send size={16} />
                        <span>Send Message Now</span>
                      </>
                    )}
                  </button>

                  <a
                    href={gmailComposeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-secondary"
                    style={{ padding: '0.75rem 1.25rem', fontSize: '0.875rem' }}
                    title="Send this draft directly via Gmail in browser"
                  >
                    <ExternalLink size={15} />
                    <span>Send via Gmail</span>
                  </a>
                </div>
              </form>
            )}
          </div>
        </div>
      )}

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(12px) scale(0.98); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }
        .spin-animation {
          animation: spin 1s linear infinite;
        }
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
    </section>
  );
};
