import { Card, CardBody, CardTitle, CardSubtitle, Table, Button, ButtonGroup } from "reactstrap";
import user from "../../../assets/images/users/user.jpg";
import React , { useEffect, useState } from "react";
import UserController from "../controllers/user.controller";



const ViewRoutesTable = () => {

  let [Routes, setRoutes] = useState([]);

  useEffect(() => {
    
    async function getRoutes() {
      try {
        let response = await UserController.getAllRoutes();
        if (response.error) {
          console.error("Error fetching clients:", response.error);
        } else {
          setRoutes(response.data);
        }
      } catch (error) {
        console.error("Error fetching clients:", error);
      }
    };
    

    getRoutes();

  }, []);
  

  return (
    <div>
      <Card>
        <CardBody>
          <CardTitle tag="h5">Routers List</CardTitle>
          <CardSubtitle className="mb-2 text-muted" tag="h6">
          Routes..
          </CardSubtitle>

          <Table className="no-wrap mt-3 align-middle" responsive borderless>
            <thead>
              <tr>
                
                <th>Route ID</th>
                <th>Route Name</th>
                <th>First Branch ID</th>
                <th>Second Branch ID</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {Routes.map((tdata, index) => (
                <tr key={index} className="border-top">
                 
                  
                  <td>{tdata.routeId}</td>
                  <td>{tdata.routeName}</td>
                  <td>{tdata.firstBranchId}</td>
                  <td>{tdata.secondBranchId}</td>
                  
                  
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

export default ViewRoutesTable;
