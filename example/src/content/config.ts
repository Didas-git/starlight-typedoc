import { docsSchema, i18nSchema } from '@astrojs/starlight/schema'
import { defineCollection, z } from 'astro:content'

export const collections = {
  docs: defineCollection({
    schema: docsSchema({
      extend: z.object({
        banner: z
          .object({
            content: z.string(),
          })
          .default({
            content:
              'This is a demo of the Starlight TypeDoc plugin — Back to the <a href="https://starlight-typedoc.vercel.app/">documentation</a>.',
          }),
      }),
    }),
  }),
  i18n: defineCollection({ type: 'data', schema: i18nSchema() }),
}
