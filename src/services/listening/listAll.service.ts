import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { Listening } from "../../entities/listening.entitie";

const userListeningService = async (userId: string): Promise<Listening[]> => {
  const listeningRepository: Repository<Listening> =
    AppDataSource.getRepository(Listening);

  const listenings = await listeningRepository.find({
    where: {
      user: {
        id: userId,
      },
    },
  });

  return listenings;
};

export { userListeningService };
