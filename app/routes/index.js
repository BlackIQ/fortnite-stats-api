import express from "express";

import Permission from "$app/routes/permission/permission.routes.js";
import Favorites from "$app/routes/favorite/favorite.routes.js";
import Gateway from "$app/routes/gateway/gateway.routes.js";
import Report from "$app/routes/report/report.routes.js";
import Stat from "$app/routes/stat/stat.routes.js";
import Role from "$app/routes/role/role.routes.js";
import User from "$app/routes/user/user.routes.js";

// import { jwt } from "$app/middlewares/index.js";

const router = express.Router();

router.use("/permissions", Permission);
router.use("/favorites", Favorites);
router.use("/gateway", Gateway);
router.use("/reports", Report)
router.use("/roles", Role);
router.use("/stats", Stat);
router.use("/users", User);

export default router;
