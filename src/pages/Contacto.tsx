import { useState } from 'react'
import FadeUp from '../components/FadeUp'

const CONTACTOS = [
  {
    icono: '💬',
    titulo: 'WhatsApp',
    valor: '+52 664 129 1664',
    href: 'https://wa.me/5216641291664',
    etiqueta: 'Escríbenos directamente',
    color: '#4E6E49',
    colorBg: 'rgba(78,110,73,0.07)',
  },
  {
    icono: '📍',
    titulo: 'Sede Playas',
    valor: 'Cortijo San José, Playas de Tijuana',
    href: null,
    etiqueta: 'Ubicación 1',
    color: '#C4714A',
    colorBg: 'rgba(196,113,74,0.07)',
  },
  {
    icono: '📍',
    titulo: 'Sede Las Palmas',
    valor: 'Blvd. Díaz Ordaz, Las Palmas',
    href: null,
    etiqueta: 'Ubicación 2',
    color: '#8B6249',
    colorBg: 'rgba(139,98,73,0.07)',
  },
]

const REDES = [
  {
    nombre: 'Facebook',
    href: 'https://www.facebook.com/GranVidaSAA/',
    icono: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
      </svg>
    ),
  },
  {
    nombre: 'Instagram',
    href: 'https://www.instagram.com/granvidasaaac/',
    icono: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
      </svg>
    ),
  },
]

const initialForm = { nombre: '', apellidos: '', correo: '', mensaje: '' }

