import express from "express";
import OrderController from "../controllers/order.controller.js"; //Always add .js at the end
import { verifyAuthentication } from "../middleware/auth.middleware.js";

const router = express.Router();

router.route("/api/add-order").post(
    // verifyAuthentication,
    OrderController.addOrder
);

router.route("/api/packagetypes").get(
    verifyAuthentication,
    OrderController.getAllPackageTypes
);

router.route("/api/orderstatus").get(
    verifyAuthentication,
    OrderController.getAllOrderStatus
);

router.route("/api/orders-by-branch").post(
    verifyAuthentication,
    OrderController.getAllOrderByBranchId
);

router
  .route("/api/courier-fee")
  .post(verifyAuthentication, OrderController.getCourierFee);

export {router};
