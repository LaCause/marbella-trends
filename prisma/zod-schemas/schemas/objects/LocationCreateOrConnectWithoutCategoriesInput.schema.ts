import { z } from 'zod';
import { LocationWhereUniqueInputObjectSchema } from './LocationWhereUniqueInput.schema';
import { LocationCreateWithoutCategoriesInputObjectSchema } from './LocationCreateWithoutCategoriesInput.schema';
import { LocationUncheckedCreateWithoutCategoriesInputObjectSchema } from './LocationUncheckedCreateWithoutCategoriesInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.LocationCreateOrConnectWithoutCategoriesInput> =
  z
    .object({
      where: z.lazy(() => LocationWhereUniqueInputObjectSchema),
      create: z.union([
        z.lazy(() => LocationCreateWithoutCategoriesInputObjectSchema),
        z.lazy(() => LocationUncheckedCreateWithoutCategoriesInputObjectSchema),
      ]),
    })
    .strict();

export const LocationCreateOrConnectWithoutCategoriesInputObjectSchema = Schema;
