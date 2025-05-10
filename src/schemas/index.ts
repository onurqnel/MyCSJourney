import { z } from 'astro:content';

export const PostSchema = z.object({
    title: z.string(),
    description: z.string(),
});

