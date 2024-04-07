import react, { useEffect, useState } from "react";

import { useNavigate } from "react-router-dom";

import AdminController from "./controllers/branch_manager.controller";

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

// Import cotrollers

// Import npms
import { format } from "date-fns";

const currentDate = format(new Date(), "yyyy-MM-dd");

const AddNewOrder = () => {
  // Create object for use navigator
  const navigate = useNavigate();

  // Map variable
  const [userInput, setUserInput] = useState({
    weight: "",
    sendingDate: "",
    paymentDate: "",
    packageTypes: "",
    sendingBranch: "",
    receivingBranch: "",
    specialNotes: "",
    orderStatus: "",
    sender: "",
    receiver: "",
    contactNumber: "",
    address: "",
  });

  let [formattedSendingDate, setFormattedSendingDate] = useState();

  // Variable formatting
  useEffect(() => {
    const _formattedSendingDate = (
      userInput.sendingDate === null
        ? new Date()
        : new Date(userInput.sendingDate)
    )
      .toISOString()
      .split("T")[0];

      setFormattedSendingDate(_formattedSendingDate);
  }, [userInput]);

  // Set data to inpval map from form
  const onChanged = (e) => {
    console.log(e.target.value);
    const { name, value } = e.target;
    setUserInput((preval) => {
      return {
        ...preval,
        [name]: value,
      };
    });
  };

  // Call controller addOrder method
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
      const res = await AdminController.addOrder(
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
        address
      );

      // Error handling
      if (res.error) {
        alert(res.error);
      } else {
        //show success message in a suitable way
        navigate("/");
        // setUdata(data);
        console.log("Order Added Succeccfully");
      }
    } catch (e) {
      console.error(e);
      throw e;
    }
  };

  return (
    <Form>
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
                />
              </FormGroup>
              <FormGroup>
                <Label for="sendingDate">Sending Date</Label>
                <Input
                  id="sendingDate"
                  name="sendingDate"
                  value={formattedSendingDate}
                  placeholder="Enter sending date"
                  type="date"
                />
              </FormGroup>
              <FormGroup>
                <Label for="paymentDate">Payment Date</Label>
                <Input
                  id="paymentDate"
                  name="paymentDate"
                  value={formattedSendingDate}
                  placeholder="Enter payment date"
                  type="date"
                />
              </FormGroup>
              <FormGroup>
                <Label for="packageTypes">Package Types</Label>
                <Input id="packageTypes" name="packageTypes" type="select">
                  <option>Glass</option>
                  <option>Gift</option>
                </Input>
              </FormGroup>
              <FormGroup>
                <Label for="sendingBranch">Sending Branch</Label>
                <Input id="sendingBranch" name="sendingBranch" type="select">
                  <option>Colombo</option>
                  <option>Polonnaruwa</option>
                  <option>Kandy</option>
                  <option>Galewela</option>
                </Input>
              </FormGroup>
              {/* <FormGroup>
                <Label for="exampleSelectMulti">Select Multiple</Label>
                <Input
                  id="exampleSelectMulti"
                  multiple
                  name="selectMulti"
                  type="select"
                >
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                </Input>
              </FormGroup> */}
              <FormGroup>
                <Label for="receivingBranch">Receiving Branch</Label>
                <Input
                  id="receivingBranch"
                  name="receivingBranchs"
                  type="select"
                >
                  <option>Colombo</option>
                  <option>Polonnaruwa</option>
                  <option>Kandy</option>
                  <option>Galewela</option>
                </Input>
              </FormGroup>
              <FormGroup>
                <Label for="exampleText">Speicial Notes</Label>
                <Input
                  id="exampleText"
                  name="text"
                  type="textarea"
                  placeholder="If you have any special notes. Type here..."
                />
              </FormGroup>
              {/* <legend className="mt-2">Order Status</legend> */}
              <FormGroup>
                <Label for="orderStatus">Order Status</Label>
                <Input id="orderStatus" name="orderStatus" type="select">
                  <option>Registered</option>
                  <option>On going</option>
                  <option>Received</option>
                  <option>Delivered</option>
                </Input>
              </FormGroup>
              {/* <FormGroup>
                <Label for="exampleFile">File</Label>
                <Input id="exampleFile" name="file" type="file" />
                <FormText>
                  This is some placeholder block-level help text for the above
                  input. It's a bit lighter and easily wraps to a new line.
                </FormText>
              </FormGroup> */}
              {/* <FormGroup tag="fieldset">
                <legend>Radio Buttons</legend>
                <FormGroup check>
                  <Input name="radio1" type="radio" />{" "}
                  <Label check className="form-label">
                    Option one is this and that—be sure to include why it's
                    great
                  </Label>
                </FormGroup>
                <FormGroup check>
                  <Input name="radio1" type="radio" />{" "}
                  <Label check className="form-label">
                    Option two can be something else and selecting it will
                    deselect option one
                  </Label>
                </FormGroup>
                <FormGroup check disabled>
                  <Input disabled name="radio1" type="radio" />{" "}
                  <Label check>Option three is disabled</Label>
                </FormGroup>
              </FormGroup> */}
            </CardBody>
          </Card>
        </Col>

        <Col className="col-md-4">
          <Card>
            <CardBody>
              <legend className="mt-2">Sender</legend>
              <FormGroup>
                <Label for="senderNIC">Sender</Label>
                <Input
                  id="senderNIC"
                  name="senderNIC"
                  placeholder="Enter sender NIC Number"
                  type="text"
                />
              </FormGroup>
              <legend className="mt-2">Receiver</legend>
              <FormGroup>
                <Label for="receiverName">Name</Label>
                <Input
                  id="receiverName"
                  name="receiverName"
                  placeholder="Enter packge receiver name"
                  type="text"
                />
              </FormGroup>
              <FormGroup>
                <Label for="receiverContact">Contact Number</Label>
                <Input
                  id="receiverContact"
                  name="receiverContact"
                  placeholder="Enter receiver contact number"
                  type="number"
                />
              </FormGroup>
              <FormGroup>
                <Label for="receivingAddress">Address</Label>
                <Input
                  id="receivingAddress"
                  name="receivingAddress"
                  placeholder="Enter destination address"
                  type="textarea"
                />
              </FormGroup>
              <legend className="mt-2">
                Courier Fee - <b>Rs. 5,000</b>
              </legend>
              {/* <FormGroup check className="form-label">
                <Input type="checkbox" /> <Label check>Check me out</Label>
              </FormGroup> */}
              <Button className="btn mt-4 w-100 pt-2 pb-2 bg-primary border">
                Submit the Order
              </Button>
              <Button className="btn mt-2 w-100 pt-2 pb-2 bg-danger border">
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

// import {
//   Card,
//   Row,
//   Col,
//   CardTitle,
//   CardBody,
//   Button,
//   Form,
//   FormGroup,
//   Label,
//   Input,
//   FormText,
// } from "reactstrap";

// const AddNewOrder = () => {
//   return (
//     <Form>
//       <Row>
//         <Col className="col-md-8">

//           <Card>
//             <CardTitle tag="h6" className="border-bottom p-3 mb-0">
//               <i className="bi bi-plus me-2"> </i>
//               Add a New Order
//             </CardTitle>
//             <CardBody>

//               <FormGroup>
//                 <Label for="exampleEmail">Weight (g)</Label>
//                 <Input
//                   id="packageWeight"
//                   name="weight"
//                   placeholder="Enter packge weight"
//                   type="number"
//                 />
//               </FormGroup>
//               <FormGroup>
//                 <Label for="examplePassword">Password</Label>
//                 <Input
//                   id="examplePassword"
//                   name="password"
//                   placeholder="password placeholder"
//                   type="password"
//                 />
//               </FormGroup>
//               <FormGroup>
//                 <Label for="exampleSelect">Select</Label>
//                 <Input id="exampleSelect" name="select" type="select">
//                   <option>1</option>
//                   <option>2</option>
//                   <option>3</option>
//                   <option>4</option>
//                   <option>5</option>
//                 </Input>
//               </FormGroup>
//               <FormGroup>
//                 <Label for="exampleSelectMulti">Select Multiple</Label>
//                 <Input
//                   id="exampleSelectMulti"
//                   multiple
//                   name="selectMulti"
//                   type="select"
//                 >
//                   <option>1</option>
//                   <option>2</option>
//                   <option>3</option>
//                   <option>4</option>
//                   <option>5</option>
//                 </Input>
//               </FormGroup>
//               <FormGroup>
//                 <Label for="exampleText">Text Area</Label>
//                 <Input id="exampleText" name="text" type="textarea" />
//               </FormGroup>
//               <FormGroup>
//                 <Label for="exampleFile">File</Label>
//                 <Input id="exampleFile" name="file" type="file" />
//                 <FormText>
//                   This is some placeholder block-level help text for the above
//                   input. It's a bit lighter and easily wraps to a new line.
//                 </FormText>
//               </FormGroup>
//               <FormGroup tag="fieldset">
//                 <legend>Radio Buttons</legend>
//                 <FormGroup check>
//                   <Input name="radio1" type="radio" />{" "}
//                   <Label check className="form-label">
//                     Option one is this and that—be sure to include why it's
//                     great
//                   </Label>
//                 </FormGroup>
//                 <FormGroup check>
//                   <Input name="radio1" type="radio" />{" "}
//                   <Label check className="form-label">
//                     Option two can be something else and selecting it will
//                     deselect option one
//                   </Label>
//                 </FormGroup>
//                 <FormGroup check disabled>
//                   <Input disabled name="radio1" type="radio" />{" "}
//                   <Label check>Option three is disabled</Label>
//                 </FormGroup>
//               </FormGroup>

//             </CardBody>
//           </Card>
//         </Col>

//         <Col className="col-md-4">
//           <Card>
//             <CardBody>
//             <legend className="mt-2">Sender</legend>
//               <FormGroup>
//                 <Label for="exampleEmail">Sender</Label>
//                 <Input
//                   id="exampleEmail"
//                   name="email"
//                   placeholder="Enter the NIC Number"
//                   type="email"
//                 />
//               </FormGroup>
//               <legend className="mt-2">Receiver</legend>
//               <FormGroup>
//                 <Label for="exampleEmail">Name</Label>
//                 <Input
//                   id="exampleEmail"
//                   name="email"
//                   placeholder="with a placeholder"
//                   type="email"
//                 />
//               </FormGroup>
//               <FormGroup>
//                 <Label for="exampleEmail">NIC</Label>
//                 <Input
//                   id="exampleEmail"
//                   name="email"
//                   placeholder="with a placeholder"
//                   type="email"
//                 />
//               </FormGroup>
//               <FormGroup>
//                 <Label for="exampleEmail">Address</Label>
//                 <Input
//                   id="exampleEmail"
//                   name="email"
//                   placeholder="with a placeholder"
//                   type="email"
//                 />
//               </FormGroup>
//               {/* <FormGroup check className="form-label">
//                 <Input type="checkbox" /> <Label check>Check me out</Label>
//               </FormGroup> */}
//               <Button className="btn mt-4 w-100 pt-2 pb-2 bg-primary border">Submit the Order</Button>
//               <Button className="btn mt-2 w-100 pt-2 pb-2 bg-danger border">Reset Details</Button>
//             </CardBody>
//           </Card>
//         </Col>

//       </Row>
//     </Form>
//   );
// };

// export default AddNewOrder;
