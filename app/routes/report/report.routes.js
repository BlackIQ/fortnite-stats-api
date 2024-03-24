import express from "express";

import { Report } from "$app/controllers/index.js";

const router = express.Router();

router.get("/basic", Report.BASIC);

export default router;
