import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.LocationMaxAggregateInputType> = z
  .object({
    id: z.literal(true).optional(),
    company: z.literal(true).optional(),
    description: z.literal(true).optional(),
    lat: z.literal(true).optional(),
    long: z.literal(true).optional(),
    street: z.literal(true).optional(),
    line: z.literal(true).optional(),
    state: z.literal(true).optional(),
    trends_value: z.literal(true).optional(),
    image: z.literal(true).optional(),
  })
  .strict();

export const LocationMaxAggregateInputObjectSchema = Schema;
