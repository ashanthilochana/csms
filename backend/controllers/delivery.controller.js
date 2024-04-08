
import DeliveryPersonService from "../services/delivery.service.js";

let DeliverPersonController = {};

// Add a new delivery person
DeliverPersonController.addDeliveryPerson = async (req, res) => {

    try {
        const {
            nic,
            email,
            fullName,
            address,
            contactNumber,
            vehicleNumber,
            branchId } = req.body;

        let userExists = await DeliveryPersonService.checkUserExistStatus(nic);

        if (!userExists) {
            await DeliveryPersonService.addDeliveryPerson(
                nic,
                email,
                fullName,
                address,
                contactNumber,
                vehicleNumber,
                branchId
            );

            res.status(201).send({ message: "Delivery person added successfully" });
        }
        else {
            res.status(422).send({ error: "Delivery person already Exists!" })
        }
    } catch (e) {
        console.error(e);
        res.status(500).send({ error: "Internal Server Error" });
    }
};

export default DeliverPersonController;