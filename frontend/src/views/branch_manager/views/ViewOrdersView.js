import { Row, Col, Table, Card, CardTitle, CardBody, CardSubtitle, Form, FormGroup, Input, FormFeedback, Container, Breadcrumb, BreadcrumbItem } from "reactstrap";
import ViewOrderTable from "../components/ViewOrdersTable";

const ViewOrders = () => {
  return (
    <Container>

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

      <Card>
        <Row>
          <Col lg="8">
            <CardBody className="align-items-center">
              <CardTitle tag="h5">Latest Orders</CardTitle>
              <CardSubtitle className="mb-2 text-muted" tag="h6">
                Overview of new orders
              </CardSubtitle>
            </CardBody>
          </Col>
          <Col lg="4">
            <CardBody>
              <Row>
                <Form>
                  <FormGroup>
                    <Input
                      id="district"
                      name="district"
                      placeholder="Enter branch district"
                      type="text"
                    // value={inputData.district}
                    // onChange={onChange}
                    // invalid={validations.district}
                    // required = {true}
                    />
                    <FormFeedback>Enter a valid district</FormFeedback>
                  </FormGroup>
                </Form>
              </Row>
            </CardBody>
          </Col>
        </Row>
      </Card>
      <Row>
        <Col lg="12">
          <ViewOrderTable />
        </Col>
      </Row>
    </Container>

  );
};

export default ViewOrders;
