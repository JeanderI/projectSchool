import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import AppError from "../../errors/AppErrors";
import { User } from "../../entities/user.entitie";
import { TUserRes, TUserUpdate } from "../../interfaces/user.interface";
import { userSchemaRes } from "../../schemas/user.schema";

const updateUserService = async (
  userData: TUserUpdate,
  idUser: string
): Promise<TUserRes> => {
  const userRepository: Repository<User> = AppDataSource.getRepository(User);

  const oldUserData = await userRepository.findOne({
    where: {
      id: idUser,
    },
  });

  if (!oldUserData) {
    throw new AppError("User dosnt exists", 409);
  }

  const user = userRepository.create({
    ...oldUserData,
    ...userData,
  });

  await userRepository.save(user);

  const updatedUser = userSchemaRes.parse(user);

  return updatedUser;
};

export default updateUserService;
