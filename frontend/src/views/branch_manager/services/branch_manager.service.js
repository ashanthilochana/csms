import AxiosController from "../../../controllers/axios.controller.js";

let BranchManagerService = {};

// Add Clients
BranchManagerService.addClient = async (reqBody) => {
    try{
        let response = await AxiosController.instance.post("/api/add-client", reqBody); // Call backend contorller and pass data which received to front end controller
        if(response.data.error){
            //Handle Error
        }
        else
        {
            //Different status codes
            //201 if(){return {message : "Success Message"}}
            //400 if(){return {error : "Nad Request"}}
            //401 if
            //422 if
        }
    }
    catch(e){
        console.error(e);
        throw e;
    }
}

// Add new order
BranchManagerService.addOrder = async (reqBody) => {

    try{
        let response = await AxiosController.instance.post("/api/add-order", reqBody); // Call backend contorller and pass data which received to front end controller
        if(response.data.error){
            //Handle Error
        }
        else
        {
            //Different status codes
            //201 if(){return {message : "Success Message"}}
            //400 if(){return {error : "Nad Request"}}
            //401 if
            //422 if
        }
    }
    catch(e){
        console.error(e);
        throw e;
    }
    
}

BranchManagerService.getBranchIdByBranchManagerNIC = async (reqBody) => {
    try{
        let response = await AxiosController.instance.post("/api/branch-id-by-nic", reqBody);
        if(response.error)
        {
            return {error : response.error};
        }
        else
        {
            return response.data;
        }
    }
    catch(e){
        console.error(e);
        throw e;
    }
}

export default BranchManagerService;