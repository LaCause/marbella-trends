import { z } from 'zod';
import { LocationCreateWithoutCategoriesInputObjectSchema } from './LocationCreateWithoutCategoriesInput.schema';
import { LocationUncheckedCreateWithoutCategoriesInputObjectSchema } from './LocationUncheckedCreateWithoutCategoriesInput.schema';
import { LocationCreateOrConnectWithoutCategoriesInputObjectSchema } from './LocationCreateOrConnectWithoutCategoriesInput.schema';
import { LocationUpsertWithWhereUniqueWithoutCategoriesInputObjectSchema } from './LocationUpsertWithWhereUniqueWithoutCategoriesInput.schema';
import { LocationWhereUniqueInputObjectSchema } from './LocationWhereUniqueInput.schema';
import { LocationUpdateWithWhereUniqueWithoutCategoriesInputObjectSchema } from './LocationUpdateWithWhereUniqueWithoutCategoriesInput.schema';
import { LocationUpdateManyWithWhereWithoutCategoriesInputObjectSchema } from './LocationUpdateManyWithWhereWithoutCategoriesInput.schema';
import { LocationScalarWhereInputObjectSchema } from './LocationScalarWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.LocationUpdateManyWithoutCategoriesNestedInput> =
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
      upsert: z
        .union([
          z.lazy(
            () =>
              LocationUpsertWithWhereUniqueWithoutCategoriesInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                LocationUpsertWithWhereUniqueWithoutCategoriesInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      set: z
        .union([
          z.lazy(() => LocationWhereUniqueInputObjectSchema),
          z.lazy(() => LocationWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      disconnect: z
        .union([
          z.lazy(() => LocationWhereUniqueInputObjectSchema),
          z.lazy(() => LocationWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      delete: z
        .union([
          z.lazy(() => LocationWhereUniqueInputObjectSchema),
          z.lazy(() => LocationWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      connect: z
        .union([
          z.lazy(() => LocationWhereUniqueInputObjectSchema),
          z.lazy(() => LocationWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      update: z
        .union([
          z.lazy(
            () =>
              LocationUpdateWithWhereUniqueWithoutCategoriesInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                LocationUpdateWithWhereUniqueWithoutCategoriesInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      updateMany: z
        .union([
          z.lazy(
            () => LocationUpdateManyWithWhereWithoutCategoriesInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                LocationUpdateManyWithWhereWithoutCategoriesInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      deleteMany: z
        .union([
          z.lazy(() => LocationScalarWhereInputObjectSchema),
          z.lazy(() => LocationScalarWhereInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const LocationUpdateManyWithoutCategoriesNestedInputObjectSchema =
  Schema;
