// src/server/router/context.ts
import * as trpc from '@trpc/server';
import type * as trpcNext from '@trpc/server/adapters/next';

export const createContext = async (
  opts?: trpcNext.CreateNextContextOptions,
) => {
  const req = opts?.req;
  const res = opts?.res;

  const session = {};

  return {
    req,
    res,
    session,
  };
};

type Context = trpc.inferAsyncReturnType<typeof createContext>;

export const createRouter = () => trpc.router<Context>();
