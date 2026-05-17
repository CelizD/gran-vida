import { Link } from 'react-router-dom'

const NAV_COL = [
  { label: 'Inicio',              path: '/' },
  { label: 'Nosotros',           path: '/nosotros' },
  { label: 'Guía para dueños',   path: '/guia-duenos' },
  { label: 'Análisis IAA',       path: '/analisis-iaa' },
  { label: 'Tenencia y Bienestar', path: '/tenencia-perros' },
  { label: 'Registro Perros',    path: '/registro-terapia' },
]

const CONTACT_COL = [
  { label: 'WhatsApp', href: 'https://wa.me/5216641291664' },
  { label: 'Cortijo San José, Playas de Tijuana', href: null },
  { label: 'Las Palmas, Blvd. Díaz Ordaz', href: null },
  { label: 'Facebook', href: 'https://www.facebook.com/GranVidaSAA/' },
  { label: 'Instagram', href: 'https://www.instagram.com/granvidasaaac/' },
]

export default function Footer() {
  const colStyle: React.CSSProperties = {
    fontSize: '0.84rem',
    color: 'rgba(255,255,255,0.45)',
    display: 'block',
    marginBottom: '0.55rem',
    textDecoration: 'none',
    transition: 'color 0.2s',
  }

  return (
    <footer style={{ background: '#1E2A1A', padding: '4rem clamp(1.4rem,5vw,4rem) 2.5rem' }}>
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'auto 1fr 1fr',
        gap: '3rem',
        marginBottom: '2.5rem',
        paddingBottom: '2.5rem',
        borderBottom: '1px solid rgba(255,255,255,0.07)',
        alignItems: 'start',
      }}>

        {/* Logo + Brand */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: '1rem' }}>
          <img
            src="/logo-footer.png"
            alt="Gran Vida SAA A.C."
            style={{
              height: 72,
              objectFit: 'contain',
              borderRadius: 12,
            }}
          />
          <p style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.28)', lineHeight: 1.7, maxWidth: 200 }}>
            Más humanos y más animales viviendo una gran vida.
          </p>
        </div>

        {/* Nav col */}
        <div>
          <h5 style={{
            fontSize: '0.68rem', letterSpacing: '0.18em', textTransform: 'uppercase',
            color: 'rgba(255,255,255,0.25)', marginBottom: '1rem',
          }}>
            Navegación
          </h5>
          {NAV_COL.map(l => (
            <Link key={l.label} to={l.path} style={colStyle}
              onMouseEnter={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.75)')}
              onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.45)')}
            >
              {l.label}
            </Link>
          ))}
        </div>

        {/* Contact col */}
        <div>
          <h5 style={{
            fontSize: '0.68rem', letterSpacing: '0.18em', textTransform: 'uppercase',
            color: 'rgba(255,255,255,0.25)', marginBottom: '1rem',
          }}>
            Contacto
          </h5>
          {CONTACT_COL.map(l =>
            l.href ? (
              <a key={l.label} href={l.href} target="_blank" rel="noreferrer" style={colStyle}
                onMouseEnter={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.75)')}
                onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.45)')}
              >
                {l.label}
              </a>
            ) : (
              <span key={l.label} style={colStyle}>{l.label}</span>
            )
          )}
        </div>
      </div>

      {/* Bottom bar */}
      <div style={{
        display: 'flex', justifyContent: 'space-between', alignItems: 'center',
        flexWrap: 'wrap', gap: '1rem',
      }}>
        <p style={{ fontSize: '0.7rem', color: 'rgba(255,255,255,0.18)', lineHeight: 1.6 }}>
          Escritura Pública No. 924 · Notario Público 43 de Tijuana, B.C. · RFC: GVS250609FY2
        </p>
        <div style={{ display: 'flex', gap: '0.7rem' }}>
          {[
            { label: 'fb', href: 'https://www.facebook.com/GranVidaSAA/' },
            { label: 'ig', href: 'https://www.instagram.com/granvidasaaac/' },
            { label: 'wa', href: 'https://wa.me/5216641291664' },
          ].map(s => (
            <a key={s.label} href={s.href} target="_blank" rel="noreferrer" style={{
              width: 33, height: 33, borderRadius: '50%',
              border: '1px solid rgba(255,255,255,0.13)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontSize: '0.68rem', color: 'rgba(255,255,255,0.35)', textDecoration: 'none',
              transition: 'border-color 0.2s, color 0.2s',
            }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLAnchorElement).style.color = 'rgba(255,255,255,0.8)'
                ;(e.currentTarget as HTMLAnchorElement).style.borderColor = 'rgba(255,255,255,0.35)'
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLAnchorElement).style.color = 'rgba(255,255,255,0.35)'
                ;(e.currentTarget as HTMLAnchorElement).style.borderColor = 'rgba(255,255,255,0.13)'
              }}
            >
              {s.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}