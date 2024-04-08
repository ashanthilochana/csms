// Client Management Controller

import OrderService from "../services/order.service.js";

let OrderController = {};

// Add a new client
// OrderController.addOrder = async (req, res) => {

//     try {
//         const { nic, email, name, address, contactNumber, branchId } = req.body;

//         let userExists = await ClientService.checkUserExistStatus(nic);

//         if (!userExists) {
//             await ClientService.addClient(nic, email, name, address, contactNumber, branchId);

//             res.status(201).send({ message: "User added successfully" });
//         }
//         else {
//             res.status(422).send({ error: "User Already Exists!" })
//         }
//     } catch (e) {
//         console.error(e);
//         res.status(500).send({error : "Internal Server Error"});
//      }
// };

// Get all client details
// ClientController.getAllClients = async (req, res) => {
//     try{
//         let data = await ClientService.getAllClients();
//         res.status(200).send(data);
//     }
//     catch(e)
//     {
//         res.status(500).send({error : "Internal Server Error"});
//     }
// }

OrderController.getAllPackageTypes = async (req, res) => {
    try {
        let data = await OrderService.getAllPackageTypes();
        res.status(200).send(data);
    } catch (e) {
        res.status(500).send({ error: "Internal Server Error" });
    }
}

export default OrderController;