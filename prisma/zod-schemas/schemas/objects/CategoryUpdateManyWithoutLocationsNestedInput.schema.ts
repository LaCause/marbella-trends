import { z } from 'zod';
import { CategoryCreateWithoutLocationsInputObjectSchema } from './CategoryCreateWithoutLocationsInput.schema';
import { CategoryUncheckedCreateWithoutLocationsInputObjectSchema } from './CategoryUncheckedCreateWithoutLocationsInput.schema';
import { CategoryCreateOrConnectWithoutLocationsInputObjectSchema } from './CategoryCreateOrConnectWithoutLocationsInput.schema';
import { CategoryUpsertWithWhereUniqueWithoutLocationsInputObjectSchema } from './CategoryUpsertWithWhereUniqueWithoutLocationsInput.schema';
import { CategoryWhereUniqueInputObjectSchema } from './CategoryWhereUniqueInput.schema';
import { CategoryUpdateWithWhereUniqueWithoutLocationsInputObjectSchema } from './CategoryUpdateWithWhereUniqueWithoutLocationsInput.schema';
import { CategoryUpdateManyWithWhereWithoutLocationsInputObjectSchema } from './CategoryUpdateManyWithWhereWithoutLocationsInput.schema';
import { CategoryScalarWhereInputObjectSchema } from './CategoryScalarWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.CategoryUpdateManyWithoutLocationsNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => CategoryCreateWithoutLocationsInputObjectSchema),
          z.lazy(() => CategoryCreateWithoutLocationsInputObjectSchema).array(),
          z.lazy(
            () => CategoryUncheckedCreateWithoutLocationsInputObjectSchema,
          ),
          z
            .lazy(
              () => CategoryUncheckedCreateWithoutLocationsInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(
            () => CategoryCreateOrConnectWithoutLocationsInputObjectSchema,
          ),
          z
            .lazy(
              () => CategoryCreateOrConnectWithoutLocationsInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      upsert: z
        .union([
          z.lazy(
            () =>
              CategoryUpsertWithWhereUniqueWithoutLocationsInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                CategoryUpsertWithWhereUniqueWithoutLocationsInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      set: z
        .union([
          z.lazy(() => CategoryWhereUniqueInputObjectSchema),
          z.lazy(() => CategoryWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      disconnect: z
        .union([
          z.lazy(() => CategoryWhereUniqueInputObjectSchema),
          z.lazy(() => CategoryWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      delete: z
        .union([
          z.lazy(() => CategoryWhereUniqueInputObjectSchema),
          z.lazy(() => CategoryWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      connect: z
        .union([
          z.lazy(() => CategoryWhereUniqueInputObjectSchema),
          z.lazy(() => CategoryWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      update: z
        .union([
          z.lazy(
            () =>
              CategoryUpdateWithWhereUniqueWithoutLocationsInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                CategoryUpdateWithWhereUniqueWithoutLocationsInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      updateMany: z
        .union([
          z.lazy(
            () => CategoryUpdateManyWithWhereWithoutLocationsInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                CategoryUpdateManyWithWhereWithoutLocationsInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      deleteMany: z
        .union([
          z.lazy(() => CategoryScalarWhereInputObjectSchema),
          z.lazy(() => CategoryScalarWhereInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const CategoryUpdateManyWithoutLocationsNestedInputObjectSchema = Schema;
