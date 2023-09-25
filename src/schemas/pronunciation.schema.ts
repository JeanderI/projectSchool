import { z } from "zod";

const pronunciationSchema = z.object({
  id: z.string(),
  title: z.string(),
  description: z.string(),
  start: z.number().nullable(),
  end: z.number().nullable(),
  text: z.string(),
  help: z.string().nullable(),
  url: z.string(),
});

const pronunciationSchemaRequest = pronunciationSchema.omit({
  id: true,
});

const pronunciationSchemaUpdate = pronunciationSchemaRequest.partial();

const pronunciationsSchemaResponse = z.array(pronunciationSchemaRequest);

export {
  pronunciationSchema,
  pronunciationSchemaRequest,
  pronunciationSchemaUpdate,
  pronunciationsSchemaResponse,
};
