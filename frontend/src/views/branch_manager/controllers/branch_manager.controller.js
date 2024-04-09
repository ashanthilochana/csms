import BranchManagerService from "../services/branch_manager.service.js";
import validator from "../../../validation/validation.js";

let BranchManagerController = {};

/////////////////////////////////////// Add a new client ////////////////////////////////////////////////

BranchManagerController.addClient = async (
  nic,
  email,
  name,
  address,
  contactNumber,
  branchId
) => {


  let reqBody = {
    nic,
    email,
    name,
    address,
    contactNumber,
    branchId,
  };

  try {
    let response = await BranchManagerService.addClient(reqBody);
    if (response.error) {
      return { error: response.error };
    }
    return { message: "Client Added Successfully" };
  } catch (e) {
    return { error: e };
  }
};

/////////////////////////////////////// Add a new order ////////////////////////////////////////////////

BranchManagerController.addOrder = async (
  weight,
  sendingDate,
  paymentDate,
  packageTypes,
  sendingBranch,
  receivingBranch,
  specialNotes,
  orderStatus,
  sender,
  receiver,
  contactNumber,
  address
) => {

  let reqBody = {
    weight,
    sendingDate,
    paymentDate,
    packageTypes,
    sendingBranch,
    receivingBranch,
    specialNotes,
    orderStatus,
    sender,
    receiver,
    contactNumber,
    address,
  };

  try {
    let response = await BranchManagerService.addOrder(reqBody);
    if (response.error) {
      return { error: response.error };
    }
    return { message: "Success Message" };
  } catch (e) {
    console.error(e);
    return { error: "Error" };
  }
};

/////////////////////////////////////// Get Branch ID by Branch Manager NIC ////////////////////////////////////////////////

BranchManagerController.getBranchIdByBranchManagerNIC = async (nic) => {
  try {
    let data = await BranchManagerService.getBranchIdByBranchManagerNIC({
      nic: nic,
    });
    if (data.error) {
      return { error: data.error };
    } else {
      console.log(data);
      return { branchId: data.branchID };
    }
  } catch (e) {
    return { error: e };
  }
};


/////////////////////////////////////// Get All Branches ////////////////////////////////////////////////

BranchManagerController.getAllBranches = async () => {
  try {
    let response = await BranchManagerService.getAllBranches();

    if (response.error) {
      return { error: response.error };
    }

    else {
      return { data: response.data };
    }
  } catch (e) {
    return { error: e };
  }
}

/////////////////////////////////////// Get All Package Types ////////////////////////////////////////////////

BranchManagerController.getAllPackageTypes = async () => {
  try {
    let response = await BranchManagerService.getAllPackageTypes();

    if (response.error) {
      return { error: response.error };
    }

    else {
      return { data: response.data };
    }
  } catch (e) {
    return { error: e };
  }
}

/////////////////////////////////////// Get All Package Types ////////////////////////////////////////////////

BranchManagerController.getAllOrderStatus = async () => {
  try {
    let response = await BranchManagerService.getAllOrderStatus();

    if (response.error) {
      return { error: response.error };
    }
    else {
      return { data: response.data };
    }
  } catch (e) {
    return { error: e };
  }
}

/////////////////////////////////////// Add a branch ////////////////////////////////////////////////

BranchManagerController.addBranch = async (district, address, mapLocation, contactNumber) => {

  let reqBody = {
    district,
    address,
    mapLocation,
    contactNumber
  };

  try {
    let response = await BranchManagerService.addBranch(reqBody);
    if (response.error) {
      return { error: response.error };
    }
    return { message: "Branch Added Successfully" };
  } catch (e) {
    return { error: e };
  }
};

/////////////////////////////////////// Get all routes ////////////////////////////////////////////////

BranchManagerController.getAllRoutes = async () => {
  try {
    let response = await BranchManagerService.getAllRoutes();

    if (response.error) {
      return { error: response.error };
    }
    else {
      return { data: response.data };
    }
  } catch (e) {
    return { error: e };
  }
}

