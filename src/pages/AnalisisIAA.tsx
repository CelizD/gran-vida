import { useState } from 'react'
import FadeUp from '../components/FadeUp'

// ── DATOS ─────────────────────────────────────────────────────────

const TABS = ['Inicio', 'Evidencia', 'Mecanismos', 'Práctica', 'Futuro', 'Conclusión']

const DOMINIOS = [
  {
    label: 'Bienestar General (Poblaciones Diversas)',
    efecto: 0.72,
    nivel: 'Moderado-Alto',
    color: '#4E6E49',
    hallazgos: [
      'Efecto significativo en reducción de ansiedad (g = 0.72) en adultos mayores, pacientes oncológicos y personas con trastornos del estado de ánimo.',
      'Mejoras en calidad de vida y bienestar subjetivo tras 6-12 semanas de intervención.',
      'Menor cortisol salival y mayor oxitocina plasmática en interacciones prolongadas con perros.',
      'Advertencia: heterogeneidad alta entre estudios (I² > 70%) por variación en protocolos y tipos de animal.',
    ],
  },
  {
    label: 'TDAH en Niños',
    efecto: 0.38,
    nivel: 'Pequeño-Moderado',
    color: '#C4714A',
    hallazgos: [
      'Reducción modesta en síntomas de inatención (g = 0.38), mayor que en hiperactividad/impulsividad.',
      'Las IAA parecen mejorar la autorregulación conductual más que los síntomas centrales del TDAH.',
      'Beneficios complementarios en autoestima y habilidades sociales en entornos escolares.',
      'Advertencia: riesgo de sesgo alto. Las IAA deben posicionarse como adyuvante, no tratamiento primario.',
    ],
  },
  {
    label: 'Trastorno del Espectro Autista (TEA)',
    efecto: 0.55,
    nivel: 'Moderado',
    color: '#8B6249',
    hallazgos: [
      'Mejoras en interacción social y comunicación no verbal (g = 0.55) con intervenciones de perros y caballos.',
      'Reducción de comportamientos estereotipados en sesiones estructuradas con animales.',
      'El caballo (hipoterapia) muestra efectos adicionales en regulación sensorial y motricidad.',
      'Advertencia: tamaños de muestra pequeños. Se necesitan ECAs a gran escala con seguimiento largo.',
    ],
  },
  {
    label: 'Enfermedad de Alzheimer',
    efecto: 0.61,
    nivel: 'Moderado',
    color: '#4E6E49',
    hallazgos: [
      'Reducción significativa de agitación y síntomas neuropsiquiátricos (g = 0.61) en fases leve-moderada.',
      'Mejoras temporales en memoria autobiográfica durante sesiones con perros.',
      'Efectos positivos en el estado de ánimo y reducción del uso de medicación antipsicótica.',
      'Advertencia: efectos a largo plazo no bien establecidos. La enfermedad progresiva limita la interpretación.',
    ],
  },
  {
    label: 'Estrés en Estudiantes Universitarios',
    efecto: 0.83,
    nivel: 'Alto',
    color: '#4E6E49',
    hallazgos: [
      'Efecto más robusto del análisis (g = 0.83) en reducción de estrés percibido en períodos de exámenes.',
      'Sesiones breves de 20-30 min con perros certificados muestran efectos inmediatos medibles.',
      'Mejoras en estado de ánimo y reducción de soledad en estudiantes de primer año.',
      'Advertencia: efectos principalmente inmediatos, durabilidad a largo plazo poco estudiada.',
    ],
  },
]

