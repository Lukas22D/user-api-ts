import { Router } from "express";
import { GetusersController } from "./Controllers/get-user/get-users";
import { MongoGetUsersRepository } from "./repositories/get-user/mongo-getuser";

const routes = Router();

routes.get("/", async (req, res) => {
  const mongoGetUsersRepositorys = new MongoGetUsersRepository();
  const getUsersController = new GetusersController(mongoGetUsersRepositorys);

  const { body, statusCode } = await getUsersController.handle();

  res.send(body).status(statusCode);
});

export default routes;
