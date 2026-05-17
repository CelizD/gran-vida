import type { Service, Stat, Step, NavLink } from './types'

export const NAV_LINKS: NavLink[] = [
  { label: 'Inicio', href: 'https://granvidaservicios.org/' },
  { label: 'Servicios', href: '#', active: true },
  { label: 'Guía para dueños', href: 'https://granvidaservicios.org/guia-para-duenos/' },
  { label: 'Nosotros', href: 'https://granvidaservicios.org/about-us/' },
  { label: 'Análisis IAA', href: 'https://granvidaservicios.org/analisis-interactivo-de-las-iaa/' },
  { label: 'Tenencia y Bienestar', href: 'https://granvidaservicios.org/elementor-2576/' },
]

export const SERVICES: Service[] = [
  {
    id: 1,
    tag: 'Clínico',
    title: 'Terapia Asistida con Animales',
    description:
      'Intervenciones estructuradas con objetivos terapéuticos claros. Para personas con ansiedad, depresión, estrés o necesidades emocionales específicas.',
    features: ['Apoyo emocional profundo', 'Mejora de autoestima', 'Sesiones individuales o grupales'],
    accent: '#4E6E49',
    accentBg: 'rgba(78,110,73,0.08)',
  },
  {
    id: 2,
    tag: 'Educativo',
    title: 'Talleres Asistidos con Animales',
    description:
      'Actividades educativas que fomentan la empatía, valores y convivencia responsable. Para escuelas, empresas y comunidades.',
    features: ['Educación emocional', 'Trabajo en equipo', 'Escuelas y empresas'],
    accent: '#C4714A',
    accentBg: 'rgba(196,113,74,0.08)',
  },
  {
    id: 3,
    tag: 'Comunitario',
    title: 'La Granja en tu Comunidad',
    description:
      'Llevamos una mini granja directamente a tu colonia. Estimulación sensorial, emocional y aprendizaje vivencial en contextos urbanos.',
    features: ['Conejo, gallo, perro y mini pig', 'Estimulación sensorial', 'Contextos urbanos'],
    accent: '#8B6249',
    accentBg: 'rgba(139,98,73,0.08)',
  },
]

export const STATS: Stat[] = [
  { value: '3', label: 'Servicios especializados' },
  { value: '4+', label: 'Especies terapéuticas' },
  { value: '100%', label: 'Equipo certificado' },
  { value: 'A.C.', label: 'Legalmente constituida' },
]

export const STEPS: Step[] = [
  {
    num: '01',
    title: 'Consulta inicial',
    body: 'Conversamos sin compromiso sobre tus necesidades para identificar el servicio más adecuado.',
  },
  {
    num: '02',
    title: 'Plan personalizado',
    body: 'Diseñamos un programa a la medida con objetivos claros, frecuencia y seguimiento continuo.',
  },
  {
    num: '03',
    title: 'Intervención profesional',
    body: 'Nuestro equipo lleva a cabo las sesiones con los más altos estándares de bienestar.',
  },
  {
    num: '04',
    title: 'Seguimiento y evolución',
    body: 'Evaluamos resultados y ajustamos el plan para maximizar el impacto positivo.',
  },
]
