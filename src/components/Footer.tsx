import React from 'react';
import { Mail, Phone, Instagram, Heart } from 'lucide-react';

const Footer: React.FC = () => (
  <footer style={{ position: 'relative', zIndex: 1, background: 'rgba(5,5,8,0.95)', borderTop: '1px solid rgba(255,42,42,0.15)', padding: '5rem 1.5rem 2.5rem', marginTop: '2rem' }}>
    <div className="container">
      <div className="footer-grid" style={{ marginBottom: '4rem' }}>

        {/* Brand */}
        <div>
          <h2 style={{ fontSize: '1.6rem', color: 'var(--neon-red)', marginBottom: '1rem', fontFamily: 'Orbitron' }}>PRAVESHA 2K26</h2>
          <p style={{ color: 'var(--text-secondary)', lineHeight: 1.8, marginBottom: '1.5rem', maxWidth: '320px' }}>
            National Level Technical Symposium organized by the Department of Computer Science and Engineering, VISTAS.
          </p>
          <a
            href="https://instagram.com/PRAVESHA_2K26"
            target="_blank"
            rel="noreferrer"
            style={{
              display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
              padding: '0.6rem 1.2rem', borderRadius: '8px',
              background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)',
              color: 'var(--text-primary)', fontSize: '0.9rem', fontWeight: 600,
            }}
          >
            <Instagram size={18} color="#e1306c" /> @PRAVESHA_2K26
          </a>
        </div>

        {/* Quick Links */}
        <div>
          <h3 style={{ fontSize: '1rem', marginBottom: '1.5rem', color: 'white', fontFamily: 'Orbitron', letterSpacing: '2px' }}>QUICK LINKS</h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            {['#home', '#events', '#coordinators'].map(href => (
              <a key={href} href={href} style={{ color: 'var(--text-secondary)', fontWeight: 600, fontSize: '0.95rem', transition: 'color 0.2s' }}
                onMouseEnter={e => (e.currentTarget.style.color = 'var(--neon-blue)')}
                onMouseLeave={e => (e.currentTarget.style.color = 'var(--text-secondary)')}
              >
                {href.replace('#', '').toUpperCase()}
              </a>
            ))}
          </div>
        </div>

        {/* Contact */}
        <div>
          <h3 style={{ fontSize: '1rem', marginBottom: '1.5rem', color: 'white', fontFamily: 'Orbitron', letterSpacing: '2px' }}>CONTACT US</h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <a href="mailto:pravesha2k26@gmail.com" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
              <Mail size={16} color="var(--neon-blue)" /> pravesha2k26@gmail.com
            </a>
            <a href="tel:+917356666091" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
              <Phone size={16} color="var(--neon-red)" /> +91 7356666091 (Ananya S)
            </a>
          </div>
        </div>

      </div>

      {/* Bottom bar */}
      <div style={{ paddingTop: '2rem', borderTop: '1px solid rgba(255,255,255,0.07)', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', gap: '1rem' }}>
        <span style={{ color: 'var(--text-secondary)', fontSize: '0.85rem' }}>
          &copy; 2026 Pravesha Symposium. All rights reserved.
        </span>
        <span style={{ color: 'var(--text-secondary)', fontSize: '0.85rem', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
          Made with <Heart size={14} color="var(--neon-red)" fill="var(--neon-red)" /> by CSE Dept, VISTAS
        </span>
      </div>
    </div>
  </footer>
);

export default Footer;
