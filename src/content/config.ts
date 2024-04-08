import { z, defineCollection } from "astro:content";

const projects = defineCollection({
  type: "content",
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      tags: z.array(z.string()),
      image: image(),
      alt: z.string(),
      date: z.coerce.date(),
    }),
});

const personals = defineCollection({
  type: "content",
  schema: z.object({
    label: z.string(),
    order: z.number(),
  }),
});

export const collections = {
  projects,
  personals,
};
