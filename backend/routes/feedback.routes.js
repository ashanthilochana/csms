import express from "express";
import { verifyAuthentication } from "../middleware/auth.middleware.js";
import FeedbackController from "../controllers/feedback.controller.js";

const router = express.Router();

router.route("/api/add-feedback").post(
    verifyAuthentication,
    FeedbackController.addFeedback
)

export {router};
