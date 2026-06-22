/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      colors: {
        ink: {
          950: '#07111f',
          900: '#0f172a',
          800: '#18243a',
        },
        brand: {
          500: '#2563eb',
          600: '#1d4ed8',
        },
        mint: {
          400: '#2dd4bf',
          500: '#14b8a6',
        },
      },
      boxShadow: {
        soft: '0 18px 70px rgba(15, 23, 42, 0.12)',
        glow: '0 20px 60px rgba(37, 99, 235, 0.22)',
      },
    },
  },
  plugins: [],
};
