/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './app.vue'
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"DM Sans"', 'ui-sans-serif', 'system-ui', 'sans-serif']
      },
      colors: {
        brand: {
          indigo:        '#2A2882',
          'indigo-mid':  '#3730A3',
          'indigo-light':'#4F46E5',
          orange:        '#F59E0B',
          lavender:      '#EAEAF5',
          'card-purple': '#EDE9FE',
          'card-orange': '#FFF8EE',
          'card-green':  '#F0FDF4',
          'dark-navy':   '#0D0C2A',
          'dark-card':   '#17163D'
        }
      }
    }
  },
  plugins: []
}
