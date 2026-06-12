import { MetadataRoute } from 'next'
 
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/api/'], // Search engines ko API routes crawl karne se rokein
    },
    sitemap: 'https://nowcare4u.com/sitemap.xml',
  }
}
