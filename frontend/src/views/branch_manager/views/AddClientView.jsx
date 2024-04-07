import {
  Card,
  Row,
  Col,
  CardTitle,
  CardBody,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  FormText,
} from "reactstrap";

import { useState } from "react";
import { useNavigate } from "react-router-dom";

// Import frontend controller
import BranchManagerController from "../controllers/branch_manager.controller";

const AddNewClient = () => {

  
  // Create object for use navigator
  const navigate = useNavigate();

  // Map variable
  const [inputData, setInputData] = useState({
    nic: "",
    email: "",
    name: "",
    address: "",
    contactNumber: "",
    branchId: ""
  })

  // Set data to inputData map from form
  const onChanged = (e) => {
    console.log(e.target.value);
    const { name, value } = e.target;
    setInputData((preval) => {
      return {
        ...preval,
        [name]: value
      }
    })
  }

  // Call controller addClient method
  const onSubmit = async (e) => {
    e.preventDefault();

    const {
      nic,
      email,
      name,
      address,
      contactNumber,
      branchId
    } = inputData;

    try {
      const res = await BranchManagerController.addClient(
        nic,
        email,
        name,
        address, 
        contactNumber,
        branchId
      );

      // Error handling
      if (res.error) {
        alert(res.error);
      }
      else {
        navigate('/');
        console.log("Customer Added");
      }
    }
    catch (e) {
      console.error(e);
      throw e;
    }
  }


  return (
    <Form>
      <Row className="justify-content-center">
        <Col className="col-md-8">

          <Card>
            <CardTitle tag="h6" className="border-bottom p-3 mb-0">
              <i className="bi bi-person-add me-2"> </i>
              Add a New Customer
            </CardTitle>
            <CardBody>
              <FormGroup>
                <Label for="customerNic">Customer NIC </Label>
                <Input
                  id="customerNic"
                  name="nic"
                  placeholder="Enter customer nic"
                  type="text"
                  onChange={onChanged}
                  value={inputData.nic}
                />
              </FormGroup>
              <FormGroup>
                <Label for="customerEmail">E-mail</Label>
                <Input
                  id="customerEmail"
                  name="email"
                  placeholder="Enter customer email"
                  type="email"
                  onChange={onChanged}
                  value={inputData.email}
                />
              </FormGroup>
              <FormGroup>
                <Label for="customerName">Full Name</Label>
                <Input
                  id="customerName"
                  name="name"
                  placeholder="Enter full name"
                  type="text"
                  onChange={onChanged}
                  value={inputData.name}
                />
              </FormGroup>
              <FormGroup>
                <Label for="customerAddress">Address</Label>
                <Input
                  id="customerAddress"
                  name="address"
                  placeholder="Enter Address"
                  type="textarea"
                  onChange={onChanged}
                  value={inputData.address}
                />
              </FormGroup>

              <FormGroup>
                <Label for="customerContactNo">Contact Number</Label>
                <Input
                  id="customerContactNo"
                  name="contactNumber"
                  placeholder="Enter contact number"
                  type="number"
                  onChange={onChanged}
                  value={inputData.contactNumber}
                />
              </FormGroup>

              <FormGroup>
                <Label for="branch">Branch</Label>
                <Input
                  id="branch"
                  name="branchId"
                  type="select"
                  placeholder="Select"
                  onChange={onChanged}
                  value={inputData.branchId}
                >
                  <option>Colombo</option>
                  <option>Polonnaruwa</option>
                  <option>Kandy</option>
                  <option>Galewela</option>
                </Input>
              </FormGroup>

              <Button type="submit" onClick={onSubmit} className="btn mt-4 w-100 pt-2 pb-2 bg-primary border">Submit the Order</Button>
              <Button type="reset" className="btn mt-2 w-100 pt-2 pb-2 bg-danger border">Reset Details</Button>

            </CardBody>
          </Card>
        </Col>
      </Row>
    </Form>
  );
};


export default AddNewClient;

