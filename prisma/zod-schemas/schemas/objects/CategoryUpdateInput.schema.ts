import { z } from 'zod';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { LocationUpdateManyWithoutCategoriesNestedInputObjectSchema } from './LocationUpdateManyWithoutCategoriesNestedInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.CategoryUpdateInput> = z
  .object({
    name: z
      .union([
        z.string(),
        z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    locations: z
      .lazy(() => LocationUpdateManyWithoutCategoriesNestedInputObjectSchema)
      .optional(),
  })
  .strict();

export const CategoryUpdateInputObjectSchema = Schema;
