import { z } from "zod";

const userSchema = z.object({
  id: z.string(),
  name: z.string(),
  username: z.string().min(4),
  password: z.string().min(6),
});

const userSchemaRes = userSchema.omit({
  password: true,
});

const userSchemaReq = userSchema.omit({ id: true });

const userSchemaUpdate = userSchema
  .omit({
    id: true,
  })
  .partial();

const usersSchemaRes = z.array(userSchemaRes);

export {
  userSchemaRes,
  userSchemaUpdate,
  usersSchemaRes,
  userSchema,
  userSchemaReq,
};
