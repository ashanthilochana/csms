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

TransportAgentService.getAllTransportAgents = async() => {
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

export default TransportAgentService;