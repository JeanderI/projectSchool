import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { Pronunciation } from "../../entities/pronunciation.entitie";

const allPronunciationService = async (): Promise<Pronunciation[]> => {
  const pronunciationRepository: Repository<Pronunciation> =
    AppDataSource.getRepository(Pronunciation);

  const pronunciation = await pronunciationRepository.find();

  return pronunciation;
};

export { allPronunciationService };
