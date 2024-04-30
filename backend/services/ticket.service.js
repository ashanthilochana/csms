import { pool } from "../database/database.js";

let TicketService = {};

/////////////////////////////////////// Add a ticket ////////////////////////////////////////////////

TicketService.addTicket = async (
    nic,
    branchId,
    reasonId,
    message,
    responseStatusId
) => {
    let query = `
      INSERT INTO supportTicket(clientNic, branchId, reasonId, message, responseStatusId)
      VALUES(?, ?, ?, ?, ?)
      `;

    try {
        const [rows] = await pool.query(query, [
            nic,
            branchId,
            reasonId,
            message,
            responseStatusId
        ]);
    } catch (e) {
        console.error(e);
        throw e;
    }
};

/////////////////////////////////////// Get all ticket reasons ////////////////////////////////////////////////

TicketService.getAllReasons = async () => {
    let query = `
    SELECT * FROM supportticketreasons
    `;

    try {
        let [rows] = await pool.query(query);
        return rows;
    }
    catch (e) {
        console.error(e);
        throw e;
    }
};

////Get all tickets(Query is not complete)
TicketService.getAllTickets = async() => {
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


export default TicketService;