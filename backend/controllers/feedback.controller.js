import FeedbackService from "../services/feedback.service.js";

let FeedbackController = {};

/////////////////////////////////////// Add a route ////////////////////////////////////////////////

FeedbackController.addFeedback = async (req, res) => {

    try {
        const {
            nic,
            rating,
            message
        } = req.body;


        await FeedbackService.addFeedback(
            nic,
            rating,
            message
        );

        res.status(201).send({ message: "Feedback added successfully" });

    } catch (e) {
        console.error(e);
        res.status(500).send({ error: "Internal Server Error" });
    }
};

export default FeedbackController;