import { z } from 'zod';
import { CategoryWhereUniqueInputObjectSchema } from './CategoryWhereUniqueInput.schema';
import { CategoryUpdateWithoutLocationsInputObjectSchema } from './CategoryUpdateWithoutLocationsInput.schema';
import { CategoryUncheckedUpdateWithoutLocationsInputObjectSchema } from './CategoryUncheckedUpdateWithoutLocationsInput.schema';
import { CategoryCreateWithoutLocationsInputObjectSchema } from './CategoryCreateWithoutLocationsInput.schema';
import { CategoryUncheckedCreateWithoutLocationsInputObjectSchema } from './CategoryUncheckedCreateWithoutLocationsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.CategoryUpsertWithWhereUniqueWithoutLocationsInput> =
  z
    .object({
      where: z.lazy(() => CategoryWhereUniqueInputObjectSchema),
      update: z.union([
        z.lazy(() => CategoryUpdateWithoutLocationsInputObjectSchema),
        z.lazy(() => CategoryUncheckedUpdateWithoutLocationsInputObjectSchema),
      ]),
      create: z.union([
        z.lazy(() => CategoryCreateWithoutLocationsInputObjectSchema),
        z.lazy(() => CategoryUncheckedCreateWithoutLocationsInputObjectSchema),
      ]),
    })
    .strict();

export const CategoryUpsertWithWhereUniqueWithoutLocationsInputObjectSchema =
  Schema;
