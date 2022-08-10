import { z } from 'zod';

export const categorySchema = z.enum([
  'biryani',
  'north-indian',
  'top-rated',
  'south-indian',
]);

export type CategoryType = z.infer<typeof categorySchema>;
