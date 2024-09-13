import * as z from "zod";

export const LoginSchema = z.object({
  phone: z.string().min(8),
  password: z.string().min(8),
});
