import {
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
  Table,
} from "reactstrap";

import React, { useState, useEffect } from "react";
import UserController from "../controllers/user.controller.js";
import useCookie from "../../../hooks/useCookies.js";

const ViewOrderTable = () => {
  let [getCookie, setCookie] = useCookie();
  let [orders, setOrders] = useState([]);

  useEffect(() => {
    async function getOrders() {
      let branchId = getCookie("user-branch-id");
      let data = await UserController.getAllOrdersByBranchId(branchId);
      setOrders(data);
    }

    getOrders();
  }, []);

  function formatDate(dateString) {
    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    
    return `${year}-${month}-${day}`;
  }
  return (
    <div>
      <Card>
        <CardBody>
          <CardTitle tag="h5">Orders Details</CardTitle>
          <CardSubtitle className="mb-2 text-muted" tag="h6">
            Overview of delivery orders
          </CardSubtitle>

          <Table className="no-wrap mt-3 align-middle" responsive borderless>
            <thead>
              <tr>
                <th>Order ID</th>
                <th>Order Date</th>
                <th>Sender Name</th>
                <th>Receiver Name</th>
                <th>Reciever Contact Number</th>
                <th>Reciever Address</th>
                
              </tr>
            </thead>

            <tbody>
              {orders.map((tdata, index) => (
                <tr key={index} className="border-top">
                  <td>
                    <div className="d-flex align-items-center p-2">
                      <div className="ms-3">
                        <h6 className="mb-0">{tdata.order_id}</h6>
                      </div>
                    </div>
                  </td>
                  <td>{formatDate(tdata.orderDate)}</td>
                  <td>{tdata.sender}</td>
                  <td>{tdata.receiver}</td>
                  <td>{tdata.contactNo}</td>
                  <td>{tdata.address}</td>
                 
                  
                  
                </tr>
              ))}
            </tbody>
          </Table>
        </CardBody>
      </Card>
    </div>
  );
};

export default ViewOrderTable;