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


import ViewMyRouteTable from "../components/ViewMyRouteTable";

const ViewOrderDetailsView = () => {
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
                  TransportAgent Manamagement
                </a>
              </BreadcrumbItem>
              <BreadcrumbItem active>
                View All Routes
              </BreadcrumbItem>
            </Breadcrumb>
          </Col>
          <Col lg="3">
            <FormGroup>
              <Input
                className="pt-2 pb-2"
                id="routes"
                name="routes"
                placeholder="Search Routes..."
                type="text"
              />
              <FormFeedback>Enter a valid Branch Name</FormFeedback>
            </FormGroup>
          </Col>
          <Col lg="1">
            <Button style={{"margin-top" : "3px"}} color="primary">Search</Button>
          </Col>
        </Row>
      </Form>

      <Row>
        <Col lg="12">
        <ViewMyRouteTable/>
        </Col>
      </Row>
    </Container>

  );
};

export default ViewOrderDetailsView;
