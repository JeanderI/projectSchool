import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import AppError from "../../errors/AppErrors";
import { Listening } from "../../entities/listening.entitie";

const deleteListeningService = async (listeningId: string): Promise<void> => {
  const listeningsRepository: Repository<Listening> =
    AppDataSource.getRepository(Listening);
  const listening: Listening | null = await listeningsRepository.findOneBy({
    id: listeningId,
  });

  if (!listening) {
    throw new AppError("listening not found", 404);
  }

  await listeningsRepository.remove(listening);
};

export { deleteListeningService };
