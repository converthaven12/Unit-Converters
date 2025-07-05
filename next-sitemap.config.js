/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://www.converthaven.com',
  generateRobotsTxt: true,
  generateIndexSitemap: true,
  robotsTxtOptions: {
    policies: [
      { userAgent: '*', allow: '/' },
      { userAgent: '*', disallow: ['/api/*'] },
    ],
  },
};
