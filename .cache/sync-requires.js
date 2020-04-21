const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---cache-dev-404-page-js": hot(preferDefault(require("C:\\my\\frontend-masters\\gatsby-blog-app\\.cache\\dev-404-page.js"))),
  "component---src-pages-about-js": hot(preferDefault(require("C:\\my\\frontend-masters\\gatsby-blog-app\\src\\pages\\about.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("C:\\my\\frontend-masters\\gatsby-blog-app\\src\\pages\\index.js")))
}

