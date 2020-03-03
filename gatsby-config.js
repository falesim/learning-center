module.exports = {
  siteMetadata: {
    title: 'Learning Center',
    subtitle: 'learn from falesim',
    description: 'The best way to learn at falesim!',
    keywords: [
      'react',
      'parcel',
      'hooks',
      'effects',
      'javascript',
      'redux',
      'typescript',
    ],
  },
  pathPrefix: '/',
  plugins: [
    `gatsby-plugin-layout`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/lessons`,
        name: 'markdown-pages',
      },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          `gatsby-remark-autolink-headers`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-prismjs`,
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 800,
              linkImagesToOriginal: true,
              sizeByPixelDensity: false,
            },
          },
        ],
      },
    },
  ],
}
