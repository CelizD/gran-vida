import { useState } from 'react'
import FadeUp from '../components/FadeUp'

// ── DATOS ─────────────────────────────────────────────────────────

const STATS_HERO = [
  { icono: '📚', valor: '35', label: 'Estudios incluidos', sub: 'Filtrados de 1,240 registros iniciales' },
  { icono: '👥', valor: '4,102', label: 'Participantes totales', sub: 'En 12 países distintos' },
  { icono: '📉', valor: 'd=0.42', label: 'Efecto más fuerte', sub: 'Reducción de estrés — Moderado-Alto' },
]

const DOMINIOS = [
  {
    label: 'Estrés y Cortisol',
    iaa: 0.78,
    tp: 0.38,
    descripcion: 'El efecto más robusto de toda la revisión. Las IAA estructuradas muestran reducciones medibles de cortisol salival en sesiones de 20-30 min. La tenencia pasiva muestra beneficios acumulativos más modestos.',
    nota: 'Mejor evidencia disponible — múltiples biomarcadores medidos.',
  },
  {
    label: 'Soledad y Aislamiento',
    iaa: 0.65,
    tp: 0.71,
    descripcion: 'Único dominio donde la tenencia diaria supera a las IAA. La compañía constante del perro reduce la soledad de forma más efectiva que sesiones periódicas estructuradas.',
    nota: 'La tenencia supera a IAA en este dominio específico.',
  },
  {
    label: 'Depresión y Estado de Ánimo',
    iaa: 0.55,
    tp: 0.29,
    descripcion: 'Las IAA muestran efectos moderados en reducción de síntomas depresivos, especialmente en adultos mayores y pacientes hospitalizados. La tenencia pasiva muestra efectos más variables.',
    nota: 'IAA como adyuvante — no reemplaza tratamiento primario.',
  },
  {
    label: 'Niveles de Ansiedad',
    iaa: 0.68,
    tp: 0.41,
    descripcion: 'Efectos significativos en ansiedad situacional (procedimientos médicos, exámenes) con IAA. La tenencia diaria muestra beneficios en ansiedad rasgo pero con alta variabilidad entre estudios.',
    nota: 'Alta heterogeneidad — resultados dependen del contexto.',
  },
]

const MECANISMOS = [
  {
    icono: '🧬',
    titulo: 'Amortiguación Biológica',
    desc: 'La interacción directa — acariciar, contacto visual — desencadena la liberación de oxitocina y reduce los niveles de cortisol. Una respuesta fisiológica inmediata de reducción del estrés, independiente de la cognición.',
    color: '#4E6E49',
    colorBg: 'rgba(78,110,73,0.07)',
  },
  {
    icono: '🤝',
    titulo: 'Facilitación Social',
    desc: 'Los perros actúan como "catalizadores sociales", aumentando la probabilidad de conversaciones con extraños y reduciendo sentimientos de aislamiento. Proporcionan apoyo social sin juicios ni expectativas.',
    color: '#C4714A',
    colorBg: 'rgba(196,113,74,0.07)',
  },
  {
    icono: '👟',
    titulo: 'Activación Conductual',
    desc: 'La tenencia impone rutina y actividad física (paseos diarios). Combate el letargo y retraimiento conductual asociado con la depresión, actuando como un ancla de estructura diaria.',
    color: '#8B6249',
    colorBg: 'rgba(139,98,73,0.07)',
  },
]

const INCLUSION = [
  'Estudios cuantitativos o mixtos revisados por pares',
  'Escalas de salud mental estandarizadas (PHQ-9, GAD-7, etc.)',
  'Inclusión de grupo de control o diseño pre-post',
  'Período 2010–2024 para garantizar relevancia contemporánea',
]

