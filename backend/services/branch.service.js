// Branch Management Database Service

import {pool} from "../database/database.js";
import UserController from "../controllers/user.controller.js";

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
    INSERT INTO branch(district, address, mapLocation, contactNumber)
    VALUE(?, ?, ?, ?)
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

// Update a branch

BranchService.updateBranch = async (branchId, district, address, mapLocation, contactNumber) => {
    let query = `
    UPDATE branch
    SET district = ?, address = ?, mapLocation = ?, contactNumber = ?
    WHERE branchID = ?
    `;

    try{
        let [rows] = await pool.query(query, [district, address, mapLocation, contactNumber, branchId]);
        return rows;
    }
    catch(e) {
        console.error(e);
        throw e;
    }
}

// delete branch

BranchService.deleteBranch = async (branchId) => {
    let query = `
    DELETE FROM branch
    WHERE branchID = ?
    `;

    try{
        let [rows] = await pool.query(query, [branchId]);
        return rows;
    }
    catch(e) {
        console.error(e);
        throw e;
    }
}

// check branch manager exist status

BranchService.checkBranchManagerExistStatus = async (nic) => {
    try{
        let query = `
        SELECT * FROM branchmanager
        WHERE nic = ?
        LIMIT 1
        `;

        const [rows] = await pool.query(query, [nic]);

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

// Add a new branch manager

BranchService.addBranchManager = async (nic, email, fullName, branchId) => {
    let query = `
    INSERT INTO branchmanager(nic, email, fullName, branchID)
    VALUE(?, ?, ?, ?)
    `;

    try{
        let [rows] = await pool.query(query, [nic, email, fullName, branchId]);

        await UserController.signUpUser(nic, nic, 2)
        
        return rows;
    }
    catch(e) {
        console.error(e);
        throw e;
    }
}

export default BranchService;
