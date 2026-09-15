module.exports = {
  content: ['index.html'],
  theme: {
    container: {
      center: true,
      padding: '24px',
      // The project screenshots are 651px wide. Capping the page here keeps
      // the largest plate near that size, so the work reads crisply instead
      // of being upscaled into blur across a wider layout.
      screens: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1120px',
        '2xl': '1120px',
      },
    },
    extend: {
      colors: {
        // The page stays quiet so four differently-branded screenshots
        // can each keep their own colour.
        ground: '#EDEFEA',
        surface: '#FFFFFF',
        ink: '#17211C',
        muted: '#5C6660',
        rule: '#CFD4CC',
        accent: '#0D5C43',
      },
      fontFamily: {
        sans: ['Archivo', 'ui-sans-serif', 'system-ui', 'Segoe UI', 'Helvetica', 'Arial', 'sans-serif'],
      },
      maxWidth: {
        measure: '62ch',
      },
      screens: {
        '2xl': '1320px',
      },
    },
  },
  plugins: [],
}
