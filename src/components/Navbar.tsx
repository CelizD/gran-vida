import { useEffect, useState } from 'react'
import Hamburger from './Hamburger'
import MobileDrawer from './MobileDrawer'
import { NAV_LINKS } from '../data'

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  return (
    <>
      <header
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 200,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '1.1rem clamp(1.4rem, 5vw, 3.5rem)',
          background: scrolled ? 'rgba(247,242,234,0.95)' : 'rgba(247,242,234,0.75)',
          backdropFilter: 'blur(14px)',
          borderBottom: `1px solid ${scrolled ? 'rgba(122,155,118,0.2)' : 'transparent'}`,
          transition: 'background 0.4s ease, border-color 0.4s ease',
        }}
      >
        {/* Logo */}
        <a
          href="https://granvidaservicios.org/"
          style={{
            fontFamily: "'DM Serif Display', serif",
            fontSize: '1.35rem',
            color: '#4E6E49',
            letterSpacing: '0.02em',
          }}
        >
          Gran <em style={{ color: '#C4714A' }}>Vida</em>
        </a>

        {/* Desktop links */}
        <nav
          aria-label="Navegación principal"
          style={{
            display: 'flex',
            gap: '2rem',
          }}
        >
          {NAV_LINKS.slice(0, 4).map((link) => (
            <a
              key={link.label}
              href={link.href}
              style={{
                fontSize: '0.78rem',
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                color: link.active ? '#4E6E49' : '#4A5E42',
                fontWeight: link.active ? 600 : 300,
                transition: 'color 0.25s',
              }}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Right actions */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.9rem' }}>
          <a
            href="https://wa.me/5216641291664"
            target="_blank"
            rel="noreferrer"
            style={{
              fontSize: '0.76rem',
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              color: '#fff',
              background: '#4E6E49',
              padding: '0.55rem 1.3rem',
              borderRadius: 100,
              fontWeight: 500,
            }}
          >
            Contacto
          </a>
          <Hamburger open={menuOpen} onClick={() => setMenuOpen((v) => !v)} />
        </div>
      </header>

      <MobileDrawer open={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  )
}
