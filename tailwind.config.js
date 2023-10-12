/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/index.html'],
  darkMode: 'class',
  theme: {
    extend: {
      spacing: {
        13: '3.25rem',
      },
      fontFamily: {
        inter: ['inter'],
      },
      colors: {
        wanda: '#32a832',
        berlian: '#6737ad',
      },
      animation: {
        'spin-slow': 'spin 3s linear infinite',
        'goyang': 'goyang 1s ease-in-out infinite',
      },
      keyframes: {
        goyang: {
          '0%, 100%': {transform:'rotate (-3deg)'},
          '50%': {transform:'rotate(3deg)'},
        },
      },
    },
  },
  plugins: [],
}

