import { IGetUsersRepository } from "../../Controllers/get-user/protocols";
import { User } from "../../models/user";

export class MongoGetUsersRepository implements IGetUsersRepository {
  async getUsers(): Promise<User[]> {
    return [
      {
        fistName: "any_first_name",
        lastName: "any_last_name",
        email: "any_email",
        password: "any_password",
      },
    ];
  }
}
