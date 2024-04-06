import express from "express";
import ClientController from "../controllers/client.controller.js"; //Always add .js at the end
import { verifyAuthentication } from "../middleware/auth.middleware.js";

const router = express.Router();

router.route("/api/add-client").post(
    // verifyAuthentication,
    ClientController.addClient
)

router.route("/api/clients").get(
    // verifyAuthentication,
    ClientController.getAllClients
);

export {router};
