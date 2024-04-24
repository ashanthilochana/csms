import AxiosController from "../../../controllers/axios.controller.js";

let UserService = {};

/////////////////////////////////////// Get Latest orders by client nic ////////////////////////////////////////////////


UserService.getLatestOrdersByClientNic = async (reqBody) => {
  try {
    let response = await AxiosController.instance.get("/api/get-latest-orders-by-client-nic", reqBody);
    if (response.error) {
      return { error: response.error };
    } else if (response.data.error) {
      return { error: response.data.error };
    } else {
      return {data: response.data};
    }
  } catch (e) {
    console.error(e);
    throw e;
  }
}

export default UserService;
