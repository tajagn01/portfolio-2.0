import { MetadataRoute } from 'next'
import { projects } from '@/lib/data'

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://tajagn.vercel.app'

    const projectUrls = projects.map((project) => ({
        url: `${baseUrl}/projects/${project.slug}`,
        lastModified: new Date(),
        changeFrequency: 'weekly' as const,
        priority: 0.8,
    }))

    return [
        {
            url: baseUrl,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 1,
        },
        {
            url: `${baseUrl}/projects`,
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 0.8,
        },
        ...projectUrls,
    ]
}
