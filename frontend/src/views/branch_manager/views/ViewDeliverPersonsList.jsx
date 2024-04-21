import React, { useEffect, useState } from "react";
import { Card, CardBody, CardTitle, CardSubtitle, Table, Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import BranchManagerService from "../services/branch_manager.service";

const ViewDeliverPersonsList = () => {
  const [deliveryPersons, setDeliveryPersons] = useState([]);
  const [modal, setModal] = useState(false);
  const [selectedPerson, setSelectedPerson] = useState(null);

  const toggleModal = () => {
    setModal(!modal);
  };

  const deleteDeliveryPerson = async () => {
    try {
      await BranchManagerService.deleteDeliveryPerson(selectedPerson.nic);
      setDeliveryPersons(deliveryPersons.filter(person => person.id !== selectedPerson.id));
      toggleModal();
    } catch (error) {
      console.error("Error deleting delivery person:", error);
    }
  };

  const confirmDelete = (person) => {
    setSelectedPerson(person);
    toggleModal();
  };

  useEffect(() => {
    const fetchDeliveryPersons = async () => {
      try {
        const response = await BranchManagerService.getAllDeliveryPersons();
        setDeliveryPersons(response.data);
      } catch (error) {
        console.error("Error fetching delivery persons:", error);
      }
    };

    fetchDeliveryPersons();
  }, []);

  return (
    <div>
      <Card>
        <CardBody>
          <CardTitle tag="h5">Delivery Person List</CardTitle>
          <CardSubtitle className="mb-2 text-muted" tag="h6">
            Delivery persons
          </CardSubtitle>

          <Table className="no-wrap mt-3 align-middle" responsive borderless>
            <thead>
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>Email</th>
                <th>NIC</th>
                <th>Address</th>
                <th>Contact Number</th>
                
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {deliveryPersons.map((person, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{person.fullName}</td>
                  <td>{person.email}</td>
                  <td>{person.nic}</td>
                  <td>{person.address}</td>
                  <td>{person.contactNumber}</td>
                  
                  <td>
                    <Button className="me-2" outline color="secondary" size="sm">
                      Edit
                    </Button>
                    <Button color="danger" size="sm" onClick={() => confirmDelete(person)}>
                      Delete
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </CardBody>
      </Card>

      <Modal isOpen={modal} toggle={toggleModal}>
        <ModalHeader toggle={toggleModal}>Confirm Delete</ModalHeader>
        <ModalBody>
          Are you sure you want to delete {selectedPerson && selectedPerson.fullName}?
        </ModalBody>
        <ModalFooter>
          <Button color="danger" onClick={deleteDeliveryPerson}>Delete</Button>{' '}
          <Button color="secondary" onClick={toggleModal}>Cancel</Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default ViewDeliverPersonsList;
