// Client Management Database Service


import { pool } from "../database/database.js";

let ClientService = {};

// Client already existing validation
ClientService.checkUserExistStatus = async (nic) => {
    try {
        let query = `
        SELECT * FROM customer
        WHERE customer_nic = ?
        LIMIT 1
        `;

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
ClientService.addClient = async (nic, email, fristName, lastName, address, contactNumber, branchId) => {
    let query = `
    INSERT INTO customer
    VALUES(?, ?, ?, ?, ?, ?, ?)
    `;

    try {
        const [rows] = await pool.query(query, [nic, email, fristName, lastName, address, contactNumber, branchId]);
    }
    catch (e) {
        console.error(e);
        throw e;
    }
};

// Get all clients
ClientService.getAllClients = async () => {
    let query = `
    SELECT * FROM customer`;
    try {
        let [rows] = await pool.query(query);
        return rows;
    }
    catch (e) {
        console.error(e);
        throw e;
    }
};

// Delete a client
ClientService.deleteCustomer = async (nic) => {
    let query = `DELETE * FROM customer
    WHERE customer_nic = ?
    `;

    try {
        await pool.query(query, [nic]);
    }
    catch (e) {
        console.error(e);
        throw e;
    }
};

export default ClientService;