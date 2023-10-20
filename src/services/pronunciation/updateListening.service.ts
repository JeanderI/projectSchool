import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import AppError from "../../errors/AppErrors";
import { Pronunciation } from "../../entities/pronunciation.entitie";
import { TPronunciationResponse } from "../../interfaces/pronunciation.interface";
import {
  pronunciationSchema,
  pronunciationSchemaUpdate,
} from "../../schemas/pronunciation.schema";

const updatePronunciationService = async (
  data: any,
  pronunciationId: string
): Promise<TPronunciationResponse> => {
  const pronunciationsRepository: Repository<Pronunciation> =
    AppDataSource.getRepository(Pronunciation);
  const oldPronunciation: Pronunciation | null =
    await pronunciationsRepository.findOneBy({
      id: pronunciationId,
    });

  if (!oldPronunciation || oldPronunciation.id !== pronunciationId) {
    throw new AppError("Pronunciation not found", 404);
  }

  const newPronunciationData = pronunciationsRepository.create({
    ...(oldPronunciation || {}),
    ...data,
  });

  await pronunciationsRepository.save(newPronunciationData);

  return pronunciationSchema.parse(pronunciationSchemaUpdate);
};

export { updatePronunciationService };
