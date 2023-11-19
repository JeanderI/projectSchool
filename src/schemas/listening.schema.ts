import { z } from "zod";

const listeningSchema = z.object({
  id: z.string(),
  title: z.string(),
  description: z.string(),
  start: z.string().nullish(),
  end: z.string().nullish(),
  text: z.string(),
  help: z.string().nullish(),
  url: z.string(),
  nextUrl: z.string().nullish(),
  lastUrl: z.string().nullish(),
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
