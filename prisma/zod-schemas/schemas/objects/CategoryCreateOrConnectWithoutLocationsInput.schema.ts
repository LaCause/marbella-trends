import { z } from 'zod';
import { CategoryWhereUniqueInputObjectSchema } from './CategoryWhereUniqueInput.schema';
import { CategoryCreateWithoutLocationsInputObjectSchema } from './CategoryCreateWithoutLocationsInput.schema';
import { CategoryUncheckedCreateWithoutLocationsInputObjectSchema } from './CategoryUncheckedCreateWithoutLocationsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.CategoryCreateOrConnectWithoutLocationsInput> = z
  .object({
    where: z.lazy(() => CategoryWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => CategoryCreateWithoutLocationsInputObjectSchema),
      z.lazy(() => CategoryUncheckedCreateWithoutLocationsInputObjectSchema),
    ]),
  })
  .strict();

export const CategoryCreateOrConnectWithoutLocationsInputObjectSchema = Schema;
