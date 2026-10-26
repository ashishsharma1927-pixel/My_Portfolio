import React from 'react';
import { Server, Database, Zap, Wrench, Cloud } from 'lucide-react';
import { skillsData } from '../data/portfolioData';

export const Skills: React.FC = () => {
  const getCategoryIcon = (title: string) => {
    switch (title) {
      case 'Backend':
        return <Server size={18} style={{ color: 'var(--color-accent)' }} />;
      case 'Databases':
        return <Database size={18} style={{ color: 'var(--color-accent)' }} />;
      case 'Background Tasks & Caching':
        return <Zap size={18} style={{ color: 'var(--color-accent)' }} />;
      case 'Testing & Development Tools':
        return <Wrench size={18} style={{ color: 'var(--color-accent)' }} />;
      case 'Deployment & IDE':
        return <Cloud size={18} style={{ color: 'var(--color-accent)' }} />;
      default:
        return <Server size={18} style={{ color: 'var(--color-accent)' }} />;
    }
  };

  return (
    <section id="skills" className="section">
      <div className="container">
        <div className="section-header">
          <span className="section-label">Toolkit</span>
          <h2 className="section-heading">Technologies I Work With</h2>
          <p className="section-subtitle">
            A focused backend stack for developing RESTful APIs, relational schema architectures, and server applications.
          </p>
        </div>

        {/* Clean, Compact Categories Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '1.25rem',
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
                padding: '1.25rem',
              }}
            >
              {/* Category Header */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.625rem',
                  paddingBottom: '0.625rem',
                  borderBottom: '1px solid var(--border-color)',
                }}
              >
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '32px',
                    height: '32px',
                    borderRadius: 'var(--radius-sm)',
                    backgroundColor: 'var(--color-accent-subtle)',
                    border: '1px solid var(--color-accent-border)',
                  }}
                >
                  {getCategoryIcon(category.title)}
                </div>
                <h3
                  style={{
                    fontSize: '0.9375rem',
                    fontWeight: 600,
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
                      fontWeight: 500,
                      padding: '0.3125rem 0.625rem',
                      borderRadius: 'var(--radius-sm)',
                      backgroundColor: '#F8FAFC',
                      border: '1px solid var(--border-color)',
                      color: 'var(--text-primary)',
                      fontFamily: 'var(--font-sans)',
                    }}
                  >
                    <span
                      style={{
                        width: '5px',
                        height: '5px',
                        borderRadius: '50%',
                        backgroundColor: 'var(--color-accent)',
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
