// ----------------------------------------------
// index.js
// ----------------------------------------------
// Exportings all configurations.
// It this file, we export all configs that created it directories.

import appConfig from "$app/config/app/app.config.js";
import apiConfig from "$app/config/api/api.config.js";
import botConfig from "$app/config/bot/bot.config.js";
import fileConfig from "$app/config/file/file.config.js";
import databaseConfig from "$app/config/database/database.config.js";

export { appConfig, fileConfig, databaseConfig, apiConfig, botConfig };
