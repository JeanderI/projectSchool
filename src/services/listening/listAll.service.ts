import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { Listening } from "../../entities/listening.entitie";

const allListeningService = async (): Promise<Listening[]> => {
  const listeningRepository: Repository<Listening> =
    AppDataSource.getRepository(Listening);

  const listening = await listeningRepository.find();

  return listening;
};

export { allListeningService };
