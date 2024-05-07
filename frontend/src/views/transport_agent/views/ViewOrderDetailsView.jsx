import {
  Row,
  Col,
  Form,
  FormGroup,
  Input,
  FormFeedback,
  Container,
  Breadcrumb,
  BreadcrumbItem,
  Button
} from "reactstrap";

import ViewOrderTable from "../components/ViewOrdersTable";

const ViewOrderDetailsView = () => {

  const phoneNumber = '+94770685395'; // Adjusted to international format
  const message = encodeURIComponent("Hello Manager , Im Transport Agent you, I would like to discuss order details."); // URL encoded message



  return (
    <Container>

      {/* Breadcrumb and search bar */}
      <Form>
        <Row className="d-flex">
          <Col lg="8" className="align-content-center">
            {/* Breadcrumbs */}
            <Breadcrumb>
              <BreadcrumbItem>
                <a href="#">
                  Home
                </a>
              </BreadcrumbItem>
              <BreadcrumbItem>
                <a href="#">
                  Order Manamagement
                </a>
              </BreadcrumbItem>
              <BreadcrumbItem active>
                View Latest Orders
              </BreadcrumbItem>
            </Breadcrumb>
          </Col>
          <Col lg="3">
            <FormGroup>
              <Input
                className="pt-2 pb-2"
                id="district"
                name="district"
                placeholder="Search Orders..."
                type="text"
              // value={inputData.district}
              // onChange={onChange}
              // invalid={validations.district}
              // required = {true}
              />
              <FormFeedback>Enter a valid district</FormFeedback>
            </FormGroup>
          </Col>
          <Col lg="1">
            <Button style={{ "margin-top": "3px" }} color="primary">Search</Button>
          </Col>
        </Row>
      </Form>

      <Row>
        <Col className="mb-4">
        <Button color="success" href={`https://wa.me/${phoneNumber}?text=${message}`}>Contact Branch Manager</Button>
        </Col>
      </Row>

      <Row>
        <Col lg="12">
          <ViewOrderTable />
        </Col>
      </Row>
    </Container>

  );
};

export default ViewOrderDetailsView;
