// ----------------------------------------------
// database.config.js
// ----------------------------------------------
// Databases configurations.
// Here we export database data, like mongodb, redis and etc.

import env from "$app/env/index.js";

export default {
  mongodb: {
    host: env.MONGODB_HOST,
    port: env.MONGODB_PORT,
    username: env.MONGODB_USERNAME,
    password: env.MONGODB_PASSWORD,
    collection: env.MONGODB_COLLECTION,
  },
};
