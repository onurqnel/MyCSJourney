import { z, reference } from 'astro:content';

export const PostSchema = z.object({
    title: z.string(),
    author: reference('authors').optional(), 
    heroImage: z.string().url().optional(),
    createdAt: z.string(),
    updatedAt: z.string(),
    relatedPosts: z.array(reference('posts')).optional(),
    description: z.string(),
});

export const AuthorSchema = z.object({
    name: z.string(),
    portfolio: z.string().url().optional(),
    avatar: z.string().url().optional(),
});
