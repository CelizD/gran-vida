import FadeUp from '../components/FadeUp'
import { IconArrow } from '../icons'

export default function Hero() {
  return (
    <section
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        padding: '9rem clamp(1.4rem, 8vw, 8rem) 5rem',
        overflow: 'hidden',
        textAlign: 'center',
        background: `
          radial-gradient(ellipse 55% 45% at 75% 25%, rgba(122,155,118,0.2) 0%, transparent 65%),
          radial-gradient(ellipse 40% 35% at 15% 75%, rgba(196,113,74,0.13) 0%, transparent 60%),
          #FDFAF5
        `,
      }}
    >
      {/* Ring decoration */}
      <div
        style={{
          position: 'absolute',
          width: 560,
          height: 560,
          borderRadius: '50%',
          border: '1px solid rgba(122,155,118,0.15)',
          top: -160,
          right: -100,
          pointerEvents: 'none',
        }}
      />

      <div style={{ position: 'relative', maxWidth: 760 }}>
        <FadeUp>
          <span
            style={{
              display: 'inline-block',
              marginBottom: '1.6rem',
              fontSize: '0.72rem',
              letterSpacing: '0.22em',
              textTransform: 'uppercase',
              color: '#C4714A',
              fontWeight: 500,
              padding: '0.35rem 1.2rem',
              border: '1px solid rgba(196,113,74,0.3)',
              borderRadius: 100,
            }}
          >
            Nuestros servicios
          </span>
        </FadeUp>

        <FadeUp delay={80}>
          <h1
            style={{
              fontFamily: "'DM Serif Display', serif",
              fontSize: 'clamp(3rem, 7vw, 5.8rem)',
              lineHeight: 1.05,
              color: '#1E2A1A',
              marginBottom: '1.6rem',
            }}
          >
            El vínculo que{' '}
            <em style={{ color: '#4E6E49', fontStyle: 'italic' }}>transforma</em>{' '}
            vidas
          </h1>
        </FadeUp>

        <FadeUp delay={160}>
          <p
            style={{
              fontSize: '1.05rem',
              color: '#6B7A60',
              maxWidth: 520,
              margin: '0 auto 2.8rem',
              lineHeight: 1.8,
            }}
          >
            En Gran Vida creemos en el poder sanador de los animales. Cada servicio está diseñado
            para mejorar el bienestar emocional y acercar a las personas a una vida más plena.
          </p>
        </FadeUp>

        <FadeUp delay={220}>
          <div
            style={{
              display: 'flex',
              gap: '1rem',
              justifyContent: 'center',
              flexWrap: 'wrap',
            }}
          >
            <a
              href="https://wa.me/5216641291664"
              target="_blank"
              rel="noreferrer"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.7rem',
                background: '#4E6E49',
                color: '#fff',
                padding: '1rem 2.4rem',
                borderRadius: 100,
                fontSize: '0.88rem',
                fontWeight: 500,
                letterSpacing: '0.06em',
              }}
            >
              Solicita información <IconArrow />
            </a>
            <a
              href="#servicios"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.7rem',
                background: 'transparent',
                color: '#4E6E49',
                padding: '1rem 2.4rem',
                borderRadius: 100,
                fontSize: '0.88rem',
                fontWeight: 500,
                letterSpacing: '0.06em',
                border: '1.5px solid #C2D6BF',
              }}
            >
              Ver servicios
            </a>
          </div>
        </FadeUp>
      </div>
    </section>
  )
}
