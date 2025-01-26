import { z } from 'zod';
import { IntFilterObjectSchema } from './IntFilter.schema';
import { StringFilterObjectSchema } from './StringFilter.schema';
import { FloatFilterObjectSchema } from './FloatFilter.schema';
import { StringNullableFilterObjectSchema } from './StringNullableFilter.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.LocationScalarWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => LocationScalarWhereInputObjectSchema),
        z.lazy(() => LocationScalarWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => LocationScalarWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => LocationScalarWhereInputObjectSchema),
        z.lazy(() => LocationScalarWhereInputObjectSchema).array(),
      ])
      .optional(),
    id: z.union([z.lazy(() => IntFilterObjectSchema), z.number()]).optional(),
    company: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    description: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    lat: z
      .union([z.lazy(() => FloatFilterObjectSchema), z.number()])
      .optional(),
    long: z
      .union([z.lazy(() => FloatFilterObjectSchema), z.number()])
      .optional(),
    street: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    line: z
      .union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
      .optional()
      .nullable(),
    state: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    trends_value: z
      .union([z.lazy(() => IntFilterObjectSchema), z.number()])
      .optional(),
    image: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
  })
  .strict();

export const LocationScalarWhereInputObjectSchema = Schema;
