import { z, defineCollection } from "astro:content";

const projects = defineCollection({
  type: "content", // v2.5.0 and later
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      tags: z.array(z.string()),
      image: image(),
      alt: z.string(),
    }),
});

export const collections = {
  projects,
};
