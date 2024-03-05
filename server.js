import cluster from "cluster";
import chalk from "chalk";
import os from "os";

import { appConfig } from "$app/config/index.js";
import app from "$app";

const numCPUs = os.cpus().length;

console.log(`----- Number of cors: ${numCPUs} -----`);

if (cluster.isMaster) {
  console.log(`Master ${process.pid} is running`);

  for (let i = 0; i < numCPUs; i++) {
    cluster.fork();
  }

  cluster.on("exit", (worker, code, signal) => {
    console.log(`Worker ${worker.process.pid} died`);
  });
} else {
  app.listen(appConfig.port, () =>
    console.log(chalk.cyan(`App is running on ${appConfig.port}`))
  );
}

cluster.on("fork", (worker) => {
  console.log(`Worker ${worker.process.pid} has been forked`);
});

cluster.on("online", (worker) => {
  console.log(`Worker ${worker.process.pid} is online`);
});

cluster.on("disconnect", (worker) => {
  console.log(`Worker ${worker.process.pid} has disconnected`);
});

cluster.on("exit", (worker, code, signal) => {
  console.log(
    `Worker ${worker.process.pid} exited with code ${code} and signal ${signal}`
  );
});
