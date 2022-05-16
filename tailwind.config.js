module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily: {
      'body-text':  ['lato', 'sans-serif'],
       'title-text': ['Merriweather', 'serif'],
    },
    container: {
      center: true,
      padding: '10rem',
      
    },
    extend: {
      
      colors: {
        "p-bl": "#1C2739",
        "bege": "#F1F1E6", 
        "dark-yellow": "#DAA21C", 
        "w-f": "#f1f1f6",
        
      },

    },
  },
  plugins: [],
}