import express from "express";
import "./config/db.js";
import { config } from "dotenv";
import indexRouter from "./routes/index.js";
import cors from "cors";
import morgan from "morgan";
import user from "./models/user.js";
import category from "./models/category.js";
import chapter from "./models/chapter.js";
import manga from "./models/manga.js";
import author from "./models/author.js";

const server = express();
config();
server.use(
  cors({
    credentials: true,
    origin: "http://localhost:5173/",
  })
);
server.use(express.json());
server.use(express.urlencoded({ extended: true }));
server.use(cors());
server.use(morgan("dev"));

server.use("/api", indexRouter);

const port = 3001;
server.listen(port, () => console.log(`Server listening on port ${port}`));

export default server;
