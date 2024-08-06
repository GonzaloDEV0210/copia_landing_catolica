/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html', './js/*.js'],
  theme: {
    extend: {
      width: {
        '106': '106px',
        '121': '121px',
        '360': '360px'
      },
      boxShadow: {
        'shadow_form': '-1px 2px 14px 0px rgba(255,255,255,1)',
      },
      colors: {
        'yellow_catolica': '#ffbf1f',
        'green_slider_catolica': 'rgba(54,162,188,.7)',
      },
    },
  },
  plugins: [],
}

