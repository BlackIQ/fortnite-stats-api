import mongoose from "mongoose";

import { databaseConfig } from "$app/config/index.js";

const { mongodb } = databaseConfig;

const url = `mongodb://${mongodb.username}:${mongodb.password}@${mongodb.host}:${mongodb.port}/${mongodb.collection}?authSource=admin`;

const connection = mongoose.createConnection(url, (error) => {
  if (error) {
    console.log(error);
  } else {
    console.log("Connected to mongodb.");
  }
});

export default connection;
