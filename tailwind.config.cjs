/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './pages/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ["'Space Grotesk'", 'sans-serif'],
        serif: ["'Cormorant Garamond'", 'Georgia', 'serif'],
        handwriting: ["'Caveat'", 'cursive'],
        sans: ["'Inter'", 'system-ui', 'sans-serif'],
      },
      colors: {
        midnight: '#040508',
        violet: {
          DEFAULT: '#7c3aed',
        },
      },
      backgroundOpacity: {
        8: '0.08',
      },
    },
  },
  plugins: [],
};
