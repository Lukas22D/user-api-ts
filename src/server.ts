import { MongoClient } from "./database/mongo";
import app from "./index";
import { config } from "dotenv";

config();

const port = process.env.PORT || 3000;

const main = async () => {
  app.listen(port);

  await MongoClient.connect();
  console.log(`Server running at http://localhost:${port}`);
};

main();
