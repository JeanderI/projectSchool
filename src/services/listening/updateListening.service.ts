import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import AppError from "../../errors/AppErrors";
import { TListeningResponse } from "../../interfaces/listening.interface";
import { Listening } from "../../entities/listening.entitie";
import { listeningSchema } from "../../schemas/listening.schema";

const updateListeningService = async (
  data: any,
  listeningId: string
): Promise<TListeningResponse> => {
  const listeningsRepository: Repository<Listening> =
    AppDataSource.getRepository(Listening);
  const oldListening: Listening | null = await listeningsRepository.findOneBy({
    id: listeningId,
  });

  if (!oldListening || oldListening.id !== listeningId) {
    throw new AppError("Listening not found", 404);
  }

  const newListeningData = listeningsRepository.create({
    ...(oldListening || {}),
    ...data,
  });

  await listeningsRepository.save(newListeningData);

  return listeningSchema.parse(newListeningData);
};

export { updateListeningService };
