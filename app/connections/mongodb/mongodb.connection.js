import mongoose from "mongoose";

import { databaseConfig, appConfig } from "$app/config/index.js";

const { mongodb } = databaseConfig;

const url = !appConfig.production
  ? `mongodb://${mongodb.host}:${mongodb.port}/${mongodb.collection}`
  : mongodb.atlas;

const connection = mongoose.createConnection(url, (error) => {
  if (error) {
    console.log(error);
  } else {
    console.log("Connected to mongodb.");
  }
});

export default connection;
