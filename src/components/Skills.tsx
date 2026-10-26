import React from 'react';
import { Server, Database, Zap, Wrench, Cloud, Layers } from 'lucide-react';
import { skillsData } from '../data/portfolioData';

export const Skills: React.FC = () => {
  const getCategoryIcon = (title: string) => {
    switch (title) {
      case 'Backend':
        return <Server size={18} style={{ color: 'var(--text-primary)' }} />;
      case 'Frontend & 3D Interactive':
        return <Layers size={18} style={{ color: 'var(--text-primary)' }} />;
      case 'Databases':
        return <Database size={18} style={{ color: 'var(--text-primary)' }} />;
      case 'Background Tasks & Caching':
        return <Zap size={18} style={{ color: 'var(--text-primary)' }} />;
      case 'Testing & Development Tools':
        return <Wrench size={18} style={{ color: 'var(--text-primary)' }} />;
      case 'Deployment & IDE':
        return <Cloud size={18} style={{ color: 'var(--text-primary)' }} />;
      default:
        return <Server size={18} style={{ color: 'var(--text-primary)' }} />;
    }
  };

  return (
    <section id="skills" className="section">
      <div className="container">
        <div className="section-header">
          <span className="section-label">Toolkit</span>
          <h2 className="section-heading">Technologies I Work With</h2>
          <p className="section-subtitle">
            A comprehensive technical toolkit spanning robust backend APIs, relational database architectures, and interactive 3D WebGL experiences.
          </p>
        </div>

        {/* Spacious, Responsive Categories Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '1.5rem',
          }}
        >
          {skillsData.map((category) => (
            <div
              key={category.title}
              className="card"
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '1rem',
                padding: '1.5rem',
                borderRadius: 'var(--radius-md)',
              }}
            >
              {/* Category Header */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.75rem',
                  paddingBottom: '0.75rem',
                  borderBottom: '1px solid var(--border-color)',
                }}
              >
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '36px',
                    height: '36px',
                    borderRadius: 'var(--radius-pill)',
                    backgroundColor: 'var(--bg-subtle)',
                    border: '1px solid var(--border-color)',
                  }}
                >
                  {getCategoryIcon(category.title)}
                </div>
                <h3
                  style={{
                    fontSize: '1rem',
                    fontWeight: 700,
                    color: 'var(--text-primary)',
                  }}
                >
                  {category.title}
                </h3>
              </div>

              {/* Skills Tags */}
              <div
                style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: '0.5rem',
                }}
              >
                {category.skills.map((skill) => (
                  <span
                    key={skill.name}
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.375rem',
                      fontSize: '0.8125rem',
                      fontWeight: 600,
                      padding: '0.375rem 0.75rem',
                      borderRadius: 'var(--radius-pill)',
                      backgroundColor: 'var(--bg-main)',
                      border: '1px solid var(--border-color)',
                      color: 'var(--text-primary)',
                    }}
                  >
                    <span
                      style={{
                        width: '5px',
                        height: '5px',
                        borderRadius: '50%',
                        backgroundColor: 'var(--text-primary)',
                      }}
                    />
                    {skill.name}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
