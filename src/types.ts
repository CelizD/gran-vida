export interface Service {
  id: number
  tag: string
  title: string
  description: string
  features: string[]
  accent: string
  accentBg: string
}

export interface Stat {
  value: string
  label: string
}

export interface Step {
  num: string
  title: string
  body: string
}

export interface NavLink {
  label: string
  href: string
  active?: boolean
}
