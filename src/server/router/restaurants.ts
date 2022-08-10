import { z } from 'zod';

import { categorySchema } from '../../schemas/category';
import { restaurantsByCategory } from '../constants/restaurants';
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
