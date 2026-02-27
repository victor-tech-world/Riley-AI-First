/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      mainblue: '#146ef5',
      header: '#222222',
      footer: '#344054',
      black: '#000',
      demo: '#ebeff7',
      demoBorder: '#d0d5dd',
      badrevenue: '#333333',
      infrastructure: '#475467',
      discoverbtncolor: '#4c5c8a',
      discoverbgleftcolor: '#fbf5fd',
      discoverbgrightcolor: '#f9e4c9',
      whitecolor: '#ffffff',
      infratitle: '#343434',
      discovertitle: '#091f36',
      footerhover: '#4c5c8a'
    },
    extend: {
      backgroundImage: {
        'footer-texture': "url('/asset/img_17.png')",
      }
    },
    fontFamily: {
      sas: 'Plus Jakarta Sans, sans-serif',
      headfont: 'Inter, sans-serif',
      footerfont: 'system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif'
    },
    fontSize: {
      headerfont: []
    }
  },
  plugins: [],
}

