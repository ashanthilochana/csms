import express from "express";
import { verifyAuthentication } from "../middleware/auth.middleware.js";
import TransportAgentController from "../controllers/transport.controller.js";

const router = express.Router();

router.route("/api/add-transport-agent").post(
    verifyAuthentication,
    TransportAgentController.addTransportAgent
)

export {router};