// ── BARRA COMPARATIVA ─────────────────────────────────────────────
function BarraComparativa({
  label, valor, color, max = 1.0,
}: { label: string; valor: number; color: string; max?: number }) {
  const pct = Math.min((valor / max) * 100, 100)
  return (
    <div style={{ marginBottom: '1.2rem' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 6 }}>
        <span style={{ fontSize: '0.8rem', color: '#6B7A60', fontWeight: 500 }}>{label}</span>
        <span style={{ fontFamily: "'DM Serif Display', serif", fontSize: '1.1rem', color }}>{valor.toFixed(2)}</span>
      </div>
      <div style={{ height: 10, background: 'rgba(30,42,26,0.07)', borderRadius: 100, overflow: 'hidden' }}>
        <div style={{
          height: '100%', width: `${pct}%`,
          background: `linear-gradient(90deg, ${color}70, ${color})`,
          borderRadius: 100, transition: 'width 0.7s cubic-bezier(0.4,0,0.2,1)',
        }} />
      </div>
    </div>
  )
}

// ── GRÁFICO EMBUDO (SVG) ──────────────────────────────────────────
function GraficoEmbudo() {
  const puntos = [
    { x: 50, y: 15, r: 4, color: '#4E6E49' },
    { x: 47, y: 22, r: 5, color: '#4E6E49' },
    { x: 53, y: 28, r: 5, color: '#4E6E49' },
    { x: 44, y: 35, r: 6, color: '#C4714A' },
    { x: 56, y: 38, r: 6, color: '#4E6E49' },
    { x: 41, y: 46, r: 7, color: '#4E6E49' },
    { x: 58, y: 49, r: 7, color: '#C4714A' },
    { x: 37, y: 57, r: 8, color: '#4E6E49' },
    { x: 60, y: 60, r: 8, color: '#4E6E49' },
    { x: 33, y: 67, r: 9, color: '#C4714A' },
    { x: 63, y: 70, r: 9, color: '#4E6E49' },
    { x: 28, y: 77, r: 10, color: '#4E6E49' },
    { x: 66, y: 80, r: 10, color: '#4E6E49' },
    { x: 23, y: 86, r: 11, color: '#4E6E49' },
    { x: 70, y: 88, r: 11, color: '#C4714A' },
    // Asimetría: más puntos a la derecha (sesgo publicación)
    { x: 74, y: 92, r: 11, color: '#4E6E49' },
    { x: 77, y: 95, r: 12, color: '#4E6E49' },
  ]

  return (
    <svg viewBox="0 0 100 110" style={{ width: '100%', maxWidth: 340, display: 'block', margin: '0 auto' }}>
      {/* Línea central (efecto 0) */}
      <line x1="50" y1="5" x2="50" y2="105" stroke="rgba(78,110,73,0.25)" strokeWidth="0.5" strokeDasharray="2,2" />
      {/* Embudo */}
      <polygon
        points="50,8 20,102 80,102"
        fill="rgba(78,110,73,0.04)"
        stroke="rgba(78,110,73,0.15)"
        strokeWidth="0.5"
      />
      {/* Puntos */}
      {puntos.map((p, i) => (
        <circle key={i} cx={p.x} cy={p.y} r={p.r * 0.35} fill={p.color} opacity={0.7} />
      ))}
      {/* Etiquetas */}
      <text x="50" y="108" textAnchor="middle" fontSize="3.5" fill="#9CAB8F">Tamaño del Efecto (d)</text>
      <text x="2" y="10" fontSize="3" fill="#9CAB8F">Precisión</text>
    </svg>
  )
}

