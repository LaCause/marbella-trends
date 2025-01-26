import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.LocationCreateWithoutCategoriesInput> = z
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
  })
  .strict();

export const LocationCreateWithoutCategoriesInputObjectSchema = Schema;
