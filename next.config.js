

const withNextra = require('nextra')({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.jsx',
  search: true,
  defaultShowCopyCode: true,
})


module.exports = withNextra({
    // Optional: Add additional Next.js configurations here if needed.
    /* i18n: {
      locales: ['en'],
      defaultLocale: 'en',
    }, */
    webpack: (config, { isServer }) => {
      // Exclude _meta.json from being bundled by Webpack
      config.externals = config.externals || [];
      config.externals.push(({ context, request }, callback) => {
        if (/\/_meta\.json$/.test(request)) {
          return callback(null, 'commonjs ' + request);
        }
        callback();
      });

      return config;
    },

    pageExtensions: ['mdx', 'tsx', 'ts', 'jsx', 'js',],
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'erptp.s3.ap-south-1.amazonaws.com',
        },
      ],
    },
  });

// If you have other Next.js configurations, you can pass them as the parameter:
// module.exports = withNextra({ /* other next.js config */ })
