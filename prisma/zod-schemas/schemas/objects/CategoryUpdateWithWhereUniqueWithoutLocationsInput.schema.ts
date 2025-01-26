import { z } from 'zod';
import { CategoryWhereUniqueInputObjectSchema } from './CategoryWhereUniqueInput.schema';
import { CategoryUpdateWithoutLocationsInputObjectSchema } from './CategoryUpdateWithoutLocationsInput.schema';
import { CategoryUncheckedUpdateWithoutLocationsInputObjectSchema } from './CategoryUncheckedUpdateWithoutLocationsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.CategoryUpdateWithWhereUniqueWithoutLocationsInput> =
  z
    .object({
      where: z.lazy(() => CategoryWhereUniqueInputObjectSchema),
      data: z.union([
        z.lazy(() => CategoryUpdateWithoutLocationsInputObjectSchema),
        z.lazy(() => CategoryUncheckedUpdateWithoutLocationsInputObjectSchema),
      ]),
    })
    .strict();

export const CategoryUpdateWithWhereUniqueWithoutLocationsInputObjectSchema =
  Schema;
