// ----------------------------------------------
// api.config.js
// ----------------------------------------------
// API configurations.
// Here we export application data, like environment, is it published, port and stuff.

import env from "$app/env/index.js";

export default {
  baseUrl: env.API_URL,
  authorization: env.API_AUTHORIZATION,
};
