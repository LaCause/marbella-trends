import { z } from 'zod';
import { CategoryCreateWithoutLocationsInputObjectSchema } from './CategoryCreateWithoutLocationsInput.schema';
import { CategoryUncheckedCreateWithoutLocationsInputObjectSchema } from './CategoryUncheckedCreateWithoutLocationsInput.schema';
import { CategoryCreateOrConnectWithoutLocationsInputObjectSchema } from './CategoryCreateOrConnectWithoutLocationsInput.schema';
import { CategoryWhereUniqueInputObjectSchema } from './CategoryWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.CategoryUncheckedCreateNestedManyWithoutLocationsInput> =
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
      connect: z
        .union([
          z.lazy(() => CategoryWhereUniqueInputObjectSchema),
          z.lazy(() => CategoryWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const CategoryUncheckedCreateNestedManyWithoutLocationsInputObjectSchema =
  Schema;
