import express from "express";
const router = express.Router();
import getAuthors from "../../controllers/authors/read.js";

router.get("/", getAuthors);

export default router;
