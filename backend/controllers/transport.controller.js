// Transport Agent Management Controller

import TransportAgentService from "../services/transport.service.js";

let TransportAgentController = {};

// Add a new tranport agent
TransportAgentController.addTransportAgent = async (req, res) => {

    try {
        const {
            nic,
            email,
            name,
            vehicleNumber,
            routeId, } = req.body;

        let userExists = await TransportAgentService.checkUserExistStatus(nic);

        if (!userExists) {
            await TransportAgentService.addTransportAgent(
                nic,
                email,
                name,
                vehicleNumber,
                routeId,);

            res.status(201).send({ message: "Transport agent added successfully" });
        }
        else {
            res.status(422).send({ error: "Transport agent already Exists!" })
        }
    } catch (e) {
        console.error(e);
        res.status(500).send({error : "Internal Server Error"});
     }
};

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
// };

//Get all transport agents
TransportAgentController.getAllTransportAgents = async (req, res) => {
    try{
        let data = await TransportAgentService.getAllTransportAgents();
        res.status(200).send(data);
    }
    catch(e)
    {
        res.status(500).send({error : "Internal Server Error"});
    }
};

export default TransportAgentController;