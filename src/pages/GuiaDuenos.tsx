import { useState } from 'react'
import FadeUp from '../components/FadeUp'

// ── Datos ──────────────────────────────────────────────────────────

const SECCIONES = [
  {
    num: '01',
    emoji: '🧾',
    titulo: 'Requisitos Legales Básicos',
    color: '#4E6E49',
    colorBg: 'rgba(78,110,73,0.07)',
    items: [
      'Tener una carta médica emitida por un profesional de la salud mental que indique la necesidad del animal.',
      'Asegurarse de que el animal esté vacunado, limpio y bien cuidado.',
      'Contar con documentación que respalde la tenencia del animal (carnet de vacunación, carta médica, etc.).',
      'Tratar al animal como parte del tratamiento terapéutico, no solo como una mascota común.',
    ],
  },
  {
    num: '02',
    emoji: '🐕',
    titulo: 'Buen Comportamiento del Animal',
    color: '#C4714A',
    colorBg: 'rgba(196,113,74,0.07)',
    items: [
      'El animal debe comportarse de forma adecuada en espacios públicos (no ladrar excesivamente, no saltar sobre personas, no agredir).',
      'Se recomienda entrenamiento básico: obediencia, socialización y control con correa.',
      'Llevar siempre bolsas para recoger desechos y mantener la higiene del animal.',
    ],
  },
  {
    num: '03',
    emoji: '🚨',
    titulo: '¿Qué hacer en caso de discriminación?',
    color: '#8B6249',
    colorBg: 'rgba(139,98,73,0.07)',
    items: [
      'Si se te niega el acceso a un lugar, puedes presentar una queja ante CONAPRED.',
      'Mantén la calma, informa tus derechos y documenta el incidente (foto/video si es posible).',
      'Solicita amablemente hablar con un encargado o responsable.',
    ],
  },
  {
    num: '04',
    emoji: '📂',
    titulo: 'Documentación Recomendada',
    color: '#4E6E49',
    colorBg: 'rgba(78,110,73,0.07)',
    items: [
      'Carta médica con firma y cédula del profesional.',
      'Carnet de vacunación actualizado del animal.',
      'Identificación oficial del dueño.',
      '(Opcional) Constancia de comportamiento o entrenamiento.',
    ],
  },
]

// ── Acordeón individual ────────────────────────────────────────────
function SeccionAcordeon({
  seccion,
  index,
}: {
  seccion: (typeof SECCIONES)[0]
  index: number
}) {
  const [abierto, setAbierto] = useState(index === 0)

  return (
    <FadeUp delay={index * 80}>
      <div
        style={{
          background: abierto ? '#FDFAF5' : '#fff',
          borderRadius: 20,
          border: `1px solid ${abierto ? seccion.color + '30' : 'rgba(30,42,26,0.08)'}`,
          overflow: 'hidden',
          transition: 'border-color 0.3s ease, background 0.3s ease',
          boxShadow: abierto
            ? `0 8px 40px rgba(30,42,26,0.08)`
            : '0 2px 12px rgba(30,42,26,0.04)',
        }}
      >
        {/* Header clickeable */}
        <button
          onClick={() => setAbierto(v => !v)}
          style={{
            width: '100%',
            display: 'flex',
            alignItems: 'center',
            gap: '1.2rem',
            padding: '1.8rem 2rem',
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            textAlign: 'left',
          }}
        >
          {/* Número */}
          <span
            style={{
              fontFamily: "'DM Serif Display', serif",
              fontSize: '0.85rem',
              color: seccion.color,
              opacity: 0.6,
              flexShrink: 0,
              minWidth: 28,
            }}
          >
            {seccion.num}
          </span>

          {/* Emoji + Título */}
          <span style={{ flex: 1 }}>
            <span style={{ marginRight: '0.5rem' }}>{seccion.emoji}</span>
            <span
              style={{
                fontFamily: "'DM Serif Display', serif",
                fontSize: 'clamp(1.1rem, 2vw, 1.35rem)',
                color: '#1E2A1A',
              }}
            >
              {seccion.titulo}
            </span>
          </span>

          {/* Chevron */}
          <span
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: 32,
              height: 32,
              borderRadius: '50%',
              background: seccion.colorBg,
              color: seccion.color,
              flexShrink: 0,
              transition: 'transform 0.3s ease',
              transform: abierto ? 'rotate(180deg)' : 'rotate(0deg)',
            }}
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="6 9 12 15 18 9" />
            </svg>
          </span>
        </button>

        {/* Contenido expandible */}
        <div
          style={{
            maxHeight: abierto ? 600 : 0,
            overflow: 'hidden',
            transition: 'max-height 0.4s cubic-bezier(0.4,0,0.2,1)',
          }}
        >
          <div style={{ padding: '0 2rem 2rem 4.5rem' }}>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
              {seccion.items.map((item, i) => (
                <li
                  key={i}
                  style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '0.85rem',
                    fontSize: '0.95rem',
                    color: '#6B7A60',
                    lineHeight: 1.75,
                  }}
                >
                  <span
                    style={{
                      width: 20,
                      height: 20,
                      borderRadius: '50%',
                      background: seccion.colorBg,
                      color: seccion.color,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                      marginTop: 2,
                    }}
                  >
                    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </FadeUp>
  )
}

