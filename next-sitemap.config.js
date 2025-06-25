/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://www.converthaven.com',
  generateRobotsTxt: true,
  generateIndexSitemap: false,
  robotsTxtOptions: {
    policies: [
      { userAgent: '*', allow: '/' },
      { userAgent: '*', disallow: ['/api/*'] },
    ],
  },
};
