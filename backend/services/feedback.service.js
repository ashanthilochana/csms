import { pool } from "../database/database.js";

let FeedbackService = {};

/////////////////////////////////////// Add a feedback ////////////////////////////////////////////////

FeedbackService.addFeedback = async (
    nic,
    rating,
    message
) => {
    let query = `
    INSERT INTO clientFeedback (clientNic, rating, message)
    VALUE (?, ?, ?)
      `;

    try {
        const [rows] = await pool.query(query, [
            nic,
            rating,
            message
        ]);
    } catch (e) {
        console.error(e);
        throw e;
    }
};

export default FeedbackService;