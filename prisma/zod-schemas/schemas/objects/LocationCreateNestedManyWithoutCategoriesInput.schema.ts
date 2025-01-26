import { z } from 'zod';
import { LocationCreateWithoutCategoriesInputObjectSchema } from './LocationCreateWithoutCategoriesInput.schema';
import { LocationUncheckedCreateWithoutCategoriesInputObjectSchema } from './LocationUncheckedCreateWithoutCategoriesInput.schema';
import { LocationCreateOrConnectWithoutCategoriesInputObjectSchema } from './LocationCreateOrConnectWithoutCategoriesInput.schema';
import { LocationWhereUniqueInputObjectSchema } from './LocationWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.LocationCreateNestedManyWithoutCategoriesInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => LocationCreateWithoutCategoriesInputObjectSchema),
          z
            .lazy(() => LocationCreateWithoutCategoriesInputObjectSchema)
            .array(),
          z.lazy(
            () => LocationUncheckedCreateWithoutCategoriesInputObjectSchema,
          ),
          z
            .lazy(
              () => LocationUncheckedCreateWithoutCategoriesInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(
            () => LocationCreateOrConnectWithoutCategoriesInputObjectSchema,
          ),
          z
            .lazy(
              () => LocationCreateOrConnectWithoutCategoriesInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      connect: z
        .union([
          z.lazy(() => LocationWhereUniqueInputObjectSchema),
          z.lazy(() => LocationWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const LocationCreateNestedManyWithoutCategoriesInputObjectSchema =
  Schema;
