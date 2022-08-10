import { z } from 'zod';

import { categorySchema } from '../../schemas/categorySchemas';
import { restaurantsByCategory } from '../constants/restaurantsData';
import { createRouter } from './context';

export const restaurantsRouter = createRouter().query('all', {
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
});
