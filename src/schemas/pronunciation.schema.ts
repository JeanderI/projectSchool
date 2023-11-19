import { z } from "zod";

const pronunciationSchema = z.object({
  id: z.string(),
  title: z.string(),
  description: z.string(),
  start: z.string().nullish(),
  text: z.string(),
  help: z.string().nullish(),
  url: z.string(),
  nextUrl: z.string().nullish(),
  lastUrl: z.string().nullish(),
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
