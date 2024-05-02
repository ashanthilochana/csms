import {
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
  Table,
  Button
} from "reactstrap";

import React, { useState, useEffect } from "react";
import UserController from "../controllers/user.controller.js";
import useCookie from "../../../hooks/useCookies.js";


const tableData = [
  {
    order_id: "0001",
    sender:"Kavidu senavirathna",
    receiver: "Ashan Thilochana",
    contactNo: "07267874746",
    address: "No,122 malabe, Colombo",
    deliverystatus:"On route"
   
  
  },

  {
    order_id: "0002",
    sender:"Kavidu senavirathna",
    receiver: "Pabasara Rajapaksha",
    contactNo: "07267267443",
    address: "No.56, Galewala",
    deliverystatus:"On route"
    
  
  },
  {
    order_id: "0003",
    sender:"Kavidu senavirathna",
    receiver: "Kaushani hettiarachchi",
    contactNo: "07855625477",
    address: "No.56, kadana ,ja-ela",
    deliverystatus:"On route"
   
  
  },
 
];

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
          <CardTitle tag="h5">Delivery Order details</CardTitle>
          <CardSubtitle className="mb-2 text-muted" tag="h6">
            Overview of delivery orders
          </CardSubtitle>

          <Table className="no-wrap mt-3 align-middle" responsive borderless>
            <thead>
              <tr>
                <th>Order ID</th>
                <th>Sender Name</th>
                <th>Receiver Name</th>
                <th>Receiver Contact No</th>
                <th className="text-center">Receiver Address</th>
                <th className="text-center">Delivery status</th>
                <th className="text-center">Action</th>
              </tr>
            </thead>

            <tbody>
              {tableData.map((tdata, index) => (
                <tr key={index} className="border-top">
                  <td>
                    <div className="d-flex align-items-center p-2">
                      <div className="ms-3">
                        <h6 className="mb-0">{tdata.order_id}</h6>
                      </div>
                    </div>
                  </td>
            
                  <td>{tdata.sender}</td>
                  <td>{tdata.receiver}</td>
                  <td>{tdata.contactNo}</td>
                  <td>{tdata.address}</td>
                  <td>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      {tdata.status === "Delivered" ? (
                        <span className="ps-3 pe-3 pt-1 pb-1 rounded-5 bg-success text-white d-inline-block">
                          Delivered
                        </span>
                      ) : tdata.status === "On Route" ? (
                        <span className="ps-3 pe-3 pt-1 pb-1 rounded-5 bg-warning text-white d-inline-block">
                          On Route
                        </span>
                      ) : tdata.status === "Received" ? (
                        <span className="ps-3 pe-3 pt-1 pb-1 rounded-5 bg-info text-white d-inline-block">
                          Received
                        </span>
                      ) : tdata.status === "Registered" ? (
                        <span className="ps-3 pe-3 pt-1 pb-1 rounded-5 bg-danger text-white d-inline-block">
                          Registered
                        </span>
                      ) : tdata.status === "Handed to Delivery" ? (
                        <span className="ps-3 pe-3 pt-1 pb-1 rounded-5 bg-success text-white d-inline-block">
                          Handed
                        </span>
                      ) : tdata.status === "Returned" ? (
                        <span className="ps-3 pe-3 pt-1 pb-1 rounded-5 bg-danger text-white d-inline-block">
                          Returned
                        </span>
                      ) :(
                        <span className="ps-3 pe-3 pt-1 pb-1 rounded-5 bg-black text-white d-inline-block">
                          No Status
                        </span>
                      )}
                    </div>
                  </td>
                  <td className="d-flex justify-content-center">
                    <Button
                      className="btn me-2"
                      outline
                      color="primary"
                      size="sm"
                    >
                      Update status
                    </Button>
                    
                  </td>
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