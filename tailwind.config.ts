//! Æternum Author
//? @/tailwind.config.ts
import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'cosmos': "url('/cosmos.gif')",
        'whirl_dark': "url('/whirl_dark.gif')",
        'whirl_light': "url('/whirl_light.gif')",
      },
      fontFamily: {
        burtons: 'burtons',
        jubilat: 'jubilat',
      },
      colors: {
        PAPER: '#ece7e4',
        IRON: '#262a2d',
        MIDDLE: '#898989',
        INDUSTRY: '#637465',
        EMERALD: '#10B981',
        CYAN: '#06B6D4',
        ORANGE: '#f9622b',
        ROSE: '#F43F5E',
      },
      animation: {
        'fade-in': 'fadeIn 1s ease-in-out',
        'scale-in': 'scaleIn 1s ease-in-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        scaleIn: {
          '0%': { transform: 'scale(0.9)' },
          '100%': { transform: 'scale(1)' },
        },
      },
    },
  },
  plugins: [],
  darkMode: 'class',
};

export default config;
