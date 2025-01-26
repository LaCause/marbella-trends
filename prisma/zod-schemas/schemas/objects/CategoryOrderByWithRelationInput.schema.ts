import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { LocationOrderByRelationAggregateInputObjectSchema } from './LocationOrderByRelationAggregateInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.CategoryOrderByWithRelationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    name: z.lazy(() => SortOrderSchema).optional(),
    locations: z
      .lazy(() => LocationOrderByRelationAggregateInputObjectSchema)
      .optional(),
  })
  .strict();

export const CategoryOrderByWithRelationInputObjectSchema = Schema;
