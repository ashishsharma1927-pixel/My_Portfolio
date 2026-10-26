import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Section spy
      const sections = ['home', 'about', 'skills', 'projects', 'experience', 'education', 'contact'];
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 120 && rect.bottom >= 120) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#home', id: 'home' },
    { label: 'About', href: '#about', id: 'about' },
    { label: 'Skills', href: '#skills', id: 'skills' },
    { label: 'Projects', href: '#projects', id: 'projects' },
    { label: 'Experience', href: '#experience', id: 'experience' },
    { label: 'Education', href: '#education', id: 'education' },
    { label: 'Contact', href: '#contact', id: 'contact' },
  ];

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <header
      className={`navbar-wrapper ${scrolled ? 'navbar-scrolled' : ''}`}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        height: 'var(--nav-height)',
        zIndex: 50,
        backgroundColor: scrolled ? 'rgba(244, 239, 234, 0.95)' : 'rgba(244, 239, 234, 0.85)',
        backdropFilter: 'blur(10px)',
        borderBottom: scrolled ? '1px solid var(--border-color)' : '1px solid transparent',
        transition: 'all var(--transition-normal)',
      }}
    >
      <div
        className="container"
        style={{
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        {/* Brand Mark (Matched to circular badge in screenshot) */}
        <a
          href="#home"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.625rem',
            fontWeight: 800,
            fontSize: '1.125rem',
            color: 'var(--text-primary)',
            letterSpacing: '-0.02em',
          }}
          aria-label="Ashish Sharma Home"
        >
          <span
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '36px',
              height: '36px',
              borderRadius: '50%',
              backgroundColor: 'var(--text-primary)',
              color: '#F4EFEA',
              fontWeight: 800,
              fontSize: '0.875rem',
              letterSpacing: '0.02em',
              boxShadow: '0 2px 5px rgba(53, 35, 27, 0.2)',
            }}
          >
            AS
          </span>
          <span style={{ fontWeight: 800 }}>{personalInfo.name}</span>
        </a>

        {/* Desktop Navigation Pill Bar */}
        <nav
          className="desktop-nav"
          style={{
            display: 'none',
            alignItems: 'center',
            gap: '0.375rem',
          }}
        >
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.label}
                href={link.href}
                style={{
                  fontSize: '0.9375rem',
                  color: 'var(--text-primary)',
                  fontWeight: isActive ? 700 : 500,
                  padding: '0.4375rem 0.875rem',
                  borderRadius: 'var(--radius-pill)',
                  backgroundColor: isActive ? 'var(--bg-subtle)' : 'transparent',
                  transition: 'all var(--transition-fast)',
                }}
                onMouseEnter={(e) => {
                  if (!isActive) {
                    (e.target as HTMLElement).style.backgroundColor = 'var(--bg-subtle-hover)';
                  }
                }}
                onMouseLeave={(e) => {
                  if (!isActive) {
                    (e.target as HTMLElement).style.backgroundColor = 'transparent';
                  }
                }}
              >
                {link.label}
              </a>
            );
          })}
        </nav>

        {/* Right CTA Button (Pill shaped with subtle border, like the language/action button in screenshot) */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          <a
            href="#contact"
            className="btn btn-secondary btn-sm desktop-cta"
            style={{
              borderRadius: 'var(--radius-pill)',
              padding: '0.5rem 1.125rem',
              fontWeight: 600,
            }}
          >
            Let's Talk
            <ArrowUpRight size={14} />
          </a>

          {/* Mobile Hamburger Toggle */}
          <button
            className="mobile-toggle"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isOpen}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '0.5rem',
              borderRadius: 'var(--radius-pill)',
              border: '1.5px solid var(--border-color)',
              backgroundColor: 'var(--card-bg)',
              color: 'var(--text-primary)',
            }}
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div
          className="mobile-menu"
          style={{
            position: 'absolute',
            top: 'var(--nav-height)',
            left: 0,
            right: 0,
            backgroundColor: 'var(--bg-main)',
            borderBottom: '1px solid var(--border-color)',
            boxShadow: 'var(--shadow-card-hover)',
            padding: '1.25rem 1.5rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '0.5rem',
          }}
        >
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={handleLinkClick}
              style={{
                padding: '0.625rem 1rem',
                fontSize: '1rem',
                fontWeight: 600,
                color: 'var(--text-primary)',
                borderRadius: 'var(--radius-pill)',
                backgroundColor: activeSection === link.id ? 'var(--bg-subtle)' : 'transparent',
              }}
            >
              {link.label}
            </a>
          ))}

          <a
            href="#contact"
            onClick={handleLinkClick}
            className="btn btn-primary"
            style={{ marginTop: '0.75rem', width: '100%' }}
          >
            Let's Talk
          </a>
        </div>
      )}

      <style>{`
        @media (min-width: 860px) {
          .desktop-nav {
            display: flex !important;
          }
          .mobile-toggle {
            display: none !important;
          }
          .desktop-cta {
            display: inline-flex !important;
          }
        }
        @media (max-width: 859px) {
          .desktop-cta {
            display: none !important;
          }
        }
      `}</style>
    </header>
  );
};
