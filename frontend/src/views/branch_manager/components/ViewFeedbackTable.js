import { Card, CardBody, CardTitle, CardSubtitle, Table, Button, ButtonGroup } from "reactstrap";
import user from "../../../assets/images/users/user.jpg";
import React , { useEffect, useState } from "react";
import UserController from "../controllers/user.controller";

// const tableData = [
//   {
//    
//  nic,
// rating,
// message
// //   },
// ];

const ViewFeedbackTable = () => {

  let [feedback, setfeedback] = useState([]);

  useEffect(() => {
    
    async function getfeedback() {
      try {
        let response = await UserController.getAllFeedback();
        if (response.error) {
          console.error("Error fetching tickets:", response.error);
        } else {
            setfeedback(response.data);
        }
      } catch (error) {
        console.error("Error fetching tickets:", error);
      }
    };
    

    getfeedback();

  }, []);
  

  return (
    <div>
      <Card>
        <CardBody>
          <CardTitle tag="h5">Feedback List</CardTitle>
          <CardSubtitle className="mb-2 text-muted" tag="h6">
            Feedback belongs to the branch
          </CardSubtitle>

          <Table className="no-wrap mt-3 align-middle" responsive borderless>
            <thead>
              <tr>
                
                <th>Feedback ID</th>
                <th>Client NIC</th>
                <th>Rating</th>
                <th>Message</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {feedback.map((tdata, index) => (
                <tr key={index} className="border-top">
                 
                  <td>{tdata.feedbackid}</td>
                  <td>{tdata.nic}</td>
                  <td>{tdata.rating}</td>  
                  <td>{tdata.message}</td> 
                  <td>
                    <Button  className="btn me-2" outline color="secondary" size="sm">Edit</Button>
                    <Button  className="btn" color="danger" size="sm">Delete</Button>
                  </td>             
                </tr>
              ))}
            </tbody>
          </Table>
        </CardBody>
      </Card>
    </div>
  );
};

export default ViewFeedbackTable;
