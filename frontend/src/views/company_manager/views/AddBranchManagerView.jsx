import {
    Card,
    Row,
    Col,
    CardTitle,
    CardBody,
    Button,
    Form,
    FormGroup,
    FormFeedback,
    Label,
    Input,
    Alert,
} from "reactstrap";

import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ManagerRoutes } from "../../../routes/all_user.routes.js";
import validator from "../../../validation/validation.js";
import DropdownOption from "../../../components/common/DropdownOption.jsx";
import UserController from "../controllers/user.controller.js";

const AddTransportAgent = () => {

    // Alert
    const [showSuccessDialog, setShowSuccessDialog] = useState(false);
    const hideSuccessDialog = () => { setShowSuccessDialog(false); navigate(ManagerRoutes.dashboard); }

    const [showErrorDialog, setShowErrorDialog] = useState(false);
    const hideErrorDialog = () => setShowErrorDialog(false);

    let {
        validateNIC,
        validateEmail,
        validateName,
        validateAddress,
        validatePhoneNumber,
    } = validator();


    // Create object for use navigator
    const navigate = useNavigate();

    // Dropdown state variables
    let [branches, setBranches] = useState([]);

    useEffect(() => {
        //Fetch all routes to fill dropdown
        async function fetchAllBranches() {
            let response = await UserController.getAllBranches();
            if (response.error) {
                alert(response.error);
            }
            else {
                setBranches(response);
            }
        }

        fetchAllBranches();
    }, []);

    // Map variable
    const [inputData, setInputData] = useState({
        nic: "",
        email: "",
        fullName: "",
        branchId: "",
    })

    // Validation data map
    const [validations, setValidations] = useState({
        nic: false,
        email: false,
        fullName: false,
        vehicleNumber: false,
    });

    // onChange Form validation
    const validateField = (name, value) => {
        switch (name) {
            case 'nic':
                return (!value == "");
            case 'email':
                return (validateEmail(value));
            case 'name':
                return (validateName(value));
            case 'vehicleNumber':
                return (!value == "");
            default:
                return true;
        }
    };

    // onChange
    const onChange = (e) => {
        console.log(e.target.value);
        const { name, value } = e.target;
        setInputData((preval) => {
            return {
                ...preval,
                [name]: value
            }
        })
        // onChange Form validation data set on change
        setValidations({
            ...validations,
            [name]: !validateField(name, value) // Not sign for conver false to true
        });
    }

    // Check form valid status to appear submit buttons
    const isFormValid = () => {
        for (const key in validations) {
            if (validations[key]) {
                return false;
            }
        }
        return true;
    };


    // onSubmit
    const onSubmit = async (e) => {

        e.preventDefault();

        const { nic, email, fullName, branchId } = inputData;

        try {
            const res = await UserController.addBranchManager(nic, email, fullName, branchId);

            // Error handling
            if (res.error) {
                // alert(res.error);
                setShowErrorDialog(true);
            }
            else {
                // alert(res.message);
                // navigate(BranchManagerRoutes.dashboard);
                setShowErrorDialog(false);
                setShowSuccessDialog(true);
            }
        }
        catch (e) {
            console.error(e);
            throw e;
        }
    }


    return (
        <Form>
            <Alert color="success" isOpen={showSuccessDialog} toggle={hideSuccessDialog}> Branch Manager Added Successfully!</Alert>
            <Alert color="danger" isOpen={showErrorDialog} toggle={hideErrorDialog}> Something Went Wrong! </Alert>
            <Row className="justify-content-center">
                <Col className="col-md-8">
                    <Card>
                        <CardTitle tag="h6" className="border-bottom p-3 mb-0">
                            <i className="bi bi-truck me-2"> </i>
                            Add a New Branch Manager
                        </CardTitle>
                        <CardBody>
                            <FormGroup>
                                <Label for="nic">Branch Agent NIC </Label>
                                <Input
                                    id="nic"
                                    name="nic"
                                    placeholder="Enter branch manager NIC"
                                    type="text"
                                    value={inputData.nic}
                                    onChange={onChange}
                                    invalid={validations.nic}
                                    required = {true}
                                />
                                <FormFeedback>Enter a valid NIC number</FormFeedback>
                            </FormGroup>
                            <FormGroup>
                                <Label for="email">E-mail</Label>
                                <Input
                                    id="email"
                                    name="email"
                                    placeholder="Enter branch manager email"
                                    type="email"
                                    onChange={onChange}
                                    value={inputData.email}
                                    invalid={validations.email}
                                    required = {true}
                                />
                                <FormFeedback>Enter a valid email address</FormFeedback>
                            </FormGroup>
                            <FormGroup>
                                <Label for="fullName">Full Name</Label>
                                <Input
                                    id="fullName"
                                    name="fullName"
                                    placeholder="Enter full name"
                                    type="text"
                                    value={inputData.fullName}
                                    onChange={onChange}
                                    invalid={validations.fullName}
                                    required = {true}
                                />
                                <FormFeedback>Enter a valid name</FormFeedback>
                            </FormGroup>

                            <FormGroup>
                                <Label for="branchId">Assign a Branch</Label>
                                <Input
                                    id="branchId"
                                    name="branchId"
                                    type="select"
                                    onChange={onChange}
                                    value={inputData.branchId}
                                    required = {true}
                                >
                                    {branches.map((branch) => {
                                        return (
                                            <DropdownOption
                                                key={branch.branchId}
                                                id={branch.branchId}
                                                value={branch.district}
                                                onChange={onChange}
                                            />
                                        );
                                    })}
                                </Input>
                            </FormGroup>

                            <Button type="submit" disabled={!isFormValid()} onClick={onSubmit} className="btn mt-4 w-100 pt-2 pb-2 bg-primary border">Add the Transport Agent</Button>
                            <Button type="reset" className="btn mt-2 w-100 pt-2 pb-2 bg-danger border">Reset Details</Button>

                        </CardBody>
                    </Card>
                </Col>
            </Row>
        </Form>
    );
};


export default AddTransportAgent;

