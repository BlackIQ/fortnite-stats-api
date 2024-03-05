// ----------------------------------------------
// index.js
// ----------------------------------------------
// Exporting all databse connections.
// Like configs, create them in directories and export them here.

import Redis from "$app/connections/redis/redis.connection.js";
import mongodb from "$app/connections/mongodb/mongodb.connection.js";

export { Redis, mongodb };
