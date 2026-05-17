import FadeUp from '../components/FadeUp'
import { Link } from 'react-router-dom'

const SERVICIOS = [
  {
    tag: 'Terapéutico',
    titulo: 'Terapia Asistida con Animales',
    cuerpo: 'Implementamos intervenciones terapéuticas con el acompañamiento de animales especialmente seleccionados y entrenados, orientadas a mejorar aspectos físicos, emocionales, sociales y cognitivos.',
    img: 'https://granvidaservicios.org/wp-content/uploads/2025/05/WhatsApp-Image-2025-04-16-at-16.21.02-e1747718688110-1024x448.jpeg',
    accent: '#4E6E49',
    accentBg: 'rgba(78,110,73,0.08)',
  },
  {
    tag: 'Humanitario',
    titulo: 'Trabajo Humanitario',
    cuerpo: 'Desarrollamos programas de apoyo y contención emocional para personas en situación de vulnerabilidad, integrando herramientas terapéuticas con enfoque humanista, comunitario e inclusivo.',
    img: 'https://granvidaservicios.org/wp-content/uploads/2025/05/WhatsApp-Image-2025-04-04-at-12.43.53-768x1024.jpeg',
    accent: '#C4714A',
    accentBg: 'rgba(196,113,74,0.08)',
  },
  {
    tag: 'Académico',
    titulo: 'Divulgación Científica',
    cuerpo: 'Impulsamos la investigación, documentación y difusión de conocimientos en torno al vínculo humano-animal. Generamos contenido académico y accesible para sensibilizar a la sociedad.',
    img: 'https://granvidaservicios.org/wp-content/uploads/2025/05/entrenamiento-e1747716832620-1024x402.jpeg',
    accent: '#8B6249',
    accentBg: 'rgba(139,98,73,0.08)',
  },
]

export default function Services() {
  return (
    <section id="servicios" style={{ padding: '7rem clamp(1.4rem, 6vw, 5rem)', background: '#F7F2EA' }}>
      <div style={{ maxWidth: 1180, margin: '0 auto' }}>

        {/* Encabezado */}
        <FadeUp>
          <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
            <span style={{
              fontSize: '0.72rem',
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              color: '#4E6E49',
              fontWeight: 500,
              display: 'block',
              marginBottom: '0.9rem',
            }}>
              Lo que ofrecemos
            </span>
            <h2 style={{
              fontFamily: "'DM Serif Display', serif",
              fontSize: 'clamp(2rem, 4vw, 3.2rem)',
              color: '#1E2A1A',
              lineHeight: 1.2,
            }}>
              Servicios pensados<br />para el bienestar
            </h2>
          </div>
        </FadeUp>

        {/* Grid de servicios */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '2rem',
        }}>
          {SERVICIOS.map((s, i) => (
            <FadeUp key={s.titulo} delay={i * 90}>
              <div style={{
                background: '#FDFAF5',
                borderRadius: 24,
                overflow: 'hidden',
                border: '1px solid rgba(78,110,73,0.1)',
                boxShadow: '0 2px 20px rgba(30,42,26,0.05)',
                display: 'flex',
                flexDirection: 'column',
                height: '100%',
                transition: 'transform 0.35s ease, box-shadow 0.35s ease',
              }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLDivElement).style.transform = 'translateY(-6px)'
                ;(e.currentTarget as HTMLDivElement).style.boxShadow = '0 24px 60px rgba(30,42,26,0.12)'
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLDivElement).style.transform = 'translateY(0)'
                ;(e.currentTarget as HTMLDivElement).style.boxShadow = '0 2px 20px rgba(30,42,26,0.05)'
              }}
              >
                {/* Imagen */}
                <div style={{ height: 200, overflow: 'hidden', flexShrink: 0 }}>
                  <img
                    src={s.img}
                    alt={s.titulo}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      transition: 'transform 0.5s ease',
                    }}
                  />
                </div>

                {/* Contenido */}
                <div style={{ padding: '2rem', flex: 1, display: 'flex', flexDirection: 'column' }}>
                  {/* Accent bar */}
                  <div style={{
                    width: 36,
                    height: 3,
                    background: s.accent,
                    borderRadius: 2,
                    marginBottom: '1.2rem',
                  }} />

                  <span style={{
                    display: 'inline-block',
                    marginBottom: '0.8rem',
                    fontSize: '0.68rem',
                    letterSpacing: '0.18em',
                    textTransform: 'uppercase',
                    color: s.accent,
                    fontWeight: 600,
                    padding: '0.25rem 0.8rem',
                    background: s.accentBg,
                    borderRadius: 100,
                    alignSelf: 'flex-start',
                  }}>
                    {s.tag}
                  </span>

                  <h3 style={{
                    fontFamily: "'DM Serif Display', serif",
                    fontSize: '1.45rem',
                    color: '#1E2A1A',
                    lineHeight: 1.2,
                    marginBottom: '0.9rem',
                  }}>
                    {s.titulo}
                  </h3>

                  <p style={{
                    fontSize: '0.92rem',
                    color: '#6B7A60',
                    lineHeight: 1.8,
                    flex: 1,
                  }}>
                    {s.cuerpo}
                  </p>
                </div>
              </div>
            </FadeUp>
          ))}
        </div>

        {/* CTA colaboración */}
        <FadeUp delay={200}>
          <div style={{
            marginTop: '5rem',
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: 0,
            borderRadius: 24,
            overflow: 'hidden',
            border: '1px solid rgba(78,110,73,0.12)',
          }}>
            {/* Imagen */}
            <div style={{ position: 'relative', minHeight: 280 }}>
              <img
                src="https://granvidaservicios.org/wp-content/uploads/2025/05/acacia-776x1024.jpeg"
                alt="Colabora con Gran Vida"
                style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top' }}
              />
              <div style={{
                position: 'absolute',
                inset: 0,
                background: 'linear-gradient(to right, transparent 60%, rgba(253,250,245,0.95) 100%)',
              }} />
            </div>

            {/* Texto */}
            <div style={{
              background: '#FDFAF5',
              padding: 'clamp(2rem, 5vw, 4rem)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
            }}>
              <span style={{
                fontSize: '0.68rem',
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                color: '#C4714A',
                fontWeight: 600,
                display: 'block',
                marginBottom: '1rem',
              }}>
                Únete
              </span>
              <h3 style={{
                fontFamily: "'DM Serif Display', serif",
                fontSize: 'clamp(1.6rem, 3vw, 2.4rem)',
                color: '#1E2A1A',
                lineHeight: 1.2,
                marginBottom: '1rem',
              }}>
                ¿Quieres colaborar con nosotros?
              </h3>
              <p style={{
                fontSize: '0.93rem',
                color: '#6B7A60',
                lineHeight: 1.8,
                marginBottom: '2rem',
              }}>
                Somos una asociación civil abierta a voluntarios, profesionales de la salud
                y organizaciones que compartan nuestra visión.
              </p>
              <a
                href="https://wa.me/5216641291664"
                target="_blank"
                rel="noreferrer"
                style={{
                  alignSelf: 'flex-start',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.6rem',
                  background: '#C4714A',
                  color: '#fff',
                  padding: '0.9rem 2rem',
                  borderRadius: 100,
                  fontSize: '0.86rem',
                  fontWeight: 500,
                  letterSpacing: '0.04em',
                }}
              >
                Contáctanos →
              </a>
            </div>
          </div>
        </FadeUp>
      </div>
    </section>
  )
}