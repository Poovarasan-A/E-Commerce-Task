import express from "express";
import connectDB from "./config/db.js";
import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";
import user from "./routes/userRoute.js";
import cookieParser from "cookie-parser";
import cors from "cors";

const _filename = fileURLToPath(import.meta.url);
const _dirname = path.dirname(_filename);

const app = express();

dotenv.config({ path: path.join(_dirname, "config/.env") });

//Cors

const corsOptions = {
  origin: "http://localhost:5173",
  optionsSuccessStatus: 200,
};
app.use(cors(corsOptions));

app.use(cookieParser());
app.use(express.json());
app.use("/ecom/", user);

connectDB();

const port = process.env.PORT;

app.listen(port, () => {
  console.log(`Server listening on port: ${port}`);
});
