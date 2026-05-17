import FadeUp from '../components/FadeUp'

const ITEMS = [
  {
    title: 'Bienestar comunitario',
    body: 'Promovemos la integración social y el bienestar emocional a través de actividades que fortalecen el vínculo entre personas, animales y comunidad. Creamos entornos seguros, empáticos y colaborativos que favorecen la salud mental colectiva.',
    img: 'https://granvidaservicios.org/wp-content/uploads/2025/05/GRAN-VIDA-2-e1747716019169-1024x1007.jpeg',
  },
  {
    title: 'Talleres de bienestar humano–animal',
    body: 'Ofrecemos talleres educativos y vivenciales que fomentan el cuidado mutuo entre humanos y animales. A través del aprendizaje compartido, fortalecemos la conciencia sobre la tenencia responsable, la empatía y el respeto hacia todos los seres vivos.',
    img: 'https://granvidaservicios.org/wp-content/uploads/2025/05/GRAN-VIDA-1-e1747716921698-1024x806.jpeg',
  },
]

export default function ScienceBand() {
  return (
    <section style={{ background: '#1E2A1A', position: 'relative', overflow: 'hidden' }}>
      {/* Glow */}
      <div style={{
        position: 'absolute',
        width: 700,
        height: 700,
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(122,155,118,0.1) 0%, transparent 70%)',
        right: -250,
        top: -250,
        pointerEvents: 'none',
      }} />

      {ITEMS.map((item, i) => (
        <div
          key={item.title}
          style={{
            maxWidth: 1200,
            margin: '0 auto',
            display: 'grid',
            gridTemplateColumns: i % 2 === 0 ? '1fr 1fr' : '1fr 1fr',
            alignItems: 'center',
            padding: '5rem clamp(1.4rem, 6vw, 5rem)',
            borderBottom: i < ITEMS.length - 1 ? '1px solid rgba(255,255,255,0.05)' : 'none',
            gap: '4rem',
          }}
        >
          {/* Texto — alterna lados */}
          <FadeUp delay={i * 60}>
            <div style={{ order: i % 2 === 0 ? 0 : 1 }}>
              <span style={{
                display: 'inline-block',
                marginBottom: '1rem',
                fontSize: '0.68rem',
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                color: i % 2 === 0 ? '#C2D6BF' : '#E8A882',
                fontWeight: 600,
              }}>
                {i % 2 === 0 ? '— Comunidad' : '— Educación'}
              </span>
              <h2 style={{
                fontFamily: "'DM Serif Display', serif",
                fontSize: 'clamp(1.8rem, 3vw, 2.6rem)',
                color: '#fff',
                lineHeight: 1.2,
                marginBottom: '1.2rem',
              }}>
                {item.title}
              </h2>
              <p style={{
                fontSize: '0.95rem',
                color: 'rgba(255,255,255,0.5)',
                lineHeight: 1.85,
              }}>
                {item.body}
              </p>
            </div>
          </FadeUp>

          {/* Imagen */}
          <FadeUp delay={i * 60 + 80}>
            <div style={{
              order: i % 2 === 0 ? 1 : 0,
              borderRadius: 24,
              overflow: 'hidden',
              aspectRatio: '4/3',
              boxShadow: '0 24px 60px rgba(0,0,0,0.4)',
            }}>
              <img
                src={item.img}
                alt={item.title}
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </div>
          </FadeUp>
        </div>
      ))}
    </section>
  )
}