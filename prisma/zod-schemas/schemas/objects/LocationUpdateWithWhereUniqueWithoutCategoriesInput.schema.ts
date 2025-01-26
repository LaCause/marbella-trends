import { z } from 'zod';
import { LocationWhereUniqueInputObjectSchema } from './LocationWhereUniqueInput.schema';
import { LocationUpdateWithoutCategoriesInputObjectSchema } from './LocationUpdateWithoutCategoriesInput.schema';
import { LocationUncheckedUpdateWithoutCategoriesInputObjectSchema } from './LocationUncheckedUpdateWithoutCategoriesInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.LocationUpdateWithWhereUniqueWithoutCategoriesInput> =
  z
    .object({
      where: z.lazy(() => LocationWhereUniqueInputObjectSchema),
      data: z.union([
        z.lazy(() => LocationUpdateWithoutCategoriesInputObjectSchema),
        z.lazy(() => LocationUncheckedUpdateWithoutCategoriesInputObjectSchema),
      ]),
    })
    .strict();

export const LocationUpdateWithWhereUniqueWithoutCategoriesInputObjectSchema =
  Schema;
