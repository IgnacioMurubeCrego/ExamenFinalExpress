// @deno-types="npm:@types/express@4"
import express, { Request, Response } from "npm:express@4.18.2";
import mongoose from "mongoose";


const MONGO_URL = Deno.env.get("MONGO_URL");

if (!MONGO_URL) {
  console.log("No mongo URL found");
  Deno.exit(1);
}

await mongoose.connect(MONGO_URL);
const app = express();
app.use(express.json());
app
.get("/", (_req: Request, res: Response) => {
  res.status(200).send("Hello World!");
})
  

app.listen(4000, () => {
  console.log("Server listening on port 4000");
});
