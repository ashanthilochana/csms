// Branch Managmenet Controller

import BranchService from "../services/branch.service.js";

let BranchController = {};


// Add a new branch
BranchController.addBranch = async (req, res) => {
  try {
    const { district, address, mapLocation, contactNumber } = req.body;

    let branchExist = await BranchService.checkBranchExistStatus(district);

    if (!branchExist) {
      await BranchService.addBranch(
        district,
        address,
        mapLocation,
        contactNumber
      );

      res.status(201).send({ message: "Branch added sucessfully" });
    } else {
      res.status(422).send({ error: "User already exist!" });
    }
  } catch (e) {
    console.error();
    throw e;
  }
};

// Get all branches
BranchController.getAllBranches = async (req, res) => {
  try {
    let data = await BranchService.getAllBranches();
    res.status(200).send(data);
  } catch (e) {
    res.status(500).send({ error: "Internal Server Error" });
  }
};

BranchController.getBranchIdByBranchManagerNIC = async (req, res) => {
  try {
    let { nic } = req.body;
    let data = await BranchService.getBranchIdByBranchManagerNIC(nic);
    if(data.length === 0)
    {
        res.status(404).send({error : "Branch Not Found"});
    }
    else
    {
        res.status(200).send(data[0]);
    }
  } catch (e) {
    res.status(500).send({ error: "Internal Server Error" });
  }
};

export default BranchController