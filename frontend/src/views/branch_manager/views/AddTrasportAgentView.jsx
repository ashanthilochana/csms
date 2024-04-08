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
    Alert
  } from "reactstrap";
  
  import { useEffect, useState } from "react";
  import { useNavigate } from "react-router-dom";
  import BranchManagerController from "../controllers/branch_manager.controller";
  import { BranchManagerRoutes } from "../../../routes/all_user.routes";
  import validator from "../../../validation/validation.js";
  
  
  const AddTransportAgent = () => {
  
    // Alert
    const [showSuccessDialog, setShowSuccessDialog] = useState(false);
    const hideSuccessDialog = () => { setShowSuccessDialog(false); navigate(BranchManagerRoutes.dashboard); }
  
    const [showErrorDialog, setShowErrorDialog] = useState(false);
    const hideErrorDialog = () => setShowErrorDialog(false);
  
    let {
      validateNIC,
      validateEmail,
      validateName,
      validateAddress,
      validatePhoneNumber,
    } = validator();
  
  
    // Create object for use navigator
    const navigate = useNavigate();

    useEffect(() => {
        
    }, []);
    
    // Map variable
    const [inputData, setInputData] = useState({
      nic: "",
      email: "",
      name: "",
      vehicleNumber: "",
      routeId: "",
    })
  
    // Validation data map
    const [validations, setValidations] = useState({
      nic: false,
      email: false,
      name: false,
    });
  
    // onChange Form validation
    const validateField = (name, value) => {
      switch (name) {
        // case 'nic':
        //   return !validateNIC(value);
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
  
      const { nic, email, fullName, vehicleNumber, routeId } = inputData;
  
      try {
        const res = await BranchManagerController.addTransportAgent(nic, email, fullName, vehicleNumber, routeId);
  
        // Error handling
        if (res.error) {
          // alert(res.error);
          setShowErrorDialog(true);
        }
        else {
          // alert(res.message);
          // navigate(BranchManagerRoutes.dashboard);
          setShowErrorDialog(false);
          setShowSuccessDialog(true);
        }
      }
      catch (e) {
        console.error(e);
        throw e;
      }
    }
  
  
    return (
      <Form>
        <Alert color="success" isOpen={showSuccessDialog} toggle={hideSuccessDialog}> Transport Agent Added Successfully!</Alert>
        <Alert color="danger" isOpen={showErrorDialog} toggle={hideErrorDialog}> Something Went Wrong! </Alert>
        <Row className="justify-content-center">
          <Col className="col-md-8">
            <Card>
              <CardTitle tag="h6" className="border-bottom p-3 mb-0">
                <i className="bi bi-truck me-2"> </i>
                Add a New Transport Agent
              </CardTitle>
              <CardBody>
                <FormGroup>
                  <Label for="nic">Transport Agent NIC </Label>
                  <Input
                    id="nic"
                    name="nic"
                    placeholder="Enter transport agent NIC"
                    type="text"
                    value={inputData.nic}
                    onChange={onChange}
                    invalid={validations.nic}
                  />
                  <FormFeedback>Enter a valid NIC number</FormFeedback>
                </FormGroup>
                <FormGroup>
                  <Label for="email">E-mail</Label>
                  <Input
                    id="email"
                    name="email"
                    placeholder="Enter customer email"
                    type="email"
                    onChange={onChange}
                    value={inputData.email}
                    invalid={validations.email}
                  />
                  <FormFeedback>Enter a valid email address</FormFeedback>
                </FormGroup>
                <FormGroup>
                  <Label for="name">Full Name</Label>
                  <Input
                    id="name"
                    name="name"
                    placeholder="Enter full name"
                    type="text"
                    value={inputData.name}
                    onChange={onChange}
                    invalid={validations.name}
                  />
                  <FormFeedback>Enter a valid name</FormFeedback>
                </FormGroup>
                <FormGroup>
                  <Label for="vehicleNumber">Vehicle Number</Label>
                  <Input
                    id="vehicleNumber"
                    name="vehicleNumber"
                    placeholder="Enter transport agent's vehicle number"
                    type="textarea"
                    value={inputData.vehicleNumber}
                    onChange={onChange}
                  />
                </FormGroup>
  
                <FormGroup>
                <Label for="routeId">Assign a Route</Label>
                <Input
                  id="routeId"
                  name="routeId"
                  type="select"
                  onChange={onChange}
                  value={userInput.routeId}
                >
                  {routes.map((route) => {
                    return (
                      <DropdownOption
                        key={route.routeId}
                        id={route.routeId}
                        value={route.routeName}
                        onChange={onChange}
                      />
                    );
                  })}
                </Input>
              </FormGroup>
  
                <Button type="submit" disabled={!isFormValid()} onClick={onSubmit} className="btn mt-4 w-100 pt-2 pb-2 bg-primary border">Add the Client</Button>
                <Button type="reset" className="btn mt-2 w-100 pt-2 pb-2 bg-danger border">Reset Details</Button>
  
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Form>
    );
  };
  
  
  export default AddTransportAgent;
  
  