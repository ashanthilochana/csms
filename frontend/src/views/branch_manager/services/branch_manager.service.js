import AxiosController from "../../../controllers/axios.controller.js";

let BranchManagerService = {};

/////////////////////////////////////// Add a client ////////////////////////////////////////////////

BranchManagerService.addClient = async (reqBody) => {
  try {
    let response = await AxiosController.instance.post(
      "/api/add-client",
      reqBody
    ); // Call backend contorller and pass data which received to front end controller
    if (response.data.error) {
      return { error: response.data.error };
    } else {
      //Different status codes
      //201
      if (response.status === 201) {
        return { message: "Client Added Successfully" };
      }
      //400
      if (response.status === 400) {
        return { error: "Bad Request" };
      }
      //401
      if (response.status === 401) {
        return { error: "Unauthorized" };
      }
      //422
      if (response.status === 422) {
        return { error: "Client Already Exists" };
      }
    }
  } catch (e) {
    console.error(e);
    throw e;
  }
};

/////////////////////////////////////// Add a new order ////////////////////////////////////////////////

BranchManagerService.addOrder = async (reqBody) => {
  try {
    let response = await AxiosController.instance.post(
      "/api/add-order",
      reqBody
    ); // Call backend contorller and pass data which received to front end controller
    if (response.data.error) {
      return { error: response.data.error };
    } else {
      //Different status codes
      //201
      if (response.status) {
        return { message: "Order Added Successfully" };
      }
      //400
      if (response.status) {
        return { error: "Bad Request" };
      }
      //401
      if (response.status) {
        return { error: "Unauthorized" };
      }
      //422
      if (response.status) {
        return { error: "Duplicate Entry" };
      }
    }
  } catch (e) {
    console.error(e);
    throw e;
  }
};

/////////////////////////////////////// Get branch ID by branch manger NIC ////////////////////////////////////////////////

BranchManagerService.getBranchIdByBranchManagerNIC = async (reqBody) => {
  try {
    let response = await AxiosController.instance.post(
      "/api/branch-id-by-nic",
      reqBody
    );
    if (response.error) {
      return { error: response.error };
    } else {
      return response.data;
    }
  } catch (e) {
    console.error(e);
    throw e;
  }
};

/////////////////////////////////////// Get all branches ////////////////////////////////////////////////

BranchManagerService.getAllBranches = async () => {
  try {
    let response = await AxiosController.instance.get("/api/branches");
    if (response.error) {
      return { error: response.error };
    } else if (response.data.error) {
      return { error: response.data.error };
    } else {
      return { data: response.data };
    }
  } catch (e) {
    console.error(e);
    throw e;
  }
};

/////////////////////////////////////// Get all package typess ////////////////////////////////////////////////

BranchManagerService.getAllPackageTypes = async () => {
  try {
    let response = await AxiosController.instance.get("/api/packagetypes");
    if (response.error) {
      return { error: response.error };
    } else if (response.data.error) {
      return { error: response.data.error };
    } else {
      return { data: response.data };
    }
  } catch (e) {
    console.error(e);
    throw e;
  }
};

/////////////////////////////////////// Get all order status ////////////////////////////////////////////////

BranchManagerService.getAllOrderStatus = async () => {
  try {
    let response = await AxiosController.instance.get("/api/orderstatus");
    if (response.error) {
      return { error: response.error };
    } else if (response.data.error) {
      return { error: response.data.error };
    } else {
      return { data: response.data };
    }
  } catch (e) {
    console.error(e);
    throw e;
  }
};

/////////////////////////////////////// Add a branch ////////////////////////////////////////////////
BranchManagerService.addBranch = async (reqBody) => {
  try {
    let response = await AxiosController.instance.post("/api/add-branch", reqBody); // Call backend contorller and pass data which received to front end controller
    
    if (response.data.error) {
      return { error: response.data.error };
    } else {
      //Different status codes
      //201
      if (response.status === 201) {
        return { message: "Branch Added Successfully" };
      }
      //400
      if (response.status === 400) {
        return { error: "Bad Request" };
      }
      //401
      if (response.status === 401) {
        return { error: "Unauthorized" };
      }
      //422
      if (response.status === 422) {
        return { error: "Client Already Exists" };
      }
    }
  } catch (e) {
    console.error(e);
    throw e;
  }
};

export default BranchManagerService;