// ── PÁGINA PRINCIPAL ──────────────────────────────────────────────
export default function TenenciaPerros() {
  const [dominioActivo, setDominioActivo] = useState(0)
  const dominio = DOMINIOS[dominioActivo]

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <div style={{ background: '#F7F2EA' }}>

      {/* ── HERO ── */}
      <section style={{
        padding: '8rem clamp(1.4rem, 8vw, 8rem) 5rem',
        textAlign: 'center',
        background: `
          radial-gradient(ellipse 55% 50% at 75% 25%, rgba(78,110,73,0.14) 0%, transparent 65%),
          radial-gradient(ellipse 40% 35% at 15% 80%, rgba(196,113,74,0.09) 0%, transparent 60%),
          #FDFAF5
        `,
        position: 'relative', overflow: 'hidden',
      }}>
        <div style={{
          position: 'absolute', width: 480, height: 480, borderRadius: '50%',
          border: '1px solid rgba(122,155,118,0.12)', top: -160, right: -100, pointerEvents: 'none',
        }} />

        <div style={{ position: 'relative', maxWidth: 780, margin: '0 auto' }}>
          <FadeUp>
            <div style={{
              display: 'inline-flex', alignItems: 'center', gap: '0.6rem',
              marginBottom: '1.8rem', fontSize: '0.7rem', letterSpacing: '0.22em',
              textTransform: 'uppercase', color: '#C4714A', fontWeight: 500,
              padding: '0.35rem 1.2rem', border: '1px solid rgba(196,113,74,0.3)', borderRadius: 100,
            }}>
              🐕 CanineInsight · Revisión Sistemática
            </div>
          </FadeUp>

          <FadeUp delay={80}>
            <h1 style={{
              fontFamily: "'DM Serif Display', serif",
              fontSize: 'clamp(2.6rem, 5.5vw, 4.4rem)',
              lineHeight: 1.07, color: '#1E2A1A', marginBottom: '1.4rem',
            }}>
              Tenencia de Perros y{' '}
              <em style={{ color: '#4E6E49', fontStyle: 'italic' }}>Salud Mental</em>
            </h1>
          </FadeUp>

          <FadeUp delay={140}>
            <p style={{ fontSize: '1.05rem', color: '#6B7A60', lineHeight: 1.85, maxWidth: 580, margin: '0 auto 3rem' }}>
              Una revisión sistemática de 35 estudios revisados por pares para determinar la eficacia clínica y social
              de las interacciones caninas en el bienestar psicológico humano.
            </p>
          </FadeUp>

          {/* Nav tabs */}
          <FadeUp delay={190}>
            <nav style={{
              display: 'inline-flex', flexWrap: 'wrap', justifyContent: 'center',
              gap: '0.4rem', background: 'rgba(78,110,73,0.06)',
              padding: '0.45rem', borderRadius: 100,
              border: '1px solid rgba(78,110,73,0.1)',
            }}>
              {['resumen', 'metodologia', 'resultados', 'mecanismos'].map((tab, i) => (
                <button
                  key={tab}
                  onClick={() => scrollTo(tab)}
                  style={{
                    padding: '0.5rem 1.2rem', borderRadius: 100, border: 'none', cursor: 'pointer',
                    fontSize: '0.78rem', letterSpacing: '0.08em', fontWeight: 400,
                    background: 'transparent', color: '#6B7A60',
                    textTransform: 'capitalize', transition: 'all 0.2s',
                  }}
                  onMouseEnter={e => {
                    (e.currentTarget as HTMLButtonElement).style.background = '#4E6E49'
                    ;(e.currentTarget as HTMLButtonElement).style.color = '#fff'
                  }}
                  onMouseLeave={e => {
                    (e.currentTarget as HTMLButtonElement).style.background = 'transparent'
                    ;(e.currentTarget as HTMLButtonElement).style.color = '#6B7A60'
                  }}
                >
                  {tab.charAt(0).toUpperCase() + tab.slice(1)}
                </button>
              ))}
            </nav>
          </FadeUp>
        </div>
      </section>

      {/* ── STATS ── */}
      <section id="resumen" style={{ background: '#1E2A1A', padding: '0' }}>
        <div style={{
          display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)',
          borderBottom: '1px solid rgba(255,255,255,0.05)',
        }}>
          {STATS_HERO.map((s, i) => (
            <FadeUp key={i} delay={i * 70}>
              <div style={{
                padding: '3rem 2.5rem', textAlign: 'center',
                borderRight: i < 2 ? '1px solid rgba(255,255,255,0.06)' : 'none',
              }}>
                <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>{s.icono}</div>
                <div style={{
                  fontFamily: "'DM Serif Display', serif",
                  fontSize: 'clamp(2rem, 4vw, 3rem)', color: '#fff', lineHeight: 1,
                }}>
                  {s.valor}
                </div>
                <p style={{
                  fontSize: '0.75rem', letterSpacing: '0.14em', textTransform: 'uppercase',
                  color: '#C2D6BF', marginTop: '0.5rem', marginBottom: '0.3rem', fontWeight: 600,
                }}>
                  {s.label}
                </p>
                <p style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.28)', lineHeight: 1.5 }}>{s.sub}</p>
              </div>
            </FadeUp>
          ))}
        </div>

        {/* Resumen ejecutivo */}
        <FadeUp>
          <div style={{ maxWidth: 860, margin: '0 auto', padding: '4rem clamp(1.4rem, 6vw, 5rem)' }}>
            <span style={{
              display: 'block', marginBottom: '1rem', fontSize: '0.68rem',
              letterSpacing: '0.2em', textTransform: 'uppercase', color: '#C2D6BF', fontWeight: 600,
            }}>
              Resumen Ejecutivo
            </span>
            <p style={{ fontSize: 'clamp(0.95rem, 1.6vw, 1.1rem)', color: 'rgba(255,255,255,0.6)', lineHeight: 1.9 }}>
              Este panel sintetiza hallazgos de una revisión sistemática que cubre el período{' '}
              <span style={{ color: '#C2D6BF', fontWeight: 500 }}>2010–2024</span>.
              Aunque la cultura popular sugiere un impacto universalmente positivo, los datos revelan un panorama
              {' '}<span style={{ color: '#E8A882', fontWeight: 500 }}>matizado</span>{' '}
              donde los beneficios dependen en gran medida del contexto: intervenciones estructuradas (IAA)
              versus tenencia pasiva diaria (TP).
            </p>
          </div>
        </FadeUp>
      </section>

      {/* ── METODOLOGÍA ── */}
      <section id="metodologia" style={{ padding: '7rem clamp(1.4rem, 6vw, 5rem)' }}>
        <div style={{ maxWidth: 1060, margin: '0 auto' }}>
          <FadeUp>
            <div style={{ marginBottom: '4rem' }}>
              <span style={{
                fontSize: '0.72rem', letterSpacing: '0.2em', textTransform: 'uppercase',
                color: '#4E6E49', fontWeight: 500, display: 'block', marginBottom: '0.9rem',
              }}>
                Características del estudio
              </span>
              <h2 style={{ fontFamily: "'DM Serif Display', serif", fontSize: 'clamp(2rem, 4vw, 3rem)', color: '#1E2A1A' }}>
                Metodología
              </h2>
            </div>
          </FadeUp>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2.5rem' }}>

            {/* Criterios de inclusión */}
            <FadeUp delay={60}>
              <div style={{
                background: '#FDFAF5', borderRadius: 24, padding: '2.5rem',
                border: '1px solid rgba(78,110,73,0.1)',
                boxShadow: '0 4px 24px rgba(30,42,26,0.05)',
              }}>
                <h3 style={{
                  fontFamily: "'DM Serif Display', serif", fontSize: '1.3rem',
                  color: '#1E2A1A', marginBottom: '1.5rem',
                }}>
                  Criterios de Inclusión
                </h3>
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  {INCLUSION.map((item, i) => (
                    <li key={i} style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
                      <span style={{
                        width: 22, height: 22, borderRadius: '50%', flexShrink: 0,
                        background: 'rgba(78,110,73,0.1)', color: '#4E6E49',
                        display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: 1,
                      }}>
                        <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                      </span>
                      <p style={{ fontSize: '0.9rem', color: '#6B7A60', lineHeight: 1.7 }}>{item}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </FadeUp>

            {/* Tipos de estudio */}
            <FadeUp delay={100}>
              <div style={{
                background: '#FDFAF5', borderRadius: 24, padding: '2.5rem',
                border: '1px solid rgba(78,110,73,0.1)',
                boxShadow: '0 4px 24px rgba(30,42,26,0.05)',
              }}>
                <h3 style={{
                  fontFamily: "'DM Serif Display', serif", fontSize: '1.3rem',
                  color: '#1E2A1A', marginBottom: '0.5rem',
                }}>
                  Distribución por Tipo de Estudio
                </h3>
                <p style={{ fontSize: '0.8rem', color: '#9CAB8F', marginBottom: '2rem' }}>
                  Los ECA constituyen el 45% de los datos — nivel moderado de calidad de evidencia.
                </p>

                {/* Barras de distribución */}
                {[
                  { label: 'Ensayos Controlados Aleatorizados (ECA)', pct: 45, color: '#4E6E49' },
                  { label: 'Estudios Cuasi-experimentales', pct: 28, color: '#C4714A' },
                  { label: 'Diseños Pre-Post sin control', pct: 18, color: '#8B6249' },
                  { label: 'Estudios Mixtos', pct: 9, color: '#9CAB8F' },
                ].map((b, i) => (
                  <div key={i} style={{ marginBottom: '1rem' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 5 }}>
                      <span style={{ fontSize: '0.8rem', color: '#6B7A60' }}>{b.label}</span>
                      <span style={{ fontSize: '0.8rem', fontWeight: 600, color: b.color }}>{b.pct}%</span>
                    </div>
                    <div style={{ height: 8, background: 'rgba(30,42,26,0.07)', borderRadius: 100, overflow: 'hidden' }}>
                      <div style={{
                        height: '100%', width: `${b.pct}%`,
                        background: b.color, borderRadius: 100,
                        transition: 'width 0.8s ease',
                      }} />
                    </div>
                  </div>
                ))}
              </div>
            </FadeUp>

          </div>
        </div>
      </section>

      {/* ── RESULTADOS ── */}
      <section id="resultados" style={{ padding: '7rem clamp(1.4rem, 6vw, 5rem)', background: '#1E2A1A', position: 'relative', overflow: 'hidden' }}>
        <div style={{
          position: 'absolute', width: 600, height: 600, borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(122,155,118,0.09) 0%, transparent 70%)',
          left: -200, top: -200, pointerEvents: 'none',
        }} />

        <div style={{ maxWidth: 1060, margin: '0 auto', position: 'relative' }}>
          <FadeUp>
            <div style={{ marginBottom: '3.5rem' }}>
              <span style={{
                fontSize: '0.72rem', letterSpacing: '0.2em', textTransform: 'uppercase',
                color: '#C2D6BF', fontWeight: 500, display: 'block', marginBottom: '0.9rem',
              }}>
                Explorador de Análisis
              </span>
              <h2 style={{ fontFamily: "'DM Serif Display', serif", fontSize: 'clamp(2rem, 4vw, 3rem)', color: '#fff', marginBottom: '0.8rem' }}>
                Resultados por Dominio
              </h2>
              <p style={{ color: 'rgba(255,255,255,0.42)', fontSize: '0.92rem', maxWidth: 560, lineHeight: 1.75 }}>
                Nota la diferencia en tamaños del efecto entre <span style={{ color: '#C2D6BF' }}>Intervenciones IAA</span>{' '}
                (estructuradas) y <span style={{ color: '#E8A882' }}>Tenencia diaria TP</span> (no estructurada).
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
                    padding: '0.6rem 1.3rem', borderRadius: 100, border: 'none', cursor: 'pointer',
                    fontSize: '0.8rem', fontWeight: dominioActivo === i ? 600 : 400,
                    background: dominioActivo === i ? '#4E6E49' : 'rgba(255,255,255,0.07)',
                    color: dominioActivo === i ? '#fff' : 'rgba(255,255,255,0.5)',
                    transition: 'all 0.25s ease',
                    letterSpacing: '0.04em',
                  }}
                >
                  {d.label}
                </button>
              ))}
            </div>
          </FadeUp>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>

            {/* Gráfica comparativa */}
            <FadeUp delay={80}>
              <div style={{
                background: 'rgba(255,255,255,0.04)', borderRadius: 24, padding: '2.5rem',
                border: '1px solid rgba(255,255,255,0.08)',
              }}>
                <p style={{
                  fontSize: '0.68rem', letterSpacing: '0.15em', textTransform: 'uppercase',
                  color: 'rgba(255,255,255,0.3)', marginBottom: '0.4rem',
                }}>
                  Tamaño del Efecto (d de Cohen)
                </p>
                <h3 style={{
                  fontFamily: "'DM Serif Display', serif", fontSize: '1.2rem',
                  color: '#fff', marginBottom: '2rem',
                }}>
                  {dominio.label}
                </h3>

                <BarraComparativa label="Intervención (IAA)" valor={dominio.iaa} color="#C2D6BF" />
                <BarraComparativa label="Tenencia (TP)" valor={dominio.tp} color="#E8A882" />

                <div style={{ marginTop: '1.5rem', display: 'flex', gap: '1rem' }}>
                  <div style={{
                    flex: 1, padding: '0.8rem 1rem', borderRadius: 12,
                    background: 'rgba(194,214,191,0.1)', border: '1px solid rgba(194,214,191,0.2)',
                    textAlign: 'center',
                  }}>
                    <p style={{ fontSize: '0.65rem', color: '#C2D6BF', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 2 }}>IAA</p>
                    <p style={{ fontFamily: "'DM Serif Display', serif", fontSize: '1.4rem', color: '#C2D6BF' }}>{dominio.iaa.toFixed(2)}</p>
                  </div>
                  <div style={{
                    flex: 1, padding: '0.8rem 1rem', borderRadius: 12,
                    background: 'rgba(232,168,130,0.1)', border: '1px solid rgba(232,168,130,0.2)',
                    textAlign: 'center',
                  }}>
                    <p style={{ fontSize: '0.65rem', color: '#E8A882', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 2 }}>Tenencia</p>
                    <p style={{ fontFamily: "'DM Serif Display', serif", fontSize: '1.4rem', color: '#E8A882' }}>{dominio.tp.toFixed(2)}</p>
                  </div>
                </div>
              </div>
            </FadeUp>

            {/* Descripción del dominio */}
            <FadeUp delay={120}>
              <div style={{
                background: 'rgba(255,255,255,0.04)', borderRadius: 24, padding: '2.5rem',
                border: '1px solid rgba(255,255,255,0.08)',
                display: 'flex', flexDirection: 'column', justifyContent: 'space-between',
              }}>
                <div>
                  <p style={{
                    fontSize: '0.68rem', letterSpacing: '0.15em', textTransform: 'uppercase',
                    color: 'rgba(255,255,255,0.3)', marginBottom: '1rem',
                  }}>
                    Interpretación
                  </p>
                  <p style={{ fontSize: '0.95rem', color: 'rgba(255,255,255,0.6)', lineHeight: 1.85 }}>
                    {dominio.descripcion}
                  </p>
                </div>
                <div style={{
                  marginTop: '2rem', padding: '1rem 1.2rem', borderRadius: 14,
                  background: 'rgba(196,113,74,0.08)', border: '1px solid rgba(196,113,74,0.2)',
                }}>
                  <p style={{ fontSize: '0.75rem', color: '#E8A882', fontWeight: 600, marginBottom: '0.3rem' }}>
                    📌 Nota metodológica
                  </p>
                  <p style={{ fontSize: '0.82rem', color: 'rgba(196,113,74,0.8)', lineHeight: 1.6 }}>
                    {dominio.nota}
                  </p>
                </div>
              </div>
            </FadeUp>

          </div>
        </div>
      </section>

      {/* ── MECANISMOS ── */}
      <section id="mecanismos" style={{ padding: '7rem clamp(1.4rem, 6vw, 5rem)' }}>
        <div style={{ maxWidth: 1060, margin: '0 auto' }}>
          <FadeUp>
            <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
              <span style={{
                fontSize: '0.72rem', letterSpacing: '0.2em', textTransform: 'uppercase',
                color: '#4E6E49', fontWeight: 500, display: 'block', marginBottom: '0.9rem',
              }}>
                Mecanismos de Acción
              </span>
              <h2 style={{ fontFamily: "'DM Serif Display', serif", fontSize: 'clamp(2rem, 4vw, 3rem)', color: '#1E2A1A', marginBottom: '1rem' }}>
                ¿Cómo influyen los perros en la salud mental?
              </h2>
              <p style={{ fontSize: '0.95rem', color: '#6B7A60', maxWidth: 520, margin: '0 auto', lineHeight: 1.75 }}>
                La revisión identificó tres vías causales primarias corroboradas por datos cualitativos y análisis de biomarcadores.
              </p>
            </div>
          </FadeUp>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
            {MECANISMOS.map((m, i) => (
              <FadeUp key={i} delay={i * 80}>
                <div style={{
                  background: '#FDFAF5', borderRadius: 24, padding: '2.5rem',
                  border: '1px solid rgba(78,110,73,0.08)',
                  boxShadow: '0 4px 24px rgba(30,42,26,0.05)',
                  position: 'relative', overflow: 'hidden',
                }}>
                  <div style={{
                    position: 'absolute', top: 0, left: 0, right: 0, height: 3,
                    background: m.color, borderRadius: '24px 24px 0 0',
                  }} />
                  <div style={{ fontSize: '2.2rem', marginBottom: '1.2rem' }}>{m.icono}</div>
                  <span style={{
                    display: 'inline-block', marginBottom: '0.8rem',
                    fontSize: '0.65rem', letterSpacing: '0.18em', textTransform: 'uppercase',
                    color: m.color, fontWeight: 600, padding: '0.25rem 0.8rem',
                    background: m.colorBg, borderRadius: 100,
                  }}>
                    Vía {i + 1}
                  </span>
                  <h3 style={{
                    fontFamily: "'DM Serif Display', serif", fontSize: '1.3rem',
                    color: '#1E2A1A', marginBottom: '0.9rem',
                  }}>
                    {m.titulo}
                  </h3>
                  <p style={{ fontSize: '0.9rem', color: '#6B7A60', lineHeight: 1.8 }}>{m.desc}</p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ── SESGO ── */}
      <section style={{ padding: '7rem clamp(1.4rem, 6vw, 5rem)', background: '#1E2A1A', position: 'relative', overflow: 'hidden' }}>
        <div style={{
          position: 'absolute', width: 500, height: 500, borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(196,113,74,0.07) 0%, transparent 70%)',
          right: -150, bottom: -150, pointerEvents: 'none',
        }} />
        <div style={{ maxWidth: 900, margin: '0 auto', position: 'relative' }}>
          <FadeUp>
            <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
              <span style={{
                fontSize: '0.72rem', letterSpacing: '0.2em', textTransform: 'uppercase',
                color: '#C2D6BF', fontWeight: 500, display: 'block', marginBottom: '0.9rem',
              }}>
                Evaluación de Fiabilidad
              </span>
              <h2 style={{ fontFamily: "'DM Serif Display', serif", fontSize: 'clamp(2rem, 4vw, 3rem)', color: '#fff' }}>
                Gráfico de Embudo (Sesgo de Publicación)
              </h2>
            </div>
          </FadeUp>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem', alignItems: 'center' }}>
            <FadeUp delay={60}>
              <div style={{
                background: 'rgba(255,255,255,0.04)', borderRadius: 24, padding: '2rem',
                border: '1px solid rgba(255,255,255,0.07)',
              }}>
                <GraficoEmbudo />
              </div>
            </FadeUp>

            <FadeUp delay={100}>
              <div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
                  {[
                    { icono: '🔺', texto: 'Cima del embudo: estudios grandes y precisos con resultados consistentes.', color: '#C2D6BF' },
                    { icono: '🔻', texto: 'Fondo: estudios pequeños y variables con mayor dispersión de resultados.', color: '#E8A882' },
                    { icono: '⚠️', texto: 'Conclusión: ligero sesgo de publicación hacia resultados positivos detectado.', color: '#E8A882' },
                  ].map((item, i) => (
                    <div key={i} style={{
                      display: 'flex', gap: '1rem', alignItems: 'flex-start',
                      padding: '1.2rem', borderRadius: 16,
                      background: 'rgba(255,255,255,0.04)',
                      border: '1px solid rgba(255,255,255,0.07)',
                    }}>
                      <span style={{ fontSize: '1.2rem', flexShrink: 0 }}>{item.icono}</span>
                      <p style={{ fontSize: '0.88rem', color: 'rgba(255,255,255,0.55)', lineHeight: 1.75 }}>{item.texto}</p>
                    </div>
                  ))}
                </div>
                <p style={{
                  marginTop: '1.5rem', fontSize: '0.72rem', color: 'rgba(255,255,255,0.2)',
                  lineHeight: 1.6, borderTop: '1px solid rgba(255,255,255,0.07)', paddingTop: '1.2rem',
                }}>
                  © 2024 Análisis generado con fines de demostración basado en datos agregados de revisión sistemática · Gran Vida A.C.
                </p>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

    </div>
  )
}