// Client Management Database Service [COMPLETED] - Ashan

import { pool } from "../database/database.js";
import UserController from "../controllers/user.controller.js";

let TransportAgentService = {};

// Client already existing validation
TransportAgentService.checkUserExistStatus = async (nic) => {
    let query = `
        SELECT * FROM transportagent
        WHERE nic = ?
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
TransportAgentService.addTransportAgent = async (
    nic,
    email,
    name,
    vehicleNumber,
    routeId,
) => {
    let query = `
      INSERT INTO transportagent
      VALUES(?, ?, ?, ?, ?)
      `;

    try {
        const [rows] = await pool.query(query, [
            nic,
            email,
            name,
            vehicleNumber,
            routeId,
        ]);

        await UserController.signUpUser(nic, nic, 5); // Role id 5 = transport agent

    } catch (e) {
        console.error(e);
        throw e;
    }
};


//Get all transport agents

TransportAgentService.getAllTransportAgents = async () => {
    let query = `
    SELECT t.nic, t.email, t.fullName, t.vehicleNumber, t.routeId, r.routeName 
    FROM transportAgent t, route r
    WHERE t.routeId = r.routeId
    `;

    try {
        const [rows] = await pool.query(query);
        return rows;
    } catch (e) {
        console.error(e);
        throw e;
    }
};

// Update transport agent

TransportAgentService.updateTransportAgent = async (nic, email, fullName, vehicleNumber, routeId) => {

    let query = `
    UPDATE transportAgent
    SET email = ?, fullName = ?, vehicleNumber = ?, routeId = ?
    WHERE nic = ?
    `;

    try {
        await pool.query(query, [email, fullName, vehicleNumber, routeId, nic]);
    }
    catch (e) {
        console.error(e);
        throw e;
    }
}

// Delete transport agent

TransportAgentService.deleteTransportAgent = async (nic) => {
    let query = `
    DELETE FROM transportAgent
    WHERE nic = ?
    `;

    try {
        await pool.query(query, [nic]);
    }
    catch (e) {
        console.error(e);
        throw e;
    }
}

// Get orders by transport agent nic

TransportAgentService.getOrdersByTransportAgentNic = async (nic) => {
    let query = `
    SELECT DISTINCT o.orderId, o.registeredDate, b1.district AS sendingBranch, b2.district AS receivingBranch, b1.contactNumber, b2.contactNumber
    FROM orders o
    JOIN route r ON (o.sendingBranchId = r.firstBranchId OR o.sendingBranchId = r.secondBranchId) AND (o.receivingBranchId = r.secondBranchId)
    JOIN transportagent t ON t.routeId = r.routeId
    JOIN branch b1 ON b1.branchId = o.sendingBranchId
    JOIN branch b2 ON b2.branchId = o.receivingBranchId
    WHERE t.nic = ?;
    `;

    try {
        const [rows] = await pool.query(query, [nic]);
        return rows;
    }
    catch (e) {
        console.error(e);
        throw e;
    }
}

export default TransportAgentService;