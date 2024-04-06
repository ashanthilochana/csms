// Branch Managmenet Controller

import BranchService from "../services/branch.service";
import ClientController from "./client.controller";

let BranchController = {};

// Add a new branch
BranchController.addBranch = async (req, res) => {

    try{
        const {district, address, mapLocation, contactNumber} = req.body;

        let branchExist = await BranchService.checkBranchExistStatus(district);

        if(!branchExist){
            await BranchService.addBranch(district, address, mapLocation, contactNumber);

            res.status(201).send({ message: "Branch added sucessfully" });
        }
        else{
            res.status(422).send({ error: "User already exist!" });
        }
    }
    catch(e) {
        console.error();
        throw e;
    }

};

// Get all branches
BranchController.getAllBranches = async (req, res) => {
    try{
        let data = await BranchService.getAllBranches();
        res.status(200).send(data);
    }
    catch(e){
        res.status(500).send({ error: "Internal Server Error"})
    }
};