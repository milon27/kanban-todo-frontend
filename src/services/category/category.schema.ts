import z from "zod";

// they will be used in the form ui (react hook form)
export const CreateCategorySchema = z.object({
  title: z.string().nonempty(),
});
export type ICreateCategorySchema = z.infer<typeof CreateCategorySchema>;

export const UpdateCategorySchema = CreateCategorySchema.extend({
  id: z.number().positive(),
});
export type IUpdateCategorySchema = z.infer<typeof UpdateCategorySchema>;