export default function Contacto() {
  const [form, setForm] = useState(initialForm)
  const [enviando, setEnviando] = useState(false)
  const [enviado, setEnviado] = useState(false)
  const [error, setError] = useState('')

  const set = (k: keyof typeof initialForm) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
      setForm(prev => ({ ...prev, [k]: e.target.value }))

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!form.nombre || !form.correo || !form.mensaje) {
      setError('Por favor completa todos los campos requeridos.')
      return
    }
    setEnviando(true)
    setError('')
    // Simulación de envío — aquí puedes conectar EmailJS, Formspree, etc.
    await new Promise(r => setTimeout(r, 1400))
    setEnviando(false)
    setEnviado(true)
    setForm(initialForm)
  }

  const inputCls: React.CSSProperties = {
    width: '100%', padding: '0.85rem 1.1rem', borderRadius: 14,
    border: '1px solid #DDD7CC', background: '#FAFAF7',
    fontSize: '0.93rem', color: '#2C3525', outline: 'none',
    fontFamily: 'Jost, sans-serif',
    transition: 'border-color 0.2s',
  }

  const labelCls: React.CSSProperties = {
    display: 'block', fontSize: '0.7rem', fontWeight: 600,
    color: '#8A9A80', textTransform: 'uppercase', letterSpacing: '0.12em', marginBottom: 6,
  }

  return (
    <div style={{ background: '#F7F2EA' }}>

      {/* ── HERO ── */}
      <section style={{
        padding: '8rem clamp(1.4rem, 8vw, 8rem) 5rem',
        textAlign: 'center',
        background: `
          radial-gradient(ellipse 55% 50% at 70% 20%, rgba(78,110,73,0.13) 0%, transparent 65%),
          radial-gradient(ellipse 40% 35% at 15% 80%, rgba(196,113,74,0.09) 0%, transparent 60%),
          #FDFAF5
        `,
        position: 'relative', overflow: 'hidden',
      }}>
        <div style={{
          position: 'absolute', width: 460, height: 460, borderRadius: '50%',
          border: '1px solid rgba(122,155,118,0.12)', top: -150, right: -80, pointerEvents: 'none',
        }} />
        <div style={{ position: 'relative', maxWidth: 640, margin: '0 auto' }}>
          <FadeUp>
            <span style={{
              display: 'inline-block', marginBottom: '1.5rem', fontSize: '0.7rem',
              letterSpacing: '0.22em', textTransform: 'uppercase', color: '#C4714A',
              fontWeight: 500, padding: '0.35rem 1.2rem',
              border: '1px solid rgba(196,113,74,0.3)', borderRadius: 100,
            }}>
              Estamos para escucharte
            </span>
          </FadeUp>
          <FadeUp delay={80}>
            <h1 style={{
              fontFamily: "'DM Serif Display', serif",
              fontSize: 'clamp(2.8rem, 6vw, 4.8rem)',
              lineHeight: 1.07, color: '#1E2A1A', marginBottom: '1.4rem',
            }}>
              <em style={{ color: '#4E6E49', fontStyle: 'italic' }}>¡Contáctanos!</em>
            </h1>
          </FadeUp>
          <FadeUp delay={150}>
            <p style={{
              fontSize: '1.05rem', color: '#6B7A60', lineHeight: 1.85,
              maxWidth: 500, margin: '0 auto',
            }}>
              Estaremos encantados de responder tus preguntas, escuchar tus ideas o agendar una visita.
              Escríbenos y te responderemos lo antes posible.
            </p>
          </FadeUp>
        </div>
      </section>

      {/* ── CUERPO PRINCIPAL ── */}
      <section style={{ padding: '6rem clamp(1.4rem, 6vw, 5rem) 8rem' }}>
        <div style={{
          maxWidth: 1060, margin: '0 auto',
          display: 'grid', gridTemplateColumns: '1fr 1.4fr', gap: '3rem', alignItems: 'start',
        }}>

          {/* ── COLUMNA IZQUIERDA: Info ── */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>

            {/* Cards de contacto */}
            {CONTACTOS.map((c, i) => (
              <FadeUp key={i} delay={i * 70}>
                <div style={{
                  background: '#FDFAF5', borderRadius: 20, padding: '1.6rem 1.8rem',
                  border: '1px solid rgba(78,110,73,0.09)',
                  boxShadow: '0 2px 16px rgba(30,42,26,0.05)',
                  display: 'flex', alignItems: 'center', gap: '1.2rem',
                }}>
                  <div style={{
                    width: 48, height: 48, borderRadius: 14, flexShrink: 0,
                    background: c.colorBg, display: 'flex', alignItems: 'center',
                    justifyContent: 'center', fontSize: '1.4rem',
                  }}>
                    {c.icono}
                  </div>
                  <div style={{ flex: 1 }}>
                    <p style={{
                      fontSize: '0.65rem', letterSpacing: '0.15em', textTransform: 'uppercase',
                      color: c.color, fontWeight: 600, marginBottom: 3,
                    }}>
                      {c.etiqueta}
                    </p>
                    <p style={{
                      fontFamily: "'DM Serif Display', serif",
                      fontSize: '1rem', color: '#1E2A1A', marginBottom: 2,
                    }}>
                      {c.titulo}
                    </p>
                    {c.href ? (
                      <a href={c.href} target="_blank" rel="noreferrer"
                        style={{ fontSize: '0.85rem', color: c.color, textDecoration: 'none' }}>
                        {c.valor} →
                      </a>
                    ) : (
                      <p style={{ fontSize: '0.85rem', color: '#6B7A60' }}>{c.valor}</p>
                    )}
                  </div>
                </div>
              </FadeUp>
            ))}

            {/* Redes sociales */}
            <FadeUp delay={220}>
              <div style={{
                background: '#1E2A1A', borderRadius: 20, padding: '1.8rem',
                display: 'flex', flexDirection: 'column', gap: '1rem',
              }}>
                <p style={{
                  fontSize: '0.68rem', letterSpacing: '0.18em', textTransform: 'uppercase',
                  color: '#C2D6BF', fontWeight: 600,
                }}>
                  Síguenos
                </p>
                <div style={{ display: 'flex', gap: '0.8rem' }}>
                  {REDES.map(r => (
                    <a key={r.nombre} href={r.href} target="_blank" rel="noreferrer"
                      style={{
                        display: 'flex', alignItems: 'center', gap: '0.6rem',
                        padding: '0.7rem 1.2rem', borderRadius: 100,
                        background: 'rgba(255,255,255,0.07)',
                        border: '1px solid rgba(255,255,255,0.1)',
                        color: 'rgba(255,255,255,0.7)', textDecoration: 'none',
                        fontSize: '0.82rem', transition: 'all 0.2s',
                      }}
                      onMouseEnter={e => {
                        (e.currentTarget as HTMLAnchorElement).style.background = 'rgba(255,255,255,0.14)'
                        ;(e.currentTarget as HTMLAnchorElement).style.color = '#fff'
                      }}
                      onMouseLeave={e => {
                        (e.currentTarget as HTMLAnchorElement).style.background = 'rgba(255,255,255,0.07)'
                        ;(e.currentTarget as HTMLAnchorElement).style.color = 'rgba(255,255,255,0.7)'
                      }}
                    >
                      {r.icono} {r.nombre}
                    </a>
                  ))}
                </div>
                <p style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.25)', lineHeight: 1.6, marginTop: '0.3rem' }}>
                  RFC: GVS250609FY2 · A.C. legalmente constituida
                </p>
              </div>
            </FadeUp>
          </div>

          {/* ── COLUMNA DERECHA: Formulario ── */}
          <FadeUp delay={60}>
            <div style={{
              background: '#fff', borderRadius: 28,
              border: '1px solid #E5DDD0',
              boxShadow: '0 4px 40px rgba(30,42,26,0.07)',
              overflow: 'hidden',
            }}>
              {/* Header de tarjeta */}
              <div style={{
                padding: '2rem 2.5rem 1.5rem',
                borderBottom: '1px solid #F0EBE2',
              }}>
                <p style={{
                  fontSize: '0.68rem', letterSpacing: '0.18em', textTransform: 'uppercase',
                  color: '#9CAB8F', fontWeight: 600, marginBottom: '0.4rem',
                }}>
                  Formulario de contacto
                </p>
                <h2 style={{
                  fontFamily: "'DM Serif Display', serif",
                  fontSize: '1.7rem', color: '#1E2A1A',
                }}>
                  Envíanos un mensaje
                </h2>
              </div>

              <div style={{ padding: '2rem 2.5rem 2.5rem' }}>

                {/* Mensaje de éxito */}
                {enviado && (
                  <div style={{
                    marginBottom: '1.5rem', padding: '1.2rem 1.4rem', borderRadius: 16,
                    background: 'rgba(78,110,73,0.06)', border: '1px solid rgba(78,110,73,0.2)',
                  }}>
                    <p style={{ fontSize: '0.9rem', color: '#4E6E49', fontWeight: 500 }}>
                      ✓ ¡Mensaje enviado con éxito! Te responderemos pronto.
                    </p>
                  </div>
                )}

                {/* Error */}
                {error && (
                  <div style={{
                    marginBottom: '1.5rem', padding: '1rem 1.2rem', borderRadius: 14,
                    background: 'rgba(196,113,74,0.06)', border: '1px solid rgba(196,113,74,0.2)',
                  }}>
                    <p style={{ fontSize: '0.85rem', color: '#C4714A' }}>⚠ {error}</p>
                  </div>
                )}

                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>

                  {/* Nombre + Apellidos */}
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                    <div>
                      <label style={labelCls}>Nombre <span style={{ color: '#C4714A' }}>*</span></label>
                      <input
                        type="text" required value={form.nombre} onChange={set('nombre')}
                        placeholder="Tu nombre" style={inputCls}
                        onFocus={e => (e.target as HTMLInputElement).style.borderColor = '#4E6E49'}
                        onBlur={e => (e.target as HTMLInputElement).style.borderColor = '#DDD7CC'}
                      />
                    </div>
                    <div>
                      <label style={labelCls}>Apellidos</label>
                      <input
                        type="text" value={form.apellidos} onChange={set('apellidos')}
                        placeholder="Tus apellidos" style={inputCls}
                        onFocus={e => (e.target as HTMLInputElement).style.borderColor = '#4E6E49'}
                        onBlur={e => (e.target as HTMLInputElement).style.borderColor = '#DDD7CC'}
                      />
                    </div>
                  </div>

                  {/* Correo */}
                  <div>
                    <label style={labelCls}>Correo electrónico <span style={{ color: '#C4714A' }}>*</span></label>
                    <input
                      type="email" required value={form.correo} onChange={set('correo')}
                      placeholder="correo@ejemplo.com" style={inputCls}
                      onFocus={e => (e.target as HTMLInputElement).style.borderColor = '#4E6E49'}
                      onBlur={e => (e.target as HTMLInputElement).style.borderColor = '#DDD7CC'}
                    />
                  </div>

                  {/* Mensaje */}
                  <div>
                    <label style={labelCls}>Mensaje <span style={{ color: '#C4714A' }}>*</span></label>
                    <textarea
                      required value={form.mensaje} onChange={set('mensaje')}
                      placeholder="¿En qué podemos ayudarte? Cuéntanos sobre tu consulta, idea o solicitud..."
                      rows={5}
                      style={{ ...inputCls, resize: 'vertical', minHeight: 130 }}
                      onFocus={e => (e.target as HTMLTextAreaElement).style.borderColor = '#4E6E49'}
                      onBlur={e => (e.target as HTMLTextAreaElement).style.borderColor = '#DDD7CC'}
                    />
                  </div>

                  {/* Botones */}
                  <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', paddingTop: '0.5rem' }}>
                    <button
                      type="submit" disabled={enviando}
                      style={{
                        flex: 1, padding: '1rem 2rem', borderRadius: 100, border: 'none',
                        cursor: enviando ? 'not-allowed' : 'pointer',
                        fontSize: '0.88rem', fontWeight: 500, letterSpacing: '0.06em',
                        color: '#fff', fontFamily: 'Jost, sans-serif',
                        background: enviando
                          ? '#9CAB8F'
                          : 'linear-gradient(135deg, #4E6E49 0%, #3a5436 100%)',
                        boxShadow: enviando ? 'none' : '0 8px 28px rgba(78,110,73,0.28)',
                        transition: 'all 0.25s',
                      }}
                    >
                      {enviando ? 'Enviando...' : 'Enviar mensaje'}
                    </button>

                    <a
                      href="https://wa.me/5216641291664"
                      target="_blank" rel="noreferrer"
                      style={{
                        display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
                        padding: '1rem 1.6rem', borderRadius: 100,
                        border: '1.5px solid #C2D6BF', color: '#4E6E49',
                        fontSize: '0.86rem', fontWeight: 500, textDecoration: 'none',
                        transition: 'all 0.2s',
                      }}
                      onMouseEnter={e => {
                        (e.currentTarget as HTMLAnchorElement).style.background = 'rgba(78,110,73,0.06)'
                      }}
                      onMouseLeave={e => {
                        (e.currentTarget as HTMLAnchorElement).style.background = 'transparent'
                      }}
                    >
                      💬 WhatsApp
                    </a>
                  </div>

                </form>
              </div>
            </div>
          </FadeUp>

        </div>
      </section>

    </div>
  )
}