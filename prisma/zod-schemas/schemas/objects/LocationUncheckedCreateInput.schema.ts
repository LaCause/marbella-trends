import { z } from 'zod';
import { CategoryUncheckedCreateNestedManyWithoutLocationsInputObjectSchema } from './CategoryUncheckedCreateNestedManyWithoutLocationsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.LocationUncheckedCreateInput> = z
  .object({
    id: z.number().optional(),
    company: z.string(),
    description: z.string().optional(),
    lat: z.number(),
    long: z.number(),
    street: z.string(),
    line: z.string().optional().nullable(),
    state: z.string(),
    trends_value: z.number().optional(),
    image: z.string(),
    categories: z
      .lazy(
        () =>
          CategoryUncheckedCreateNestedManyWithoutLocationsInputObjectSchema,
      )
      .optional(),
  })
  .strict();

export const LocationUncheckedCreateInputObjectSchema = Schema;
