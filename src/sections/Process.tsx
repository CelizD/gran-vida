import FadeUp from '../components/FadeUp'
import { STEPS } from '../data'

export default function Process() {
  return (
    <section style={{ padding: '7rem clamp(1.4rem, 6vw, 5rem)' }}>
      <div style={{ maxWidth: 860, margin: '0 auto' }}>
        <FadeUp>
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <span
              style={{
                fontSize: '0.72rem',
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                color: '#4E6E49',
                fontWeight: 500,
                display: 'block',
                marginBottom: '0.9rem',
              }}
            >
              Cómo funciona
            </span>
            <h2
              style={{
                fontFamily: "'DM Serif Display', serif",
                fontSize: 'clamp(2rem, 4vw, 3rem)',
                color: '#1E2A1A',
              }}
            >
              Tu camino hacia una gran vida
            </h2>
          </div>
        </FadeUp>

        <div style={{ position: 'relative' }}>
          {/* Vertical line */}
          <div
            style={{
              position: 'absolute',
              left: 27,
              top: 28,
              bottom: 28,
              width: 1,
              background: 'linear-gradient(to bottom, #C2D6BF, transparent)',
            }}
          />

          {STEPS.map((step, i) => (
            <FadeUp key={step.num} delay={i * 80}>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '2rem',
                  padding: '1.8rem 0',
                }}
              >
                <div
                  style={{
                    width: 54,
                    height: 54,
                    borderRadius: '50%',
                    background: '#F7F2EA',
                    border: '2px solid #C2D6BF',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontFamily: "'DM Serif Display', serif",
                    fontSize: '1.05rem',
                    color: '#4E6E49',
                    flexShrink: 0,
                    position: 'relative',
                    zIndex: 1,
                  }}
                >
                  {step.num}
                </div>
                <div>
                  <h4
                    style={{
                      fontFamily: "'DM Serif Display', serif",
                      fontSize: '1.2rem',
                      color: '#1E2A1A',
                      marginBottom: '0.4rem',
                    }}
                  >
                    {step.title}
                  </h4>
                  <p style={{ fontSize: '0.93rem', color: '#6B7A60', lineHeight: 1.7 }}>
                    {step.body}
                  </p>
                </div>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  )
}
