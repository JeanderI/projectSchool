import { z } from "zod";

const userSchema = z.object({
  id: z.string(),
  username: z.string(),
  email: z.string().email(),
  password: z.string(),
});

const userSchemaRes = userSchema.omit({
  password: true,
});

const userSchemaUpdate = userSchema
  .omit({
    id: true,
  })
  .partial();

const usersSchemaRes = z.array(userSchemaRes);

export { userSchemaRes, userSchemaUpdate, usersSchemaRes, userSchema };
