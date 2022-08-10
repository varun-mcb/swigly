import { z } from 'zod';

export const menuSchema = z.object({});

export type Menu = z.infer<typeof menuSchema>;
