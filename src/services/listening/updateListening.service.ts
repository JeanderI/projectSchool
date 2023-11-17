import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import AppError from "../../errors/AppErrors";
import {
  TListeningResponse,
  TListeningUpdateRequest,
} from "../../interfaces/listening.interface";
import { Listening } from "../../entities/listening.entitie";
import { listeningSchema } from "../../schemas/listening.schema";

const updateListeningService = async (
  data: TListeningUpdateRequest,
  listeningId: string
): Promise<TListeningResponse> => {
  const listeningsRepository: Repository<Listening> =
    AppDataSource.getRepository(Listening);
  const oldListening: Listening | null = await listeningsRepository.findOne({
    where: { id: listeningId },
  });

  if (!oldListening) {
    throw new AppError("Listening not found", 404);
  }

  if (data.title) {
    oldListening.title = data.title;
  }
  if (data.description) {
    oldListening.description = data.description;
  }
  if (data.start !== undefined) {
    oldListening.start = data.start;
  }
  if (data.end !== undefined) {
    oldListening.end = data.end;
  }
  if (data.text) {
    oldListening.text = data.text;
  }
  if (data.help !== undefined) {
    oldListening.help = data.help;
  }
  if (data.url) {
    oldListening.url = data.url;
  }
  if (data.nextUrl) {
    oldListening.nextUrl = data.nextUrl;
  }
  if (data.lastUrl) {
    oldListening.lastUrl = data.lastUrl;
  }

  await listeningsRepository.save(oldListening);

  return listeningSchema.parse(oldListening);
};

export { updateListeningService };
