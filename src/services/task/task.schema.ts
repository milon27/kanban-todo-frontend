import z from "zod";

// they will be used in the form ui (react hook form)
export const CreateTaskSchema = z.object({
  title: z.string().nonempty(),
  description: z.string().nonempty().optional(),
  categoryId: z.number().positive(),
  expireDate: z.string().nonempty().optional(),
  position: z.number().positive(),
});
export type ICreateTaskSchema = z.infer<typeof CreateTaskSchema>;

export const UpdateTaskSchema = CreateTaskSchema.partial().extend({
  id: z.number().positive(),
});
export type IUpdateTaskSchema = z.infer<typeof UpdateTaskSchema>;

export const MoveTaskSchema = z.object({
  categoryId: z.number().positive(),
  position: z.number().positive(),
});
export type IMoveTaskSchema = z.infer<typeof MoveTaskSchema>;
