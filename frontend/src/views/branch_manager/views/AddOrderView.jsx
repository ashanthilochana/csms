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

import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { BranchManagerRoutes } from "../../../routes/all_user.routes";
import useCookie from "../../../hooks/useCookies.js";
import validator from "../../../validation/validation.js";
import Select from "react-select";


//New import for component dropdown option
import DropdownOption from "../../../components/common/DropdownOption.jsx";
// Import frontend controller
import BranchManagerController from "../controllers/branch_manager.controller.js";

// Get current date and format it as yyyy-mm-dd
import { format } from "date-fns";


const AddNewOrder = () => {

  let [clientNICs, setClientNICs] = useState([]);
  let [selectedSenderNIC, setSelectedSenderNIC] = useState("");

  // Alert
  const [showSuccessDialog, setShowSuccessDialog] = useState(false);
  const hideSuccessDialog = () => { setShowSuccessDialog(false); navigate(BranchManagerRoutes.dashboard); }

  const [showErrorDialog, setShowErrorDialog] = useState(false);
  const hideErrorDialog = () => setShowErrorDialog(false);

  // Get current date
  const currentDate = format(new Date(), "yyyy-MM-dd");

  // Create object for use navigator
  const navigate = useNavigate();

  // Create an object to use cookies
  let [getCookie, setCookie] = useCookie();

  // Dropdown state variables
  let [branches, setBranches] = useState([]);
  let [packageTypes, setPackageTypes] = useState([]);
  let [orderStatus, setOrderStatus] = useState([]);

  // Fetch dropdown data [RUN ONE TIME WHEN PAGE LOADING]
  useEffect(() => {

    //Fetch branches to fill dropdown
    async function fetchAllBranches() {
      let response = await BranchManagerController.getAllBranches();
      if (response.error) {
        alert(response.error);
      }
      else {
        setBranches(response.data);
      }
    }

    //Fetch all packages types to fill dropdown
    async function fetchAllPackageTypes() {
      let response = await BranchManagerController.getAllPackageTypes();
      if (response.error) {
        alert(response.error);
      }
      else {
        setPackageTypes(response.data);
      }
    }

    //Fetch all  order satatus to fill dropdown
    async function fetchAllOrderStatus() {
      let response = await BranchManagerController.getAllOrderStatus();
      if (response.error) {
        alert(response.error);
      }
      else {
        setOrderStatus(response.data);
      }
    }

    async function fetchAllClientNICs() {
      let response = await BranchManagerController.getAllClientNICs();
      if (response.error) {
        alert(response.error);
      } else {
        setClientNICs(response.data);
      }
    }

    // get user branch with cookies
    let branchId = getCookie('user-branch-id');

    // Save previous data and save new data
    setInputData((prev) => {
      return { ...prev, sendingBranch: branchId, receivingBranch : branchId };
    });

    fetchAllBranches();
    fetchAllPackageTypes();
    fetchAllOrderStatus();
    fetchAllClientNICs();
  }, []);

  // Map variable
  const [userInput, setInputData] = useState({
    weight: "",
    sendingDate: currentDate,
    paymentDate: currentDate,
    packageTypes: 1,
    sendingBranch: "",
    receivingBranch: "",
    specialNotes: "",
    orderStatus: 1,
    sender: "",
    receiver: "",
    contactNumber: "",
    address: "",
  });

  let [courierFee, setCourierFee] = useState(0.0);

  useEffect(() => {
    async function getFee() {
      var regex = /^\d+(\.\d+)?$/;
      let valid = regex.test(userInput.weight);
      if (!valid) {
        setCourierFee(0.0);
      } else {
        let { fee } = await BranchManagerController.getCourierFee(
          userInput.weight,
          userInput.packageTypes
        );
        setCourierFee(fee);
      }
    }

    getFee();
  }, [userInput.weight, userInput.packageTypes]);

  // Validation regex
  let {
    validateNIC,
    validateEmail,
    validateName,
    validateAddress,
    validatePhoneNumber,
  } = validator();

  // Validation data map
  const [validations, setValidations] = useState({
    weight: false,
    receiver: false,
    contactNumber: false,
  });


  // onChange Form validation
  const validateField = (name, value) => {
    switch (name) {
      case 'weight':
        return (value > 0 && value < 9999999);
      case 'receiver':
        return (validateName(value));
      case 'contactNumber':
        return (validatePhoneNumber(value));
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

  const handleSenderChange = (e) => {
    setSelectedSenderNIC(e);
    setInputData((prevOptions) => {
      return {
        ...prevOptions,
        sender: e.value,
      };
    });
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    const {
      weight,
      sendingDate,
      paymentDate,
      packageTypes,
      sendingBranch,
      receivingBranch,
      specialNotes,
      orderStatus,
      sender,
      receiver,
      contactNumber,
      address,
    } = userInput;

    try {
      const res = await BranchManagerController.addOrder(
        weight,
        sendingDate,
        paymentDate,
        parseInt(packageTypes),
        parseInt(sendingBranch),
        parseInt(receivingBranch),
        specialNotes,
        parseInt(orderStatus),
        sender,
        receiver,
        contactNumber,
        address
      );

      // Error handling
      if (res.error) {
        // alert(res.error);
        setShowErrorDialog(true);
      } else {
        // navigate(BranchManagerRoutes.dashboard)
        // setUdata(data);
        setShowErrorDialog(false);
        setShowSuccessDialog(true);
        console.log("Order Added Succeccfully");
      }
    } catch (e) {
      console.error(e);
      throw e;
    }
  };

  return (
    <Form>
      <Alert color="success" isOpen={showSuccessDialog} toggle={hideSuccessDialog}> Order Placed Successfully!</Alert>
      <Alert color="danger" isOpen={showErrorDialog} toggle={hideErrorDialog}> Something Went Wrong! </Alert>
      <Row>
        <Col className="col-md-8">
          <Card>
            <CardTitle tag="h6" className="border-bottom p-3 mb-0">
              <i className="bi bi-plus me-2"> </i>
              Add a New Order
            </CardTitle>
            <CardBody>
              <FormGroup>
                <Label for="exampleEmail">Weight (g)</Label>
                <Input
                  id="packageWeight"
                  name="weight"
                  placeholder="Enter packge weight"
                  type="number"
                  invalid={validations.weight}
                  onChange={onChange}
                  value={userInput.weight}
                  required = {true}
                />
                <FormFeedback>Invalid weight</FormFeedback>
              </FormGroup>
              <FormGroup>
                <Label for="sendingDate">Sending Date</Label>
                <Input
                  id="sendingDate"
                  name="sendingDate"
                  placeholder="Enter sending date"
                  type="date"
                  onChange={onChange}
                  value={userInput.sendingDate}
                  required = {true}
                // value={formattedSendingDate}
                />
              </FormGroup>
              <FormGroup>
                <Label for="paymentDate">Payment Date</Label>
                <Input
                  id="paymentDate"
                  name="paymentDate"
                  placeholder="Enter payment date"
                  type="date"
                  // value={formattedSendingDate}
                  onChange={onChange}
                  value={userInput.paymentDate}
                  required = {true}
                />
              </FormGroup>
              <FormGroup>
                <Label for="packageTypes">Package Types</Label>
                <Input
                  id="packageTypes"
                  name="packageTypes"
                  type="select"
                  onChange={onChange}
                  value={userInput.packageTypes}
                  required = {true}
                >
                  {packageTypes.map((packageType) => {
                    return (
                      <DropdownOption
                        key={packageType.packageTypeId}
                        id={packageType.packageTypeId}
                        value={packageType.packageType}
                        onChange={onChange}
                      />
                    );
                  })}
                </Input>
              </FormGroup>
              <FormGroup>
                <Label for="sendingBranch">Sending Branch</Label>
                <Input
                  id="sendingBranch"
                  name="sendingBranch"
                  type="select"
                  onChange={onChange}
                  value={userInput.sendingBranch}
                  disabled = {true}
                  required = {true}
                >
                  {branches.map((branch) => {
                    return (
                      <DropdownOption
                        key={branch.branchId}
                        id={branch.branchId}
                        value={branch.district}
                        onChange={onChange}
                      />
                    );
                  })}
                </Input>
              </FormGroup>

              <FormGroup>
                <Label for="receivingBranch">Receiving Branch</Label>
                <Input
                  id="receivingBranch"
                  name="receivingBranch"
                  type="select"
                  onChange={onChange}
                  value={userInput.receivingBranch}
                  required = {true}
                >
                  {branches.map((branch) => {
                    return (
                      <DropdownOption
                        key={branch.branchId}
                        id={branch.branchId}
                        value={branch.district}
                        onChange={onChange}
                      />
                    );
                  })}
                </Input>
              </FormGroup>
              <FormGroup>
                <Label for="specialNotes">Speicial Notes</Label>
                <Input
                  id="specialNotes"
                  name="specialNotes"
                  type="textarea"
                  placeholder="If you have any special notes. Type here..."
                  onChange={onChange}
                  value={userInput.specialNotes}
                />
              </FormGroup>
              {/* <legend className="mt-2">Order Status</legend> */}
              <FormGroup>
                <Label for="orderStatus">Order Status</Label>
                <Input
                  id="orderStatus"
                  name="orderStatus"
                  type="select"
                  onChange={onChange}
                  value={userInput.orderStatus}
                  required = {true}
                >
                  {orderStatus.map((orderStat) => {
                    return (
                      <DropdownOption
                        key={orderStat.statusId}
                        id={orderStat.statusId}
                        value={orderStat.status}
                        onChange={onChange}
                      />
                    );
                  })}
                </Input>
              </FormGroup>
            </CardBody>
          </Card>
        </Col>

        <Col className="col-md-4">
          <Card>
            <CardBody>
              <legend className="mt-2">Sender</legend>
              <FormGroup>
                <Label for="sender">Sender</Label>
                {/* <Input
                  id="sender"
                  name="sender"
                  placeholder="Enter sender NIC Number"
                  type="text"
                  onChange={onChange}
                  value={userInput.sender}
                /> */}
                <Select
                  id="sender"
                  name="sender"
                  value={selectedSenderNIC}
                  onChange={handleSenderChange}
                  options={clientNICs}
                  required = {true}
                />
              </FormGroup>
              <legend className="mt-2">Receiver</legend>
              <FormGroup>
                <Label for="receiver">Name</Label>
                <Input
                  id="receiver"
                  name="receiver"
                  placeholder="Enter packge receiver name"
                  type="text"
                  invalid={validations.receiver}
                  onChange={onChange}
                  value={userInput.receiver}
                  required = {true}
                />
                <FormFeedback>Invalid name</FormFeedback>
              </FormGroup>
              <FormGroup>
                <Label for="contactNumber">Contact Number</Label>
                <Input
                  id="contactNumber"
                  name="contactNumber"
                  placeholder="Enter receiver contact number"
                  type="number"
                  invalid={validations.contactNumber}
                  onChange={onChange}
                  value={userInput.contactNumber}
                  required = {true}
                />
                <FormFeedback>Invalid contact number</FormFeedback>
              </FormGroup>
              <FormGroup>
                <Label for="address">Address</Label>
                <Input
                  id="address"
                  name="address"
                  placeholder="Enter destination address"
                  type="textarea"
                  onChange={onChange}
                  value={userInput.address}
                  required = {true}
                />
              </FormGroup>
              <legend className="mt-2">
                Courier Fee - <b>Rs. {courierFee}</b>
              </legend>
              {/* <FormGroup check className="form-label">
                <Input type="checkbox" /> <Label check>Check me out</Label>
              </FormGroup> */}

              <Button type="submit" disabled={!isFormValid()} onClick={onSubmit} className="btn mt-4 w-100 pt-2 pb-2 bg-primary border">
                Submit the Order
              </Button>
              <Button
                type="reset"
                className="btn mt-2 w-100 pt-2 pb-2 bg-danger border"
              >
                Reset Details
              </Button>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Form>
  );
};

export default AddNewOrder;
