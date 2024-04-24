import UserService from "../services/user.service.js";
import validator from "../../../validation/validation.js";

let UserController = {};


/////////////////////////////////////// Get all orders by order ID ////////////////////////////////////////////////

UserController.getLatestOrdersByClientNic = async (nic) => {
  try {
    let response = await UserService.getLatestOrdersByClientNic({ nic: nic })

    if (response.error) {
      return { error: response.error };
    } else {
      return {data: response.data};
    }
  } catch (e) {
    return { error: e };
  }
};

export default UserController;
