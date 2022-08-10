import { z } from 'zod';
import { menuSchema } from '../../schemas/menuSchemas';
import menus from '../constants/menus.json';

import { createRouter } from './context';

export const menusRouter = createRouter().query('all', {
  input: z.object({
    restaurantId: z.string(),
  }),
  output: menuSchema,
  resolve({ input }) {
    const selectedMenu = (menus as any)[input.restaurantId];
    return selectedMenu;
  },
});