/////////////////////////////////////// Add Transport Agent ////////////////////////////////////////////////

BranchManagerController.addTransportAgent = async (nic, email, name, vehicleNumber, routeId) => {

  let reqBody = {
    nic,
    email,
    name,
    vehicleNumber,
    routeId,
  };

  try {
    let response = await BranchManagerService.addTransportAgent(reqBody);
    if (response.error) {
      return { error: response.error };
    }
    return { message: "Transport Agent Added Successfully" };
  } catch (e) {
    return { error: e };
  }
};

/////////////////////////////////////// Add a delivery person ////////////////////////////////////////////////

BranchManagerController.addDeliveryPerson = async (nic, email, fullName, address, contactNumber, vehicleNumber, branchId) => {

  let reqBody = {
    nic,
    email,
    fullName,
    address,
    contactNumber,
    vehicleNumber,
    branchId
  };

  try {
    let response = await BranchManagerService.addDeliveryPerson(reqBody);
    if (response.error) {
      return { error: response.error };
    }
    return { message: "Delivery Person Added Successfully" };
  } catch (e) {
    return { error: e };
  }
};


/////////////////////////////////////// Get all orders by order ID ////////////////////////////////////////////////

BranchManagerController.getAllOrdersByBranchId = async (branchId) => {
  try {
    let response = await BranchManagerService.getAllOrdersByBranchId({ branchId: branchId })

    if (response.error) {
      return { error: response.error };
    } else {
      return response;
    }
  } catch (e) {
    return { error: e };
  }
}

/////////////////////////////////////// Add a route ////////////////////////////////////////////////

BranchManagerController.addRoute = async (routeName, fBranchId, sBranchId) => {

  let reqBody = {
    routeName,
    fBranchId,
    sBranchId
  };

  try {
    let response = await BranchManagerService.addRoute(reqBody);
    if (response.error) {
      return { error: response.error };
    }
    return { message: "Route Added Successfully" };
  } catch (e) {
    return { error: e };
  }
};

/////////////////////////////////////// Get all ticket reasons ////////////////////////////////////////////////

BranchManagerController.getAllReasons = async () => {
  try {
    let response = await BranchManagerService.getAllReasons();

    if (response.error) {
      return { error: response.error };
    }
    else {
      return { data: response.data };
    }
  } catch (e) {
    return { error: e };
  }
}

/////////////////////////////////////// Add a ticket ////////////////////////////////////////////////

BranchManagerController.addTicket = async (
  nic,
  branchId,
  reasonId,
  message,
  responseStatusId) => {

  let reqBody = {
    nic,
    branchId,
    reasonId,
    message,
    responseStatusId
  };

  try {
    let response = await BranchManagerService.addTicket(reqBody);
    if (response.error) {
      return { error: response.error };
    }
    return { message: "Ticket Added Successfully" };
  } catch (e) {
    return { error: e };
  }
};

/////////////////////////////////////// Add a ticket ////////////////////////////////////////////////

BranchManagerController.addFeedback = async (
  nic,
  rating,
  message
) => {

  let reqBody = {
    nic,
    rating,
    message
  };

  try {
    let response = await BranchManagerService.addFeedback(reqBody);
    if (response.error) {
      return { error: response.error };
    }
    return { message: "Feedback Added Successfully" };
  } catch (e) {
    return { error: e };
  }
};


BranchManagerController.getAllClientNICs = async () => {
  try {
    let response = await BranchManagerService.getAllClientNICs();

    if (response.error) {
      return { error: response.error };
    } else {
      let modifiedData = response.data.map((nic) => {
        return { value: nic, label: nic };
      });
      return { data: modifiedData };
    }
  } catch (e) {
    return { error: e };
  }
};

BranchManagerController.getCourierFee = async (
  packageWeight,
  packageTypeId
) => {
  try {
    let response = await BranchManagerService.getCourierFee({
      packageWeight,
      packageTypeId,
    });
    if (response.error) {
      return { error: response.error };
    } else {
      return response;
    }
  } catch (e) {
    return { error: e };
  }
};

export default BranchManagerController;
