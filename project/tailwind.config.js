/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        emerald: {
          50: '#ecfdf5',
          100: '#d1fae5',
          200: '#a7f3d0',
          300: '#6ee7b7',
          400: '#34d399',
          500: '#10b981',
          600: '#059669',
          700: '#047857',
          800: '#065f46',
          900: '#064e3b',
        }
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.3s ease-out',
        'bounce-slow': 'bounce 2s infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(10px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
      backdropBlur: {
        xs: '2px',
      },
      boxShadow: {
        '3xl': '0 35px 60px -12px rgba(0, 0, 0, 0.25)',
      }
    },
  },
  plugins: [],
  safelist: [
    'bg-emerald-100',
    'bg-blue-100',
    'bg-purple-100',
    'bg-orange-100',
    'bg-green-100',
    'bg-indigo-100',
    'text-emerald-600',
    'text-blue-600',
    'text-purple-600',
    'text-orange-600',
    'text-green-600',
    'text-indigo-600',
    'from-emerald-100',
    'to-emerald-200',
    'from-blue-100',
    'to-blue-200',
    'from-purple-100',
    'to-purple-200',
    'from-orange-100',
    'to-orange-200',
    'from-green-100',
    'to-green-200',
    'from-indigo-100',
    'to-indigo-200',
    'from-emerald-500',
    'to-green-500',
    'from-blue-500',
    'to-cyan-500',
    'from-purple-500',
    'to-pink-500',
    'from-orange-500',
    'to-red-500',
  ]
}