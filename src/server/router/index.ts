// src/server/router/index.ts
import superjson from 'superjson';
import { createRouter } from './context';

import { menusRouter } from './menus';
import { restaurantsRouter } from './restaurants';

export const appRouter = createRouter()
  .transformer(superjson)
  .merge('restaurants.', restaurantsRouter)
  .merge('menus.', menusRouter);

// export type definition of API
export type AppRouter = typeof appRouter;
