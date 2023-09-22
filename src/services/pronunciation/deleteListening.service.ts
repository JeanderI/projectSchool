import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import AppError from "../../errors/AppErrors";
import { Pronunciation } from "../../entities/pronunciation.entitie";

const deletePronunciationService = async (
  pronunciationId: string
): Promise<void> => {
  const pronunciationsRepository: Repository<Pronunciation> =
    AppDataSource.getRepository(Pronunciation);
  const pronunciation: Pronunciation | null =
    await pronunciationsRepository.findOneBy({
      id: pronunciationId,
    });

  if (!pronunciation) {
    throw new AppError("pronunciation not found", 404);
  }

  await pronunciationsRepository.remove(pronunciation);
};

export { deletePronunciationService };
