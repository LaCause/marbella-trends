import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserCreateManyInput> = z
  .object({
    id: z.number().optional(),
    firstname: z.string(),
    lastname: z.string(),
  })
  .strict();

export const UserCreateManyInputObjectSchema = Schema;
