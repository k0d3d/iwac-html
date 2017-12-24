module.exports = {
  siteMetadata: {
    title: `iXit`,
  },
  plugins: [
    `gatsby-plugin-catch-links`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Poppins\:300,400,500,600`,
          `Lato\:100,300,400,900,400,100,100italic,300,300italic,400italic,700italic,700,900italic,900`,
          `Raleway\:400,100,200,300,500,600,700,800,900`
        ]
      }
    }  
  ],
  pathPrefix: `/`,
}
