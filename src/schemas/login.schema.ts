import { z } from "zod";

const loginSchema = z.object({
  username: z.string().min(4),
  password: z.string().min(6),
});

export { loginSchema };
