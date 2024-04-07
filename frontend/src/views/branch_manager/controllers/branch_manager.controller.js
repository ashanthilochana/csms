import BranchManagerService from "../services/branch_manager.service.js";

let BranchManagerController = {};

// Add a new client
BranchManagerController.addClient = async (
  nic,
  email,
  name,
  address,
  contactNumber,
  branchId
) => {
  // Front end form validation
  if (nic === "") {
    return { error: "NIC cannot be empty!" };
  } else if (!email.includes("@")) {
    return { error: "Email should include '@'mark always" };
  } else if (name === "") {
    return { error: "Name cannot be empty!" };
  } else if (address === "") {
    return { error: "Address cannot be empty!" };
  } else if (contactNumber === "") {
    return { error: "Contact Number cannot be empty!" };
  } else if (branchId === "") {
    return { error: "Branch ID cannot be empty!" };
  } else {
    // If form validation successful

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
      return { message: "Success Message" };
    } catch (e) {
      return { error: "Message" };
    }
  }

  //Check for null
  // if()
  // {
  //     return {error: "Message"};
  // }

  //Form Validation
  // if()
  // {
  //     return {error: "Message"};
  // }
};

// Add a new order
BranchManagerController.addOrder = async (
  weight,
  sendingDate,
  paymentDate,
  packageTypes,
  sendingBranch,
  receivingBranch,
  speicialNotes,
  orderStatus,
  sender,
  receiver,
  contactNumber,
  address
) => {
  // Front end form validation
  if (weight === "") {
    return { error: "Weight cannot be empty!" };
  } else if (sendingDate === "") {
    return { error: "Sending date cannot be empty!" };
  } else if (paymentDate === "") {
    return { error: "Payment date cannot be empty!" };
  } else if (packageTypes === "") {
    return { error: "Pacakage type cannot be empty!" };
  } else if (sendingBranch === "") {
    return { error: "Sending branch cannot be empty!" };
  } else if (receivingBranch === "") {
    return { error: "Receiving Branch cannot be empty!" };
  } else if (speicialNotes === "") {
    return { error: "Special notice cannot be empty!" };
  } else if (orderStatus === "") {
    return { error: "Order status cannot be empty!" };
  } else if (sender === "") {
    return { error: "Sender cannot be empty!" };
  } else if (contactNumber === "") {
    return { error: "Contact number cannot be empty!" };
  } else if (address === "") {
    return { error: "Address cannot be empty!" };
  } else {
    // If form validation successful

    let reqBody = {
      weight,
      sendingDate,
      paymentDate,
      packageTypes,
      sendingBranch,
      receivingBranch,
      speicialNotes,
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
      return { error: "Message" };
    }
  }
};

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

// Add a new transportagent
// BranchManagerController.addTransportagent = async (nic, email, name, vehicleNumber, contactNumber, branchId) =>{

//   // Front end form validation
//   if (nic == "") {
//       return { error: "NIC cannot be empty!"};
//     } else if (!email.includes("@")) {
//       return { error: "Email should include '@'mark always"};
//     } else if (name == "") {
//       return { error: "Name cannot be empty!"};
//     } else if (address == "") {
//       return { error: "Address cannot be empty!"};
//     } else if (contactNumber == "") {
//       return { error: "Contact Number cannot be empty!"};
//     } else if (branchId == "") {
//       return { error: "Branch ID cannot be empty!"};
//     } else { // If form validation successful

//       let reqBody = {
//           nic,
//           email,
//           name,
//           address,
//           contactNumber,
//           branchId
//           }

//           try{
//               let response = await BranchManagerService.addClient(reqBody);
//               if(response.error){
//                   return {error : response.error};
//               }
//               return {message : "Success Message"};
//           }catch(e)
//           {
//               return {error : "Message"};
//           }

//     }

//   //Check for null
//   // if()
//   // {
//   //     return {error: "Message"};
//   // }

//   //Form Validation
//   // if()
//   // {
//   //     return {error: "Message"};
//   // }

// }

export default BranchManagerController;
