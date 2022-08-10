import { z } from 'zod';

import { categorySchema } from '../../schemas/categorySchemas';
import { restaurantMenuSchema } from '../../schemas/restaurantMenuSchemas';
import menus from '../constants/menus.json';
import { restaurantsByCategory } from '../constants/restaurantsData';
import { createRouter } from './context';

export const restaurantsRouter = createRouter()
  .query('all', {
    input: z
      .object({
        category: categorySchema.nullish(),
      })
      .nullish(),
    resolve({ input }) {
      if (!input?.category) {
        return [];
      }
      const selectedRestaurants = restaurantsByCategory[input.category];
      return selectedRestaurants;
    },
  })
  .query('byId', {
    input: z.object({
      restaurantId: z.string(),
    }),
    output: restaurantMenuSchema,
    resolve({ input }) {
      const selectedMenu = (menus as any)[input.restaurantId];
      return selectedMenu;
    },
  });
