import {
    Card,
    CardBody,
    CardHeader,
    CardSubtitle,
    CardTitle,
    Container,
    FormGroup,
    Input,
    Row,
    Alert,
    Col,
    Form,
    Label,
    FormFeedback,
    Button
} from "reactstrap";

const TrackOrderView = () => {



    return (

        <Container>

            <Form>
                {/* <Alert color="success" isOpen={showSuccessDialog} toggle={hideSuccessDialog}> Route Added Successfully!</Alert> */}
                {/* <Alert color="danger" isOpen={showErrorDialog} toggle={hideErrorDialog}> A route already exist withing these branches </Alert> */}
                <Row className="justify-content-center">
                    <Col className="col-md-8">
                        <Card>
                            <CardTitle tag="h6" className="border-bottom p-3 mb-0">
                                <i className="bi bi-sign-turn-right me-2"> </i>
                                Track Order
                            </CardTitle>
                            <CardBody>
                                <FormGroup>
                                    <Label for="routeName">Order ID</Label>
                                    <Input
                                        id="routeName"
                                        name="routeName"
                                        placeholder="Enter the order ID"
                                        type="text"
                                        // value={inputData.routeName}
                                        // onChange={onChange}
                                        // invalid={validations.routeName}
                                        required={true}
                                    />
                                    <FormFeedback>Enter a valid route name</FormFeedback>
                                </FormGroup>

                                <Button type="submit" className="btn mt-4 w-100 pt-2 pb-2 bg-primary border">Track Order</Button>

                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </Form>

            <Row className="justify-content-center">
                <Col lg="8">
                    <Card>
                        <CardTitle tag="h6" className="border-bottom p-3 mb-0">
                            <i className="bi bi-sign-turn-right me-2"> </i>
                            Order Details
                        </CardTitle>
                        <CardBody>
                            <Container>
                                <Row>Order ID: P0001</Row><br />
                                <Row>Order ID: P0001</Row><br />
                                <Row>Order ID: P0001</Row><br />
                                <Row>Order ID: P0001</Row><br />
                                <Row>Order ID: P0001</Row><br />
                                <Row>Order ID: P0001</Row><br />
                                <Row>Order ID: P0001</Row><br />
                                <Row>Order ID: P0001</Row><br />
                                <Row>Order ID: P0001</Row><br />
                            </Container>

                        </CardBody>
                    </Card>
                </Col>
            </Row>

        </Container>


    );
};

export default TrackOrderView;