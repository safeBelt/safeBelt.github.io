module.exports = {
  siteMetadata: {
    title: `byunghyun choi dev-portfolio`,
    name: `byunghyun`,
    siteUrl: `https://github.com/safeBelt`,
    description: `새로운 것을 배우길 좋아하는 웹 개발자 최병현입니다.`,
    hero: {
      heading: `새로운 것을 배우길 좋아하는 웹 개발자 최병현입니다.`,
      maxWidth: 652,
    },
    social: [
      {
        name: `twitter`,
        url: `https://twitter.com/`,
      },
      {
        name: `github`,
        url: `https://github.com/`,
      },
      {
        name: `instagram`,
        url: `https://instagram.com/`,
      },
      {
        name: `linkedin`,
        url: `https://www.linkedin.com/`,
      },
      {
        name: `dribbble`,
        url: `https://dribbble.com/`,
      },
    ],
  },
  plugins: [
    {
      resolve: "@narative/gatsby-theme-novela",
      options: {
        contentPosts: "content/posts",
        contentAuthors: "content/authors",
        basePath: "/",
        authorsPage: true,
        sources: {
          local: true,
          // contentful: true,
        },
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `byunghyun-dev`,
        short_name: `byunghyun`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#fff`,
        display: `standalone`,
        icon: `src/assets/favicon.png`,
      },
    },
    {
      resolve: `gatsby-plugin-netlify-cms`,
      options: {
      },
    },
  ],
};
