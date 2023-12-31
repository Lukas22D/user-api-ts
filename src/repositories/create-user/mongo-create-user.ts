import {
  CreateUserParams,
  ICreateUserRepository,
} from "../../Controllers/create-user/protocols";
import { MongoClient } from "../../database/mongo";
import { User } from "../../models/user";

export class MongoCreateUserReposiroy implements ICreateUserRepository {
  async CreateUser(params: CreateUserParams): Promise<User> {
    const { insertedId } = await MongoClient.db
      .collection("users")
      .insertOne(params);

    const user = await MongoClient.db
      .collection<Omit<User, "id">>("users")
      .findOne({ _id: insertedId });

    if (!user) {
      throw new Error("User not created");
    }

    const { _id, ...rest } = user;

    return {
      id: _id.toHexString(),
      ...rest,
    };
  }
}
