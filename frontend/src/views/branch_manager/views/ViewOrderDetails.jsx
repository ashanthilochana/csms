import {
  Row,
  Col,
  Card,
  CardBody,
  Container} from "reactstrap";



const ViewOrders = () => {

  // crete map for save icon details
  const props = {
    earning: "Earnings",
    subtitle: "Total Earnings",
    bg: "bg-danger",
    icon: "bs bs-wallet2",
  };

  return (
    <Container>
      <Row>
        <Col md={3}>
          <Card>
            <CardBody>
              <div className="d-flex">
                <div className={`circle-box lg-box d-inline-block ${props.bg}`}>
                  <i className={props.icon}></i>
                </div>
                <div className="ms-3">
                  <h3 className="mb-0 font-weight-bold">{props.earning}</h3>
                  <small className="text-muted">{props.subtitle}</small>
                </div>
              </div>
            </CardBody>
          </Card>
        </Col>
        <Col md={3}>
          <Card>
            <CardBody>
              {/* Content for second column */}
            </CardBody>
          </Card>
        </Col>
        <Col md={3}>
          <Card>
            <CardBody>
              {/* Content for third column */}
            </CardBody>
          </Card>
        </Col>
        <Col md={3}>
          <Card>
            <CardBody>
              {/* Content for fourth column */}
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default ViewOrders;
