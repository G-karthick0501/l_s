import { z } from "zod";

const nameRegex = /^[a-zA-Z\s]+$/;

export const createUserSchema = z.object({
  name: z
    .string()
    .trim()
    .min(1, "Name is required")
    .max(30, "Name is too long")
    .regex(nameRegex, "Name can only contain letters and spaces"),
  email: z.string().email("Invalid email address"),
});

export const updateUserSchema = createUserSchema.partial();

export type updateUserInput = z.infer<typeof updateUserSchema>;
export type createUserInput = z.infer<typeof createUserSchema>;
