import {
  Card,
  Row,
  Col,
  CardTitle,
  CardBody,
  Button,
  Form,
  FormGroup,
  FormFeedback,
  Label,
  Input,
  FormText,
} from "reactstrap";

import { useState } from "react";
import { useNavigate } from "react-router-dom";

// Import controller
import AdminController from "../controllers/branch_manager.controller";


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

  // Validation data map
  const [validations, setValidations] = useState({
    nic: false,
    email: false,
    name: false,
    address: false,
    contactNumber: false,
  });

  
  // onChange Form validation
  const validateField = (name, value) => {
    switch (name) {
      case 'nic':
        if(value > 0 && value < 999999999999){
          return true;
        }
        else{
          return false;
        }
      default:
        return true;
    }
  };

  // onChange
  const onChange = (e) => {
    console.log(e.target.value);
    const { name, value } = e.target;
    setInputData((preval) => {
      return {
        ...preval,
        [name]: value
      }
    })
    // onChange Form validation data set on change
    setValidations({
       ...validations,
       [name]: !validateField(name, value) // Not sign for conver false to true
    });
  }

  // Check form valid status to appear submit buttons
  const isFormValid = () => {
    for (const key in validations) {
      if (validations[key]) {
        return false;
      }
    }
    return true;
  };


  // onSubmit
  const onSubmit = async (e) => {

    e.preventDefault();

    const { nic, email, name, address, contactNumber, branchId } = inputData;

    try {
      const res = await AdminController.addClient(nic, email, name, address, contactNumber, branchId);

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
                  value={inputData.nic}
                  onChange={onChange}
                  invalid = {validations.nic}
                />
                <FormFeedback>Enter a valid NIC number</FormFeedback>
              </FormGroup>
              <FormGroup>
                <Label for="customerEmail">E-mail</Label>
                <Input
                  id="customerEmail"
                  name="email"
                  placeholder="Enter customer email"
                  type="email"
                  onChange={onChange}
                  value={inputData.email}
                  invalid = {validations.email}
                />
                <FormFeedback>Enter a valid email address</FormFeedback>
              </FormGroup>
              <FormGroup>
                <Label for="customerName">Full Name</Label>
                <Input
                  id="customerName"
                  name="name"
                  placeholder="Enter full name"
                  type="text"
                  value={inputData.name}
                  onChange={onChange}
                  invalid = {validations.name}
                />
                <FormFeedback>Enter a valid name</FormFeedback>
              </FormGroup>
              <FormGroup>
                <Label for="customerAddress">Address</Label>
                <Input
                  id="customerAddress"
                  name="address"
                  placeholder="Enter Address"
                  type="textarea"
                  value={inputData.address}
                  onChange={onChange}
                  invalid = {validations.address}
                />
                <FormFeedback>Enter a valid address</FormFeedback>
              </FormGroup>

              <FormGroup>
                <Label for="customerContactNo">Contact Number</Label>
                <Input
                  id="customerContactNo"
                  name="contactNumber"
                  placeholder="Enter contact number"
                  type="number"
                  value={inputData.contactNumber}
                  onChange={onChange}
                  invalid = {validations.contactNumber}
                />
                <FormFeedback>Enter a valid contact number</FormFeedback>
              </FormGroup>

              <FormGroup>
                <Label for="branch">Branch</Label>
                <Input
                  id="branch"
                  name="branchId"
                  type="select"
                  value={inputData.branchId}
                  onChange={onChange}
                  placeholder="Select"
                >
                  <option>Colombo</option>
                  <option>Polonnaruwa</option>
                  <option>Kandy</option>
                  <option>Galewela</option>
                </Input>
              </FormGroup>

              <Button type="submit" disabled={!isFormValid()} onClick={onSubmit} className="btn mt-4 w-100 pt-2 pb-2 bg-primary border">Submit the Order</Button>
              <Button type="reset" className="btn mt-2 w-100 pt-2 pb-2 bg-danger border">Reset Details</Button>

            </CardBody>
          </Card>
        </Col>
      </Row>
    </Form>
  );
};


export default AddNewClient;

