module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: '2rem'
    },
    extend: {
      fontFamily: {
        'body-text':  ['lato', 'sans-serif'],
      },
      colors: {
        "p-bl": "#1C2739",
        "bege": "#F1F1E6", 
        "dark-yellow": "#DAA21C", 
        
      },

    },
  },
  plugins: [],
}