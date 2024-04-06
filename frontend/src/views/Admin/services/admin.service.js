import AxiosController from "../../../controllers/axios.controller.js";

let AdminService = {};

// Add Clients
AdminService.addClient = async (reqBody) => {
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
AdminService.addOrder = async (reqBody) => {

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

export default AdminService;