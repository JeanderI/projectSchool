import { z } from "zod";
import { DeepPartial } from "typeorm";
import {
  pronunciationSchema,
  pronunciationSchemaRequest,
  pronunciationsSchemaResponse,
} from "../schemas/pronunciation.schema";

type TPronunciation = z.infer<typeof pronunciationSchema>;
type TPronunciationRequest = z.infer<typeof pronunciationSchemaRequest>;
type TPronunciationResponse = z.infer<typeof pronunciationSchema>;
type TPronunciationsResponse = z.infer<typeof pronunciationsSchemaResponse>;
type TPronunciationUpdateRequest = DeepPartial<TPronunciationRequest>;

export {
  TPronunciation,
  TPronunciationRequest,
  TPronunciationResponse,
  TPronunciationUpdateRequest,
  TPronunciationsResponse,
};
