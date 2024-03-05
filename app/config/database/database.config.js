// ----------------------------------------------
// database.config.js
// ----------------------------------------------
// Databases configurations.
// Here we export database data, like mongodb, redis and etc.

import env from "$app/env/index.js";

export default {
  mongodb: {
    atlas: env.MONGO_CLOUD,
    host: env.MONGODB_HOST,
    port: env.MONGODB_PORT,
    collection: env.MONGODB_COLLECTION,
  },
};
