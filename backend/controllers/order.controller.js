// Client Management Controller

import OrderService from "../services/order.service.js";

let OrderController = {};

/////////////////////////////////////// Add a new order ////////////////////////////////////////////////

OrderController.addOrder = async (req, res) => {

    try {
        const {
            weight,
            sendingDate,
            paymentDate,
            packageTypes,
            sendingBranch,
            receivingBranch,
            specialNotes,
            orderStatus,
            sender,
            receiver,
            contactNumber,
            address
        } = req.body;

        await OrderService.addOrder(
            weight,
            sendingDate,
            paymentDate,
            packageTypes,
            sendingBranch,
            receivingBranch,
            specialNotes,
            orderStatus,
            sender,
            receiver,
            contactNumber,
            address
        );

        res.status(201).send({ message: "Order added successfully" });

    } catch (e) {
        console.error(e);
        res.status(500).send({ error: "Internal Server Error" });
    }
};

/////////////////////////////////////// Get all order by branch Id ////////////////////////////////////////////////


OrderController.getAllOrderByBranchId = async(req, res) => {
    let {branchId} = req.body;
    try {
        let data = await OrderService.getAllOrdersByBranch(branchId);
        res.status(200).send(data);
    } catch (e) {
        res.status(500).send({ error: "Internal Server Error" });
    }
}

/////////////////////////////////////// Get all package types ////////////////////////////////////////////////

OrderController.getAllPackageTypes = async (req, res) => {
    try {
        let data = await OrderService.getAllPackageTypes();
        res.status(200).send(data);
    } catch (e) {
        res.status(500).send({ error: "Internal Server Error" });
    }
}

/////////////////////////////////////// Get all order status ////////////////////////////////////////////////

OrderController.getAllOrderStatus = async (req, res) => {
    try {
        let data = await OrderService.getAllOrderStatus();
        res.status(200).send(data);
    } catch (e) {
        res.status(500).send({ error: "Internal Server Error" });
    }
}


OrderController.getCourierFee = async (req, res) => {
    let { packageWeight, packageTypeId } = req.body;
  
    try {
      let fee = await OrderService.getOrderFee(packageWeight, packageTypeId);
      res.status(200).send({ fee: fee });
    } catch (error) {
      res.status(500).send({ error: "internal Server Error!" });
    }
  };
  
export default OrderController;