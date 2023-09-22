import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { IPagination } from "../../interfaces/listening.interface";
import { Listening } from "../../entities/listening.entitie";

const listListeningsService = async (
  page: number,
  limit: number,
  baseUrl: string
): Promise<IPagination> => {
  const listeningRepository: Repository<Listening> =
    AppDataSource.getRepository(Listening);

  const skip = (page - 1) * limit;
  const [listening, totalCount] = await listeningRepository.findAndCount({
    take: limit,
    skip: skip,
  });

  const rota = `/listening`;

  return setPagination(totalCount, limit, page, baseUrl + rota, listening);
};

export { listListeningsService };

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
