const path = require("path")

module.exports = {
  siteMetadata: {
    title: `Akhtar Wood Shop`,
    description: ``,
    author: `@akhtarja`,
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: path.join(__dirname, `src`, `images`),
      },
    },
    {
      resolve: `gatsby-plugin-s3`,
      options: {
        bucketName: process.env.WOODWORK_JAVED_DEV_BUCKET_NAME,
      },
    },
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-theme-gallery`,
    `gatsby-plugin-emotion`,
  ],
}
