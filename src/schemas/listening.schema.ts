import { z } from "zod";

const listeningSchema = z.object({
  id: z.string(),
  title: z.string(),
  description: z.string(),
  start: z.number().nullable(),
  end: z.number().nullable(),
  text: z.string(),
  help: z.string().nullable(),
  url: z.string(),
});

const listeningSchemaRequest = listeningSchema.omit({
  id: true,
});

const listeningsSchemaResponse = z.array(listeningSchemaRequest);

const listeningSchemaUpdate = listeningSchemaRequest.partial();
export {
  listeningSchema,
  listeningSchemaRequest,
  listeningSchemaUpdate,
  listeningsSchemaResponse,
};
