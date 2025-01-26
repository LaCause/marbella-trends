import { z } from "zod";

enum CategoryFormRule {
  MIN_LENGTH = 1,
  MAX_LENGTH = 50,
}

export const schema = z.object({
  name: z
    .string()
    .min(CategoryFormRule.MIN_LENGTH, "Nom de catégorie requis")
    .max(CategoryFormRule.MAX_LENGTH, "Nom de catégorie trop long"),
});
