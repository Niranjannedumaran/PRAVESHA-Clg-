import React, { useEffect, useRef } from 'react';
import { Sparkles } from 'lucide-react';
import gsap from 'gsap';

const ComboEvent: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    gsap.fromTo(containerRef.current, 
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out', scrollTrigger: { trigger: containerRef.current, start: 'top 85%' } }
    );
  }, []);

  return (
    <section id="combo" style={{ padding: '6rem 0', background: 'rgba(0,212,255,0.02)' }}>
      <div className="container" ref={containerRef}>
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <span className="section-tag" style={{ background: 'rgba(168,85,247,0.1)', color: 'var(--neon-purple)', borderColor: 'rgba(168,85,247,0.3)' }}>SPECIAL OFFER</span>
          <h2 style={{ fontSize: 'clamp(2.2rem, 6vw, 3.5rem)', color: 'white', marginBottom: '1.5rem' }}>
            COMBO <span style={{ color: 'var(--neon-purple)' }}>EVENT</span> DASHBOARD
          </h2>
        </div>

        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <div className="glass-panel" style={{ 
            textAlign: 'center',
            padding: '3.5rem clamp(1.5rem, 5vw, 4rem)', 
            maxWidth: '800px', 
            width: '100%', 
            borderColor: 'var(--neon-purple)', 
            background: 'var(--glass-bg)',
            position: 'relative',
            overflow: 'hidden'
          }}>
            <div style={{ 
              position: 'absolute', top: 0, left: 0, right: 0, height: '2px', 
              background: 'linear-gradient(90deg, transparent, var(--neon-purple), transparent)' 
            }} />
            
            <div style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: '70px', height: '70px', borderRadius: '50%', background: 'rgba(168, 85, 247, 0.1)', color: 'var(--neon-purple)', marginBottom: '2rem' }}>
              <Sparkles size={36} />
            </div>

            <p style={{ color: 'white', fontSize: 'clamp(1.2rem, 4vw, 1.6rem)', fontWeight: 600, lineHeight: 1.4, marginBottom: '2rem' }}>
              Pick <span style={{ color: 'var(--neon-blue)', fontWeight: 800 }}>1 Technical</span> + <span style={{ color: 'var(--neon-purple)', fontWeight: 800 }}>1 Non-Technical</span> event for just <span style={{ color: '#4ade80', fontWeight: 900, fontSize: '1.2em' }}>₹200</span>
            </p>

            <div style={{ 
              background: 'rgba(255, 42, 42, 0.05)', 
              border: '1px solid rgba(255, 42, 42, 0.2)', 
              borderRadius: '12px', 
              padding: '1.25rem', 
              marginBottom: '2.5rem',
              color: 'var(--text-secondary)',
              fontSize: '1rem'
            }}>
              <p>
                <b style={{ color: 'var(--neon-blue)' }}>Note:</b> If you are selecting <b style={{ color: 'white' }}>PAPER PRESENTATION</b>, then you can't select any other event.
              </p>
            </div>

            <a 
              href="https://forms.gle/combo-registration" 
              target="_blank" 
              rel="noreferrer" 
              className="btn btn-primary" 
              style={{ 
                width: '100%', 
                maxWidth: '400px',
                height: '60px', 
                fontSize: '1.2rem', 
                fontWeight: 700,
                background: 'linear-gradient(135deg, var(--neon-purple), #7e22ce)',
                boxShadow: '0 0 20px rgba(168, 85, 247, 0.3)'
              }}
            >
              Register Combo Now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComboEvent;
