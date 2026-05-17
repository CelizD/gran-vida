import type { CSSProperties, ReactNode } from 'react'
import { useInView } from '../hooks/useInView'

interface FadeUpProps {
  children: ReactNode
  delay?: number
  style?: CSSProperties
}

export default function FadeUp({ children, delay = 0, style = {} }: FadeUpProps) {
  const { ref, visible } = useInView()

  return (
    <div
      ref={ref}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(28px)',
        transition: `opacity 0.7s ease ${delay}ms, transform 0.7s ease ${delay}ms`,
        ...style,
      }}
    >
      {children}
    </div>
  )
}
