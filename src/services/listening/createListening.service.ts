import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import AppError from "../../errors/AppErrors";
import { User } from "../../entities/user.entitie";
import { Listening } from "../../entities/listening.entitie";
import {
  TListeningRequest,
  TListeningResponse,
} from "../../interfaces/listening.interface";
import { listeningSchema } from "../../schemas/listening.schema";

const createListeningService = async (
  data: TListeningRequest,
  userId: string
): Promise<TListeningResponse> => {
  const listeningsRepository: Repository<Listening> =
    AppDataSource.getRepository(Listening);
  const usersRepository: Repository<User> = AppDataSource.getRepository(User);

  const user: User | null = await usersRepository.findOneBy({
    id: userId,
  });

  if (!user) {
    throw new AppError("User not found", 404);
  }

  const listening: Listening = listeningsRepository.create({
    ...data,
    user: user,
  });

  await listeningsRepository.save(listening);

  return listeningSchema.parse(listening);
};
export { createListeningService };
