import { Link, useLocation } from 'react-router-dom'
import { useEffect, useState } from 'react'
import Hamburger from './Hamburger'
import MobileDrawer from './MobileDrawer'

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  useEffect(() => { setMenuOpen(false) }, [location.pathname])

  const isActive = (path: string) =>
    path === '/' ? location.pathname === '/' : location.pathname.startsWith(path)

  const lnk = (path: string): React.CSSProperties => ({
    fontSize: '0.77rem', letterSpacing: '0.11em', textTransform: 'uppercase',
    color: isActive(path) ? '#4E6E49' : '#4A5E42',
    fontWeight: isActive(path) ? 600 : 300,
    transition: 'color 0.25s', textDecoration: 'none',
  })

  return (
    <>
      <header style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 200,
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        padding: '0.7rem clamp(1.4rem, 5vw, 3.5rem)',
        background: scrolled ? 'rgba(247,242,234,0.96)' : 'rgba(247,242,234,0.75)',
        backdropFilter: 'blur(14px)',
        borderBottom: `1px solid ${scrolled ? 'rgba(122,155,118,0.2)' : 'transparent'}`,
        transition: 'background 0.4s ease, border-color 0.4s ease',
      }}>

        {/* Logo circular */}
        <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', textDecoration: 'none' }}>
          <img
            src="/logo-navbar.png"
            alt="Gran Vida SAA A.C."
            style={{
              height: 52,
              width: 52,
              objectFit: 'contain',
              borderRadius: '50%',
              transition: 'transform 0.3s ease',
            }}
            onMouseEnter={e => (e.currentTarget.style.transform = 'scale(1.05)')}
            onMouseLeave={e => (e.currentTarget.style.transform = 'scale(1)')}
          />
          <span style={{
            fontFamily: "'DM Serif Display', serif",
            fontSize: '1.2rem', color: '#4E6E49', letterSpacing: '0.02em', lineHeight: 1.1,
          }}>
            Gran <em style={{ color: '#C4714A' }}>Vida</em>
          </span>
        </Link>

        {/* Desktop nav */}
        <nav style={{ display: 'flex', gap: '1.4rem', alignItems: 'center' }}>
          <Link to="/"                style={lnk('/')}>Inicio</Link>
          <Link to="/guia-duenos"     style={lnk('/guia-duenos')}>Guía</Link>
          <Link to="/nosotros"        style={lnk('/nosotros')}>Nosotros</Link>
          <Link to="/analisis-iaa"    style={lnk('/analisis-iaa')}>Análisis IAA</Link>
          <Link to="/tenencia-perros" style={lnk('/tenencia-perros')}>Tenencia</Link>
          <Link to="/contacto"        style={lnk('/contacto')}>Contacto</Link>
          <Link to="/registro-terapia" style={{ ...lnk('/registro-terapia'), fontWeight: 600, color: '#4E6E49' }}>
            Registro Perros
          </Link>
        </nav>

        {/* Right actions */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.9rem' }}>
          <a href="https://wa.me/5216641291664" target="_blank" rel="noreferrer" style={{
            fontSize: '0.76rem', letterSpacing: '0.1em', textTransform: 'uppercase',
            color: '#fff', background: '#4E6E49', padding: '0.55rem 1.3rem',
            borderRadius: 100, fontWeight: 500, textDecoration: 'none',
          }}>
            WhatsApp
          </a>
          <Hamburger open={menuOpen} onClick={() => setMenuOpen(v => !v)} />
        </div>
      </header>

      <MobileDrawer open={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  )
}