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
        ivory: {
          DEFAULT: '#F8F3E8',
          dark: '#EDE5D0',
          card: '#FFFFFF',
        },
        text: {
          primary: '#1C1814',
          secondary: '#5A4F3F',
          muted: '#8C7B65',
        },
        border: {
          DEFAULT: '#DDD5C0',
          light: '#EDE5D0',
        },
      },
      fontFamily: {
        sans: ['Heebo', 'Arial', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
export default config
