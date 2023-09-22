import { z } from "zod";

const pronunciationSchema = z.object({
  id: z.string(),
  title: z.string(),
  model: z.string(),
  text: z.string(),
  audio: z.string(),
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
