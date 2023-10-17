import app from "./index";
import { config } from "dotenv";

config();

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server started at port ${port}`);
});
