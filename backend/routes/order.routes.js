import express from "express";
import OrderController from "../controllers/order.controller.js"; //Always add .js at the end
import { verifyAuthentication } from "../middleware/auth.middleware.js";

const router = express.Router();

router.route("/api/packagetypes").get(
    verifyAuthentication,
    OrderController.getAllPackageTypes
)

export {router};
