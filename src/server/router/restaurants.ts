import { z } from 'zod';
import { restaurants } from '../constants/restaurants';
import { createRouter } from './context';

export const restaurantsRouter = createRouter().query('all', {
  input: z
    .object({
      category: z
        .enum(['biryani', 'north-indian', 'top-rated', 'south-indian'])
        .nullish(),
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
