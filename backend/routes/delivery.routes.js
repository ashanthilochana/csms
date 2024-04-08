import express from "express";
import { verifyAuthentication } from "../middleware/auth.middleware.js";
import DeliveryPersonController from "../controllers/delivery.controller.js"

const router = express.Router();

router.route("/api/add-delivery-person").post(
    verifyAuthentication,
    DeliveryPersonController.addDeliveryPerson
)

export {router};
