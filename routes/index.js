import express from "express";
const router = express.Router();
import userRoutes from "./auth/index.js";
import authorRoutes from "./authors/index.js";
import categoryRoutes from "./categories/index.js";
import chapterRoutes from "./chapters/index.js";
import mangaRoutes from "./mangas/index.js";

router.use("/user", userRoutes);
router.use("/author", authorRoutes);
router.use("/category", categoryRoutes);
router.use("/chapter", chapterRoutes);
router.use("/manga", mangaRoutes);

export default router;
