import express from "express";
const router = express.Router();
import getUser from "../../controllers/auth/read.js";

router.get("/", getUser);

export default router;
