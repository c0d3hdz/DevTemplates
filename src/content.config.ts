import { defineCollection, z } from 'astro:content'

const templates = defineCollection({
    schema: z.object({
        title: z.string(),
        description: z.string(),
        tech: z.array(z.string()),
        image: z.string(),
        repo: z.string().url(),
        demo: z.string().url(),
        featured: z.boolean().optional(),
        date: z.string().optional(),
    }),
})

export const collections = {
    templates,
}
