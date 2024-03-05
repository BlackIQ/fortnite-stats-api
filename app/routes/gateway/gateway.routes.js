import express from "express";

import { Gateway } from "$app/controllers/index.js";

const router = express.Router();

router.post("/", Gateway.HANDLE);

export default router;
