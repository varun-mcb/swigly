import { z } from 'zod';

export const restaurantMenuSchema = z.object({
  data: z.object({
    id: z.string(),
    name: z.string(),
    area: z.string(),
    areaPostalCode: z.string(),
    city: z.string(),
    locality: z.string(),
    avgRating: z.number(),
    totalRatings: z.number(),
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
          price: z.number(),
        }),
      ),
    }),
  }),
});

export type RestaurantMenu = z.infer<typeof restaurantMenuSchema>;

export type RestaurantMenuItem =
  RestaurantMenu['data']['menu']['items'][string];
