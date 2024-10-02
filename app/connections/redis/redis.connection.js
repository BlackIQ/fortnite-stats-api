import redis from "ioredis";

import { databaseConfig } from "$app/config/index.js";

const { redis: redisConfig } = databaseConfig;

const client = new redis({
  host: redisConfig.host,
  port: redisConfig.port,
  password: redisConfig.password,
});

export default client;
