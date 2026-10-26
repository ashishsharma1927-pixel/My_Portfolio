import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Experience', href: '#experience' },
    { label: 'Education', href: '#education' },
    { label: 'Contact', href: '#contact' },
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
        backgroundColor: scrolled ? 'rgba(248, 250, 252, 0.94)' : 'rgba(248, 250, 252, 0.8)',
        backdropFilter: 'blur(8px)',
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
        {/* Brand Mark */}
        <a
          href="#home"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.625rem',
            fontWeight: 700,
            fontSize: '1.0625rem',
            color: 'var(--text-primary)',
            letterSpacing: '-0.01em',
          }}
          aria-label="Ashish Sharma Home"
        >
          <span
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '32px',
              height: '32px',
              borderRadius: 'var(--radius-sm)',
              backgroundColor: 'var(--color-accent)',
              color: '#FFFFFF',
              fontWeight: 800,
              fontSize: '0.875rem',
              letterSpacing: '0.02em',
            }}
          >
            AS
          </span>
          <span>{personalInfo.name}</span>
        </a>

        {/* Desktop Navigation */}
        <nav
          className="desktop-nav"
          style={{
            display: 'none',
            alignItems: 'center',
            gap: '1.75rem',
          }}
        >
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              style={{
                fontSize: '0.9375rem',
                color: 'var(--text-secondary)',
                fontWeight: 500,
              }}
              onMouseEnter={(e) => ((e.target as HTMLElement).style.color = 'var(--text-primary)')}
              onMouseLeave={(e) => ((e.target as HTMLElement).style.color = 'var(--text-secondary)')}
            >
              {link.label}
            </a>
          ))}

          <a
            href="#contact"
            className="btn btn-subtle btn-sm"
            style={{ marginLeft: '0.5rem' }}
          >
            Let's Talk
            <ArrowUpRight size={14} />
          </a>
        </nav>

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
            borderRadius: 'var(--radius-sm)',
            border: '1px solid var(--border-color)',
            backgroundColor: 'var(--card-bg)',
            color: 'var(--text-primary)',
          }}
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
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
            backgroundColor: 'var(--card-bg)',
            borderBottom: '1px solid var(--border-color)',
            boxShadow: 'var(--shadow-card-hover)',
            padding: '1.25rem 1.5rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '0.75rem',
          }}
        >
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={handleLinkClick}
              style={{
                padding: '0.625rem 0.5rem',
                fontSize: '1rem',
                fontWeight: 500,
                color: 'var(--text-primary)',
                borderBottom: '1px solid #F1F5F9',
              }}
            >
              {link.label}
            </a>
          ))}

          <a
            href="#contact"
            onClick={handleLinkClick}
            className="btn btn-primary"
            style={{ marginTop: '0.5rem', width: '100%' }}
          >
            Let's Talk
          </a>
        </div>
      )}

      <style>{`
        @media (min-width: 820px) {
          .desktop-nav {
            display: flex !important;
          }
          .mobile-toggle {
            display: none !important;
          }
        }
      `}</style>
    </header>
  );
};
