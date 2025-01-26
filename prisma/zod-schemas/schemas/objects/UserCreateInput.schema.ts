import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserCreateInput> = z
  .object({
    firstname: z.string(),
    lastname: z.string(),
  })
  .strict();

export const UserCreateInputObjectSchema = Schema;
