import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        gold: {
          DEFAULT: '#C9A84C',
          light: '#E2C97E',
          dark: '#A07830',
          muted: '#8B6914',
        },
        cream: '#F5F0E8',
        dark: {
          DEFAULT: '#0F0F0F',
          card: '#1A1A1A',
          border: '#2A2A2A',
          elevated: '#222222',
        },
      },
      fontFamily: {
        sans: ['var(--font-heebo)', 'Heebo', 'Arial', 'sans-serif'],
      },
      backgroundImage: {
        'gold-gradient': 'linear-gradient(135deg, #C9A84C 0%, #E2C97E 50%, #A07830 100%)',
        'dark-gradient': 'linear-gradient(180deg, #0F0F0F 0%, #1A1A1A 100%)',
      },
    },
  },
  plugins: [],
}
export default config
