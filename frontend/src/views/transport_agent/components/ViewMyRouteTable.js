import { Card, CardBody, CardTitle, CardSubtitle, Table, Button, ButtonGroup } from "reactstrap";
import user from "../../../assets/images/users/user.jpg";
import React , { useEffect, useState } from "react";
import UserController from "../controllers/user.controller";


const tableData = [
    {
    
      sendingBranch:"Colombo",
      receivingBranch: "Kandy",
      
    },
    {
    
        sendingBranch:"Colombo",
        receivingBranch: "Polonnuruwa",
        
      },
      {
    
        sendingBranch:"Colombo",
        receivingBranch: "Mathara",
        
      },
];

const ViewMyRouteTable = () => {

  let [myRoutes, setmyRoutes] = useState([]);

  useEffect(() => {
    
    async function getMyRoutes() {
      try {
        let response = await UserController.getAllRoutes();
        if (response.error) {
          console.error("Error fetching tickets:", response.error);
        } else {
            setmyRoutes(response.data);
        }
      } catch (error) {
        console.error("Error fetching tickets:", error);
      }
    };
    

    getMyRoutes();

  }, []);
  

  return (
    <div>
      <Card>
        <CardBody>
          <CardTitle tag="h5">View Routes</CardTitle>
          <CardSubtitle className="mb-2 text-muted" tag="h6">
            View all routes
          </CardSubtitle>

          <Table className="no-wrap mt-3 align-middle" responsive borderless>
            <thead>
              <tr>
                
                <th>Sending Branch</th>
                <th>Receiving Branch</th>
                
              </tr>
            </thead>
            <tbody>
              {tableData.map((tdata, index) => (
                <tr key={index} className="border-top">
                 
                  <td>{tdata.sendingBranch}</td>
                  <td>{tdata.receivingBranch}</td>
                         
                </tr>
              ))}
            </tbody>
          </Table>
        </CardBody>
      </Card>
    </div>
  );
};

export default ViewMyRouteTable;
