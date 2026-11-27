import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

// Each Markdown file in src/content/services/ becomes a card on the home page
// and its own page at /services/<file-name>.
const services = defineCollection({
	loader: glob({ pattern: '**/*.md', base: './src/content/services' }),
	schema: z.object({
		title: z.string(),
		summary: z.string(), // one-liner on the card and under the page title
		description: z.string(), // search-result snippet for the page
		order: z.number(), // card order on the home page
		icon: z.enum(['frontend', 'backend', 'cloud', 'ai', 'hardware']), // see src/components/ServiceIcon.astro
	}),
});

export const collections = { services };
