import React, { useState, useContext, useEffect } from "react";
import { useUserData } from "../../../context/UserContext";
import BranchManagerController from "../controllers/branch_manager.controller";

const BranchManagerContext = React.createContext();
const BranchManagerUpdateContext = React.createContext();

export function useBranchManagerData() {
  return useContext(BranchManagerContext);
}

export function useBranchManagerUpdate() {
  return useContext(BranchManagerUpdateContext);
}

export function BranchManagerProvider({ children }) {
  let [branchManagerData, setBranchManagerData] = useState({ branch_id: "" });
  let { nic, ...other } = useUserData();

  useEffect(() => {
    async function fetchBranchId() {
      console.log("Called");
      let data = await BranchManagerController.getBranchIdByBranchManagerNIC(
        nic
      );
      if (data.error) {
        alert(data.error);
      } else {
        updateBranchManagerData({ branch_id: data.branchId });
      }
    }
    fetchBranchId();
  }, []);

  function updateBranchManagerData(data) {
    setBranchManagerData(data);
  }

  return (
    <BranchManagerContext.Provider value={branchManagerData}>
      <BranchManagerUpdateContext.Provider value={updateBranchManagerData}>
        {children}
      </BranchManagerUpdateContext.Provider>
    </BranchManagerContext.Provider>
  );
}
