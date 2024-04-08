import express from "express";
import { verifyAuthentication } from "../middleware/auth.middleware.js";
import RouteController from "../controllers/route.controller.js";

const router = express.Router();

router.route("/api/routes").get(
    verifyAuthentication,
    RouteController.getAllRoutes
)

export {router};
