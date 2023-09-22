import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import AppError from "../../errors/AppErrors";
import { Pronunciation } from "../../entities/pronunciation.entitie";
import { pronunciationSchema } from "../../schemas/pronunciation.schema";

const findPronunciationService = async (id: string): Promise<any> => {
  const pronunciationRepository: Repository<Pronunciation> =
    AppDataSource.getRepository(Pronunciation);

  const pronunciation = await pronunciationRepository.findOne({
    where: {
      id: id,
    },
  });

  if (!pronunciation) {
    throw new AppError("pronunciation not found", 404);
  }

  const pronunciationRes = pronunciationSchema.parse(pronunciation);

  return pronunciationRes;
};

export { findPronunciationService };
