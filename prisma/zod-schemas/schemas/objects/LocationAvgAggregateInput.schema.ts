import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.LocationAvgAggregateInputType> = z
  .object({
    id: z.literal(true).optional(),
    lat: z.literal(true).optional(),
    long: z.literal(true).optional(),
    trends_value: z.literal(true).optional(),
  })
  .strict();

export const LocationAvgAggregateInputObjectSchema = Schema;
