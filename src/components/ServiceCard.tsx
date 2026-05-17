import { useState } from 'react'
import type { Service } from '../types'
import { IconCheck } from '../icons'
import { IconShield, IconUsers, IconMapPin } from '../icons'
import FadeUp from './FadeUp'

const ICONS = [IconShield, IconUsers, IconMapPin]

interface ServiceCardProps {
  service: Service
  index: number
}

export default function ServiceCard({ service, index }: ServiceCardProps) {
  const [hovered, setHovered] = useState(false)
  const Icon = ICONS[index]

  return (
    <FadeUp delay={index * 100}>
      <div
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        style={{
          background: '#FDFAF5',
          borderRadius: 20,
          padding: '2.6rem 2.2rem',
          border: '1px solid rgba(78,110,73,0.1)',
          position: 'relative',
          overflow: 'hidden',
          transform: hovered ? 'translateY(-6px)' : 'translateY(0)',
          boxShadow: hovered
            ? '0 28px 60px rgba(30,42,26,0.11)'
            : '0 2px 16px rgba(30,42,26,0.04)',
          transition: 'transform 0.35s ease, box-shadow 0.35s ease',
          cursor: 'default',
          height: '100%',
        }}
      >
        {/* Accent bar */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            height: 3,
            background: service.accent,
            borderRadius: '20px 20px 0 0',
          }}
        />

        {/* Tag */}
        <span
          style={{
            display: 'inline-block',
            marginBottom: '1.4rem',
            fontSize: '0.68rem',
            letterSpacing: '0.18em',
            textTransform: 'uppercase',
            color: service.accent,
            fontWeight: 600,
            padding: '0.3rem 0.9rem',
            background: service.accentBg,
            borderRadius: 100,
          }}
        >
          {service.tag}
        </span>

        {/* Icon */}
        <div
          style={{
            width: 52,
            height: 52,
            borderRadius: 14,
            background: service.accentBg,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: service.accent,
            marginBottom: '1.4rem',
          }}
        >
          <Icon />
        </div>

        {/* Title */}
        <h3
          style={{
            fontFamily: "'DM Serif Display', serif",
            fontSize: '1.45rem',
            lineHeight: 1.2,
            color: '#1E2A1A',
            marginBottom: '0.9rem',
          }}
        >
          {service.title}
        </h3>

        {/* Description */}
        <p
          style={{
            fontSize: '0.92rem',
            color: '#6B7A60',
            lineHeight: 1.75,
            marginBottom: '1.8rem',
          }}
        >
          {service.description}
        </p>

        {/* Features */}
        <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.55rem' }}>
          {service.features.map((f) => (
            <li
              key={f}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.65rem',
                fontSize: '0.86rem',
                color: '#2C3525',
              }}
            >
              <span
                style={{
                  width: 20,
                  height: 20,
                  borderRadius: '50%',
                  background: service.accentBg,
                  color: service.accent,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                }}
              >
                <IconCheck />
              </span>
              {f}
            </li>
          ))}
        </ul>
      </div>
    </FadeUp>
  )
}
