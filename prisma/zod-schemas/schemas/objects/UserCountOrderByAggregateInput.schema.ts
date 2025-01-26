import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserCountOrderByAggregateInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    firstname: z.lazy(() => SortOrderSchema).optional(),
    lastname: z.lazy(() => SortOrderSchema).optional(),
  })
  .strict();

export const UserCountOrderByAggregateInputObjectSchema = Schema;
