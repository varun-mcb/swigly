import { z } from 'zod';

import { categorySchema } from '../../schemas/category';
import { restaurants } from '../constants/restaurants';
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
    const selectedRestaurants = restaurants[input.category];
    return selectedRestaurants;
  },
});
