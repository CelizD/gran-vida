interface HamburgerProps {
  open: boolean
  onClick: () => void
}

export default function Hamburger({ open, onClick }: HamburgerProps) {
  const lines = [
    {
      width: open ? 22 : 22,
      transform: open ? 'translateY(6.5px) rotate(45deg)' : 'none',
      opacity: 1,
    },
    {
      width: open ? 0 : 16,
      transform: 'none',
      opacity: open ? 0 : 1,
    },
    {
      width: open ? 22 : 22,
      transform: open ? 'translateY(-6.5px) rotate(-45deg)' : 'none',
      opacity: 1,
    },
  ]

  return (
    <button
      onClick={onClick}
      aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
      aria-expanded={open}
      style={{
        background: 'none',
        border: 'none',
        cursor: 'pointer',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-end',
        justifyContent: 'center',
        gap: '5px',
        width: 36,
        height: 36,
        padding: 4,
      }}
    >
      {lines.map((l, i) => (
        <span
          key={i}
          style={{
            display: 'block',
            height: 1.5,
            borderRadius: 2,
            background: '#1E2A1A',
            width: l.width,
            transform: l.transform,
            opacity: l.opacity,
            transition: 'width 0.3s ease, transform 0.35s ease, opacity 0.25s ease',
          }}
        />
      ))}
    </button>
  )
}
