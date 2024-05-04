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
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import UserController from "../controllers/user.controller.js";



const TrackOrderView = () => {

    const navigate = useNavigate();

    const [orderId, setOrderId] = useState(null);

    const checkOrderExistingAndNavigate = async (orderId) => {
        
        try {
            const response = await UserController.checkOrderExistingStatus(orderId);
            console.log(response);
        }
        catch (error) {
            console.log(error);
        }

        // For now, we will just navigate to the order details page
        navigate(`/branch-manager/orders/${orderId}`);
    }

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
                                        value={orderId}
                                        onChange={(e) => setOrderId(e.target.value)}
                                        required={true}
                                    />
                                    <FormFeedback>Enter a valid route name</FormFeedback>
                                </FormGroup>

                                <Button type="submit" className="btn mt-4 w-100 pt-2 pb-2 bg-primary border" onClick={
                                    () => {
                                        checkOrderExistingAndNavigate(orderId); 
                                    }
                                }>Track Order</Button>

                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </Form>

        </Container>


    );
};

export default TrackOrderView;