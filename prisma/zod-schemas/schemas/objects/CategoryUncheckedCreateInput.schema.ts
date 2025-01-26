import { z } from 'zod';
import { LocationUncheckedCreateNestedManyWithoutCategoriesInputObjectSchema } from './LocationUncheckedCreateNestedManyWithoutCategoriesInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.CategoryUncheckedCreateInput> = z
  .object({
    id: z.number().optional(),
    name: z.string(),
    locations: z
      .lazy(
        () =>
          LocationUncheckedCreateNestedManyWithoutCategoriesInputObjectSchema,
      )
      .optional(),
  })
  .strict();

export const CategoryUncheckedCreateInputObjectSchema = Schema;
