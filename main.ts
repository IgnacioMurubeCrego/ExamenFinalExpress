// @deno-types="npm:@types/express@4"
import express, {Request, Response} from "npm:express@4.18.2";
import mongoose from "mongoose";


const MONGO_URL = "mongodb+srv://ignacio:<password>@cluster-finalexam.1x10vh7.mongodb.net/?retryWrites=true&w=majority"

if (!MONGO_URL) {
  console.log("No mongo URL found");
  Deno.exit(1);
}

await mongoose.connect(MONGO_URL);
const app = express();
app.use(express.json());
app
  .get("/objects", async (req: Request, res: Response) => {})
  

app.listen(3000, () => {
  console.log("Server listening on port 3000");
});
