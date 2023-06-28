import express from "express";
const router = express.Router();
import getManga from "../../controllers/mangas/read.js";

router.get("/", getManga);

export default router;
