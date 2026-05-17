import { STATS } from '../data'

export default function Stats() {
  return (
    <div
      style={{
        background: '#1E2A1A',
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
      }}
    >
      {STATS.map((s, i) => (
        <div
          key={i}
          style={{
            padding: '2.6rem 3.5rem',
            textAlign: 'center',
            borderRight: i < STATS.length - 1 ? '1px solid rgba(255,255,255,0.07)' : 'none',
          }}
        >
          <span
            style={{
              fontFamily: "'DM Serif Display', serif",
              fontSize: '2.6rem',
              color: '#fff',
              display: 'block',
              lineHeight: 1,
              marginBottom: '0.4rem',
            }}
          >
            {s.value}
          </span>
          <span
            style={{
              fontSize: '0.72rem',
              letterSpacing: '0.14em',
              textTransform: 'uppercase',
              color: '#C2D6BF',
            }}
          >
            {s.label}
          </span>
        </div>
      ))}
    </div>
  )
}
