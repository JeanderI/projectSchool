import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import AppError from "../../errors/AppErrors";
import { Pronunciation } from "../../entities/pronunciation.entitie";
import {
  TPronunciationResponse,
  TPronunciationUpdateRequest,
} from "../../interfaces/pronunciation.interface";
import { pronunciationSchema } from "../../schemas/pronunciation.schema";

const updatePronunciationService = async (
  data: TPronunciationUpdateRequest,
  pronunciationId: string
): Promise<TPronunciationResponse> => {
  const pronunciationsRepository: Repository<Pronunciation> =
    AppDataSource.getRepository(Pronunciation);
  const oldPronunciation: Pronunciation | null =
    await pronunciationsRepository.findOne({
      where: {
        id: pronunciationId,
      },
    });

  if (!oldPronunciation) {
    throw new AppError("Listening not found", 404);
  }

  if (data.title) {
    oldPronunciation.title = data.title;
  }
  if (data.description) {
    oldPronunciation.description = data.description;
  }
  if (data.start !== undefined) {
    oldPronunciation.start = data.start;
  }
  if (data.text) {
    oldPronunciation.text = data.text;
  }
  if (data.help !== undefined) {
    oldPronunciation.help = data.help;
  }
  if (data.url) {
    oldPronunciation.url = data.url;
  }
  if (data.nextUrl) {
    oldPronunciation.nextUrl = data.nextUrl;
  }
  if (data.lastUrl) {
    oldPronunciation.lastUrl = data.lastUrl;
  }

  await pronunciationsRepository.save(oldPronunciation);

  return pronunciationSchema.parse(oldPronunciation);
};

export { updatePronunciationService };
