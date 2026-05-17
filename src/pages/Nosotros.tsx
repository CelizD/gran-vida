import FadeUp from '../components/FadeUp'
import { useInView } from '../hooks/useInView'

// ── Datos ──────────────────────────────────────────────────────────
const VALORES = ['Integridad', 'Comunidad', 'Bienestar', 'Inclusión']

const TERAPEUTAS = [
  {
    nombre: 'Acacia',
    foto: 'https://granvidaservicios.org/wp-content/uploads/2025/05/acacia.jpeg',
  },
  {
    nombre: 'Martina',
    foto: 'https://granvidaservicios.org/wp-content/uploads/2025/05/WhatsApp-Image-2025-04-04-at-12.43.53-1-e1748012503347.jpeg',
  },
  {
    nombre: 'Jacinto',
    foto: 'https://granvidaservicios.org/wp-content/uploads/2025/05/WhatsApp-Image-2025-04-16-at-16.21.02-1-e1748012450955.jpeg',
  },
  {
    nombre: 'Valentín',
    foto: 'https://granvidaservicios.org/wp-content/uploads/2025/05/GRAN-VIDA-5.jpeg',
  },
  {
    nombre: 'Tomasa',
    foto: 'https://granvidaservicios.org/wp-content/uploads/2025/05/GRAN-VIDA-2-e1747716019169.jpeg',
  },
]

// ── Componente de carta de terapeuta con hover ────────────────────
function TerapeutaCard({ nombre, foto, index }: { nombre: string; foto: string; index: number }) {
  const { ref, visible } = useInView()

  return (
    <div
      ref={ref}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(32px)',
        transition: `opacity 0.6s ease ${index * 80}ms, transform 0.6s ease ${index * 80}ms`,
      }}
    >
      <div
        className="group"
        style={{
          position: 'relative',
          borderRadius: 20,
          overflow: 'hidden',
          aspectRatio: '3/4',
          cursor: 'default',
        }}
      >
        <img
          src={foto}
          alt={nombre}
          onError={(e) => {
            (e.target as HTMLImageElement).src = `https://placehold.co/300x400/C2D6BF/1E2A1A?text=${nombre}`
          }}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            transition: 'transform 0.5s ease',
          }}
          className="group-hover:scale-105"
        />
        {/* Gradiente inferior */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(to top, rgba(30,42,26,0.75) 0%, transparent 55%)',
          }}
        />
        {/* Nombre */}
        <div
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            padding: '1.4rem 1.2rem 1rem',
          }}
        >
          <p
            style={{
              fontFamily: "'DM Serif Display', serif",
              fontSize: '1.2rem',
              color: '#fff',
              letterSpacing: '0.02em',
            }}
          >
            {nombre}
          </p>
          <p
            style={{
              fontSize: '0.68rem',
              letterSpacing: '0.16em',
              textTransform: 'uppercase',
              color: '#C2D6BF',
              marginTop: 2,
            }}
          >
            Terapeuta Certificado
          </p>
        </div>
      </div>
    </div>
  )
}

