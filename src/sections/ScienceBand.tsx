import FadeUp from '../components/FadeUp'

const ITEMS = [
  {
    title: 'Beneficios neurológicos comprobados',
    body: 'Activa el sistema de recompensa del cerebro, liberando endorfinas y reduciendo el estrés de forma natural.',
  },
  {
    title: 'Bienestar emocional',
    body: 'Reduce síntomas de ansiedad y depresión en personas de todas las edades.',
  },
  {
    title: 'Habilidades sociales',
    body: 'Fomenta la empatía, la comunicación y la convivencia en grupos.',
  },
]

export default function ScienceBand() {
  return (
    <section
      style={{
        background: '#1E2A1A',
        padding: '6rem clamp(1.4rem, 6vw, 5rem)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Decorative glow */}
      <div
        style={{
          position: 'absolute',
          width: 600,
          height: 600,
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(122,155,118,0.12) 0%, transparent 70%)',
          right: -200,
          top: -200,
          pointerEvents: 'none',
        }}
      />

      <div
        style={{
          maxWidth: 1180,
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '4rem',
          alignItems: 'center',
          position: 'relative',
        }}
      >
        <FadeUp>
          <span
            style={{
              fontSize: '0.72rem',
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              color: '#C2D6BF',
              fontWeight: 500,
              display: 'block',
              marginBottom: '1.2rem',
            }}
          >
            Por qué funciona
          </span>
          <h2
            style={{
              fontFamily: "'DM Serif Display', serif",
              fontSize: 'clamp(1.9rem, 3.5vw, 3rem)',
              color: '#fff',
              lineHeight: 1.2,
              marginBottom: '1.4rem',
            }}
          >
            La ciencia detrás del{' '}
            <em style={{ color: '#E8A882', fontStyle: 'italic' }}>vínculo humano-animal</em>
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.55)', fontSize: '1rem', lineHeight: 1.8 }}>
            Las Intervenciones Asistidas con Animales (IAA) están respaldadas por evidencia
            científica. El contacto con animales reduce el cortisol, aumenta la oxitocina y
            mejora el estado de ánimo de manera notable.
          </p>
        </FadeUp>

        <FadeUp delay={120}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {ITEMS.map((item) => (
              <div
                key={item.title}
                style={{
                  background: 'rgba(255,255,255,0.04)',
                  border: '1px solid rgba(255,255,255,0.07)',
                  borderRadius: 14,
                  padding: '1.6rem 1.8rem',
                }}
              >
                <h4
                  style={{
                    fontFamily: "'DM Serif Display', serif",
                    color: '#fff',
                    fontSize: '1rem',
                    marginBottom: '0.4rem',
                  }}
                >
                  {item.title}
                </h4>
                <p style={{ fontSize: '0.84rem', color: 'rgba(255,255,255,0.42)', lineHeight: 1.65 }}>
                  {item.body}
                </p>
              </div>
            ))}
          </div>
        </FadeUp>
      </div>
    </section>
  )
}
