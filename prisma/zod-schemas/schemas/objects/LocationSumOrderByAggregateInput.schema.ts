import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.LocationSumOrderByAggregateInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    lat: z.lazy(() => SortOrderSchema).optional(),
    long: z.lazy(() => SortOrderSchema).optional(),
    trends_value: z.lazy(() => SortOrderSchema).optional(),
  })
  .strict();

export const LocationSumOrderByAggregateInputObjectSchema = Schema;
