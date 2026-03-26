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
        flame: {
          50:  '#fff3f0',
          100: '#ffe0d9',
          200: '#ffc1b3',
          300: '#ff9580',
          400: '#ff5a33',
          500: '#e83010',
          600: '#c4200a',
          700: '#a01a08',
          800: '#7d1506',
          900: '#5c1005',
        },
        charcoal: {
          50:  '#f5f5f4',
          100: '#e8e8e6',
          200: '#d1d0ce',
          300: '#b0aeaa',
          400: '#888580',
          500: '#6b6863',
          600: '#575450',
          700: '#474441',
          800: '#3c3a37',
          900: '#1a1917',
          950: '#0f0e0d',
        },
        cream: '#faf8f5',
        parchment: '#f2ede6',
      },
      fontFamily: {
        display: ['var(--font-display)', 'Georgia', 'serif'],
        body: ['var(--font-body)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-mono)', 'monospace'],
      },
      animation: {
        'fade-up': 'fadeUp 0.6s ease forwards',
        'fade-in': 'fadeIn 0.5s ease forwards',
        'slide-right': 'slideRight 0.5s ease forwards',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideRight: {
          '0%': { opacity: '0', transform: 'translateX(-16px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
      },
    },
  },
  plugins: [],
}
export default config
