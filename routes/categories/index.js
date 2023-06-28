import express from "express";
const router = express.Router();
import getCategories from "../../controllers/categories/read.js";

router.get("/", getCategories);

export default router;
