import { z } from 'zod';
import { CategoryCreateNestedManyWithoutLocationsInputObjectSchema } from './CategoryCreateNestedManyWithoutLocationsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.LocationCreateInput> = z
  .object({
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
      .lazy(() => CategoryCreateNestedManyWithoutLocationsInputObjectSchema)
      .optional(),
  })
  .strict();

export const LocationCreateInputObjectSchema = Schema;
