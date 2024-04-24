import { Card, CardBody, CardTitle, CardSubtitle, Table, Button, ButtonGroup } from "reactstrap";
import user from "../../../assets/images/users/user.jpg";
import React , { useEffect, useState } from "react";
import UserController from "../controllers/user.controller";

// const tableData = [
//   {
//     avatar: user,
//     nic: "Hanna Gover",
//     email: "hgover@gmail.com",
//     name: "200134701128",
//     vehicleNumber: "No.114, Malabe, Colombo",
//     contactNumber:0754764544
//   },
// ];

const ViewTransportAgentTable = () => {

  let [TransportAgents, setTransportAgents] = useState([]);

  useEffect(() => {
    
    async function getTransportAgents() {
      try {
        let response = await UserController.getAllTransportAgents();
        if (response.error) {
          console.error("Error fetching clients:", response.error);
        } else {
          setTransportAgents(response.data);
        }
      } catch (error) {
        console.error("Error fetching clients:", error);
      }
    };
    

    getTransportAgents();

  }, []);
  

  return (
    <div>
      <Card>
        <CardBody>
          <CardTitle tag="h5">TransportAgent List</CardTitle>
          <CardSubtitle className="mb-2 text-muted" tag="h6">
          TransportAgent belongs to the branch
          </CardSubtitle>

          <Table className="no-wrap mt-3 align-middle" responsive borderless>
            <thead>
              <tr>
                
                <th>Full Name</th>
                <th>E-mail</th>
                <th>NIC</th>
                <th>VehicleNumber</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {TransportAgents.map((tdata, index) => (
                <tr key={index} className="border-top">
                  <td>
                    <div className="d-flex align-items-center p-2">
                      <img
                        src={user}
                        className="rounded-circle"
                        alt="avatar"
                        width="45"
                        height="45"
                      />
                      <div className="ms-3">
                        <h6 className="mb-0">{tdata.fullName}</h6>
                        
                      </div>
                    </div>
                  </td>
                  <td>{tdata.email}</td>
                  <td>{tdata.nic}</td>
                  <td>{tdata.vehicleNumber}</td>
                  
                  
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

export default ViewTransportAgentTable;
