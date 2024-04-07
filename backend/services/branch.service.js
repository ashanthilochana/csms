// Branch Management Database Service

import {pool} from "../database/database.js";
import ClientService from "./client.service.js";

let BranchService = {}

// Branch already existing validation
BranchService.checkBranchExistStatus = async (district) => {
    try{
        let query = `
        SELECT * FROM branch
        WHERE district = ?
        LIMIT 1
        `;

        const [rows] = await pool.query(query, [district]);

        if(rows.length !== 0){
            return true;
        } else {
            return false;
        }
    }
    catch (e) {
        console.error(e);
        throw e;
    }
}

// Add a new branch
BranchService.addBranch = async (district, address, mapLocation, contactNumber) => {
    let query = `
    INSERT INTO branch(district, address, contact_number)
    VALUE(?, ?, ?)
    `;

    try{
        const [rows] = await pool.query(query, [district, address, mapLocation, contactNumber]);
    }
    catch(e) {
        console.error(e);
        throw e;
    }
};

// Show all branches
BranchService.getAllBranches = async () => {
    let query = `
    SELECT * FROM branch
    `;

    try{
        let [rows] = await pool.query(query);
        return rows;
    }
    catch (e) {
        console.error(e);
        throw e;
    }
};


// Delete a branch
BranchService.deleteBranch = async (district) => {
    let query = `
    DELETE * FROM customer
    WHERE district = ?
    `;

    try{
        await pool.query(query, [district]);
    }
    catch(e) {
        console.error(e);
        throw e;
    }
}


BranchService.getBranchIdByBranchManagerNIC = async (nic) =>{
    let query = `
    SELECT branchID FROM branchmanager
    WHERE nic = ?`;
    try{
        let [rows] = await pool.query(query, [nic]);
        return rows;
    }
    catch(e) {
        console.error(e);
        throw e;
    }
}

export default BranchService;
