import axios from "axios";

let baseUrl = "http://localhost:5000"

let AxiosController = {};

// Create AxiosController to inizialize based URL and attach cookies

AxiosController.instance = axios.create({ baseURL: baseUrl, withCredentials: true, }); 

export default AxiosController;