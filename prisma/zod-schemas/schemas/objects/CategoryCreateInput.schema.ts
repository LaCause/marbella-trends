import { z } from 'zod';
import { LocationCreateNestedManyWithoutCategoriesInputObjectSchema } from './LocationCreateNestedManyWithoutCategoriesInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.CategoryCreateInput> = z
  .object({
    name: z.string(),
    locations: z
      .lazy(() => LocationCreateNestedManyWithoutCategoriesInputObjectSchema)
      .optional(),
  })
  .strict();

export const CategoryCreateInputObjectSchema = Schema;
