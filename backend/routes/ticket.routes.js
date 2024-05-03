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

router.route("/api/tickets").get(
    //verifyAuthentication, 
    TicketController.getAllTickets
);

// route to update a ticket by ticket id
router.route("/api/update-ticket/:id").put(
    verifyAuthentication,
    TicketController.updateTicket
)

export {router};
