import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

// Each Markdown file in src/content/services/ becomes a card on the home page
// and its own page at /services/<file-name>.
const services = defineCollection({
	loader: glob({ pattern: '**/*.md', base: './src/content/services' }),
	schema: z.object({
		title: z.string(),
		cmd: z.string(), // shown as ./<cmd> on the card
		summary: z.string(), // one-liner on the card and under the page title
		description: z.string(), // search-result snippet for the page
		order: z.number(), // card order on the home page
	}),
});

// Each Markdown file in src/content/projects/ becomes an entry in the
// Projects section on the home page. Media paths point into public/.
const projects = defineCollection({
	loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
	schema: z.object({
		title: z.string(),
		order: z.number(), // position in the Projects section
		// Shown side by side. Videos (.webm/.mp4) autoplay muted on loop;
		// anything else renders as an image. `alt` describes it for screen readers.
		media: z.array(z.object({ src: z.string(), alt: z.string() })).min(1),
		tags: z.array(z.string()).default([]),
		link: z.string().url().optional(),
	}),
});

export const collections = { services, projects };
