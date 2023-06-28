import express from "express";
const router = express.Router();
import getChapters from "../../controllers/chapters/read.js";

router.get("/", getChapters);

export default router;
