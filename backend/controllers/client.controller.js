// Client Management Controller

import ClientService from "../services/client.service.js";

let ClientController = {};

// Add a new client
ClientController.addClient = async (req, res) => {

    try {
        const { nic, email, name, address, contactNumber, branchId } = req.body;

        let userExists = await ClientService.checkUserExistStatus(nic);

        if (!userExists) {
            await ClientService.addClient(nic, email, name, address, contactNumber, branchId);

            res.status(201).send({ message: "User added successfully" });
        }
        else {
            res.status(422).send({ error: "User Already Exists!" })
        }
    } catch (e) {
        console.error(e);
        res.status(500).send({error : "Internal Server Error"});
     }
};

// Get all client details
ClientController.getAllClients = async (req, res) => {
    try{
        let data = await ClientService.getAllClients();
        res.status(200).send(data);
    }
    catch(e)
    {
        res.status(500).send({error : "Internal Server Error"});
    }
};

ClientController.getAllClientNICs = async (req, res) => {
    try{
        let data = await ClientService.getAllClientsWithoutJoins();
        let modifiedData = data.map((client) => {
            return client.nic;
        })
        res.status(200).send(modifiedData);
    }
    catch(e)
    {
        res.status(500).send({error : "Internal Server Error"});
    }
}

export default ClientController;