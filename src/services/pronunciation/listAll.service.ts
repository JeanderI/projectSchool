import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { Pronunciation } from "../../entities/pronunciation.entitie";

const userPronunciationService = async (
  userId: string
): Promise<Pronunciation[]> => {
  const pronunciationRepository: Repository<Pronunciation> =
    AppDataSource.getRepository(Pronunciation);

  const pronunciation = await pronunciationRepository.find({
    where: {
      user: {
        id: userId,
      },
    },
  });

  return pronunciation;
};

export { userPronunciationService };
