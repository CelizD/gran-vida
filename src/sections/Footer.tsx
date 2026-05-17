const NAV_COL = [
  { label: 'Inicio', href: 'https://granvidaservicios.org/' },
  { label: 'Servicios', href: '#' },
  { label: 'Guía para dueños', href: 'https://granvidaservicios.org/guia-para-duenos/' },
  { label: 'Nosotros', href: 'https://granvidaservicios.org/about-us/' },
  { label: 'Análisis IAA', href: 'https://granvidaservicios.org/analisis-interactivo-de-las-iaa/' },
]

const CONTACT_COL = [
  { label: 'WhatsApp', href: 'https://wa.me/5216641291664' },
  { label: 'Cortijo San José, Playas de Tijuana', href: null },
  { label: 'Las Palmas, Blvd. Díaz Ordaz', href: null },
  { label: 'Facebook', href: 'https://www.facebook.com/GranVidaSAA/' },
  { label: 'Instagram', href: 'https://www.instagram.com/granvidasaaac/' },
]

const SOCIALS = [
  { label: 'fb', href: 'https://www.facebook.com/GranVidaSAA/' },
  { label: 'ig', href: 'https://www.instagram.com/granvidasaaac/' },
  { label: 'wa', href: 'https://wa.me/5216641291664' },
]

export default function Footer() {
  const colStyle: React.CSSProperties = {
    fontSize: '0.84rem',
    color: 'rgba(255,255,255,0.52)',
    display: 'block',
    marginBottom: '0.5rem',
    transition: 'color 0.2s',
  }

  return (
    <footer style={{ background: '#1E2A1A', padding: '4rem clamp(1.4rem,5vw,4rem) 2.5rem' }}>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
          gap: '2.5rem',
          marginBottom: '2.5rem',
          paddingBottom: '2.5rem',
          borderBottom: '1px solid rgba(255,255,255,0.07)',
        }}
      >
        {/* Brand */}
        <div>
          <div
            style={{
              fontFamily: "'DM Serif Display', serif",
              fontSize: '1.4rem',
              color: '#fff',
              marginBottom: '0.7rem',
            }}
          >
            Gran <em style={{ color: '#E8A882' }}>Vida</em>
          </div>
          <p style={{ fontSize: '0.82rem', color: 'rgba(255,255,255,0.32)', lineHeight: 1.7, maxWidth: 210 }}>
            Más humanos y más animales viviendo una gran vida.
          </p>
        </div>

        {/* Nav col */}
        <div>
          <h5
            style={{
              fontSize: '0.7rem',
              letterSpacing: '0.18em',
              textTransform: 'uppercase',
              color: 'rgba(255,255,255,0.28)',
              marginBottom: '1rem',
            }}
          >
            Navegación
          </h5>
          {NAV_COL.map((l) => (
            <a key={l.label} href={l.href} style={colStyle}>{l.label}</a>
          ))}
        </div>

        {/* Contact col */}
        <div>
          <h5
            style={{
              fontSize: '0.7rem',
              letterSpacing: '0.18em',
              textTransform: 'uppercase',
              color: 'rgba(255,255,255,0.28)',
              marginBottom: '1rem',
            }}
          >
            Contacto
          </h5>
          {CONTACT_COL.map((l) =>
            l.href ? (
              <a key={l.label} href={l.href} target="_blank" rel="noreferrer" style={colStyle}>
                {l.label}
              </a>
            ) : (
              <span key={l.label} style={colStyle}>{l.label}</span>
            )
          )}
        </div>
      </div>

      {/* Bottom bar */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '1rem',
        }}
      >
        <p style={{ fontSize: '0.72rem', color: 'rgba(255,255,255,0.2)', lineHeight: 1.6 }}>
          Escritura Pública No. 924 · Notario Público 43 de Tijuana, B.C. · RFC: GVS250609FY2
        </p>
        <div style={{ display: 'flex', gap: '0.7rem' }}>
          {SOCIALS.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noreferrer"
              style={{
                width: 33,
                height: 33,
                borderRadius: '50%',
                border: '1px solid rgba(255,255,255,0.13)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '0.7rem',
                color: 'rgba(255,255,255,0.42)',
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