// ── Página principal ───────────────────────────────────────────────
export default function GuiaDuenos() {
  return (
    <div style={{ background: '#F7F2EA' }}>

      {/* ── HERO ──────────────────────────────────────────────── */}
      <section
        style={{
          minHeight: '52vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '9rem clamp(1.4rem, 8vw, 8rem) 5rem',
          textAlign: 'center',
          position: 'relative',
          overflow: 'hidden',
          background: `
            radial-gradient(ellipse 55% 50% at 70% 20%, rgba(78,110,73,0.15) 0%, transparent 65%),
            radial-gradient(ellipse 40% 35% at 20% 80%, rgba(196,113,74,0.10) 0%, transparent 60%),
            #FDFAF5
          `,
        }}
      >
        {/* Anillo decorativo */}
        <div style={{
          position: 'absolute',
          width: 480,
          height: 480,
          borderRadius: '50%',
          border: '1px solid rgba(122,155,118,0.13)',
          bottom: -180,
          left: -120,
          pointerEvents: 'none',
        }} />

        <div style={{ position: 'relative', maxWidth: 680 }}>
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
              Recursos para dueños
            </span>
          </FadeUp>

          <FadeUp delay={80}>
            <h1 style={{
              fontFamily: "'DM Serif Display', serif",
              fontSize: 'clamp(2.8rem, 6vw, 5rem)',
              lineHeight: 1.08,
              color: '#1E2A1A',
              marginBottom: '1.5rem',
            }}>
              Guía para el Dueño{' '}
              <em style={{ color: '#4E6E49', fontStyle: 'italic' }}>Responsable</em>
            </h1>
          </FadeUp>

          <FadeUp delay={160}>
            <p style={{
              fontSize: '1.05rem',
              color: '#6B7A60',
              lineHeight: 1.85,
              maxWidth: 520,
              margin: '0 auto',
            }}>
              Todo lo que necesitas saber si cuentas con un animal de apoyo emocional en México.
              Requisitos legales, recomendaciones prácticas y cómo ejercer tus derechos sin conflictos.
            </p>
          </FadeUp>
        </div>
      </section>

      {/* ── INTRO BAND ────────────────────────────────────────── */}
      <section style={{
        background: '#1E2A1A',
        padding: '3.5rem clamp(1.4rem, 6vw, 5rem)',
      }}>
        <FadeUp>
          <div style={{
            maxWidth: 820,
            margin: '0 auto',
            display: 'flex',
            alignItems: 'center',
            gap: '2rem',
            flexWrap: 'wrap',
          }}>
            <span style={{ fontSize: '2.5rem', flexShrink: 0 }}>📘</span>
            <p style={{
              fontSize: '1rem',
              color: 'rgba(255,255,255,0.65)',
              lineHeight: 1.85,
              flex: 1,
              minWidth: 280,
            }}>
              Esta guía está diseñada para personas que cuentan con un animal de apoyo emocional en México.
              Contiene recomendaciones prácticas, requisitos legales y sugerencias para{' '}
              <span style={{ color: '#C2D6BF', fontWeight: 500 }}>
                ejercer tu derecho sin conflictos.
              </span>
            </p>
          </div>
        </FadeUp>
      </section>

      {/* ── SECCIONES ACORDEÓN ────────────────────────────────── */}
      <section style={{
        padding: '7rem clamp(1.4rem, 6vw, 5rem)',
        maxWidth: 860,
        margin: '0 auto',
      }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
          {SECCIONES.map((sec, i) => (
            <SeccionAcordeon key={sec.num} seccion={sec} index={i} />
          ))}
        </div>
      </section>

      {/* ── RECOMENDACIÓN FINAL ───────────────────────────────── */}
      <section style={{
        padding: '0 clamp(1.4rem, 6vw, 5rem) 7rem',
        maxWidth: 860,
        margin: '0 auto',
      }}>
        <FadeUp>
          <div style={{
            background: 'linear-gradient(135deg, #4E6E49 0%, #3a5436 100%)',
            borderRadius: 24,
            padding: 'clamp(2rem, 5vw, 3.5rem)',
            position: 'relative',
            overflow: 'hidden',
          }}>
            {/* Glow decorativo */}
            <div style={{
              position: 'absolute',
              width: 300,
              height: 300,
              borderRadius: '50%',
              background: 'rgba(255,255,255,0.06)',
              right: -80,
              top: -80,
              pointerEvents: 'none',
            }} />

            <div style={{ position: 'relative' }}>
              <span style={{
                display: 'inline-block',
                marginBottom: '1rem',
                fontSize: '0.68rem',
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                color: '#C2D6BF',
                fontWeight: 600,
                padding: '0.3rem 0.9rem',
                border: '1px solid rgba(194,214,191,0.3)',
                borderRadius: 100,
              }}>
                ✅ Recomendación final
              </span>

              <p style={{
                fontFamily: "'DM Serif Display', serif",
                fontSize: 'clamp(1.3rem, 2.5vw, 1.8rem)',
                color: '#fff',
                lineHeight: 1.4,
                marginBottom: '2rem',
              }}>
                Aunque tu derecho está respaldado por ley, es útil ser{' '}
                <em style={{ color: '#E8A882' }}>proactivo, respetuoso y claro</em>{' '}
                al presentar tu situación.
              </p>

              <p style={{
                fontSize: '1rem',
                color: 'rgba(255,255,255,0.65)',
                lineHeight: 1.75,
                marginBottom: '2.5rem',
              }}>
                Promovamos juntos la inclusión y el bienestar emocional sin barreras.
              </p>

              <a
                href="https://wa.me/5216641291664"
                target="_blank"
                rel="noreferrer"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.7rem',
                  background: '#fff',
                  color: '#4E6E49',
                  padding: '1rem 2.2rem',
                  borderRadius: 100,
                  fontSize: '0.88rem',
                  fontWeight: 600,
                  letterSpacing: '0.05em',
                }}
              >
                ¿Tienes dudas? Contáctanos →
              </a>
            </div>
          </div>
        </FadeUp>
      </section>

    </div>
  )
}