import FadeUp from '../components/FadeUp'
import ServiceCard from '../components/ServiceCard'
import { SERVICES } from '../data'

export default function Services() {
  return (
    <section id="servicios" style={{ padding: '7rem clamp(1.4rem, 6vw, 5rem)' }}>
      <div style={{ maxWidth: 1180, margin: '0 auto' }}>
        <FadeUp>
          <div style={{ textAlign: 'center', marginBottom: '4.5rem' }}>
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
              Lo que ofrecemos
            </span>
            <h2
              style={{
                fontFamily: "'DM Serif Display', serif",
                fontSize: 'clamp(2rem, 4vw, 3rem)',
                color: '#1E2A1A',
                lineHeight: 1.2,
              }}
            >
              Servicios pensados
              <br />
              para tu bienestar
            </h2>
          </div>
        </FadeUp>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '1.6rem',
            alignItems: 'start',
          }}
        >
          {SERVICES.map((s, i) => (
            <ServiceCard key={s.id} service={s} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
