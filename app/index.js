import express from "express";
import cors from "cors";

import Routes from "$app/routes/index.js";
import { log } from "$app/middlewares/index.js";

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

app.set("json spaces", 2);

app.use("/api", log, Routes);
app.use("*", (req, res) =>
  res.status(404).send({
    url: req.originalUrl,
    method: req.method,
    message: "Page not found",
  })
);

export default app;
