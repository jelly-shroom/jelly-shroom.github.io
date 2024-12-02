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

const journals = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    image: z.string(),
    alt: z.string(),
    date: z.coerce.date(),
  }),
});

const bio_projects = defineCollection({
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

const bio_personals = defineCollection({
  type: "content",
  schema: z.object({
    label: z.string(),
    order: z.number(),
  }),
});

const bio_journals = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    image: z.string(),
    alt: z.string(),
    date: z.coerce.date(),
  }),
});

export const collections = {
  projects,
  personals,
  journals,
  bio_journals,
  bio_personals,
  bio_projects,
};
