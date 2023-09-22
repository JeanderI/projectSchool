import { z } from "zod";

const listeningSchema = z.object({
  id: z.string(),
  title: z.string(),
  model: z.string(),
  text: z.string(),
  audio: z.string(),
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
