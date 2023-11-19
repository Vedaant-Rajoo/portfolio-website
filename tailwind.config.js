/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./**/*.html'],
  theme: {
    extend: {
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(calc(-100% - 1.5rem))' }, // For two sets of content
        },
      },
      animation: {
        'marquee-small': 'marquee 28s linear infinite', // Slow speed
        'marquee-medium': 'marquee 28s linear infinite', // Medium speed
        'marquee-large': 'marquee 28s linear infinite', // Fast speed
      },
      fontFamily: {
        syne: ['Syne', 'sans-serif'],
        spacegrotesk: ['Space Grotesk', 'sans-serif'],
      },
      colors: {
        primary: {
          100: '#8EC07C',
          200: '#71a361',
          300: '#326225',
        },
        accent: {
          100: '#CC241D',
          200: '#ffc4a3',
        },
        text: {
          100: '#EBDBB2',
          200: '#ccbd95',
        },
        bg: {
          100: '#282828',
          200: '#383838',
          300: '#505050',
        },
      },
      // ... other theme extensions ...
    },
  },
  plugins: [],
};
