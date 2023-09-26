import { z } from "zod";

const userSchema = z.object({
  id: z.string(),
  photo: z.string().nullable(),
  username: z.string(),
  email: z.string().email(),
  password: z.string().min(8),
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
