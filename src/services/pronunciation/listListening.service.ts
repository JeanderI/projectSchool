import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import AppError from "../../errors/AppErrors";
import { IPagination } from "../../interfaces/listening.interface";
import { Pronunciation } from "../../entities/pronunciation.entitie";

const listPronunciationsService = async (
  page: number,
  limit: number,
  baseUrl: string
): Promise<IPagination> => {
  const pronunciationRepository: Repository<Pronunciation> =
    AppDataSource.getRepository(Pronunciation);

  const skip = (page - 1) * limit;
  const [pronunciation, totalCount] =
    await pronunciationRepository.findAndCount({
      take: limit,
      skip: skip,
    });

  const rota = `/pronunciation`;

  return setPagination(totalCount, limit, page, baseUrl + rota, pronunciation);
};

export { listPronunciationsService };

const setPagination = (
  totalCount: number,
  limit: number,
  page: number,
  baseUrl: string,
  array: any[]
) => {
  const totalPages = Math.ceil(totalCount / limit);
  const nextPage = page < totalPages ? page + 1 : null;
  const previousPage = page > 1 ? page - 1 : null;

  let nextPageUrl = nextPage ? `${baseUrl}?page=${nextPage}` : null;
  let previousPageUrl = previousPage ? `${baseUrl}?page=${previousPage}` : null;

  if (limit) {
    nextPageUrl ? (nextPageUrl += `&limit=${limit}`) : null;
    previousPageUrl ? (previousPageUrl += `&limit=${limit}`) : null;
  }

  return {
    next: nextPageUrl,
    previous: previousPageUrl,
    currentPage: page,
    totalPages: totalPages,
    totalCount: totalCount,
    results: [...array],
  };
};
