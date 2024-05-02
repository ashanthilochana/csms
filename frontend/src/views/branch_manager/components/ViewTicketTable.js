import { Card, CardBody, CardTitle, CardSubtitle, Table, Button, ButtonGroup } from "reactstrap";
import user from "../../../assets/images/users/user.jpg";
import React , { useEffect, useState } from "react";
import UserController from "../controllers/user.controller";

// const tableData = [
//   {
//    
// nic,
// branchId,
// reasonId,
// message,
// responseStatusId
// //   },
// ];

const ViewTicketTable = () => {

  let [tickets, settickets] = useState([]);

  useEffect(() => {
    
    async function gettickets() {
      try {
        let response = await UserController.getAllTickets();
        if (response.error) {
          console.error("Error fetching tickets:", response.error);
        } else {
            settickets(response.data);
        }
      } catch (error) {
        console.error("Error fetching tickets:", error);
      }
    };
    

    gettickets();

  }, []);
  

  return (
    <div>
      <Card>
        <CardBody>
          <CardTitle tag="h5">Tickets List</CardTitle>
          <CardSubtitle className="mb-2 text-muted" tag="h6">
            Tickets belongs to the branch
          </CardSubtitle>

          <Table className="no-wrap mt-3 align-middle" responsive borderless>
            <thead>
              <tr>
                
                <th>Ticket ID</th>
                <th>Client NIC</th>
                <th>Branch ID</th>
                <th>Reason</th>
                <th>Message</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {tickets.map((tdata, index) => (
                <tr key={index} className="border-top">
                 
                  <td>{tdata.ticketID}</td>
                  <td>{tdata.nic}</td>
                  <td>{tdata.branchId}</td>
                  <td>{tdata.reasonId}</td>  
                  <td>{tdata.message}</td> 
                  <td>{tdata.responseStatusId}</td> 
                  <td>
                    <Button  className="btn me-2" outline color="secondary" size="sm">Edit</Button>
                    <Button  className="btn" color="danger" size="sm">Delete</Button>
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

export default ViewTicketTable;