const MECANISMOS = [
  {
    num: '01',
    titulo: 'Biofilia',
    desc: 'La afinidad innata por la naturaleza atrae la atención y es percibida como una señal de seguridad ambiental, reduciendo el estado de alerta del sistema nervioso.',
    color: '#4E6E49',
  },
  {
    num: '02',
    titulo: 'Neurobiología',
    desc: 'La interacción activa el sistema de la Oxitocina (vínculo afectivo) y atenúa el eje HPA, generando reducción medible de Cortisol y respuesta al estrés.',
    color: '#C4714A',
  },
  {
    num: '03',
    titulo: 'Apego y Apoyo',
    desc: 'El animal es percibido como fuente de "consideración positiva incondicional" — apoyo social no sentencioso, libre de juicio y expectativas.',
    color: '#8B6249',
  },
  {
    num: '04',
    titulo: 'Catalizador Social',
    desc: 'La presencia del animal actúa como "rompehielos", facilitando la interacción social positiva entre personas y reduciendo barreras de comunicación.',
    color: '#4E6E49',
  },
]

const PRACTICA_ITEMS = [
  {
    titulo: 'Barreras para la Implementación',
    subtitulo: 'Logísticas, financieras y culturales',
    contenido: [
      { bold: 'Logísticas', texto: 'Preocupaciones por higiene, saneamiento, zoonosis y alergias. Falta de políticas institucionales o espacios adecuados.' },
      { bold: 'Financieras', texto: 'Costos de adquisición, atención veterinaria, entrenamiento y certificación. Carga de trabajo para manejadores.' },
      { bold: 'Culturales', texto: 'Las actitudes hacia los animales varían drásticamente. Se requiere humildad cultural para evaluar la idoneidad.' },
    ],
  },
  {
    titulo: 'Imperativos Éticos',
    subtitulo: 'Bienestar animal y seguridad del cliente',
    contenido: [
      { bold: 'Bienestar Animal', texto: 'El animal es un participante sensible, no una herramienta. Se requiere selección cuidadosa y monitoreo constante de signos de estrés.' },
      { bold: 'Seguridad del Cliente', texto: 'Cribado riguroso de contraindicaciones: alergias, fobias, inmunosupresión, historial de abuso. Consentimiento informado detallado.' },
    ],
  },
  {
    titulo: 'Necesidad de Estandarización',
    subtitulo: 'Terminología, formación y certificación',
    contenido: [
      { bold: 'Terminología', texto: 'Confusión generalizada entre Terapia Asistida (TAA), Actividades (AAA) e Intervenciones (IAA). Cada una tiene alcance y requerimientos distintos.' },
      { bold: 'Certificación', texto: 'Organizaciones como IAHAIO y AAAIP desarrollan competencias y certificaciones (C-AAIS) para establecer estándares profesionales.' },
    ],
  },
]

const FUTURO_ITEMS = [
  { emoji: '🤖', titulo: 'Integración Tecnológica', desc: 'Animales robóticos (PARO la foca) y Realidad Virtual para replicar beneficios sin riesgos logísticos. Biosensores para monitorear estrés en tiempo real.' },
  { emoji: '🏢', titulo: 'Bienestar Corporativo', desc: 'Programas que llevan animales de terapia a las oficinas para reducir estrés de empleados, mejorar el estado de ánimo y fomentar colaboración.' },
  { emoji: '⚖️', titulo: 'Contextos Judiciales', desc: 'Perros de asistencia en juzgados que apoyan a testigos vulnerables (especialmente niños víctimas) durante entrevistas forenses y testimonios.' },
  { emoji: '🚨', titulo: 'Respuesta a Crisis (AACR)', desc: 'Equipos de animales y manejadores desplegados en desastres para brindar consuelo y apoyo psicológico de primera línea.' },
  { emoji: '🐴', titulo: 'Hipoterapia', desc: 'Uso del movimiento tridimensional del caballo para mejorar equilibrio, fuerza del tronco y control postural en trastornos neuromotores.' },
  { emoji: '📚', titulo: 'Programas de Lectura (R.E.A.D.)', desc: 'Perros de terapia como audiencia no sentenciosa para niños con dificultades lectoras, reduciendo ansiedad y aumentando confianza.' },
]

