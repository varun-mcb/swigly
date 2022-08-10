import { z } from 'zod';

export const menuSchema = z.object({
  data: z.object({
    id: z.string(),
    name: z.string(),
    area: z.string(),
    areaPostalCode: z.string(),
    areaSlug: z.string(),
    locality: z.string(),
    avgRating: z.number(),
    cloudinaryImageId: z.string().optional(),
    costForTwoMsg: z.string(),
    cuisines: z.array(z.string()),
    menu: z.object({
      items: z.record(
        z.object({
          id: z.number(),
          name: z.string(),
          category: z.string(),
          description: z.string(),
          cloudinaryImageId: z.string().optional(),
          recommended: z.number(),
          isVeg: z.number(),
          isBestSeller: z.boolean(),
        }),
      ),
    }),
  }),
});

export type Menu = z.infer<typeof menuSchema>;
