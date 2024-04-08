import express from "express";
import BranchController from "../controllers/branch.controller.js"; //Always add .js at the end
import { verifyAuthentication } from "../middleware/auth.middleware.js";

const router = express.Router();

router
  .route("/api/branch-id-by-nic")
  .post(verifyAuthentication, BranchController.getBranchIdByBranchManagerNIC);

router
  .route("/api/branches")
  .get(verifyAuthentication, BranchController.getAllBranches);

export { router };
