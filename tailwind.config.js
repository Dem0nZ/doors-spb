module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      colors:{
        blacked: '#161616',
      }
    },
    screens: {
      'lg': { 'min': '769px' },
      'sm': { 'max': '768px' },
    },
  },
  plugins: [],
}
