import express from "express";
import { dashboardShow } from "./src/controllers/DashboardController.js";
import { DrawStore } from "./src/controllers/DrawController.js";
import { GroupIndex, GroupStore } from "./src/controllers/GroupController.js";
import { userStore } from "./src/controllers/UserController.js";

export const routes = express.Router()

routes.post("/login", userStore)

routes.get("/dashboard", dashboardShow)

routes.post("/groups", GroupStore)

routes.get("/group", GroupIndex)

routes.post("/draw", DrawStore)


