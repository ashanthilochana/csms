import { Row, Col, Table, Card, CardTitle, CardBody } from "reactstrap";
import ViewOrderTable from "./components/ViewOrdersTable";

const ViewOrders = () => {
  return (
    <Row>

      <Col lg="12">
        <ViewOrderTable />
      </Col>
 
    </Row>
  );
};

export default ViewOrders;
