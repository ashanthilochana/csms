import TicketService from "../services/ticket.service.js";

let TicketController = {};

/////////////////////////////////////// Add a route ////////////////////////////////////////////////

TicketController.addTicket = async (req, res) => {

    try {
        const {
            nic,
            branchId,
            reasonId,
            message,
            responseStatusId
        } = req.body;


        await TicketService.addTicket(
            nic,
            branchId,
            reasonId,
            message,
            responseStatusId
        );

        res.status(201).send({ message: "Ticket added successfully" });

    } catch (e) {
        console.error(e);
        res.status(500).send({ error: "Internal Server Error" });
    }
};

/////////////////////////////////////// Get all ticket reasons ////////////////////////////////////////////////

TicketController.getAllReasons = async (req, res) => {
    try {
        let data = await TicketService.getAllReasons();
        res.status(200).send(data);
    } catch (e) {
        res.status(500).send({ error: "Internal Server Error" });
    }
}

// Get all tickets details
TicketController.getAllTickets = async (req, res) => {
    try{
        let data = await ClientService.getAllTickets();
        res.status(200).send(data);
    }
    catch(e)
    {
        res.status(500).send({error : "Internal Server Error"});
    }
};



export default TicketController;