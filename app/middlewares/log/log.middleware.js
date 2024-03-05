import { fileConfig } from "$app/config/index.js";

import chalk from "chalk";
import fs from "fs";

const withColor = (method, content) => {
  switch (method) {
    case "POST":
      console.log(chalk.yellow(content));
      break;
    case "GET":
      console.log(chalk.green(content));
      break;
    case "DELETE":
      console.log(chalk.red(content));
      break;
    case "PATCH":
      console.log(chalk.blue(content));
      break;
  }
};

const log = async (req, res, next) => {
  const { method, path } = req;

  const when = new Date().toLocaleString("Us-fa");
  const content = `${when} | ${method} ${path}`;

  const filePath = fileConfig.filePath;
  const fileName = fileConfig.fileName;
  const fileContent = `${content}\n`;

  withColor(method, content);

  try {
    fs.appendFileSync(filePath + fileName, fileContent);
  } catch (error) {}

  next();
};

export default log;
