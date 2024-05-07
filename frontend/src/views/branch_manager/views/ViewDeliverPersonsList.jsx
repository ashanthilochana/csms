import React, { useEffect, useState } from "react";
import { Card, CardBody, CardTitle, CardSubtitle, Table, Button, Modal, ModalHeader, ModalBody, FormFeedback,ModalFooter, Input, Label, FormGroup, Form, Row, Col, BreadcrumbItem, Breadcrumb, Container } from "reactstrap";
import UserService from "../services/user.service";
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';

const ViewDeliverPersonsList = () => {
  const [deliveryPersons, setDeliveryPersons] = useState([]);
  const [modal, setModal] = useState(false);
  const [selectedPerson, setSelectedPerson] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");

  const [formData, setFormData] = useState({
    nic: "",
    email: "",
    fullName: "",
    address: "",
    contactNumber: "",
    vehicleNumber: "",
    branchId: "1",
  });

  const [validations, setValidations] = useState({
    nic: false,
    email: false,
    fullName: false,
    address: false,
    contactNumber: false,
    vehicleNumber: false,
  });
  useEffect(() => {
    fetchDeliveryPersons();
  }, []);

  const fetchDeliveryPersons = async () => {
    try {
      const response = await UserService.getAllDeliveryPersons();
      setDeliveryPersons(response.data);
    } catch (error) {
      console.error("Error fetching delivery persons:", error);
    }
  };
  const updateDeliveryPerson = async () => {
    try {
      await UserService.updateDeliveryPerson(selectedPerson.nic, formData);
      await fetchDeliveryPersons()
    } catch (error) {

    } finally {
      setSelectedPerson()
      toggleModal()
    }
  };const deleteDeliveryPerson = async () => {
    try {
        await UserService.deleteDeliveryPerson(selectedPerson.nic);
        await fetchDeliveryPersons();
        toggleModal();
    } catch (error) {
        console.error("Error deleting delivery person:", error);
          
            alert('Cannot delete delivery person with active orders');
        
        toggleModal();
    }
};
const updateFormData = (name, value) => {
  setFormData((prevFormData) => ({
    ...prevFormData,
    [name]: value,
  }));

};
  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value.toLowerCase());
  };
  const toggleModal = () => {
    setModal(!modal);
  };
  const filteredPersons = deliveryPersons.filter(
    person =>
      person.fullName.toLowerCase().includes(searchQuery) ||
      person.email.toLowerCase().includes(searchQuery) ||
      person.nic.toLowerCase().includes(searchQuery)
  );

  const generatePDF = () => {
    const doc = new jsPDF();
    autoTable(doc, {
      head: [['#', 'Name', 'Email', 'NIC', 'Address', 'Contact Number']],
      body: filteredPersons.map((person, index) => [
        index + 1,
        person.fullName,
        person.email,
        person.nic,
        person.address,
        person.contactNumber
      ]),
      theme: 'striped'
    });
    doc.save('delivery_persons.pdf');
  };

  return (
    <div>
      <Container>
        <Form>
          <Row className="d-flex">
            <Col lg="8" className="align-content-center">
              <Breadcrumb>
                <BreadcrumbItem><a href="#">Home</a></BreadcrumbItem>
                <BreadcrumbItem><a href="#">Delivery Management</a></BreadcrumbItem>
                <BreadcrumbItem active>View All Delivery Persons</BreadcrumbItem>
              </Breadcrumb>
            </Col>
            <Col lg="3">
              <FormGroup>
                <Input
                  className="pt-2 pb-2"
                  id="deliveryPerson"
                  name="deliveryPerson"
                  placeholder="Search Delivery Persons..."
                  type="text"
                  value={searchQuery}
                  onChange={handleSearchChange}
                />
              </FormGroup>
            </Col>
            <Col lg="1">
              <Button color="primary" style={{ "marginTop": "3px" }}>Search</Button>
            </Col>
          </Row>
        </Form>
        <div style={{ display: "flex", justifyContent: "flex-end", marginBottom: 4 }}>
          <Button style={{ width: 200 }} onClick={generatePDF}>
            Generate Report
          </Button>
        </div>
        <Row>
          <Col lg="12">
            <Card>
              <CardBody>
                <CardTitle tag="h5">Delivery Person List</CardTitle>
                <CardSubtitle className="mb-2 text-muted" tag="h6">Delivery persons</CardSubtitle>
                <Table className="no-wrap mt-3 align-middle" responsive borderless>
                  <thead>
                    <tr>
                      <th> </th>
                      <th>Image</th>
                      <th>Name</th>
                      <th>Email</th>
                      <th>NIC</th>
                      <th>Address</th>
                      <th>Contact Number</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredPersons.map((person, index) => (
                      <tr key={index}>
                        <td>{index + 1}</td>
                        <td><img 
                        
                        style={{width : 60,height:60}}
                        src={person.imageUrl} /></td>
                        <td>{person.fullName}</td>
                        <td>{person.email}</td>
                        <td>{person.nic}</td>
                        <td>{person.address}</td>
                        <td>{person.contactNumber}</td>
                        <td>
                          <Button className="me-2" outline color="primary" size="sm" onClick={() => {
                            console.log(`person ${person}`)
                            setSelectedPerson(person);
                            setFormData(person)
                            setModal(true);
                          }}>Edit</Button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </Table>
              </CardBody>
            </Card>
            <Modal isOpen={modal} toggle={toggleModal}>
        <ModalHeader toggle={toggleModal}>Edit Delivery Person</ModalHeader>
        <ModalBody>
          <Form>
            <FormGroup>
              <Label for="nic">Delivery Person NIC</Label>
              <Input
                id="nic"
                name="nic"
                disabled
                placeholder="Enter delivery person's NIC"
                type="text"

                value={formData.nic}
                onChange={(e) => updateFormData("nic", e.target.value)}
                invalid={validations.nic}
                required
              />
              <FormFeedback>Enter a valid NIC number</FormFeedback>
            </FormGroup>
            <FormGroup>
              <Label for="email">E-mail</Label>
              <Input
                id="email"
                name="email"
                disabled={true}
                placeholder="Enter email address"
                type="email"
                onChange={(e) => updateFormData("email", e.target.value)}
                value={formData.email}
                invalid={validations.email}
                required
              />
              <FormFeedback>Enter a valid email address</FormFeedback>
            </FormGroup>
            <FormGroup>
              <Label for="fullName">Full Name</Label>
              <Input
                id="fullName"
                name="fullName"
                placeholder="Enter full name"
                type="text"
                value={formData.fullName}
                onChange={(e) => updateFormData("fullName", e.target.value)}
                invalid={validations.fullName}
                required
              />
              <FormFeedback>Enter a valid name</FormFeedback>
            </FormGroup>
            <FormGroup>
              <Label for="address">Address</Label>
              <Input
                id="address"
                name="address"
                placeholder="Enter delivery person's home address"
                type="text"
                value={formData.address}
                onChange={(e) => updateFormData("address", e.target.value)}
                invalid={validations.address}
                required
              />
              <FormFeedback>Enter a valid address</FormFeedback>
            </FormGroup>
            <FormGroup>
              <Label for="contactNumber">Contact Number</Label>
              <Input
                id="contactNumber"
                name="contactNumber"
                placeholder="Enter contact number"
                type="text"
                value={formData.contactNumber}
                onChange={(e) => updateFormData("contactNumber", e.target.value)}
                invalid={validations.contactNumber}
                required
              />
              <FormFeedback>Enter a valid contact number</FormFeedback>
            </FormGroup>
            <FormGroup>
              <Label for="vehicleNumber">Vehicle Number</Label>
              <Input
                id="vehicleNumber"
                name="vehicleNumber"
                placeholder="Enter vehicle number"
                type="text"
                value={formData.vehicleNumber}
                onChange={(e) => updateFormData("vehicleNumber", e.target.value)}
                invalid={validations.vehicleNumber}
                required
              />
              <FormFeedback>Enter a valid vehicle number</FormFeedback>
            </FormGroup>
          </Form>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={updateDeliveryPerson}>
            Update
          </Button>{" "}
          <Button color="danger" onClick={() => {
            deleteDeliveryPerson(selectedPerson.nic)
          }}>
            Delete
          </Button>
          <Button color="secondary" onClick={toggleModal}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>

          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ViewDeliverPersonsList;
