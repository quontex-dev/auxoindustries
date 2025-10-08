/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://auxoindustries.com',
  generateRobotsTxt: true,
  sitemapSize: 7000,
  changefreq: 'weekly',
  priority: 0.7,
  autoLastmod: true,
  exclude: ['/404'],
  robotsTxtOptions: {
    policies: [
      { userAgent: '*', allow: '/' },
         { userAgent: "ChatGPT-User", allow: "/" },
      { userAgent: "*", disallow: ["/admin/", "/api/", "/private/", "/temp/", "/drafts/"] },
   
    ],
    additionalSitemaps: [
      'https://auxoindustries.com/sitemap.xml', // can add more if needed
    ],
  },
};
