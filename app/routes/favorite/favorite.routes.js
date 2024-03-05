import express from "express";

import { Favorite } from "$app/controllers/index.js";

const router = express.Router();

router.get("/", Favorite.ALL);
router.post("/", Favorite.CREATE);
router.get("/:id", Favorite.SINGLE);
router.delete("/:id", Favorite.DELETE);
router.patch("/:id", Favorite.UPDATE);

export default router;
