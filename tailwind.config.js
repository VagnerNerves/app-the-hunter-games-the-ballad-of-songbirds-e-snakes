/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./App.tsx', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        woodbark: {
          50: '#FBF9EB',
          100: '#F6EFCB',
          200: '#EEDE9A',
          300: '#E4C560',
          400: '#DBAD34',
          500: '#CC9626',
          600: '#AF761F',
          700: '#8C551C',
          800: '#75451E',
          900: '#643B1F',
          950: '#251309'
        }
      },
      fontFamily: {
        robotoRegular: ['Roboto_400Regular', 'sans-serif'],
        robotoBold: ['Roboto_700Bold', 'sans-serif'],
        bankgothicLight: ['BankGothic_Light', 'sans-serif'],
        bankgothicMedium: ['BankGothic_Medium', 'sans-serif']
      }
    }
  },
  plugins: []
}
