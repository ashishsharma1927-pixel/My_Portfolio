import React, { useState } from 'react';
import { ExternalLink, Activity, Layers, Rotate3d } from 'lucide-react';

interface FinishOption {
  id: string;
  name: string;
  badge: string;
  accent: string;
  glow: string;
  coreGradient: string;
  facetOpacity: number;
  tolerance: string;
}

const FINISHES: FinishOption[] = [
  {
    id: 'titanium',
    name: 'Raw Titanium',
    badge: 'Grade 5 Billet',
    accent: '#60A5FA',
    glow: 'rgba(96, 165, 250, 0.4)',
    coreGradient: 'radial-gradient(circle at 40% 35%, #93C5FD 0%, #3B82F6 45%, #1E3A8A 85%, #0B132B 100%)',
    facetOpacity: 0.35,
    tolerance: '±0.005mm CNC',
  },
  {
    id: 'obsidian',
    name: 'Matte Obsidian',
    badge: 'Carbon PVD',
    accent: '#A78BFA',
    glow: 'rgba(167, 139, 250, 0.35)',
    coreGradient: 'radial-gradient(circle at 40% 35%, #C4B5FD 0%, #7C3AED 45%, #31135E 85%, #0F0A1C 100%)',
    facetOpacity: 0.45,
    tolerance: 'Zero-Scatter PVD',
  },
  {
    id: 'silver',
    name: 'Machined Silver',
    badge: 'Aerospace Alloy',
    accent: '#38BDF8',
    glow: 'rgba(56, 189, 248, 0.4)',
    coreGradient: 'radial-gradient(circle at 40% 35%, #BAE6FD 0%, #0EA5E9 45%, #075985 85%, #082F49 100%)',
    facetOpacity: 0.3,
    tolerance: 'Surgical Spec',
  },
  {
    id: 'bronze',
    name: 'Imperial Bronze',
    badge: 'Hand-Finished',
    accent: '#F59E0B',
    glow: 'rgba(245, 158, 11, 0.4)',
    coreGradient: 'radial-gradient(circle at 40% 35%, #FDE68A 0%, #D97706 45%, #78350F 85%, #1C0F05 100%)',
    facetOpacity: 0.4,
    tolerance: 'Antiqued Patina',
  },
];

