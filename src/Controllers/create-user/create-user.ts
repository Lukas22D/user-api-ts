import { User } from "../../models/user";
import { HttpRequest, HttpResponse } from "../protocols";
import {
  CreateUserParams,
  ICreateUserController,
  ICreateUserRepository,
} from "./protocols";

export class CreateUserController implements ICreateUserController {
  constructor(private readonly createUserRepository: ICreateUserRepository) {}

  async handle(
    httpRequest: HttpRequest<CreateUserParams>
  ): Promise<HttpResponse<User>> {
    try {
      if (!httpRequest.body) {
        return {
          statusCode: 400,
          body: "Missing body",
        };
      }
      const user = await this.createUserRepository.CreateUser(httpRequest.body);

      return {
        statusCode: 201,
        body: user,
      };
    } catch (err) {
      return {
        statusCode: 500,
        body: err,
      };
    }
  }
}
