import { Link, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import { IconX } from '../icons'

interface MobileDrawerProps {
  open: boolean
  onClose: () => void
}

const NAV_ITEMS = [
  { label: 'Inicio',              path: '/' },
  { label: 'Nosotros',           path: '/nosotros' },
  { label: 'Guía para dueños',   path: '/guia-duenos' },
  { label: 'Análisis IAA',       path: '/analisis-iaa' },
  { label: 'Tenencia y Bienestar', path: '/tenencia-perros' },
  { label: 'Contacto',           path: '/contacto' },
  { label: 'Registro Perros',    path: '/registro-terapia', destacado: true },
]

export default function MobileDrawer({ open, onClose }: MobileDrawerProps) {
  const location = useLocation()

  // Cierra el drawer al cambiar de ruta
  useEffect(() => { onClose() }, [location.pathname])

  const isActive = (path: string) =>
    path === '/' ? location.pathname === '/' : location.pathname.startsWith(path)

  return (
    <>
      {/* Overlay */}
      <div
        onClick={onClose}
        style={{
          position: 'fixed', inset: 0, zIndex: 240,
          background: 'rgba(15,22,12,0.55)',
          backdropFilter: 'blur(4px)',
          opacity: open ? 1 : 0,
          pointerEvents: open ? 'auto' : 'none',
          transition: 'opacity 0.35s ease',
        }}
      />

      {/* Drawer */}
      <nav
        role="dialog"
        aria-label="Menú de navegación"
        style={{
          position: 'fixed', top: 0, right: 0, bottom: 0, zIndex: 250,
          width: 'min(320px, 85vw)',
          background: '#1E2A1A',
          display: 'flex', flexDirection: 'column',
          padding: '5rem 2.4rem 3rem',
          transform: open ? 'translateX(0)' : 'translateX(100%)',
          transition: 'transform 0.42s cubic-bezier(0.4,0,0.2,1)',
        }}
      >
        {/* Botón cerrar */}
        <button
          onClick={onClose}
          aria-label="Cerrar menú"
          style={{
            position: 'absolute', top: '1.3rem', right: '1.3rem',
            background: 'rgba(255,255,255,0.08)', border: 'none', cursor: 'pointer',
            color: 'rgba(255,255,255,0.6)', padding: 8, borderRadius: '50%',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            width: 36, height: 36, transition: 'background 0.2s',
          }}
          onMouseEnter={e => (e.currentTarget.style.background = 'rgba(255,255,255,0.14)')}
          onMouseLeave={e => (e.currentTarget.style.background = 'rgba(255,255,255,0.08)')}
        >
          <IconX />
        </button>

        {/* Logo dentro del drawer */}
        <div style={{
          fontFamily: "'DM Serif Display', serif",
          fontSize: '1.3rem', color: '#fff',
          marginBottom: '2.5rem', letterSpacing: '0.02em',
        }}>
          Gran <em style={{ color: '#E8A882' }}>Vida</em>
        </div>

        {/* Links */}
        <ul style={{ listStyle: 'none', flex: 1, display: 'flex', flexDirection: 'column', gap: '0.2rem' }}>
          {NAV_ITEMS.map((item) => (
            <li key={item.path}>
              {item.destacado ? (
                <Link
                  to={item.path}
                  style={{
                    display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                    padding: '0.85rem 1.2rem', borderRadius: 12, textDecoration: 'none',
                    background: 'rgba(78,110,73,0.25)',
                    border: '1px solid rgba(78,110,73,0.4)',
                    fontFamily: "'DM Serif Display', serif",
                    fontSize: '1.1rem', color: '#C2D6BF',
                    marginTop: '0.8rem',
                    transition: 'background 0.2s',
                  }}
                  onMouseEnter={e => (e.currentTarget.style.background = 'rgba(78,110,73,0.4)')}
                  onMouseLeave={e => (e.currentTarget.style.background = 'rgba(78,110,73,0.25)')}
                >
                  {item.label}
                  <span style={{ fontSize: '0.8rem', opacity: 0.7 }}>→</span>
                </Link>
              ) : (
                <Link
                  to={item.path}
                  style={{
                    display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                    padding: '0.85rem 0.4rem',
                    borderBottom: '1px solid rgba(255,255,255,0.06)',
                    textDecoration: 'none',
                    fontFamily: "'DM Serif Display', serif",
                    fontSize: '1.2rem',
                    color: isActive(item.path) ? '#E8A882' : 'rgba(255,255,255,0.78)',
                    transition: 'color 0.2s',
                  }}
                  onMouseEnter={e => {
                    if (!isActive(item.path))
                      (e.currentTarget as HTMLAnchorElement).style.color = '#fff'
                  }}
                  onMouseLeave={e => {
                    if (!isActive(item.path))
                      (e.currentTarget as HTMLAnchorElement).style.color = 'rgba(255,255,255,0.78)'
                  }}
                >
                  {item.label}
                  {isActive(item.path) && (
                    <span style={{
                      width: 6, height: 6, borderRadius: '50%', background: '#E8A882', flexShrink: 0,
                    }} />
                  )}
                </Link>
              )}
            </li>
          ))}
        </ul>

        {/* Footer del drawer */}
        <div style={{ paddingTop: '1.8rem', borderTop: '1px solid rgba(255,255,255,0.07)' }}>
          <a
            href="https://wa.me/5216641291664"
            target="_blank"
            rel="noreferrer"
            style={{
              display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.6rem',
              padding: '0.9rem', borderRadius: 100, textDecoration: 'none',
              background: '#4E6E49', color: '#fff',
              fontSize: '0.85rem', fontWeight: 500, letterSpacing: '0.06em',
              marginBottom: '1.2rem',
            }}
          >
            💬 Escríbenos por WhatsApp
          </a>
          <div style={{ display: 'flex', gap: '0.8rem', justifyContent: 'center', marginBottom: '1rem' }}>
            {[
              { label: 'Facebook', href: 'https://www.facebook.com/GranVidaSAA/' },
              { label: 'Instagram', href: 'https://www.instagram.com/granvidasaaac/' },
            ].map(r => (
              <a key={r.label} href={r.href} target="_blank" rel="noreferrer" style={{
                fontSize: '0.72rem', letterSpacing: '0.1em', textTransform: 'uppercase',
                color: 'rgba(255,255,255,0.35)', textDecoration: 'none',
                padding: '0.4rem 0.8rem', borderRadius: 100,
                border: '1px solid rgba(255,255,255,0.1)',
              }}>
                {r.label}
              </a>
            ))}
          </div>
          <p style={{ fontSize: '0.68rem', color: 'rgba(255,255,255,0.2)', lineHeight: 1.7, textAlign: 'center' }}>
            A.C. legalmente constituida · RFC: GVS250609FY2
          </p>
        </div>
      </nav>
    </>
  )
}