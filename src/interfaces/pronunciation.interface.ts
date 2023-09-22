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

interface IPagination {
  next: string | null;
  previous: string | null;
  currentPage: number;
  totalPages: number;
  totalCount: number;
  results: TPronunciationsResponse;
}

export {
  TPronunciation,
  TPronunciationRequest,
  TPronunciationResponse,
  TPronunciationUpdateRequest,
  TPronunciationsResponse,
  IPagination,
};
