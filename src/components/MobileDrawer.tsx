import { IconX } from '../icons'
import { NAV_LINKS } from '../data'

interface MobileDrawerProps {
  open: boolean
  onClose: () => void
}

export default function MobileDrawer({ open, onClose }: MobileDrawerProps) {
  return (
    <>
      {/* Overlay */}
      <div
        onClick={onClose}
        style={{
          position: 'fixed',
          inset: 0,
          zIndex: 240,
          background: 'rgba(15,22,12,0.52)',
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
          position: 'fixed',
          top: 0,
          right: 0,
          bottom: 0,
          zIndex: 250,
          width: 'min(320px, 85vw)',
          background: '#1E2A1A',
          display: 'flex',
          flexDirection: 'column',
          padding: '5rem 2.8rem 3rem',
          transform: open ? 'translateX(0)' : 'translateX(100%)',
          transition: 'transform 0.42s cubic-bezier(0.4,0,0.2,1)',
        }}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          aria-label="Cerrar menú"
          style={{
            position: 'absolute',
            top: '1.3rem',
            right: '1.3rem',
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            color: 'rgba(255,255,255,0.45)',
            padding: 4,
            display: 'flex',
          }}
        >
          <IconX />
        </button>

        {/* Links */}
        <ul style={{ listStyle: 'none', flex: 1, display: 'flex', flexDirection: 'column' }}>
          {NAV_LINKS.map((link) => (
            <li
              key={link.label}
              style={{ borderBottom: '1px solid rgba(255,255,255,0.06)' }}
            >
              <a
                href={link.href}
                onClick={onClose}
                style={{
                  display: 'block',
                  padding: '0.95rem 0',
                  fontFamily: "'DM Serif Display', serif",
                  fontSize: '1.45rem',
                  color: link.active ? '#E8A882' : 'rgba(255,255,255,0.78)',
                  letterSpacing: '0.01em',
                  transition: 'color 0.2s',
                }}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Footer info */}
        <div
          style={{
            paddingTop: '1.8rem',
            borderTop: '1px solid rgba(255,255,255,0.07)',
          }}
        >
          <p style={{ fontSize: '0.73rem', color: 'rgba(255,255,255,0.28)', lineHeight: 1.7 }}>
            Asociación Civil legalmente constituida
            <br />
            RFC: GVS250609FY2
          </p>
          <a
            href="https://wa.me/5216641291664"
            target="_blank"
            rel="noreferrer"
            style={{
              display: 'inline-block',
              marginTop: '0.9rem',
              fontSize: '0.78rem',
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              color: '#C2D6BF',
            }}
          >
            Escríbenos por WhatsApp
          </a>
        </div>
      </nav>
    </>
  )
}
