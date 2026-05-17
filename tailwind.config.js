/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        verde: {
          DEFAULT: '#4E6E49',
          oscuro: '#1E2A1A',
          claro: '#C2D6BF',
          fondo: '#F7F2EA',
        },
        terracota: {
          DEFAULT: '#C4714A',
          claro: '#E8A882',
        },
      },
      fontFamily: {
        serif: ['"DM Serif Display"', 'serif'],
        sans: ['Jost', 'sans-serif'],
      },
    },
  },
  plugins: [],
}