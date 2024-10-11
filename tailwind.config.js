/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      screens: {
        widescreen: { raw: '(min-aspect-ratio:3/2)' },
        tallscreen: { raw: '(max-aspect-ratio:13/20)' },
      },
      keyframes: {
        'open-menu': {
          '0%': { transform: 'scaleY(0)' },

          '100%': { transform: 'scaleY(1)' },
        },
        'close-menu': {
          '0%': { transform: 'scaleY(1)' },
          '100%': { transform: 'scaleY(0)' },
        },
        'scroll-btn-hide': {
          '0%': { opacity: '1' },
          '100%': { opacity: '0' },
        },
        'scroll-btn-show': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'slide-back': {
          '100%': { transform: 'translateX(30%)' },
          '0%': { transform: 'translateX(0%)' },
        },
        'slide-in': {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-30%)' },
        },
      },
      animation: {
        'open-menu': 'open-menu 0.5s ease-in-out forwards',
        'close-menu': 'close-menu 0.4s ease-in-out forwards',
        'scroll-btn-show': 'scroll-btn-show 0.5s ease-in-out forwards',
        'scroll-btn-hide': 'scroll-btn-hide 0.5s ease-in-out forwards',
        'slide-back': ' slide-back 0.5s ease-in-out forwards',
        'slide-in': ' slide-in 0.5s ease-in-out forwards',
      },
    },
  },
  plugins: [],
};
