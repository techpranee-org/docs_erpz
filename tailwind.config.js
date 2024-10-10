/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      typography: (theme) => ({
        DEFAULT: {
          css: {
            maxWidth: '100%',
            margin: '0 auto',
            padding: '0',
            lineHeight: theme('lineHeight.relaxed'),
            'h1, h2, h3, h4, h5, h6': {
              marginTop: theme('spacing.4'),
              marginBottom: theme('spacing.2'),
            },
            'p': {
              marginBottom: theme('spacing.4'),
            },
            'ul, ol': {
              marginBottom: theme('spacing.4'),
            },
            // Add more customizations as needed
            '@screen sm': {
              fontSize: '1.125rem', // sm
            },
            '@screen md': {
              fontSize: '1.25rem', // md
            },
            '@screen lg': {
              fontSize: '1.5rem', // lg
            },
          },
        },
        dark: {
          css: {
            // Invert colors for dark mode
            color: theme('colors.white'),
            backgroundColor: theme('colors.gray.900'),
            'h1, h2, h3, h4, h5, h6': {
              color: theme('colors.white'),
            },
            // Add more customizations for dark mode
          },
        },
      }),
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}

