import z from "zod";

export const RegisterSchema = z
  .object({
    name: z.string().nonempty(),
    email: z.string().email(),
    password: z.string().min(8),
    confirmPassword: z.string().min(8),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ["confirmPassword"],
  });

export type IRegisterSchema = z.infer<typeof RegisterSchema>;
