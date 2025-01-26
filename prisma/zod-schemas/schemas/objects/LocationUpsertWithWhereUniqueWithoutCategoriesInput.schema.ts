import { z } from 'zod';
import { LocationWhereUniqueInputObjectSchema } from './LocationWhereUniqueInput.schema';
import { LocationUpdateWithoutCategoriesInputObjectSchema } from './LocationUpdateWithoutCategoriesInput.schema';
import { LocationUncheckedUpdateWithoutCategoriesInputObjectSchema } from './LocationUncheckedUpdateWithoutCategoriesInput.schema';
import { LocationCreateWithoutCategoriesInputObjectSchema } from './LocationCreateWithoutCategoriesInput.schema';
import { LocationUncheckedCreateWithoutCategoriesInputObjectSchema } from './LocationUncheckedCreateWithoutCategoriesInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.LocationUpsertWithWhereUniqueWithoutCategoriesInput> =
  z
    .object({
      where: z.lazy(() => LocationWhereUniqueInputObjectSchema),
      update: z.union([
        z.lazy(() => LocationUpdateWithoutCategoriesInputObjectSchema),
        z.lazy(() => LocationUncheckedUpdateWithoutCategoriesInputObjectSchema),
      ]),
      create: z.union([
        z.lazy(() => LocationCreateWithoutCategoriesInputObjectSchema),
        z.lazy(() => LocationUncheckedCreateWithoutCategoriesInputObjectSchema),
      ]),
    })
    .strict();

export const LocationUpsertWithWhereUniqueWithoutCategoriesInputObjectSchema =
  Schema;
