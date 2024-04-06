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

import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { adddata } from "../context/ContextProvider";

// Import controller
import AdminController from "./controllers/admin.controller";


const AddNewClient = () => {

  // Create add data contex variable
  // const { udata, setUdata } = useContext(adddata);

  // Create object for use navigator
  const navigate = useNavigate();

  // Map variable
  const [inpval, setINP] = useState({
    nic: "",
    email: "",
    name: "",
    address: "",
    contactNumber: "",
    branchId: ""
  })

  // Set data to inpval map from form
  const setdata = (e) => {
    console.log(e.target.value);
    const { name, value } = e.target;
    setINP((preval) => {
      return {
        ...preval,
        [name]: value
      }
    })
  }

  // Call controller addClient method
  const addinpdata = async (e) => {
    e.preventDefault();

    const { nic, email, name, address, contactNumber, branchId } = inpval;

    try {
      const res = await AdminController.addClient(nic, email, name, address, contactNumber, branchId);

      // Error handling
      if (res.error) {
        alert(res.error);
      }
      else {
        //show success message in a suitable way
        navigate('/');
        // setUdata(data);
        console.log("data added");
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
                  value={inpval.nic}
                  onChange={setdata}
                />
              </FormGroup>
              <FormGroup>
                <Label for="customerEmail">E-mail</Label>
                <Input
                  id="customerEmail"
                  name="email"
                  placeholder="Enter customer email"
                  type="email"
                  value={inpval.email}
                  onChange={setdata}
                />
              </FormGroup>
              <FormGroup>
                <Label for="customerName">Full Name</Label>
                <Input
                  id="customerName"
                  name="name"
                  placeholder="Enter full name"
                  type="text"
                  value={inpval.name}
                  onChange={setdata}
                />
              </FormGroup>
              <FormGroup>
                <Label for="customerAddress">Address</Label>
                <Input
                  id="customerAddress"
                  name="address"
                  placeholder="Enter Address"
                  type="textarea"
                  value={inpval.address}
                  onChange={setdata}
                />
              </FormGroup>

              <FormGroup>
                <Label for="customerContactNo">Contact Number</Label>
                <Input
                  id="customerContactNo"
                  name="contactNumber"
                  placeholder="Enter contact number"
                  type="number"
                  value={inpval.contactNumber}
                  onChange={setdata}
                />
              </FormGroup>

              <FormGroup>
                <Label for="branch">Branch</Label>
                <Input
                  id="branch"
                  name="branchId"
                  type="select"
                  value={inpval.branchId}
                  onChange={setdata}
                  placeholder="Select"
                >
                  <option>Colombo</option>
                  <option>Polonnaruwa</option>
                  <option>Kandy</option>
                  <option>Galewela</option>
                </Input>
              </FormGroup>

              <Button type="submit" onClick={addinpdata} className="btn mt-4 w-100 pt-2 pb-2 bg-primary border">Submit the Order</Button>
              <Button type="reset" className="btn mt-2 w-100 pt-2 pb-2 bg-danger border">Reset Details</Button>

            </CardBody>
          </Card>
        </Col>
      </Row>
    </Form>
  );
};


export default AddNewClient;

