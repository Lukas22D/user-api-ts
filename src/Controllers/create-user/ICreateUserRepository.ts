import { User } from "../../models/user";

export interface ICreateUserRepository {
  CreateUser(): Promise<User>;
}
