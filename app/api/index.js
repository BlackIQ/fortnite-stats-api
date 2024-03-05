import { apiConfig } from "$app/config/index.js";

import axios from "axios";

const API = axios.create({
  baseURL: apiConfig.baseUrl,
  headers: {
    Authorization: apiConfig.authorization,
  },
});

export { API };
