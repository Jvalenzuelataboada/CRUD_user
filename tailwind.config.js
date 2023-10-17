/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'flotar': 'flotar 8s infinite linear',
        'rotarrr': 'rotarrr 22s infinite linear',
        'fn1': 'fn1 1s infinite linear',
        'deleteAnim': 'deleteAnim 2s linear',
      },
      keyframes: {
        'flotar': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
          '70%': { filter: 'brightness(1.5)'}
        },
        'rotarrr': {
          '0%': { transform: 'rotate(0deg)'},
          '100%': { transform: 'rotate(360deg)'}
        },
        'fn1': {
          '0%': { opacity: 0.1 },
          '50%': { opacity: 1 },
          '100%': { opacity: 0 },
        },
        'deleteAnim': {
          '50%':{transform: 'translateX(-30px)'},
          '100%':{transform: 'translateX(0)'},
        },
        }
      }
    },
  plugins: [],
}