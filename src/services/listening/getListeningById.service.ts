import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import AppError from "../../errors/AppErrors";
import { Listening } from "../../entities/listening.entitie";
import { listeningSchema } from "../../schemas/listening.schema";

const findListeningService = async (id: string): Promise<any> => {
  const listeningRepository: Repository<Listening> =
    AppDataSource.getRepository(Listening);

  const listening = await listeningRepository.findOne({
    where: {
      id: id,
    },
  });

  if (!listening) {
    throw new AppError("listening not found", 404);
  }

  const listeningRes = listeningSchema.parse(listening);

  return listeningRes;
};

export { findListeningService };
