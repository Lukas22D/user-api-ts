import { Router } from "express";
import { GetusersController } from "./Controllers/get-user/get-users";
import { MongoGetUsersRepository } from "./repositories/get-user/mongo-getuser";
import { MongoCreateUserReposiroy } from "./repositories/create-user/mongo-create-user";
import { CreateUserController } from "./Controllers/create-user/create-user";

const routes = Router();

routes.get("/", async (req, res) => {
  const mongoGetUsersRepositorys = new MongoGetUsersRepository();
  const getUsersController = new GetusersController(mongoGetUsersRepositorys);

  const { body, statusCode } = await getUsersController.handle();

  res.send(body).status(statusCode);
});

routes.post("/users", async (req, res) => {
  const mongoCreateUserReposiroy = new MongoCreateUserReposiroy();
  const createUserController = new CreateUserController(
    mongoCreateUserReposiroy
  );

  const { body, statusCode } = await createUserController.handle({
    body: req.body,
  });

  res.send(body).status(statusCode);
});

export default routes;
