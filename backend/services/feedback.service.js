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


//Get all feedback(Query is not complete)

FeedbackService.getAllFeedback = async() => {
    let query = `
    SELECT t.nic, t.email, t.fullName, t.vehicleNumber, r.routeName 
    FROM transportAgent t, route r
    WHERE t.routeId = r.routeId
    `;

    try{
        const [rows] = await pool.query(query);
        return rows;
    } catch(e) {
        console.error(e);
        throw e;
    }
};

export default FeedbackService;