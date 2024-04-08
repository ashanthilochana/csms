// Client Management Database Service [COMPLETED] - Ashan

import { pool } from "../database/database.js";

let ClientService = {};

// Client already existing validation
ClientService.checkUserExistStatus = async (nic) => {
    let query = `
        SELECT * FROM customer
        WHERE customer_nic = ?
        LIMIT 1
        `;

    try {
        const [rows] = await pool.query(query, [nic]);

        if (rows.length !== 0) {
            return true;
        }
        else {
            return false;
        }
    }
    catch (e) {
        console.error(e);
        throw e;
    }
};

// Add a new client
ClientService.addClient = async (nic, email, fristName, lastName, address, contactNumber, branchId, userNic, password, roleId) => {
    let queryForClientTable = `
    INSERT INTO customer
    VALUES(?, ?, ?, ?, ?, ?, ?)
    `;

    let queryForCredentialTable = `
    INSERT INTO usercredentials
    VALUES (?, ?, ?)
    `;

    try {
        const [rows] = await pool.query(queryForClientTable, [nic, email, fristName, lastName, address, contactNumber, branchId]);
        await pool.query(queryForCredentialTable, [userNic, password, roleId]);
    }
    catch (e) {
        console.error(e);
        throw e;
    }
};

// Get all clients
ClientService.getAllClients = async() => {
    let query = `
    SELECT c.nic, c.fullName, c.email, c.address, c.contactNumber, b.district
    FROM client c, branch b
    WHERE b.branchId = c.branchId
    `;

    try{
        cost [rows] = await pool.query(query);
        return rows;
    } catch(e) {
        console.error(e);
        throw e;
    }
};

// Get all client belong to the branch by branchId
ClientService.getAllClients = async(branchId) => {
    let query = `
    SELECT c.nic, c.fullName, c.email, c.address, c.contactNumber, b.district
    FROM client c, branch b
    WHERE b.branchId = c.branchId AND b.branchId = ?
    `;

    try{
        cost [rows] = await pool.query(query, [branchId]);
        return rows;
    } catch(e) {
        console.error(e);
        throw e;
    }
};

// Delete a client
ClientService.deleteCustomer = async (nic) => {
    let queryDeleteClientFeedbacks = `
    DELETE FROM clientfeedback WHERE clientNic = ?
    `;

    let queryDeleteSupportTickets = `
    DELETE FROM supportticket WHERE clientNic = ?
    `;

    let queryDeleteReturnedOrders = `
    DELETE FROM returnedorder WHERE orderId = (SELECT orderId FROM orders WHERE senderNic = ?)
    `;

    let queryDeleteOrderDeliveries = `
    DELETE FROM orderdelivery WHERE orderId = (SELECT orderId FROM orders WHERE senderNic = ?)
    `;
    
    let queryDeleteOrders = `
    DELETE FROM orders WHERE senderNic = ?
    `;

    let query = `
    DELETE FROM client WHERE nic = ?
    `;

    try {
        await pool.query(queryDeleteClientFeedbacks, [nic]);
        await pool.query(queryDeleteSupportTickets, [nic]);
        await pool.query(queryDeleteReturnedOrders, [nic]);
        await pool.query(queryDeleteOrderDeliveries, [nic]);
        await pool.query(queryDeleteOrders, [nic]);
        await pool.query(query, [nic]);
    }
    catch (e) {
        console.error(e);
        throw e;
    }
};

export default ClientService;