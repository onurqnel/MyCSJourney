import { z } from 'zod';

export const ConfigSchema = z.object({
    brand: z.string(),
    author: z.string(),
    social: z.array(z.object({
        name: z.string(),
        icon: z.string(),
        url: z.string().url(),
    })),
    ga: z.string().optional(),
});

export type Config = z.infer<typeof ConfigSchema>;

export const config: Config = {
    brand: 'Astroberry',
    author: 'Astroberry',
    social: [
        {
            name: 'Github',
            icon: 'mdi:github',
            url: 'https://github.com/onurqnel'
        },
        {
            name: 'X',
            icon: 'mdi:alpha-x',
            url: 'https://x.com/honoronel?s=11'
        },
        {
            name: 'LinkedIn',
            icon: 'mdi:linkedin',
            url: 'https://www.linkedin.com/in/onuronel13/'
        }
    ],
    // Google Analytics tracking ID (leave blank to disable)
    ga: ''
};
