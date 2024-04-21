// Order Management Service [COMPLETED] - Ashan

import { pool } from "../database/database.js";

let OrderService = {};

/////////////////////////////////////// Add a new order ////////////////////////////////////////////////

OrderService.addOrder = async(
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
    address) => {

    let query = `
    INSERT INTO orders(weight, registeredDate, paymentDate, receiverName, receiverAddress, receiverContactNumber, packageTypeId, senderNic, statusId, sendingBranchId, receivingBranchId, specialNote) 
    VALUES(?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    `;

    try {
        const [rows] = await pool.query(query, [
            weight,
            sendingDate,
            paymentDate,
            receiver,
            address,
            contactNumber,
            packageTypes,
            sender,
            orderStatus,
            sendingBranch,
            receivingBranch,
            specialNotes,
            ]);
    }
    catch (e) {
        console.error(e);
        throw e;
    }

};

/////////////////////////////////////// Get latest order by branch by branch ID  ////////////////////////////////////////////////

OrderService.getLatestOrderByBranch = async(sendingBranchId) => {
    let query = `
    SELECT o.orderId, o.registeredDate, c.fullName, o.receivingBranchId, os.status
    FROM orders o, client c, branch b, orderstatus os
    WHERE o.receivingBranchId = b.branchId AND b.branchId = c.branchId AND os.statusId = o.statusId AND o.sendingBranchId = ?
    ORDER BY registeredDate DESC
    `;

    try{
        let [rows] = await pool.query(query, [sendingBranchId]);
        return rows;
    } catch(e) {
        console.error(e);
        throw e;
    }
};

/////////////////////////////////////// Get all received orders to received order tables by branchId ////////////////////////////////////////////////


OrderService.getAllOrdersByBranch = async(sendingBranchId) => {
    let query = `select o.orderId as order_id, 
    o.registeredDate as orderDate, 
    c.fullName as sender,
    o.receiverName as receiver, 
    b.district as destinationBranch, 
    os.status 
    from orders o
    join client c
    on o.senderNic = c.nic
    join branch b
    on o.receivingBranchId = b.branchId
    join orderstatus os
    on o.statusId = os.statusId
    where o.sendingBranchId = ?`;
    try{
        let [rows] = await pool.query(query, [sendingBranchId]);
        return rows;
    } catch(e) {
        console.error(e);
        throw e;
    }
};

/////////////////////////////////////// Get an order details by OrderId ////////////////////////////////////////////////

OrderService.getSingleOrderDetails = async(orderId) => {
    let query = `
    SELECT o.orderId, o.weight, o.registeredDate, o.receivedDate, o.deliveryDate, o.paymentDate, o.receiverName, o.receiverAddress, o.receiverContactNumber, pt.packageType, c.nic AS senderNic, c.fullName AS senderName, os.status, bs.district AS sendingBranch, br.district AS receivingBranch
    FROM orders o, packagetype pt, client c, orderstatus os, branch bs, branch br
    WHERE o.packageTypeId = pt.packageTypeId AND o.senderNic = c.nic AND o.statusId = os.statusId
    AND o.sendingBranchId = bs.branchId AND o.receivingBranchId = br.branchId AND orderId = ?
    `;
    try{
        const [rows] = await pool.query(query, [orderId]);
        return rows;
    } catch(e) {
        console.error(e);
        throw e;
    }
}

/////////////////////////////////////// Delete an order by orderID ////////////////////////////////////////////////

OrderService.deleteOrder = async(orderId) => {
    let query1 = `
    DELETE FROM orderdelivery
    WHERE orderId = ?
    `;

    let query2 = `
    DELETE FROM returnedorder
    WHERE orderId = ?
    `;

    let query3 = `
    DELETE FROM orders
    WHERE orderId = ?
    `;

    try{
        await pool.query(query1, [orderId]);
        await pool.query(query2, [orderId]);
        await pool.query(query3, [orderId]);
    } catch(e) {
        console.error(e);
        throw e;
    }
};

/////////////////////////////////////// Get all packge types ////////////////////////////////////////////////

OrderService.getAllPackageTypes = async () => {
    let query = `
    SELECT * FROM packagetype
    `;

    try{
        let [rows] = await pool.query(query);
        return rows;
    }
    catch (e) {
        console.error(e);
        throw e;
    }
};


/////////////////////////////////////// Get all order status ////////////////////////////////////////////////

OrderService.getAllOrderStatus = async () => {
    let query = `
    SELECT * FROM orderstatus
    `;

    try{
        let [rows] = await pool.query(query);
        return rows;
    }
    catch (e) {
        console.error(e);
        throw e;
    }
};

OrderService.getOrderFee = async (packageWeight, packageTypeId) => {
    let query = `CALL getCourierFee(?,?)`;
    try {
        let [rows] = await pool.query(query, [packageWeight, packageTypeId]);
        return rows[0][0].totalFee;   
    } catch (error) {
        console.error(error);
        throw error;
    }
}

export default OrderService;