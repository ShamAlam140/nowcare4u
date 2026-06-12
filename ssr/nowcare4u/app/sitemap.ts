import { MetadataRoute } from 'next'
 
export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://nowcare4u.com'

  // Sabhi important public routes ki list
  const routes = [
    '',
    '/blog',
    '/career',
    '/contact',
    '/experts',
    '/mental-health',
    '/neurology',
    '/ourservice',
    '/programs',
    '/rnatherapy',
    '/calculators',
    '/calculators/bmi',
    '/login'
  ]

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === '' ? 'daily' : 'weekly',
    priority: route === '' ? 1 : 0.8, // Homepage ki priority sabse high
  }))
}
