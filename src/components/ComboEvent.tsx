import React, { useState, useEffect, useRef } from 'react';
import { Terminal, Lightbulb, Gamepad2, BrainCog, Presentation, Music, Ticket, Users, Check, Sparkles, AlertCircle } from 'lucide-react';
import gsap from 'gsap';

const techEvents = [
  { id: 'pp', title: 'PAPER PRESENTATION', icon: Presentation, color: '#00d4ff' },
  { id: 'pe', title: 'PROJECT EXPO', icon: Lightbulb, color: '#ff2a2a' },
  { id: 'bb', title: 'BUZZER BYTES', icon: BrainCog, color: '#00d4ff' },
  { id: 'ar', title: 'ALGO-RYTHM', icon: Terminal, color: '#ff2a2a' },
  { id: 'uw', title: 'UI WAVE', icon: Gamepad2, color: '#ff2a2a' },
];

const nonTechEvents = [
  { id: 'so', title: 'SHOW-OFF', icon: Music, color: '#a855f7' },
  { id: 'ia', title: 'IPL AUCTION', icon: Ticket, color: '#a855f7' },
  { id: 'cc', title: 'CREW AND CLUE', icon: Users, color: '#a855f7' },
];

const ComboEvent: React.FC = () => {
  const [selectedTech, setSelectedTech] = useState<string | null>(null);
  const [selectedNonTech, setSelectedNonTech] = useState<string | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    gsap.fromTo(containerRef.current, 
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out', scrollTrigger: { trigger: containerRef.current, start: 'top 85%' } }
    );
  }, []);

  const isComboComplete = selectedTech && selectedNonTech;

  return (
    <section id="combo" style={{ padding: '6rem 0', background: 'rgba(0,212,255,0.02)' }}>
      <div className="container" ref={containerRef}>
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <span className="section-tag" style={{ background: 'rgba(168,85,247,0.1)', color: 'var(--neon-purple)', borderColor: 'rgba(168,85,247,0.3)' }}>SPECIAL OFFER</span>
          <h2 style={{ fontSize: 'clamp(2.2rem, 6vw, 3.5rem)', color: 'white', marginBottom: '1rem' }}>
            COMBO <span style={{ color: 'var(--neon-purple)' }}>EVENT</span> DASHBOARD
          </h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', maxWidth: '700px', margin: '0 auto' }}>
            Pick <span style={{ color: 'var(--neon-blue)', fontWeight: 700 }}>1 Technical</span> + <span style={{ color: 'var(--neon-purple)', fontWeight: 700 }}>1 Non-Technical</span> event for just <span style={{ color: 'white', fontWeight: 900, fontSize: '1.4rem' }}>₹200</span>
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', alignItems: 'start' }}>
          {/* Tech Selection */}
          <div className="glass-panel" style={{ padding: '2rem', borderColor: 'rgba(0,212,255,0.2)' }}>
            <h3 style={{ color: 'var(--neon-blue)', fontSize: '1.2rem', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
              <Terminal size={20} /> SELECT TECH EVENT
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {techEvents.map(ev => (
                <div key={ev.id} 
                  onClick={() => setSelectedTech(ev.id)}
                  style={{ 
                    padding: '1rem', borderRadius: '10px', background: selectedTech === ev.id ? `${ev.color}15` : 'rgba(255,255,255,0.03)',
                    border: `1px solid ${selectedTech === ev.id ? ev.color : 'rgba(255,255,255,0.06)'}`,
                    cursor: 'pointer', transition: 'all 0.2s', display: 'flex', alignItems: 'center', gap: '1rem'
                  }}
                >
                  <div style={{ color: ev.color }}><ev.icon size={20} /></div>
                  <span style={{ fontSize: '0.9rem', fontWeight: 600, flex: 1 }}>{ev.title}</span>
                  {selectedTech === ev.id && <Check size={18} color={ev.color} />}
                </div>
              ))}
            </div>
          </div>

          {/* Non-Tech Selection */}
          <div className="glass-panel" style={{ padding: '2rem', borderColor: 'rgba(168,85,247,0.2)' }}>
            <h3 style={{ color: 'var(--neon-purple)', fontSize: '1.2rem', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
              <Music size={20} /> SELECT NON-TECH EVENT
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {nonTechEvents.map(ev => (
                <div key={ev.id} 
                  onClick={() => setSelectedNonTech(ev.id)}
                  style={{ 
                    padding: '1rem', borderRadius: '10px', background: selectedNonTech === ev.id ? `${ev.color}15` : 'rgba(255,255,255,0.03)',
                    border: `1px solid ${selectedNonTech === ev.id ? ev.color : 'rgba(255,255,255,0.06)'}`,
                    cursor: 'pointer', transition: 'all 0.2s', display: 'flex', alignItems: 'center', gap: '1rem'
                  }}
                >
                  <div style={{ color: ev.color }}><ev.icon size={20} /></div>
                  <span style={{ fontSize: '0.9rem', fontWeight: 600, flex: 1 }}>{ev.title}</span>
                  {selectedNonTech === ev.id && <Check size={18} color={ev.color} />}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Selected Summary / Action */}
        <div style={{ marginTop: '3rem', textAlign: 'center' }}>
          <div className="glass-panel" style={{ display: 'inline-block', padding: '2.5rem 3.5rem', maxWidth: '600px', width: '100%', borderColor: isComboComplete ? 'var(--neon-blue)' : 'rgba(255,255,255,0.1)', background: 'rgba(10,10,15,0.8)' }}>
            {isComboComplete ? (
              <>
                <div style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: '60px', height: '60px', borderRadius: '50%', background: 'rgba(0,212,255,0.1)', color: 'var(--neon-blue)', marginBottom: '1.5rem' }}>
                  <Sparkles size={30} />
                </div>
                <h4 style={{ fontSize: '1.4rem', color: 'white', marginBottom: '0.5rem' }}>COMBO UNLOCKED!</h4>
                <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem' }}>
                  You've selected <b style={{ color: 'white' }}>{techEvents.find(e => e.id === selectedTech)?.title}</b> & <b style={{ color: 'white' }}>{nonTechEvents.find(e => e.id === selectedNonTech)?.title}</b>
                </p>
                <a href="https://forms.gle/combo-registration" target="_blank" rel="noreferrer" className="btn btn-primary" style={{ width: '100%', height: '54px', fontSize: '1.1rem' }}>
                  Register Combo Now
                </a>
              </>
            ) : (
              <div style={{ color: 'var(--text-secondary)', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem' }}>
                <AlertCircle size={40} opacity={0.3} />
                <p>Please select one technical and one non-technical event to proceed with the combo registration.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComboEvent;
