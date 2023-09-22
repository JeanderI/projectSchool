import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import AppError from "../../errors/AppErrors";
import { User } from "../../entities/user.entitie";
import {
  TPronunciationRequest,
  TPronunciationResponse,
} from "../../interfaces/pronunciation.interface";
import { Pronunciation } from "../../entities/pronunciation.entitie";
import { pronunciationSchema } from "../../schemas/pronunciation.schema";

const createPronunciationService = async (
  data: TPronunciationRequest,
  userId: string
): Promise<TPronunciationResponse> => {
  const pronunciationsRepository: Repository<Pronunciation> =
    AppDataSource.getRepository(Pronunciation);
  const usersRepository: Repository<User> = AppDataSource.getRepository(User);

  const user: User | null = await usersRepository.findOne({
    where: {
      id: userId,
    },
  });

  if (!user) {
    throw new AppError("User not found", 404);
  }

  const pronunciation: Pronunciation = pronunciationsRepository.create({
    ...data,
    user,
  });

  await pronunciationsRepository.save(pronunciation);

  return pronunciationSchema.parse(pronunciation);
};

export { createPronunciationService };
