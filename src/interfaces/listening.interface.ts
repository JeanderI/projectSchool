import { z } from "zod";
import { DeepPartial } from "typeorm";
import {
  listeningSchema,
  listeningSchemaRequest,
  listeningsSchemaResponse,
} from "../schemas/listening.schema";

type TListening = z.infer<typeof listeningSchema>;
type TListeningRequest = z.infer<typeof listeningSchemaRequest>;
type TListeningResponse = z.infer<typeof listeningSchema>;
type TListeningsResponse = z.infer<typeof listeningsSchemaResponse>;
type TListeningUpdateRequest = DeepPartial<TListeningRequest>;

export {
  TListening,
  TListeningRequest,
  TListeningResponse,
  TListeningUpdateRequest,
  TListeningsResponse,
};
