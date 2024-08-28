const withNextra = require('nextra')({
    theme: 'nextra-theme-docs',
    themeConfig: './theme.config.jsx'
})

module.exports = withNextra({
    // Optional: Add additional Next.js configurations here if needed.
    i18n: {
      locales: ['en'],
      defaultLocale: 'en',
    },
  });

// If you have other Next.js configurations, you can pass them as the parameter:
// module.exports = withNextra({ /* other next.js config */ })