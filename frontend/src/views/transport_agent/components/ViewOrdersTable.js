import {
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
  Table,
  Button,
  ButtonGroup,
} from "reactstrap";

import React, { useState, useEffect } from "react";
import UserController from "../controllers/user.controller.js";
import useCookie from "../../../hooks/useCookies.js";


const ViewOrderTable = () => {
  
  const [tableData, setTableData] = useState([]);
  const [getCookie] = useCookie();

  // fetch orders by transport agent nic async function
  const fetchOrders = async () => {
    const response = await UserController.getOrdersByTransportAgentNic(getCookie("user-nic"));
    setTableData(response);
  };

 
  function formatDate(dateString) {
    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    
    return `${year}-${month}-${day}`;
  }


  useEffect(() => {
    fetchOrders();
  }, []);

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
              <th style={{"color": "green"}}>Sending Branch</th>
              <th style={{"color": "green"}}>Contact Number</th>
              <th style={{"color": "red"}}>Receiving Branch</th>
              <th style={{"color": "red"}}>Contact Number</th>
            </tr>
          </thead>

          <tbody>
            {tableData.map((tdata, index) => (
              <tr key={index} className="border-top">
                <td>
                  <div className="d-flex align-items-center p-2">
                    <div className="ms-3">
                      <h6 className="mb-0">{tdata.orderId}</h6>
                    </div>
                  </div>
                </td>
                <td>{formatDate(tdata.registeredDate)}</td>
                <td>{tdata.sendingBranch}</td>
                <td>{tdata.sendingBranchContact}</td>
                <td>{tdata.receivingBranch}</td>
                <td >{tdata.receivingBranchContact}</td>               
                
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



// import { Card, CardBody, CardTitle, CardSubtitle, Table, Button, ButtonGroup } from "reactstrap";

// const tableData = [
//   {
//     order_id: "0001",
//     orderDate: "2024-12-02",
//     sender: "Ashan",
//     destinationBranch: "Polonnaruwa",
//     status: "delivered",
//     weeks: "35",
//     budget: "95K",
//   },
  
// ];

// const ViewOrderTable = () => {
//   return (
//     <div>
//       <Card>
//         <CardBody>
//           <CardTitle tag="h5">Latest Orders</CardTitle>
//           <CardSubtitle className="mb-2 text-muted" tag="h6">
//             Overview of new orders
//           </CardSubtitle>

//           <Table className="no-wrap mt-3 align-middle" responsive borderless>
//             <thead>
//               <tr>
//                 <th>Order Date</th>
//                 <th>Order ID</th>
//                 <th>Sender</th>
//                 <th>Destination Branch</th>
//                 <th>Order Status</th>
//                 <th className="text-center">Action</th>
//               </tr>
//             </thead>

//             <tbody>
//               {tableData.map((tdata, index) => (
//                 <tr key={index} className="border-top">
//                   <td>
//                     <div className="d-flex align-items-center p-2">
//                       <div className="ms-3">
//                         <h6 className="mb-0">{tdata.order_id}</h6>
//                       </div>
//                     </div>
//                   </td>
//                   <td>{tdata.orderDate}</td>
//                   <td>{tdata.sender}</td>
//                   <td>{tdata.destinationBranch}</td>
//                   <td>
//                     {tdata.status === "delivered" ? (
//                       <span className="ps-3 pe-3 pt-1 pb-1 rounded-5 bg-success text-white d-inline-block">Delivered</span>
//                     ) : tdata.status === "on going" ? ( 
//                       <span className="ps-3 pe-3 pt-1 pb-1 rounded-5 bg-warning text-white d-inline-block">On going</span>
//                     ) : tdata.status === "received" ? ( 
//                       <span className="ps-3 pe-3 pt-1 pb-1 rounded-5 bg-info text-white d-inline-block">Received</span>
//                     ) : tdata.status === "registered" ? ( 
//                       <span className="ps-3 pe-3 pt-1 pb-1 rounded-5 bg-danger text-white d-inline-block">Registered</span>
//                     ) : (
//                       <span className="ps-3 pe-3 pt-1 pb-1 rounded-5 bg-danger text-white d-inline-block">No Status</span>
//                     )}
//                   </td>
//                   <td className="d-flex justify-content-center">
//                     <Button  className="btn me-2" outline color="secondary" size="sm">Edit</Button>
//                     <Button  className="btn me-2" color="primary" size="sm">View</Button>
//                     <Button  className="btn" color="danger" size="sm">Delete</Button>
//                   </td>          
//                 </tr>
//               ))}
//             </tbody>
            
//           </Table>
//         </CardBody>
//       </Card>
//     </div>
//   );
// };

// export default ViewOrderTable;
