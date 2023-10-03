import { z } from "zod";

const listeningSchema = z.object({
  id: z.string(),
  title: z.string(),
  description: z.string(),
  start: z.string().nullable(),
  end: z.string().nullable(),
  text: z.string(),
  help: z.string().nullable(),
  url: z.string(),
});

const listeningSchemaRequest = listeningSchema.omit({
  id: true,
});

const listeningSchemaUpdate = listeningSchemaRequest.partial();

const listeningsSchemaResponse = z.array(listeningSchemaRequest);

export {
  listeningSchema,
  listeningSchemaRequest,
  listeningSchemaUpdate,
  listeningsSchemaResponse,
};