export const SegsPreview: React.FC = () => {
  const [activeFinishId, setActiveFinishId] = useState<string>('titanium');
  const activeFinish = FINISHES.find((f) => f.id === activeFinishId) || FINISHES[0];

  return (
    <div className="segs-mockup-wrapper">
      {/* Top Window / Application Bar */}
      <div className="segs-mockup-header">
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.625rem' }}>
          {/* SEGS Faceted Diamond Icon */}
          <div className="segs-logo-icon">
            <svg viewBox="0 0 24 24" fill="none" style={{ width: '14px', height: '14px' }}>
              <polygon points="12,2 22,8 22,16 12,22 2,16 2,8" fill="url(#segsGemGrad)" stroke="#60A5FA" strokeWidth="1.2" />
              <polygon points="12,2 22,8 12,12 2,8" fill="rgba(255,255,255,0.4)" />
              <polygon points="12,12 22,8 22,16 12,22" fill="rgba(96,165,250,0.6)" />
              <polygon points="12,12 12,22 2,16 2,8" fill="rgba(30,58,138,0.7)" />
              <defs>
                <linearGradient id="segsGemGrad" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor="#93C5FD" />
                  <stop offset="50%" stopColor="#3B82F6" />
                  <stop offset="100%" stopColor="#1E3A8A" />
                </linearGradient>
              </defs>
            </svg>
          </div>
          <span style={{ fontSize: '0.9375rem', fontWeight: 800, color: '#FFFFFF', letterSpacing: '0.04em' }}>
            SEGS<span style={{ color: '#60A5FA' }}>.</span>
          </span>
          <div className="segs-header-nav">
            <span>Shop</span>
            <span style={{ color: '#60A5FA', display: 'inline-flex', alignItems: 'center', gap: '3px' }}>
              3D Lab <span className="segs-new-badge">NEW</span>
            </span>
            <span>Track</span>
          </div>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <span className="segs-status-pill">
            <span className="segs-pulse-dot" />
            <span className="segs-status-text">WebGL 3D Studio</span>
          </span>
        </div>
      </div>

      {/* Main Showcase Canvas */}
      <div className="segs-mockup-body">
        {/* Subtle Star Particles */}
        <div className="segs-stars-overlay" />

        {/* Hero Banner Text */}
        <div style={{ position: 'relative', zIndex: 2, marginBottom: '1rem' }}>
          <div className="segs-category-pill">
            <span style={{ display: 'inline-block', width: '6px', height: '6px', borderRadius: '50%', backgroundColor: '#60A5FA' }} />
            <span>NEXT GENERATION 3D COMMERCE</span>
            <span style={{ color: '#93C5FD' }}>→</span>
          </div>

          <h4 className="segs-hero-title">
            Experience Shopping <span className="segs-gradient-text">Differently.</span>
          </h4>

          <p className="segs-hero-desc">
            Interact, customize, and audition precision titanium audio instruments in real-time WebGL.
          </p>
        </div>

        {/* Center: Interactive 3D Sound Core & Faceted Crystal Gem */}
        <div className="segs-visualizer-container">
          {/* Ambient Lighting Glow tied to active finish */}
          <div
            className="segs-ambient-glow"
            style={{
              background: `radial-gradient(circle, ${activeFinish.glow} 0%, transparent 70%)`,
            }}
          />

          {/* Orbit Indicator Ring */}
          <div className="segs-orbit-ring" />

          {/* Interactive 3D Gem Graphic (SVG Representation matching SEGS screenshot) */}
          <div className="segs-gem-wrapper">
            <svg viewBox="0 0 200 200" className="segs-gem-svg">
              {/* Inner Glowing Sound Core Orb */}
              <defs>
                <radialGradient id={`core-${activeFinish.id}`} cx="40%" cy="35%" r="60%">
                  <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.85" />
                  <stop offset="25%" stopColor={activeFinish.accent} stopOpacity="0.8" />
                  <stop offset="65%" stopColor="#1E293B" stopOpacity="0.9" />
                  <stop offset="100%" stopColor="#0B0F17" stopOpacity="1" />
                </radialGradient>
                <linearGradient id="glassLight" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.65" />
                  <stop offset="50%" stopColor="#FFFFFF" stopOpacity="0.1" />
                  <stop offset="100%" stopColor="#000000" stopOpacity="0.3" />
                </linearGradient>
                <filter id="gemGlow" x="-20%" y="-20%" width="140%" height="140%">
                  <feGaussianBlur stdDeviation="6" result="blur" />
                  <feComposite in="SourceGraphic" in2="blur" operator="over" />
                </filter>
              </defs>

              {/* Central Glowing Acoustic Sphere */}
              <circle
                cx="100"
                cy="100"
                r="44"
                fill={`url(#core-${activeFinish.id})`}
                filter="url(#gemGlow)"
              />

              {/* Specular Highlight on Inner Core */}
              <ellipse
                cx="88"
                cy="85"
                rx="14"
                ry="8"
                fill="#FFFFFF"
                opacity="0.5"
                transform="rotate(-25 88 85)"
              />

              {/* Faceted Outer Polyhedron Crystal Mesh */}
              {/* Top Facet */}
              <polygon
                points="100,28 148,60 100,85 52,60"
                fill="url(#glassLight)"
                stroke="#FFFFFF"
                strokeWidth="1.2"
                strokeOpacity="0.45"
                opacity={activeFinish.facetOpacity + 0.3}
              />
              {/* Front Left Facet */}
              <polygon
                points="52,60 100,85 100,145 42,120"
                fill={activeFinish.accent}
                fillOpacity="0.25"
                stroke="#FFFFFF"
                strokeWidth="1.2"
                strokeOpacity="0.35"
              />
              {/* Front Right Facet */}
              <polygon
                points="100,85 148,60 158,120 100,145"
                fill="#3B82F6"
                fillOpacity="0.3"
                stroke="#FFFFFF"
                strokeWidth="1.2"
                strokeOpacity="0.35"
              />
              {/* Bottom Point Facet */}
              <polygon
                points="100,145 158,120 100,172 42,120"
                fill={activeFinish.accent}
                fillOpacity="0.18"
                stroke="#FFFFFF"
                strokeWidth="1.2"
                strokeOpacity="0.3"
              />
              {/* Additional Geometric Refraction Planes */}
              <polygon
                points="100,28 148,60 158,120"
                fill="#FFFFFF"
                fillOpacity="0.15"
                stroke="#FFFFFF"
                strokeWidth="0.8"
                strokeOpacity="0.25"
              />
              <polygon
                points="100,28 52,60 42,120"
                fill="#FFFFFF"
                fillOpacity="0.1"
                stroke="#FFFFFF"
                strokeWidth="0.8"
                strokeOpacity="0.2"
              />
              {/* Bright Apex Glint */}
              <circle cx="100" cy="28" r="2.5" fill="#FFFFFF" opacity="0.9" />
              <circle cx="100" cy="85" r="2" fill="#FFFFFF" opacity="0.8" />
            </svg>
          </div>

          {/* Interactive Overlay Badge */}
          <div className="segs-telemetry-badge">
            <Rotate3d size={13} style={{ color: activeFinish.accent }} />
            <span>Interactive 3D Orbit • Drag &amp; Inspect</span>
          </div>
        </div>

        {/* Finish Selector HUD (Directly Demonstrates Real-time Shader Customizer) */}
        <div style={{ position: 'relative', zIndex: 2, marginBottom: '1.125rem' }}>
          <div className="segs-finish-header">
            <span style={{ display: 'flex', alignItems: 'center', gap: '0.375rem' }}>
              <Layers size={13} style={{ color: activeFinish.accent }} />
              <span className="segs-finish-title">Material Shader Finishes</span>
            </span>
            <span className="segs-tolerance-tag">{activeFinish.tolerance}</span>
          </div>

          <div className="segs-finish-grid">
            {FINISHES.map((finish) => {
              const isSelected = finish.id === activeFinishId;
              return (
                <button
                  key={finish.id}
                  type="button"
                  onClick={() => setActiveFinishId(finish.id)}
                  className={`segs-finish-btn ${isSelected ? 'active' : ''}`}
                  style={{
                    borderColor: isSelected ? finish.accent : 'rgba(255, 255, 255, 0.1)',
                    backgroundColor: isSelected ? 'rgba(255, 255, 255, 0.08)' : 'rgba(255, 255, 255, 0.03)',
                  }}
                  title={`Switch to ${finish.name}`}
                >
                  <span
                    className="segs-finish-dot"
                    style={{
                      backgroundColor: finish.accent,
                      boxShadow: isSelected ? `0 0 10px ${finish.accent}` : 'none',
                    }}
                  />
                  <span className="segs-finish-btn-text">{finish.name}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Telemetry HUD Grid (Acoustics & WebGL Performance) */}
        <div className="segs-hud-grid">
          <div className="segs-hud-card">
            <div className="segs-hud-label">Frequency Bandwidth</div>
            <div className="segs-hud-val">4 Hz – 48 kHz</div>
          </div>
          <div className="segs-hud-card">
            <div className="segs-hud-label">Harmonic Distortion</div>
            <div className="segs-hud-val">&lt; 0.05% THD</div>
          </div>
          <div className="segs-hud-card">
            <div className="segs-hud-label">Acoustic Driver</div>
            <div className="segs-hud-val">50mm Beryllium</div>
          </div>
          <div className="segs-hud-card">
            <div className="segs-hud-label">Rendering Engine</div>
            <div className="segs-hud-val">Three.js / R3F</div>
          </div>
        </div>

        {/* Quick Launch CTA Banner */}
        <div className="segs-cta-bar">
          <a
            href="https://segs-one.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="segs-launch-btn"
          >
            <span>Explore Live Storefront &amp; 3D Lab</span>
            <ExternalLink size={14} />
          </a>
        </div>
      </div>

      {/* Footer Info */}
      <div className="segs-mockup-footer">
        <Activity size={12} style={{ color: '#60A5FA' }} />
        <span>Live WebGL 3D Platform • React 19 • Tailwind CSS • Vercel Edge</span>
      </div>

      <style>{`
        .segs-mockup-wrapper {
          background-color: #0B0E14;
          border: 1px solid rgba(255, 255, 255, 0.12);
          border-radius: var(--radius-md);
          overflow: hidden;
          box-shadow: 0 18px 40px -10px rgba(0, 0, 0, 0.4), 0 4px 12px rgba(0, 0, 0, 0.2);
          color: #E2E8F0;
          font-family: var(--font-sans);
          transition: transform 0.2s ease, box-shadow 0.2s ease;
        }

        .segs-mockup-header {
          padding: 0.875rem 1.125rem;
          background: rgba(15, 23, 42, 0.85);
          backdrop-filter: blur(12px);
          border-bottom: 1px solid rgba(255, 255, 255, 0.08);
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 0.5rem;
        }

        .segs-logo-icon {
          width: 24px;
          height: 24px;
          border-radius: 6px;
          background: rgba(59, 130, 246, 0.15);
          border: 1px solid rgba(96, 165, 250, 0.3);
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .segs-header-nav {
          display: flex;
          align-items: center;
          gap: 0.875rem;
          margin-left: 0.75rem;
          font-size: 0.78125rem;
          color: #94A3B8;
          font-weight: 600;
        }

        @media (max-width: 480px) {
          .segs-header-nav {
            display: none;
          }
        }

        .segs-new-badge {
          font-size: 0.5625rem;
          font-weight: 800;
          background: rgba(96, 165, 250, 0.2);
          color: #93C5FD;
          padding: 1px 4px;
          border-radius: 4px;
          border: 1px solid rgba(96, 165, 250, 0.4);
        }

        .segs-status-pill {
          font-size: 0.6875rem;
          font-weight: 700;
          color: #34D399;
          background: rgba(16, 185, 129, 0.12);
          padding: 0.25rem 0.65rem;
          border-radius: var(--radius-pill);
          border: 1px solid rgba(16, 185, 129, 0.28);
          display: inline-flex;
          align-items: center;
          gap: 0.375rem;
        }

        .segs-pulse-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background-color: #34D399;
          box-shadow: 0 0 8px #34D399;
          animation: segsPulse 2s infinite ease-in-out;
        }

        @keyframes segsPulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.4; transform: scale(0.85); }
        }

        .segs-mockup-body {
          padding: 1.25rem;
          position: relative;
          background: radial-gradient(circle at 75% 35%, rgba(30, 58, 138, 0.25) 0%, #0B0E14 70%);
        }

        .segs-stars-overlay {
          position: absolute;
          inset: 0;
          background-image: 
            radial-gradient(1px 1px at 20px 30px, #ffffff, rgba(0,0,0,0)),
            radial-gradient(1.2px 1.2px at 80px 120px, #93c5fd, rgba(0,0,0,0)),
            radial-gradient(1px 1px at 150px 40px, #ffffff, rgba(0,0,0,0)),
            radial-gradient(1.5px 1.5px at 240px 90px, #60a5fa, rgba(0,0,0,0)),
            radial-gradient(1px 1px at 300px 160px, #ffffff, rgba(0,0,0,0));
          opacity: 0.35;
          pointer-events: none;
        }

        .segs-category-pill {
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
          font-size: 0.6875rem;
          font-weight: 700;
          letter-spacing: 0.08em;
          color: #93C5FD;
          background: rgba(30, 58, 138, 0.4);
          padding: 0.2rem 0.625rem;
          border-radius: var(--radius-pill);
          border: 1px solid rgba(96, 165, 250, 0.25);
          margin-bottom: 0.5rem;
        }

        .segs-hero-title {
          font-size: 1.25rem;
          font-weight: 800;
          color: #FFFFFF;
          line-height: 1.25;
          letter-spacing: -0.02em;
          margin-bottom: 0.375rem;
        }

        .segs-gradient-text {
          background: linear-gradient(135deg, #FFFFFF 0%, #94A3B8 50%, #CBD5E1 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .segs-hero-desc {
          font-size: 0.8125rem;
          line-height: 1.5;
          color: #94A3B8;
          max-width: 90%;
        }

        .segs-visualizer-container {
          position: relative;
          height: 190px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0.5rem 0 1rem;
        }

        .segs-ambient-glow {
          position: absolute;
          width: 180px;
          height: 180px;
          border-radius: 50%;
          transition: background 0.4s ease;
          pointer-events: none;
        }

        .segs-orbit-ring {
          position: absolute;
          width: 170px;
          height: 60px;
          border: 1px dashed rgba(96, 165, 250, 0.25);
          border-radius: 50%;
          transform: rotate(-15deg);
          pointer-events: none;
        }

        .segs-gem-wrapper {
          position: relative;
          width: 140px;
          height: 140px;
          animation: segsFloat 6s ease-in-out infinite;
          filter: drop-shadow(0 12px 24px rgba(0, 0, 0, 0.6));
        }

        @keyframes segsFloat {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-7px) rotate(1.5deg); }
        }

        .segs-gem-svg {
          width: 100%;
          height: 100%;
          overflow: visible;
        }

        .segs-telemetry-badge {
          position: absolute;
          bottom: 4px;
          display: inline-flex;
          align-items: center;
          gap: 0.375rem;
          font-size: 0.6875rem;
          font-weight: 600;
          color: #CBD5E1;
          background: rgba(15, 23, 42, 0.8);
          border: 1px solid rgba(255, 255, 255, 0.12);
          padding: 0.2rem 0.6rem;
          border-radius: var(--radius-pill);
          backdrop-filter: blur(8px);
        }

        .segs-finish-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 0.5rem;
        }

        .segs-finish-title {
          font-size: 0.75rem;
          font-weight: 700;
          color: #E2E8F0;
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        .segs-tolerance-tag {
          font-size: 0.6875rem;
          font-family: var(--font-mono);
          color: #94A3B8;
        }

        .segs-finish-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 0.5rem;
        }

        @media (min-width: 480px) {
          .segs-finish-grid {
            grid-template-columns: repeat(4, 1fr);
          }
        }

        .segs-finish-btn {
          display: flex;
          align-items: center;
          gap: 0.4rem;
          padding: 0.45rem 0.5rem;
          border-radius: 8px;
          border: 1px solid rgba(255, 255, 255, 0.1);
          color: #E2E8F0;
          font-size: 0.75rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.2s ease;
          outline: none;
        }

        .segs-finish-btn:hover {
          background-color: rgba(255, 255, 255, 0.08) !important;
          transform: translateY(-1px);
        }

        .segs-finish-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          flex-shrink: 0;
          transition: all 0.2s ease;
        }

        .segs-finish-btn-text {
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }

        .segs-hud-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 0.5rem;
          margin-bottom: 1rem;
        }

        .segs-hud-card {
          background: rgba(15, 23, 42, 0.6);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 8px;
          padding: 0.5rem 0.625rem;
        }

        .segs-hud-label {
          font-size: 0.625rem;
          text-transform: uppercase;
          color: #94A3B8;
          font-weight: 600;
          letter-spacing: 0.04em;
          margin-bottom: 0.15rem;
        }

        .segs-hud-val {
          font-size: 0.8125rem;
          font-weight: 700;
          color: #F8FAFC;
          font-family: var(--font-mono);
        }

        .segs-cta-bar {
          display: flex;
        }

        .segs-launch-btn {
          width: 100%;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
          background: #FFFFFF;
          color: #0F172A;
          font-size: 0.8125rem;
          font-weight: 700;
          padding: 0.625rem 1rem;
          border-radius: var(--radius-pill);
          transition: all 0.2s ease;
          box-shadow: 0 4px 14px rgba(255, 255, 255, 0.15);
        }

        .segs-launch-btn:hover {
          background: #F1F5F9;
          transform: translateY(-1px);
          box-shadow: 0 6px 18px rgba(255, 255, 255, 0.25);
          color: #020617;
        }

        .segs-mockup-footer {
          padding: 0.625rem 1.125rem;
          background: #07090E;
          border-top: 1px solid rgba(255, 255, 255, 0.06);
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
          font-size: 0.6875rem;
          color: #94A3B8;
          text-align: center;
        }
      `}</style>
    </div>
  );
};
