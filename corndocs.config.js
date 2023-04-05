/** @type {import('./types/ConfigType').Config} */

module.exports = {
  darkMode: true,
  search: {
    algolia_admin_key: process.env.ALGOLIA_SEARCH_ADMIN_KEY,
    algolia_app_id: process.env.NEXT_PUBLIC_ALGOLIA_APP_ID,
    algolia_search_api_key: process.env.NEXT_PUBLIC_ALGOLIA_SEARCH_API_KEY,
    algolia_index: "react_appwrite",
  },
  project: {
    name: "React Appwrite",
    url: "https://react-appwrite.org/",
    github: {
      repo: "https://github.com/sanny-io/react-appwrite",
      usesMain: true,
    },
    logo: {
      src: "/static/logo.png",
      alt: "React Appwrite Logo",
      size: [30, 30],
    },
    mainScreen: {
      showSearch: true,
      showSelection: true,
      homePage: {
        custom: {
          path: "index",
        },
        title: "React Appwrite",
        tagLine: "Gorgeous library for integrating React with Appwrite.",
      },
    },
  },
};