// ── COMPONENTE BARRA DE EFECTO ────────────────────────────────────
function BarraEfecto({ valor, color }: { valor: number; color: string }) {
  const pct = Math.min((valor / 1.2) * 100, 100)
  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 8 }}>
        <span style={{ fontSize: '0.75rem', color: '#6B7A60', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
          Tamaño del Efecto (g de Hedges)
        </span>
        <span style={{ fontFamily: "'DM Serif Display', serif", fontSize: '1.4rem', color }}>
          {valor.toFixed(2)}
        </span>
      </div>
      <div style={{ height: 10, background: 'rgba(78,110,73,0.1)', borderRadius: 100, overflow: 'hidden' }}>
        <div
          style={{
            height: '100%',
            width: `${pct}%`,
            background: `linear-gradient(90deg, ${color}88, ${color})`,
            borderRadius: 100,
            transition: 'width 0.8s cubic-bezier(0.4,0,0.2,1)',
          }}
        />
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 4 }}>
        {['0', '0.2 Pequeño', '0.5 Moderado', '0.8 Grande', '1.2'].map(l => (
          <span key={l} style={{ fontSize: '0.6rem', color: '#9CAB8F' }}>{l}</span>
        ))}
      </div>
    </div>
  )
}

// ── ACORDEÓN ──────────────────────────────────────────────────────
function Acordeon({ item, index }: { item: typeof PRACTICA_ITEMS[0]; index: number }) {
  const [open, setOpen] = useState(false)
  return (
    <FadeUp delay={index * 70}>
      <div style={{
        borderRadius: 18,
        overflow: 'hidden',
        border: `1px solid ${open ? 'rgba(78,110,73,0.25)' : 'rgba(30,42,26,0.08)'}`,
        background: open ? '#FDFAF5' : '#fff',
        transition: 'all 0.3s ease',
        boxShadow: open ? '0 8px 32px rgba(30,42,26,0.07)' : '0 2px 8px rgba(30,42,26,0.03)',
      }}>
        <button
          onClick={() => setOpen(v => !v)}
          style={{
            width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between',
            padding: '1.5rem 1.8rem', background: 'none', border: 'none', cursor: 'pointer', textAlign: 'left', gap: '1rem',
          }}
        >
          <div>
            <p style={{ fontFamily: "'DM Serif Display', serif", fontSize: '1.15rem', color: '#1E2A1A', marginBottom: 2 }}>
              {item.titulo}
            </p>
            <p style={{ fontSize: '0.75rem', color: '#9CAB8F', letterSpacing: '0.08em' }}>{item.subtitulo}</p>
          </div>
          <span style={{
            width: 32, height: 32, borderRadius: '50%', background: 'rgba(78,110,73,0.08)',
            color: '#4E6E49', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
            transform: open ? 'rotate(180deg)' : 'none', transition: 'transform 0.3s ease',
          }}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="6 9 12 15 18 9" />
            </svg>
          </span>
        </button>
        <div style={{ maxHeight: open ? 400 : 0, overflow: 'hidden', transition: 'max-height 0.4s cubic-bezier(0.4,0,0.2,1)' }}>
          <div style={{ padding: '0 1.8rem 1.8rem' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
              {item.contenido.map((c, i) => (
                <div key={i} style={{ display: 'flex', gap: '0.8rem', alignItems: 'flex-start' }}>
                  <span style={{
                    width: 6, height: 6, borderRadius: '50%', background: '#4E6E49',
                    flexShrink: 0, marginTop: '0.5rem',
                  }} />
                  <p style={{ fontSize: '0.92rem', color: '#6B7A60', lineHeight: 1.75 }}>
                    <strong style={{ color: '#2C3525', fontWeight: 600 }}>{c.bold}:</strong> {c.texto}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </FadeUp>
  )
}

// ── PÁGINA PRINCIPAL ──────────────────────────────────────────────
export default function AnalisisIAA() {
  const [tabActivo, setTabActivo] = useState(0)
  const [dominioActivo, setDominioActivo] = useState(0)

  const seccionesRef: Record<number, string> = {
    0: 'inicio', 1: 'evidencia', 2: 'mecanismos', 3: 'practica', 4: 'futuro', 5: 'conclusion',
  }

  const scrollTo = (index: number) => {
    setTabActivo(index)
    const el = document.getElementById(seccionesRef[index])
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  const dominio = DOMINIOS[dominioActivo]

  return (
    <div style={{ background: '#F7F2EA' }}>

      {/* ── HERO ── */}
      <section id="inicio" style={{
        padding: '8rem clamp(1.4rem, 8vw, 8rem) 5rem',
        textAlign: 'center',
        background: `
          radial-gradient(ellipse 60% 50% at 70% 20%, rgba(78,110,73,0.13) 0%, transparent 65%),
          radial-gradient(ellipse 40% 35% at 20% 80%, rgba(196,113,74,0.08) 0%, transparent 60%),
          #FDFAF5
        `,
        position: 'relative',
        overflow: 'hidden',
      }}>
        <div style={{
          position: 'absolute', width: 500, height: 500, borderRadius: '50%',
          border: '1px solid rgba(122,155,118,0.12)', top: -180, right: -100, pointerEvents: 'none',
        }} />
        <div style={{ position: 'relative', maxWidth: 760, margin: '0 auto' }}>
          <FadeUp>
            <span style={{
              display: 'inline-block', marginBottom: '1.5rem', fontSize: '0.7rem',
              letterSpacing: '0.22em', textTransform: 'uppercase', color: '#C4714A',
              fontWeight: 500, padding: '0.35rem 1.2rem',
              border: '1px solid rgba(196,113,74,0.3)', borderRadius: 100,
            }}>
              Divulgación Científica · Gran Vida
            </span>
          </FadeUp>
          <FadeUp delay={80}>
            <h1 style={{
              fontFamily: "'DM Serif Display', serif",
              fontSize: 'clamp(2.6rem, 5.5vw, 4.6rem)',
              lineHeight: 1.06, color: '#1E2A1A', marginBottom: '1.5rem',
            }}>
              Análisis Interactivo de{' '}
              <em style={{ color: '#4E6E49', fontStyle: 'italic' }}>Intervenciones<br />Asistidas con Animales</em>
            </h1>
          </FadeUp>
          <FadeUp delay={150}>
            <p style={{ fontSize: '1.05rem', color: '#6B7A60', lineHeight: 1.85, maxWidth: 580, margin: '0 auto 3rem' }}>
              Un análisis interactivo de la evidencia actual, mecanismos de acción y futuro de la práctica clínica.
              Basado en metaanálisis 2023–2024.
            </p>
          </FadeUp>

          {/* TABS DE NAVEGACIÓN */}
          <FadeUp delay={200}>
            <nav style={{
              display: 'flex', flexWrap: 'wrap', justifyContent: 'center',
              gap: '0.5rem', background: 'rgba(78,110,73,0.06)',
              padding: '0.5rem', borderRadius: 100,
              border: '1px solid rgba(78,110,73,0.1)',
              maxWidth: 680, margin: '0 auto',
            }}>
              {TABS.map((tab, i) => (
                <button
                  key={tab}
                  onClick={() => scrollTo(i)}
                  style={{
                    padding: '0.55rem 1.3rem', borderRadius: 100, border: 'none', cursor: 'pointer',
                    fontSize: '0.78rem', letterSpacing: '0.08em', fontWeight: tabActivo === i ? 600 : 400,
                    background: tabActivo === i ? '#4E6E49' : 'transparent',
                    color: tabActivo === i ? '#fff' : '#6B7A60',
                    transition: 'all 0.25s ease',
                  }}
                >
                  {tab}
                </button>
              ))}
            </nav>
          </FadeUp>
        </div>
      </section>

      {/* ── RESUMEN EJECUTIVO ── */}
      <section style={{ padding: '5rem clamp(1.4rem, 6vw, 5rem)', background: '#1E2A1A', position: 'relative', overflow: 'hidden' }}>
        <div style={{
          position: 'absolute', width: 600, height: 600, borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(122,155,118,0.1) 0%, transparent 70%)',
          right: -200, top: -200, pointerEvents: 'none',
        }} />
        <FadeUp>
          <div style={{ maxWidth: 900, margin: '0 auto', position: 'relative' }}>
            <span style={{
              display: 'block', marginBottom: '1rem', fontSize: '0.68rem',
              letterSpacing: '0.2em', textTransform: 'uppercase', color: '#C2D6BF', fontWeight: 600,
            }}>
              Resumen Ejecutivo
            </span>
            <p style={{ fontSize: 'clamp(1rem, 1.8vw, 1.2rem)', color: 'rgba(255,255,255,0.72)', lineHeight: 1.9 }}>
              Las IAA son un campo en{' '}
              <span style={{ color: '#E8A882', fontWeight: 500 }}>rápido crecimiento</span> con base de evidencia prometedora pero matizada.
              Los metaanálisis 2023–2024 revelan efectos{' '}
              <span style={{ color: '#C2D6BF', fontWeight: 500 }}>robustos en reducción de depresión y ansiedad</span>, mientras que
              la eficacia en síntomas del TDAH o TEA es más modesta, sugiriendo que las IAA funcionan mejor como{' '}
              <span style={{ color: '#E8A882', fontWeight: 500 }}>intervenciones adyuvantes</span>.
              Los mecanismos involucran una cascada biopsicosocial: biofilia, oxitocina y catalizador social.
            </p>
          </div>
        </FadeUp>
      </section>

      {/* ── EVIDENCIA ── */}
      <section id="evidencia" style={{ padding: '7rem clamp(1.4rem, 6vw, 5rem)' }}>
        <div style={{ maxWidth: 960, margin: '0 auto' }}>
          <FadeUp>
            <div style={{ marginBottom: '3.5rem' }}>
              <span style={{
                fontSize: '0.72rem', letterSpacing: '0.2em', textTransform: 'uppercase',
                color: '#4E6E49', fontWeight: 500, display: 'block', marginBottom: '0.8rem',
              }}>
                Explora la evidencia · Metaanálisis 2023–2024
              </span>
              <h2 style={{
                fontFamily: "'DM Serif Display', serif", fontSize: 'clamp(2rem, 4vw, 3rem)',
                color: '#1E2A1A', marginBottom: '1rem',
              }}>
                Tamaños del Efecto por Dominio
              </h2>
              <p style={{ fontSize: '0.95rem', color: '#6B7A60', lineHeight: 1.75, maxWidth: 620 }}>
                Selecciona una población o dominio para explorar los tamaños del efecto cuantitativos y los hallazgos clave del metaanálisis correspondiente.
              </p>
            </div>
          </FadeUp>

          {/* Selector de dominio */}
          <FadeUp delay={60}>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.6rem', marginBottom: '2.5rem' }}>
              {DOMINIOS.map((d, i) => (
                <button
                  key={i}
                  onClick={() => setDominioActivo(i)}
                  style={{
                    padding: '0.6rem 1.2rem', borderRadius: 100, border: 'none', cursor: 'pointer',
                    fontSize: '0.8rem', fontWeight: dominioActivo === i ? 600 : 400,
                    background: dominioActivo === i ? d.color : 'rgba(78,110,73,0.07)',
                    color: dominioActivo === i ? '#fff' : '#6B7A60',
                    transition: 'all 0.25s ease',
                  }}
                >
                  {d.label}
                </button>
              ))}
            </div>
          </FadeUp>

          {/* Visualización */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
            <FadeUp delay={80}>
              <div style={{
                background: '#FDFAF5', borderRadius: 24, padding: '2.5rem',
                border: '1px solid rgba(78,110,73,0.1)',
                boxShadow: '0 4px 24px rgba(30,42,26,0.06)',
              }}>
                <div style={{ marginBottom: '2rem' }}>
                  <p style={{ fontSize: '0.7rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: '#9CAB8F', marginBottom: '0.5rem' }}>
                    Dominio seleccionado
                  </p>
                  <h3 style={{ fontFamily: "'DM Serif Display', serif", fontSize: '1.3rem', color: '#1E2A1A', lineHeight: 1.3 }}>
                    {dominio.label}
                  </h3>
                </div>
                <BarraEfecto valor={dominio.efecto} color={dominio.color} />
                <div style={{
                  marginTop: '1.5rem', display: 'inline-block', padding: '0.4rem 1rem',
                  background: `${dominio.color}15`, borderRadius: 100,
                  fontSize: '0.75rem', color: dominio.color, fontWeight: 600, letterSpacing: '0.1em',
                }}>
                  Efecto {dominio.nivel}
                </div>

                {/* Advertencia metodológica */}
                <div style={{
                  marginTop: '1.5rem', padding: '1rem 1.2rem', borderRadius: 14,
                  background: 'rgba(196,113,74,0.06)', border: '1px solid rgba(196,113,74,0.15)',
                }}>
                  <p style={{ fontSize: '0.75rem', color: '#C4714A', fontWeight: 600, marginBottom: '0.3rem' }}>
                    ⚠ Advertencia metodológica
                  </p>
                  <p style={{ fontSize: '0.8rem', color: '#8B6249', lineHeight: 1.6 }}>
                    Alto riesgo de sesgo, heterogeneidad sustancial y posible sesgo de publicación en estudios primarios.
                  </p>
                </div>
              </div>
            </FadeUp>

            <FadeUp delay={120}>
              <div style={{
                background: '#FDFAF5', borderRadius: 24, padding: '2.5rem',
                border: '1px solid rgba(78,110,73,0.1)',
                boxShadow: '0 4px 24px rgba(30,42,26,0.06)',
              }}>
                <p style={{ fontSize: '0.7rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: '#9CAB8F', marginBottom: '1.2rem' }}>
                  Hallazgos clave
                </p>
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  {dominio.hallazgos.map((h, i) => (
                    <li key={i} style={{ display: 'flex', gap: '0.8rem', alignItems: 'flex-start' }}>
                      <span style={{
                        width: 22, height: 22, borderRadius: '50%', flexShrink: 0,
                        background: `${dominio.color}15`, color: dominio.color,
                        display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: 1,
                      }}>
                        <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                      </span>
                      <p style={{ fontSize: '0.88rem', color: '#6B7A60', lineHeight: 1.75 }}>{h}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* ── MECANISMOS ── */}
      <section id="mecanismos" style={{ padding: '7rem clamp(1.4rem, 6vw, 5rem)', background: '#1E2A1A', position: 'relative', overflow: 'hidden' }}>
        <div style={{
          position: 'absolute', width: 500, height: 500, borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(122,155,118,0.09) 0%, transparent 70%)',
          left: -150, bottom: -150, pointerEvents: 'none',
        }} />
        <div style={{ maxWidth: 1100, margin: '0 auto', position: 'relative' }}>
          <FadeUp>
            <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
              <span style={{
                fontSize: '0.72rem', letterSpacing: '0.2em', textTransform: 'uppercase',
                color: '#C2D6BF', fontWeight: 500, display: 'block', marginBottom: '0.9rem',
              }}>
                Mecanismos de Acción
              </span>
              <h2 style={{ fontFamily: "'DM Serif Display', serif", fontSize: 'clamp(2rem, 4vw, 3rem)', color: '#fff' }}>
                ¿Cómo funcionan las IAA?
              </h2>
              <p style={{ color: 'rgba(255,255,255,0.45)', fontSize: '0.95rem', maxWidth: 520, margin: '1rem auto 0', lineHeight: 1.75 }}>
                Una compleja cascada biopsicosocial interactiva. No un solo mecanismo, sino una combinación de procesos que conducen a resultados terapéuticos.
              </p>
            </div>
          </FadeUp>

          {/* Flujo de mecanismos */}
          <div style={{
            display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: 0, position: 'relative',
          }}>
            {MECANISMOS.map((m, i) => (
              <FadeUp key={m.num} delay={i * 90}>
                <div style={{
                  padding: '2.5rem 2rem', position: 'relative',
                  borderRight: i < MECANISMOS.length - 1 ? '1px solid rgba(255,255,255,0.06)' : 'none',
                }}>
                  {/* Flecha entre pasos */}
                  {i < MECANISMOS.length - 1 && (
                    <div style={{
                      position: 'absolute', right: -12, top: '50%', transform: 'translateY(-50%)',
                      width: 24, height: 24, background: '#1E2A1A', zIndex: 1,
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      color: 'rgba(255,255,255,0.25)',
                    }}>
                      →
                    </div>
                  )}

                  <div style={{
                    width: 44, height: 44, borderRadius: 12,
                    background: `${m.color}20`, border: `1px solid ${m.color}40`,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontFamily: "'DM Serif Display', serif", fontSize: '0.9rem', color: m.color,
                    marginBottom: '1.4rem',
                  }}>
                    {m.num}
                  </div>
                  <h3 style={{
                    fontFamily: "'DM Serif Display', serif", fontSize: '1.3rem',
                    color: '#fff', marginBottom: '0.8rem',
                  }}>
                    {m.titulo}
                  </h3>
                  <p style={{ fontSize: '0.88rem', color: 'rgba(255,255,255,0.45)', lineHeight: 1.8 }}>
                    {m.desc}
                  </p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ── PRÁCTICA ── */}
      <section id="practica" style={{ padding: '7rem clamp(1.4rem, 6vw, 5rem)' }}>
        <div style={{ maxWidth: 860, margin: '0 auto' }}>
          <FadeUp>
            <div style={{ marginBottom: '4rem' }}>
              <span style={{
                fontSize: '0.72rem', letterSpacing: '0.2em', textTransform: 'uppercase',
                color: '#4E6E49', fontWeight: 500, display: 'block', marginBottom: '0.9rem',
              }}>
                De la investigación a la práctica
              </span>
              <h2 style={{ fontFamily: "'DM Serif Display', serif", fontSize: 'clamp(2rem, 4vw, 3rem)', color: '#1E2A1A' }}>
                Implementación en el mundo real
              </h2>
            </div>
          </FadeUp>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {PRACTICA_ITEMS.map((item, i) => (
              <Acordeon key={i} item={item} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ── FUTURO ── */}
      <section id="futuro" style={{ padding: '7rem clamp(1.4rem, 6vw, 5rem)', background: '#FDFAF5' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <FadeUp>
            <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
              <span style={{
                fontSize: '0.72rem', letterSpacing: '0.2em', textTransform: 'uppercase',
                color: '#4E6E49', fontWeight: 500, display: 'block', marginBottom: '0.9rem',
              }}>
                Horizontes emergentes
              </span>
              <h2 style={{ fontFamily: "'DM Serif Display', serif", fontSize: 'clamp(2rem, 4vw, 3rem)', color: '#1E2A1A' }}>
                El futuro de las IAA
              </h2>
            </div>
          </FadeUp>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem' }}>
            {FUTURO_ITEMS.map((item, i) => (
              <FadeUp key={i} delay={i * 60}>
                <div style={{
                  background: '#fff', borderRadius: 20, padding: '2rem',
                  border: '1px solid rgba(78,110,73,0.08)',
                  boxShadow: '0 2px 16px rgba(30,42,26,0.04)',
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLDivElement).style.transform = 'translateY(-4px)'
                  ;(e.currentTarget as HTMLDivElement).style.boxShadow = '0 16px 40px rgba(30,42,26,0.1)'
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLDivElement).style.transform = 'translateY(0)'
                  ;(e.currentTarget as HTMLDivElement).style.boxShadow = '0 2px 16px rgba(30,42,26,0.04)'
                }}
                >
                  <span style={{ fontSize: '2rem', display: 'block', marginBottom: '1rem' }}>{item.emoji}</span>
                  <h3 style={{ fontFamily: "'DM Serif Display', serif", fontSize: '1.2rem', color: '#1E2A1A', marginBottom: '0.7rem' }}>
                    {item.titulo}
                  </h3>
                  <p style={{ fontSize: '0.88rem', color: '#6B7A60', lineHeight: 1.8 }}>{item.desc}</p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ── CONCLUSIÓN ── */}
      <section id="conclusion" style={{ padding: '7rem clamp(1.4rem, 6vw, 5rem)', background: '#1E2A1A', position: 'relative', overflow: 'hidden' }}>
        <div style={{
          position: 'absolute', width: 700, height: 700, borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(196,113,74,0.08) 0%, transparent 70%)',
          right: -200, bottom: -200, pointerEvents: 'none',
        }} />
        <div style={{ maxWidth: 1000, margin: '0 auto', position: 'relative' }}>
          <FadeUp>
            <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
              <span style={{
                fontSize: '0.72rem', letterSpacing: '0.2em', textTransform: 'uppercase',
                color: '#C2D6BF', fontWeight: 500, display: 'block', marginBottom: '0.9rem',
              }}>
                Síntesis
              </span>
              <h2 style={{ fontFamily: "'DM Serif Display', serif", fontSize: 'clamp(2rem, 4vw, 3rem)', color: '#fff', marginBottom: '1.2rem' }}>
                Conclusión y Recomendaciones
              </h2>
              <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '1rem', maxWidth: 620, margin: '0 auto', lineHeight: 1.85 }}>
                La base de evidencia es más fuerte en el dominio afectivo. Las IAA son una valiosa{' '}
                <span style={{ color: '#E8A882' }}>intervención complementaria o adyuvante</span>, generalmente no un tratamiento primario independiente.
              </p>
            </div>
          </FadeUp>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
            {[
              {
                titulo: 'Para la Práctica Clínica',
                items: [
                  'Adoptar enfoque basado en la evidencia (priorizar para ansiedad, estrés, estado de ánimo).',
                  'Posicionar las IAA como tratamiento complementario, no sustituto del estándar de oro.',
                  'Implementar cribado y selección rigurosos de clientes y animales.',
                  'Priorizar competencia profesional a través de formación y certificación especializadas.',
                ],
                color: '#C2D6BF',
              },
              {
                titulo: 'Para Futuras Investigaciones',
                items: [
                  'Priorizar rigor metodológico: ECAs a gran escala, multicéntricos y con bajo sesgo.',
                  'Investigar mecanismos de acción midiendo biomarcadores (cortisol, oxitocina).',
                  'Realizar análisis de costo-efectividad — una brecha casi total en la literatura.',
                  'Incluir muestras más diversas desde el punto de vista cultural y etario.',
                ],
                color: '#E8A882',
              },
            ].map((bloque, i) => (
              <FadeUp key={i} delay={i * 80}>
                <div style={{
                  background: 'rgba(255,255,255,0.04)', borderRadius: 24, padding: '2.5rem',
                  border: `1px solid ${bloque.color}20`,
                }}>
                  <p style={{
                    fontFamily: "'DM Serif Display', serif", fontSize: '1.2rem',
                    color: bloque.color, marginBottom: '1.5rem',
                  }}>
                    {bloque.titulo}
                  </p>
                  <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.9rem' }}>
                    {bloque.items.map((item, j) => (
                      <li key={j} style={{ display: 'flex', gap: '0.8rem', alignItems: 'flex-start' }}>
                        <span style={{
                          width: 20, height: 20, borderRadius: '50%', flexShrink: 0,
                          background: `${bloque.color}20`, color: bloque.color,
                          display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: 1,
                        }}>
                          <svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                            <polyline points="20 6 9 17 4 12" />
                          </svg>
                        </span>
                        <p style={{ fontSize: '0.88rem', color: 'rgba(255,255,255,0.55)', lineHeight: 1.75 }}>{item}</p>
                      </li>
                    ))}
                  </ul>
                </div>
              </FadeUp>
            ))}
          </div>

          {/* Pie de página de la sección */}
          <FadeUp delay={160}>
            <p style={{
              marginTop: '3.5rem', textAlign: 'center', fontSize: '0.75rem',
              color: 'rgba(255,255,255,0.2)', letterSpacing: '0.08em',
            }}>
              Aplicación de Análisis Interactivo de IAA · Creada a partir del "Análisis Exhaustivo de la Evidencia Actual" (2024) · Gran Vida A.C.
            </p>
          </FadeUp>
        </div>
      </section>

    </div>
  )
}