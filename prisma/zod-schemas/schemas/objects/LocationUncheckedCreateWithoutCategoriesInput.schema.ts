import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.LocationUncheckedCreateWithoutCategoriesInput> =
  z
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
    })
    .strict();

export const LocationUncheckedCreateWithoutCategoriesInputObjectSchema = Schema;
