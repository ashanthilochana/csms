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

/////////////////////////////////////// Get all routes ////////////////////////////////////////////////

BranchManagerService.getAllRoutes = async () => {
  try {
    let response = await AxiosController.instance.get("/api/routes");
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

/////////////////////////////////////// Add a transport agent ////////////////////////////////////////////////


BranchManagerService.addTransportAgent = async (reqBody) => {
  try {
    let response = await AxiosController.instance.post(
      "/api/add-transport-agent",
      reqBody
    ); // Call backend contorller and pass data which received to front end controller
    if (response.data.error) {
      return { error: response.data.error };
    } else {
      //Different status codes
      //201
      if (response.status === 201) {
        return { message: "Transport Agent Added Successfully" };
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
        return { error: "Transport Agent Already Exists" };
      }
    }
  } catch (e) {
    console.error(e);
    throw e;
  }
};

/////////////////////////////////////// Add a delivery person ////////////////////////////////////////////////

BranchManagerService.addDeliveryPerson = async (reqBody) => {
  try {
    let response = await AxiosController.instance.post(
      "/api/add-delivery-person",
      reqBody
    ); // Call backend contorller and pass data which received to front end controller
    if (response.data.error) {
      return { error: response.data.error };
    } else {
      //Different status codes
      //201
      if (response.status === 201) {
        return { message: "Delivery Person Added Successfully" };
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
        return { error: "Transport Agent Already Exists" };
      }
    }
  } catch (e) {
    console.error(e);
    throw e;
  }
};

BranchManagerService.getDeliveryPersonById = async (id) => {
  try {
    let response = await AxiosController.instance.get(`/api/delivery-person/${id}`);
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

BranchManagerService.getAllDeliveryPersons = async () => {
  try {
    let response = await AxiosController.instance.get("/api/get-all-delivery-persons");
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


BranchManagerService.updateDeliveryPerson = async (id, reqBody) => {
  try {
    let response = await AxiosController.instance.put(`/api/update-delivery-person/${id}`, reqBody);
    if (response.data.error) {
      return { error: response.data.error };
    } else {
      // Check for different status codes if needed
      return { message: "Delivery Person Updated Successfully" };
    }
  } catch (e) {
    console.error(e);
    throw e;
  }
};

BranchManagerService.deleteDeliveryPerson = async (id) => {
  try {
    let response = await AxiosController.instance.delete(`/api/delete-delivery-person/${id}`);
    if (response.data.error) {
      return { error: response.data.error };
    } else {
      // Check for different status codes if needed
      return { message: "Delivery Person Deleted Successfully" };
    }
  } catch (e) {
    console.error(e);
    throw e;
  }
};


/////////////////////////////////////// Get all orders by branch id ////////////////////////////////////////////////


BranchManagerService.getAllOrdersByBranchId = async (reqBody) => {
  try {
    let response = await AxiosController.instance.post("/api/orders-by-branch", reqBody);
    if (response.error) {
      return { error: response.error };
    } else if (response.data.error) {
      return { error: response.data.error };
    } else {
      return response.data;
    }
  } catch (e) {
    console.error(e);
    throw e;
  }
}

/////////////////////////////////////// Add a route ////////////////////////////////////////////////
BranchManagerService.addRoute = async (reqBody) => {
  try {
    let response = await AxiosController.instance.post(
      "/api/add-route",
      reqBody
    ); // Call backend contorller and pass data which received to front end controller
    if (response.data.error) {
      return { error: response.data.error };
    } else {
      //Different status codes
      //201
      if (response.status === 201) {
        return { message: "Route Added Successfully" };
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
        return { error: "Route Already Exists" };
      }
    }
  } catch (e) {
    console.error(e);
    throw e;
  }
};

/////////////////////////////////////// Get all ticket reasons ////////////////////////////////////////////////

BranchManagerService.getAllReasons = async () => {
  try {
    let response = await AxiosController.instance.get("/api/reasons");
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

/////////////////////////////////////// Add a ticket ////////////////////////////////////////////////

BranchManagerService.addTicket = async (reqBody) => {
  try {
    let response = await AxiosController.instance.post(
      "/api/add-ticket",
      reqBody
    ); // Call backend contorller and pass data which received to front end controller
    if (response.data.error) {
      return { error: response.data.error };
    } else {
      //Different status codes
      //201
      if (response.status === 201) {
        return { message: "Ticket Added Successfully" };
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
        return { error: "Ticket Already Exists" };
      }
    }
  } catch (e) {
    console.error(e);
    throw e;
  }
};

/////////////////////////////////////// Add a feedback ////////////////////////////////////////////////

BranchManagerService.addFeedback = async (reqBody) => {
  try {
    let response = await AxiosController.instance.post(
      "/api/add-feedback",
      reqBody
    ); // Call backend contorller and pass data which received to front end controller
    if (response.data.error) {
      return { error: response.data.error };
    } else {
      //Different status codes
      //201
      if (response.status === 201) {
        return { message: "Feedback Added Successfully" };
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
        return { error: "Feedback Already Exists" };
      }
    }
  } catch (e) {
    console.error(e);
    throw e;
  }
};

BranchManagerService.getAllClientNICs = async () => {
  try {
    let response = await AxiosController.instance.get("/api/clients/nic");
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

BranchManagerService.getCourierFee = async (reqBody) => {
  try{
      let response = await AxiosController.instance.post("/api/courier-fee", reqBody);
      if(response.data.error)
      {
        return {error : response.data.error};
      }
      else
      {
        return {fee : response.data.fee};
      }
  }
  catch(e){
    console.error(e);
    throw e;
  }
}

export default BranchManagerService;
