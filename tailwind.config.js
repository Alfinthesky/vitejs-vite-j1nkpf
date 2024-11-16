/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#FFFFFF',
        text: {
          primary: '#2C2C2C',
          secondary: '#9E9E9E',
        },
        accent: {
          deep: '#316196',
          bright: '#0056B3',
          hover: '#264B73',
        },
        gray: {
          light: '#F0F0F0',
          medium: '#9E9E9E',
          border: '#E0E0E0',
        },
        error: '#FF4D4F',
      },
      fontFamily: {
        primary: ['Roboto', 'system-ui', 'sans-serif'],
        secondary: ['Open Sans', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'h1': '2rem',    // 32px
        'h2': '1.5rem',  // 24px
        'h3': '1.25rem', // 20px
        'base': '1rem',  // 16px
        'sm': '0.875rem' // 14px
      },
      spacing: {
        'section': '40px',
        'element': '20px',
      },
      borderRadius: {
        DEFAULT: '5px',
      },
      transitionDuration: {
        DEFAULT: '300ms',
      },
      boxShadow: {
        'button': '0 2px 4px rgba(0, 0, 0, 0.1)',
        'hover': '0 4px 6px rgba(0, 0, 0, 0.1)',
        'card': '0 2px 8px rgba(0, 0, 0, 0.08)',
      },
    },
  },
  plugins: [],
}