import typography from '@tailwindcss/typography';
import type { Config } from 'tailwindcss';

export default {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        mono: ['var(--font-geist-mono)'],
      },
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        accent: '#99FFE4',
        vesper: {
          bg: '#101010',
          fg: '#999999',
          muted: '#6e6e6e',
          subtle: '#b0b0b0',
          text: '#d4d4d4',
          border: '#2a2a2a',
          teal: '#99FFE4',
          peach: '#FFC799',
          blue: '#A0E9FF',
        },
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-out forwards',
        'fade-in-up': 'fadeInUp 0.5s ease-out forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [typography()],
} satisfies Config;
