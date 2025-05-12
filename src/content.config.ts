import { glob } from "astro/loaders";
import { defineCollection, z } from "astro:content";

const blog = defineCollection({
  // Load Markdown and MDX files in the `src/content/blog/` directory.
  loader: glob({ base: "./src/content/blog", pattern: "**/*.{md,mdx}" }),
  // Type-check frontmatter using a schema
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    // Transform string to Date object
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    heroImage: z.string().optional(),
    slug: z.string().optional(),
    authors: z
      .array(
        z.object({
          name: z.string(),
          url: z.string().url().optional(),
        })
      )
      .optional(),
    originalTitle: z.string().optional(),
    originalUrl: z.string().url().optional(),
  }),
});

export const collections = { blog };
