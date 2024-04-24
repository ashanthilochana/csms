import { Card, CardBody, CardTitle, CardSubtitle, Table, Button, ButtonGroup } from "reactstrap";
import user from "../../../assets/images/users/user.jpg";
import React , { useEffect, useState } from "react";
import UserController from "../controllers/user.controller";

// const tableData = [
//   {
//     distric:"," 
//     address:"" ,
//     mapLocation: "",
//     contactNumber:0754764544
//   },
// ];


const ViewBranchTable = () => {

  let [Branches, setBranches] = useState([]);

  useEffect(() => {
    
    async function getBranches() {
      try {
        let response = await UserController.getAllBranches();
        if (response.error) {
          console.error("Error fetching clients:", response.error);
        } else {
          setBranches(response.data);
        }
      } catch (error) {
        console.error("Error fetching clients:", error);
      }
    };
    

    getBranches();

  }, []);
  

  return (
    <div>
      <Card>
        <CardBody>
          <CardTitle tag="h5">Branches List</CardTitle>
          <CardSubtitle className="mb-2 text-muted" tag="h6">
          branch....
          </CardSubtitle>

          <Table className="no-wrap mt-3 align-middle" responsive borderless>
            <thead>
              <tr>
                
                <th>Branch ID</th>
                <th>District</th>
                <th>Address</th>
                <th>Contact Number</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {Branches.map((tdata, index) => (
                <tr key={index} className="border-top">
               
                  <td>{tdata.branchId}</td>
                  <td>{tdata.district}</td>
                  <td>{tdata.address}</td>
                  <td>{tdata.contactNumber}</td>
                  
                  
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

export default ViewBranchTable;
