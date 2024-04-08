import express from "express";
import { verifyAuthentication } from "../middleware/auth.middleware.js";
import TicketController from "../controllers/ticket.controller.js";

const router = express.Router();

router.route("/api/add-ticket").post(
    verifyAuthentication,
    TicketController.addTicket
)

router.route("/api/reasons").get(
    verifyAuthentication,
    TicketController.getAllReasons
)


export {router};