// ── Página principal ───────────────────────────────────────────────
export default function Nosotros() {
  return (
    <div style={{ background: '#F7F2EA' }}>

      {/* ── HERO ──────────────────────────────────────────────── */}
      <section
        style={{
          minHeight: '55vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '9rem clamp(1.4rem, 8vw, 8rem) 5rem',
          textAlign: 'center',
          position: 'relative',
          overflow: 'hidden',
          background: `
            radial-gradient(ellipse 60% 50% at 80% 20%, rgba(122,155,118,0.18) 0%, transparent 65%),
            radial-gradient(ellipse 45% 40% at 15% 80%, rgba(196,113,74,0.10) 0%, transparent 60%),
            #FDFAF5
          `,
        }}
      >
        {/* Anillo decorativo */}
        <div style={{
          position: 'absolute',
          width: 500,
          height: 500,
          borderRadius: '50%',
          border: '1px solid rgba(122,155,118,0.13)',
          top: -180,
          right: -120,
          pointerEvents: 'none',
        }} />

        <div style={{ position: 'relative', maxWidth: 700 }}>
          <FadeUp>
            <span style={{
              display: 'inline-block',
              marginBottom: '1.5rem',
              fontSize: '0.72rem',
              letterSpacing: '0.22em',
              textTransform: 'uppercase',
              color: '#C4714A',
              fontWeight: 500,
              padding: '0.35rem 1.2rem',
              border: '1px solid rgba(196,113,74,0.3)',
              borderRadius: 100,
            }}>
              Acerca de nosotros
            </span>
          </FadeUp>

          <FadeUp delay={80}>
            <h1 style={{
              fontFamily: "'DM Serif Display', serif",
              fontSize: 'clamp(2.8rem, 6vw, 5rem)',
              lineHeight: 1.08,
              color: '#1E2A1A',
              marginBottom: '1.6rem',
            }}>
              El equipo detrás de{' '}
              <em style={{ color: '#4E6E49', fontStyle: 'italic' }}>una gran vida</em>
            </h1>
          </FadeUp>

          <FadeUp delay={160}>
            <p style={{
              fontSize: '1.05rem',
              color: '#6B7A60',
              lineHeight: 1.85,
              maxWidth: 560,
              margin: '0 auto',
            }}>
              Gran Vida S.A.A. integra a los animales como apoyo en diversos tipos de servicios de salud,
              ofreciendo alternativas de tratamiento físico, biopsicosocial y cognitivo para personas,
              infancias, familias, comunidad y personas en situación de vulnerabilidad.
            </p>
          </FadeUp>
        </div>
      </section>

      {/* ── MISIÓN / VISIÓN ───────────────────────────────────── */}
      <section style={{ padding: '7rem clamp(1.4rem, 6vw, 5rem)', background: '#1E2A1A', position: 'relative', overflow: 'hidden' }}>
        {/* Glow */}
        <div style={{
          position: 'absolute',
          width: 700,
          height: 700,
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(122,155,118,0.1) 0%, transparent 70%)',
          left: -250,
          top: -200,
          pointerEvents: 'none',
        }} />

        <div style={{
          maxWidth: 1100,
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '3rem',
          position: 'relative',
        }}>

          {/* Misión */}
          <FadeUp>
            <div style={{
              background: 'rgba(255,255,255,0.04)',
              border: '1px solid rgba(255,255,255,0.08)',
              borderRadius: 24,
              padding: '2.8rem',
            }}>
              <span style={{
                display: 'inline-block',
                marginBottom: '1.2rem',
                fontSize: '0.68rem',
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                color: '#C2D6BF',
                fontWeight: 600,
              }}>
                Misión
              </span>
              <h2 style={{
                fontFamily: "'DM Serif Display', serif",
                fontSize: 'clamp(1.4rem, 2.5vw, 1.9rem)',
                color: '#fff',
                lineHeight: 1.35,
              }}>
                Generar un impacto positivo y posicionar las I.A.A como una alternativa viable en el bienestar
                de la salud mental y física, así como lograr un cambio en la sociedad en beneficio de los animales.
              </h2>
            </div>
          </FadeUp>

          {/* Visión */}
          <FadeUp delay={100}>
            <div style={{
              background: 'rgba(196,113,74,0.08)',
              border: '1px solid rgba(196,113,74,0.18)',
              borderRadius: 24,
              padding: '2.8rem',
            }}>
              <span style={{
                display: 'inline-block',
                marginBottom: '1.2rem',
                fontSize: '0.68rem',
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                color: '#E8A882',
                fontWeight: 600,
              }}>
                Visión
              </span>
              <h2 style={{
                fontFamily: "'DM Serif Display', serif",
                fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)',
                color: '#fff',
                lineHeight: 1.2,
              }}>
                Más humanos y más animales teniendo una{' '}
                <em style={{ color: '#E8A882', fontStyle: 'italic' }}>Gran Vida</em>
              </h2>
            </div>
          </FadeUp>

        </div>
      </section>

      {/* ── VALORES ───────────────────────────────────────────── */}
      <section style={{ padding: '7rem clamp(1.4rem, 6vw, 5rem)' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <FadeUp>
            <div style={{ textAlign: 'center', marginBottom: '4.5rem' }}>
              <span style={{
                fontSize: '0.72rem',
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                color: '#4E6E49',
                fontWeight: 500,
                display: 'block',
                marginBottom: '0.9rem',
              }}>
                Lo que nos define
              </span>
              <h2 style={{
                fontFamily: "'DM Serif Display', serif",
                fontSize: 'clamp(2rem, 4vw, 3rem)',
                color: '#1E2A1A',
              }}>
                Nuestros valores
              </h2>
            </div>
          </FadeUp>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '1.4rem',
          }}>
            {VALORES.map((valor, i) => (
              <FadeUp key={valor} delay={i * 80}>
                <div style={{
                  background: '#FDFAF5',
                  borderRadius: 20,
                  padding: '2.2rem 1.8rem',
                  border: '1px solid rgba(78,110,73,0.1)',
                  textAlign: 'center',
                  position: 'relative',
                  overflow: 'hidden',
                }}>
                  {/* Accent top bar */}
                  <div style={{
                    position: 'absolute',
                    top: 0, left: 0, right: 0,
                    height: 3,
                    background: i % 2 === 0 ? '#4E6E49' : '#C4714A',
                    borderRadius: '20px 20px 0 0',
                  }} />
                  <p style={{
                    fontFamily: "'DM Serif Display', serif",
                    fontSize: '1.5rem',
                    color: '#1E2A1A',
                  }}>
                    {valor}
                  </p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ── QUIÉNES SOMOS — texto largo ───────────────────────── */}
      <section style={{
        padding: '0 clamp(1.4rem, 6vw, 5rem) 7rem',
        maxWidth: 820,
        margin: '0 auto',
      }}>
        <FadeUp>
          <div style={{
            background: '#FDFAF5',
            borderRadius: 24,
            padding: 'clamp(2rem, 5vw, 3.5rem)',
            border: '1px solid rgba(78,110,73,0.1)',
          }}>
            <span style={{
              fontSize: '0.72rem',
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              color: '#4E6E49',
              fontWeight: 500,
              display: 'block',
              marginBottom: '1rem',
            }}>
              ¿Quiénes somos?
            </span>
            <p style={{
              fontSize: '1.05rem',
              color: '#6B7A60',
              lineHeight: 1.9,
              marginBottom: '1.4rem',
            }}>
              Gran Vida S.A.A. integra a los animales como apoyo en diversos tipos de servicios de salud,
              ofreciendo alternativas de tratamiento físico, biopsicosocial y cognitivo de las personas,
              infancias, familias, comunidad y personas en situación de vulnerabilidad para la promoción
              de la salud mental.
            </p>
            <p style={{
              fontSize: '1.05rem',
              color: '#6B7A60',
              lineHeight: 1.9,
            }}>
              También tiene propósito de influir en la comunidad para fomentar la educación sobre el cuidado,
              respeto y responsabilidad hacia los animales, además de generar espacios recreativos enfocados
              en el bienestar.
            </p>
          </div>
        </FadeUp>
      </section>

      {/* ── TERAPEUTAS ────────────────────────────────────────── */}
      <section style={{
        padding: '7rem clamp(1.4rem, 6vw, 5rem)',
        background: '#1E2A1A',
      }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <FadeUp>
            <div style={{ textAlign: 'center', marginBottom: '4.5rem' }}>
              <span style={{
                fontSize: '0.72rem',
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                color: '#C2D6BF',
                fontWeight: 500,
                display: 'block',
                marginBottom: '0.9rem',
              }}>
                El equipo
              </span>
              <h2 style={{
                fontFamily: "'DM Serif Display', serif",
                fontSize: 'clamp(2rem, 4vw, 3rem)',
                color: '#fff',
              }}>
                Nuestros terapeutas
              </h2>
            </div>
          </FadeUp>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(190px, 1fr))',
            gap: '1.4rem',
          }}>
            {TERAPEUTAS.map((t, i) => (
              <TerapeutaCard key={t.nombre} nombre={t.nombre} foto={t.foto} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA FINAL ─────────────────────────────────────────── */}
      <section style={{
        padding: '7rem clamp(1.4rem, 6vw, 5rem)',
        textAlign: 'center',
        background: `
          radial-gradient(ellipse 70% 60% at 50% 50%, rgba(122,155,118,0.12) 0%, transparent 70%),
          #F7F2EA
        `,
      }}>
        <FadeUp>
          <h2 style={{
            fontFamily: "'DM Serif Display', serif",
            fontSize: 'clamp(2rem, 4vw, 3.2rem)',
            color: '#1E2A1A',
            marginBottom: '1.2rem',
            maxWidth: 560,
            marginLeft: 'auto',
            marginRight: 'auto',
          }}>
            ¿Quieres ser parte de nuestra{' '}
            <em style={{ color: '#C4714A', fontStyle: 'italic' }}>comunidad</em>?
          </h2>
          <p style={{
            color: '#6B7A60',
            fontSize: '1rem',
            maxWidth: 440,
            margin: '0 auto 2.8rem',
            lineHeight: 1.8,
          }}>
            Contáctanos y descubre cómo los animales pueden transformar vidas.
          </p>
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
              padding: '1.1rem 2.6rem',
              borderRadius: 100,
              fontSize: '0.88rem',
              fontWeight: 500,
              letterSpacing: '0.06em',
            }}
          >
            Escríbenos por WhatsApp →
          </a>
        </FadeUp>
      </section>

    </div>
  )
}