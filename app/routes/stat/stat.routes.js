import express from "express";

import { Stat } from "$app/controllers/index.js";

const router = express.Router();

router.get("/", Stat.FETCH);

export default router;
