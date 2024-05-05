import { Card, CardBody, CardTitle, CardSubtitle, Table, Button, ButtonGroup, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Label, Input } from "reactstrap";import user from "../../../assets/images/users/user.jpg";
import React , { useEffect, useState } from "react";
import UserController from "../controllers/user.controller";

const ViewBranchTable = () => {

  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);

  const [branches, setBranches] = useState([]);

  // function to get all branches
  const getBranches = async () => {
    try {
      const response = await UserController.getAllBranches();
      setBranches(response);
    } catch (error) {
      console.error("Error: ", error);
    }
  };

  useEffect(() => {
    getBranches();
  }
  , []);

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
              {branches.map((tdata, index) => (
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

      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Add Branch</ModalHeader>
        <ModalBody>
          <Form>
            <FormGroup>
              <Label for="district">District</Label>
              <Input type="text" name="district" id="district" placeholder="Enter district" />
            </FormGroup>
            <FormGroup>
              <Label for="address">Address</Label>
              <Input type="text" name="address" id="address" placeholder="Enter address" />
            </FormGroup>
            <FormGroup>
              <Label for="contactNumber">Contact Number</Label>
              <Input type="text" name="contactNumber" id="contactNumber" placeholder="Enter contact number" />
            </FormGroup>
          </Form>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={toggle}>Add</Button>{' '}
          <Button color="secondary" onClick={toggle}>Cancel</Button>
        </ModalFooter>
      </Modal>

    </div>
  );
};

export default ViewBranchTable;
