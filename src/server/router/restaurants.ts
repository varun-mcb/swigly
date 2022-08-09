import { z } from 'zod';
import { restaurantsNearYou } from '../constants/restaurantsNearYou';
import { createRouter } from './context';

export const restaurantsRouter = createRouter().query('all', {
  input: z
    .object({
      category: z
        .enum(['near-you', 'biryani', 'north-indian', 'top-rated'])
        .nullish(),
    })
    .nullish(),
  resolve({ input }) {
    if (input?.category === 'near-you') {
      return restaurantsNearYou;
    }
    return [];
  },
});
