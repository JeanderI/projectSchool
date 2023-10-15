import { AppDataSource } from "../../data-source";
import AppError from "../../errors/AppErrors";
import { hash } from "bcryptjs";
import { User } from "../../entities/user.entitie";
import { userSchemaRes } from "../../schemas/user.schema";
import { TUserReq, TUserRes } from "../../interfaces/user.interface";

const createUserService = async (data: TUserReq): Promise<TUserRes> => {
  const userRepository = AppDataSource.getRepository(User);

  const { username } = data;

  const findUser = await userRepository.findOne({
    where: {
      username,
    },
  });

  if (findUser) {
    throw new AppError("User already exists", 409);
  }

  const hashedPassword = await hash(data.password, 10);

  const create = {
    ...data,
    password: hashedPassword,
  };

  await userRepository.save(create);
  return userSchemaRes.parse(create);
};

export { createUserService };
