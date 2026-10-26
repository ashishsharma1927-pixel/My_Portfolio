import React, { useState } from 'react';
import { User } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export const PythonFrame: React.FC = () => {
  const [imageError, setImageError] = useState(false);

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
        width: '100%',
        maxWidth: '420px',
        margin: '0 auto',
      }}
    >
      {/* Outer Glow / Soft Ambient Aura */}
      <div
        style={{
          position: 'absolute',
          width: '320px',
          height: '320px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(55, 118, 171, 0.12) 0%, rgba(255, 212, 59, 0.08) 50%, transparent 70%)',
          filter: 'blur(20px)',
          pointerEvents: 'none',
        }}
      />

      {/* Main Python Frame Wrapper */}
      <div
        style={{
          position: 'relative',
          width: '360px',
          height: '360px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        {/* Python Interlocking Dual-Snake SVG Border Frame */}
        <svg
          viewBox="0 0 360 360"
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            zIndex: 1,
            pointerEvents: 'none',
            filter: 'drop-shadow(0 8px 18px rgba(53, 35, 27, 0.14))',
          }}
        >
          <defs>
            {/* Gradients matching Python's iconic colors */}
            <linearGradient id="pythonBlueGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#306998" />
              <stop offset="100%" stopColor="#4B8BBE" />
            </linearGradient>
            <linearGradient id="pythonYellowGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FFE873" />
              <stop offset="100%" stopColor="#FFD43B" />
            </linearGradient>

            {/* Subtle inner track */}
            <filter id="frameShadow" x="-10%" y="-10%" width="130%" height="130%">
              <feDropShadow dx="0" dy="4" stdDeviation="4" floodOpacity="0.15" />
            </filter>
          </defs>

          {/* Background Ring Track */}
          <circle
            cx="180"
            cy="180"
            r="152"
            fill="none"
            stroke="#E7DDD3"
            strokeWidth="10"
            strokeDasharray="4 8"
            opacity="0.6"
          />

          {/* Blue Snake Segment (Top & Right with Python Head) */}
          <path
            d="M 68 180 A 118 118 0 0 1 292 140 L 305 130 C 318 116 338 126 335 145 C 332 162 314 172 298 168 L 290 166 A 110 110 0 0 0 88 180 Z"
            fill="url(#pythonBlueGrad)"
          />

          {/* Iconic Blue Snake Head Contour & Eye */}
          <g transform="translate(180, 180) rotate(-45) translate(-180, -180)">
            {/* Blue Snake Arc */}
            <path
              d="M 65 180 A 115 115 0 0 1 295 180"
              fill="none"
              stroke="url(#pythonBlueGrad)"
              strokeWidth="16"
              strokeLinecap="round"
            />
            {/* Blue Snake Head */}
            <circle cx="295" cy="180" r="14" fill="#306998" />
            <circle cx="296" cy="176" r="4.5" fill="#FFFFFF" />
            <circle cx="296.5" cy="176" r="2" fill="#172033" />
          </g>

          {/* Yellow Snake Segment (Bottom & Left with Python Head) */}
          <g transform="translate(180, 180) rotate(135) translate(-180, -180)">
            {/* Yellow Snake Arc */}
            <path
              d="M 65 180 A 115 115 0 0 1 295 180"
              fill="none"
              stroke="url(#pythonYellowGrad)"
              strokeWidth="16"
              strokeLinecap="round"
            />
            {/* Yellow Snake Head */}
            <circle cx="295" cy="180" r="14" fill="#FFD43B" />
            <circle cx="296" cy="176" r="4.5" fill="#35231B" />
            <circle cx="296.5" cy="176" r="2" fill="#FFFFFF" />
          </g>

          {/* Python Interlocking Crest at Top Left */}
          <g transform="translate(42, 42) scale(0.24)">
            <rect width="130" height="130" rx="30" fill="#FFFFFF" filter="url(#frameShadow)" />
            <g transform="translate(10, 10) scale(0.42)">
              <path
                fill="#3776AB"
                d="M126.916.072c-64.832 0-60.784 28.115-60.784 28.115l.072 29.128h61.868v8.745H41.631S.145 61.355.145 126.77c0 65.417 36.21 63.097 36.21 63.097h21.61v-30.356s-1.165-36.21 35.632-36.21h61.362s34.475.557 34.475-33.319V28.187S194.274.072 126.916.072zm-35.341 18.013c6.049 0 10.957 4.908 10.957 10.957 0 6.049-4.908 10.958-10.957 10.958-6.05 0-10.958-4.909-10.958-10.958 0-6.049 4.908-10.957 10.958-10.957z"
              />
              <path
                fill="#FFD43B"
                d="M128.757 254.126c64.832 0 60.784-28.115 60.784-28.115l-.072-29.127H127.6v-8.745h86.441s41.486 4.705 41.486-60.712c0-65.416-36.21-63.096-36.21-63.096h-21.61v30.355s1.165 36.21-35.632 36.21h-61.362s-34.475-.557-34.475 33.32v60.783s-4.842 28.117 62.519 28.117zm35.341-18.014c-6.05 0-10.958-4.908-10.958-10.957 0-6.049 4.908-10.958 10.958-10.958 6.049 0 10.957 4.909 10.957 10.958 0 6.049-4.908 10.957-10.957 10.957z"
              />
            </g>
          </g>
        </svg>

        {/* Inner Profile Image Circle with White Border */}
        <div
          style={{
            width: '215px',
            height: '215px',
            borderRadius: '50%',
            overflow: 'hidden',
            backgroundColor: '#FFFFFF',
            border: '6px solid #FFFFFF',
            boxShadow: 'inset 0 2px 4px rgba(0,0,0,0.1), 0 10px 25px rgba(53, 35, 27, 0.12)',
            position: 'relative',
            zIndex: 2,
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
                objectPosition: 'center 22%', // Perfect framing for Ashish and puppy!
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
                padding: '1rem',
                textAlign: 'center',
                color: 'var(--text-secondary)',
              }}
            >
              <User size={52} style={{ color: 'var(--text-primary)', marginBottom: '0.5rem' }} />
              <div style={{ fontWeight: 700, fontSize: '0.875rem', color: 'var(--text-primary)' }}>Ashish Sharma</div>
            </div>
          )}
        </div>

        {/* Floating Python Tech Badge at Bottom Right */}
        <div
          style={{
            position: 'absolute',
            bottom: '24px',
            right: '-10px',
            backgroundColor: '#FFFFFF',
            padding: '0.5rem 1rem',
            borderRadius: 'var(--radius-pill)',
            boxShadow: '0 8px 20px -4px rgba(53, 35, 27, 0.15)',
            border: '1px solid var(--border-color)',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.5rem',
            zIndex: 10,
          }}
        >
          <svg width="18" height="18" viewBox="0 0 256 255">
            <path
              fill="#3776AB"
              d="M126.916.072c-64.832 0-60.784 28.115-60.784 28.115l.072 29.128h61.868v8.745H41.631S.145 61.355.145 126.77c0 65.417 36.21 63.097 36.21 63.097h21.61v-30.356s-1.165-36.21 35.632-36.21h61.362s34.475.557 34.475-33.319V28.187S194.274.072 126.916.072zm-35.341 18.013c6.049 0 10.957 4.908 10.957 10.957 0 6.049-4.908 10.958-10.957 10.958-6.05 0-10.958-4.909-10.958-10.958 0-6.049 4.908-10.957 10.958-10.957z"
            />
            <path
              fill="#FFD43B"
              d="M128.757 254.126c64.832 0 60.784-28.115 60.784-28.115l-.072-29.127H127.6v-8.745h86.441s41.486 4.705 41.486-60.712c0-65.416-36.21-63.096-36.21-63.096h-21.61v30.355s1.165 36.21-35.632 36.21h-61.362s-34.475-.557-34.475 33.32v60.783s-4.842 28.117 62.519 28.117zm35.341-18.014c-6.05 0-10.958-4.908-10.958-10.957 0-6.049 4.908-10.958 10.958-10.958 6.049 0 10.957 4.909 10.957 10.958 0 6.049-4.908 10.957-10.957 10.957z"
            />
          </svg>
          <span
            style={{
              fontSize: '0.8125rem',
              fontWeight: 700,
              color: 'var(--text-primary)',
              letterSpacing: '0.02em',
            }}
          >
            Python Backend
          </span>
        </div>

        {/* Floating Script Badge at Bottom Left */}
        <div
          style={{
            position: 'absolute',
            bottom: '4px',
            left: '-14px',
            backgroundColor: '#FFFFFF',
            padding: '0.5rem 1.125rem',
            borderRadius: '14px',
            boxShadow: '0 8px 20px -4px rgba(53, 35, 27, 0.12)',
            border: '1px solid var(--border-color)',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.375rem',
            zIndex: 10,
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
  );
};
