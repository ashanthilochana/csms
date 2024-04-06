import { Row, Col, Table, Card, CardTitle, CardBody } from "reactstrap";
import ViewClientsTable from "./components/ViewClientsTable";

const ViewClients = () => {
  return (
    <Row>

      <Col lg="12">
        <ViewClientsTable />
      </Col>
 
    </Row>
  );
};

export default ViewClients;
