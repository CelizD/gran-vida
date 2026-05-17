import FadeUp from '../components/FadeUp'
import { IconArrow } from '../icons'

export default function CTA() {
  return (
    <section
      style={{
        padding: '7rem clamp(1.4rem, 6vw, 5rem)',
        textAlign: 'center',
        background: `
          radial-gradient(ellipse 70% 60% at 50% 50%, rgba(122,155,118,0.12) 0%, transparent 70%),
          #F7F2EA
        `,
      }}
    >
      <FadeUp>
        <h2
          style={{
            fontFamily: "'DM Serif Display', serif",
            fontSize: 'clamp(2.2rem, 5vw, 4rem)',
            color: '#1E2A1A',
            marginBottom: '1.2rem',
            maxWidth: 600,
            marginLeft: 'auto',
            marginRight: 'auto',
          }}
        >
          ¿Listo para vivir una{' '}
          <em style={{ color: '#C4714A', fontStyle: 'italic' }}>gran vida</em>?
        </h2>
        <p
          style={{
            color: '#6B7A60',
            fontSize: '1.05rem',
            maxWidth: 480,
            margin: '0 auto 2.8rem',
            lineHeight: 1.8,
          }}
        >
          Contáctanos hoy y descubre cómo transformar tu bienestar emocional o el de tu comunidad.
        </p>
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <a
            href="https://wa.me/5216641291664"
            target="_blank"
            rel="noreferrer"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.7rem',
              background: '#C4714A',
              color: '#fff',
              padding: '1.1rem 2.6rem',
              borderRadius: 100,
              fontSize: '0.9rem',
              fontWeight: 500,
              letterSpacing: '0.05em',
            }}
          >
            Escríbenos por WhatsApp <IconArrow />
          </a>
          <a
            href="https://granvidaservicios.org/contact-us/"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.7rem',
              background: 'transparent',
              color: '#4E6E49',
              padding: '1.1rem 2.6rem',
              borderRadius: 100,
              fontSize: '0.9rem',
              fontWeight: 500,
              letterSpacing: '0.05em',
              border: '1.5px solid #C2D6BF',
            }}
          >
            Formulario de contacto
          </a>
        </div>
      </FadeUp>
    </section>
  )
}
