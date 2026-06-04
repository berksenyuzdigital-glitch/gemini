/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        luxury: {
          white: '#FFFFFF',
          light: '#F5F5F7',
          gray: '#8E8E93',
          dark: '#1C1C1E',
          black: '#0A0A0A',
          silver: '#E5E5EA',
          gold: '#D4AF37'
        }
      },
      fontFamily: {
        sans: ['"Inter"', '"Helvetica Neue"', 'Arial', 'sans-serif'],
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
      },
      letterSpacing: {
        widest: '.20em',
        extra: '.30em'
      }
    },
  },
  plugins: [],
}