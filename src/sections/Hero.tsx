import FadeUp from '../components/FadeUp'
import { IconArrow } from '../icons'
import { Link } from 'react-router-dom'

export default function Hero() {
  return (
    <section
      style={{
        minHeight: '100vh',
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        overflow: 'hidden',
        position: 'relative',
      }}
    >
      {/* ── COLUMNA IZQUIERDA: TEXTO ── */}
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: 'clamp(5rem, 8vw, 8rem) clamp(2rem, 5vw, 5rem) 5rem',
          background: '#FDFAF5',
          position: 'relative',
          zIndex: 1,
        }}
      >
        {/* Glow radial */}
        <div style={{
          position: 'absolute',
          width: 500,
          height: 500,
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(78,110,73,0.1) 0%, transparent 70%)',
          bottom: -150,
          right: -150,
          pointerEvents: 'none',
        }} />

        <div style={{ position: 'relative', maxWidth: 560 }}>
          <FadeUp>
            <span style={{
              display: 'inline-block',
              marginBottom: '1.8rem',
              fontSize: '0.7rem',
              letterSpacing: '0.22em',
              textTransform: 'uppercase',
              color: '#C4714A',
              fontWeight: 500,
              padding: '0.35rem 1.2rem',
              border: '1px solid rgba(196,113,74,0.3)',
              borderRadius: 100,
            }}>
              Servicios Asistidos con Animales
            </span>
          </FadeUp>

          <FadeUp delay={80}>
            <h1 style={{
              fontFamily: "'DM Serif Display', serif",
              fontSize: 'clamp(2.8rem, 5vw, 4.6rem)',
              lineHeight: 1.06,
              color: '#1E2A1A',
              marginBottom: '1.6rem',
            }}>
              Integramos animales para{' '}
              <em style={{ color: '#4E6E49', fontStyle: 'italic' }}>transformar</em>{' '}
              vidas
            </h1>
          </FadeUp>

          <FadeUp delay={150}>
            <p style={{
              fontSize: '1.05rem',
              color: '#6B7A60',
              lineHeight: 1.85,
              marginBottom: '2.8rem',
              maxWidth: 480,
            }}>
              Promovemos la salud mental y creamos espacios de respeto, cuidado y convivencia
              a través de servicios terapéuticos y comunitarios.
            </p>
          </FadeUp>

          <FadeUp delay={210}>
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
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
                  padding: '1rem 2.2rem',
                  borderRadius: 100,
                  fontSize: '0.88rem',
                  fontWeight: 500,
                  letterSpacing: '0.05em',
                  boxShadow: '0 8px 28px rgba(78,110,73,0.3)',
                }}
              >
                Solicitar información <IconArrow />
              </a>
              <Link
                to="/nosotros"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.7rem',
                  background: 'transparent',
                  color: '#4E6E49',
                  padding: '1rem 2.2rem',
                  borderRadius: 100,
                  fontSize: '0.88rem',
                  fontWeight: 500,
                  letterSpacing: '0.05em',
                  border: '1.5px solid #C2D6BF',
                }}
              >
                Conoce el equipo
              </Link>
            </div>
          </FadeUp>

          {/* Slogan bottom */}
          <FadeUp delay={280}>
            <p style={{
              marginTop: '3.5rem',
              fontSize: '0.78rem',
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              color: '#9CAB8F',
              paddingTop: '1.8rem',
              borderTop: '1px solid rgba(78,110,73,0.12)',
            }}>
              Más humanos y más animales viviendo una Gran Vida
            </p>
          </FadeUp>
        </div>
      </div>

      {/* ── COLUMNA DERECHA: IMAGEN PRINCIPAL ── */}
      <div
        style={{
          position: 'relative',
          overflow: 'hidden',
          minHeight: '100vh',
        }}
      >
        <img
          src="https://granvidaservicios.org/wp-content/uploads/2025/05/GRAN-VIDA-5-768x1024.jpeg"
          alt="Gran Vida terapia con animales"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            objectPosition: 'center top',
          }}
        />
        {/* Overlay sutil */}
        <div style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(to right, rgba(253,250,245,0.15) 0%, transparent 30%)',
        }} />

        {/* Badge flotante */}
        <div style={{
          position: 'absolute',
          bottom: '2.5rem',
          left: '2rem',
          background: 'rgba(30,42,26,0.82)',
          backdropFilter: 'blur(12px)',
          borderRadius: 16,
          padding: '1rem 1.4rem',
          border: '1px solid rgba(255,255,255,0.08)',
        }}>
          <p style={{
            fontFamily: "'DM Serif Display', serif",
            fontSize: '1.1rem',
            color: '#fff',
            marginBottom: '0.2rem',
          }}>A.C. legalmente constituida</p>
          <p style={{ fontSize: '0.72rem', color: '#C2D6BF', letterSpacing: '0.05em' }}>RFC: GVS250609FY2 · Tijuana, B.C.</p>
        </div>
      </div>

      {/* Responsive: en móvil la imagen va abajo */}
      <style>{`
        @media (max-width: 768px) {
          section[data-hero] {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  )
}