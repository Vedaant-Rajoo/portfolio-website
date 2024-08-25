/** @type {import('tailwindcss').Config} */
export default {
  content: ['./**/*.html'],
  theme: {
    extend: {
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
          100: '#1C1917',
          200: '#3C3A39',
        },
        bg: {
          100: '#F5F5F4',
          200: '#E7E5E4',
        },
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideIn: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(calc(-100% - 1.5rem))' }, // For two sets of content
        },
      },
      animation: {
        'marquee-small': 'marquee 28s linear infinite', // Slow speed
        'marquee-medium': 'marquee 28s linear infinite', // Medium speed
        'marquee-large': 'marquee 28s linear infinite', // Fast speed
        'fade-in': 'fadeIn 0.5s ease-out',
        'slide-in': 'slideIn 0.5s ease-out',
      },
      fontFamily: {
        syne: ['Syne', 'sans-serif'],
        spacegrotesk: ['Space Grotesk', 'sans-serif'],
      },
      // ... other theme extensions ...
    },
  },
  plugins: [],
};
