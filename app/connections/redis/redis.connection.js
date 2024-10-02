import redis from "ioredis";

import { databaseConfig } from "$app/config/index.js";

const { redis } = databaseConfig;

const client = new redis({
  host: redis.host,
  port: redis.port,
  password: redis.password,
});

export default client;
