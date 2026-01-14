/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://www.anuarchitect.com",
  generateRobotsTxt: true,
  sitemapSize: 5000,
  exclude: [
    "/api/*",
    "/server-sitemap.xml",
    "/private/*",
    "/_next/*"
  ],
  robotsTxtOptions: {
    policies: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/private/", "/_next/", "/*?*"],
      },
    ],
  },
};
