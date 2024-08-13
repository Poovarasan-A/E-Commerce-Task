import express from "express";
import connectDB from "./config/db.js";
import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";
import user from "./routes/userRoute.js";
import cookieParser from "cookie-parser";
import cors from "cors";
import bodyParser from "body-parser";

const _dirname = path.dirname(fileURLToPath(import.meta.url));

const app = express();

dotenv.config({ path: path.join(_dirname, ".env") });

//Cors
app.use(bodyParser.urlencoded({ extended: true }));
const corsOptions = {
  origin: "http://localhost:5173",
  optionsSuccessStatus: 200,
  credentials: true,
};
app.use(cors(corsOptions));

app.use(cookieParser());
app.use(express.json());
app.use("/api/ecom/", user);

connectDB();

const port = process.env.PORT;

app.listen(port, () => {
  console.log(`Server listening on port: ${port}`);
});
