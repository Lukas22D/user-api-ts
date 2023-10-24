import { IGetUsersRepository, IGetuserController } from "./protocols";

export class GetusersController implements IGetuserController {
  constructor(private readonly getUserRepository: IGetUsersRepository) {}
  async handle() {
    try {
      const users = await this.getUserRepository.getUsers();

      return {
        statusCode: 200,
        body: users,
      };
    } catch (err) {
      return {
        statusCode: 500,
        body: err,
      };
    }
  }
}
