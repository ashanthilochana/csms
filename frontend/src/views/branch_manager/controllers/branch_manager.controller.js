import BranchManagerService from "../services/branch_manager.service.js";
import validator from "../../../validation/validation.js";

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

  let {
    validateNIC,
    validateEmail,
    validateName,
    validateAddress,
    validatePhoneNumber,
  } = validator();

  if (!nic || nic === "") {
    return { error: "NIC cannot be empty" };
  }

  if (!validateNIC(nic)) {
    return { error: "Invalid NIC" };
  }

  if (!email || email === "") {
    return { error: "Email cannot be empty" };
  }

  if (!validateEmail(email)) {
    return { error: "Invalid Email" };
  }

  if (!name || name === "") {
    return { error: "Name cannot be empty" };
  }

  if (!validateName(name)) {
    return { error: "Invalid Name" };
  }

  if (!address || address === "") {
    return { error: "Address cannot be empty" };
  }

  if (!validateAddress(address)) {
    return { error: "Invalid Address" };
  }

  if (!contactNumber || contactNumber === "") {
    return { error: "Contact Number cannot be empty" };
  }

  if (!validatePhoneNumber(contactNumber)) {
    return { error: "Invalid Contact Number" };
  }

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

// Get Branch ID by Branch Manager NIC
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

BranchManagerController.getAllBranches = async () => {
  try{let response = await BranchManagerService.getAllBranches();

  if(response.error)
  {
    return {error : response.error};
  }

  else
  {
    return {data : response.data};
  }}catch(e)
  {
    return {error : e};
  }
}

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
