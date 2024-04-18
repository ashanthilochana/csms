import { Row, Col, Table, Card, CardTitle, CardBody } from "reactstrap";
import ViewReceivedOrderTable from "../components/ViewReceivedOrderTable.js";

const ViewOrders = () => {
  return (
    <Row>

      <Col lg="12">
        <ViewReceivedOrderTable />
      </Col>
 
    </Row>
  );
};

export default ViewOrders;
