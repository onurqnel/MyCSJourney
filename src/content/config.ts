import { defineCollection, z } from 'astro:content';

const authors = defineCollection({
    type: 'content',
    schema: z.object({
        name: z.string(),
        portfolio: z.string().url().optional(),
        avatar: z.string().url().optional(),
    }),
});

const posts = defineCollection({
    type: 'content',
    schema: z.object({
        title: z.string(),
        author: z.string(),
        tags: z.array(z.string()),
        heroImage: z.string().url().optional(),
        createdAt: z.string(),
        updatedAt: z.string(),
        relatedPosts: z.array(z.string()).optional(),
        description: z.string(),
    }),
});

export const collections = {
    authors,
    posts,
};
