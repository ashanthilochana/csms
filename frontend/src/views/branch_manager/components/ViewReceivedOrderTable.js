import { Card, CardBody, CardTitle, CardSubtitle, Table, Button, ButtonGroup } from "reactstrap";

const tableData = [
  {
    orderId: "0001",
    orderDate: "2024-12-02",
    receiver: "Kavindu Senaviranthna",
    address: "No.123, Kandy, Sri Lanka",
    contactNumber: "0703024553"
  },
  {
    orderId: "0001",
    orderDate: "2024-12-02",
    receiver: "Kavindu Senaviranthna",
    address: "No.123, Kandy, Sri Lanka",
    contactNumber: "0703024553"
  },
  {
    orderId: "0001",
    orderDate: "2024-12-02",
    receiver: "Kavindu Senaviranthna",
    address: "No.123, Kandy, Sri Lanka",
    contactNumber: "0703024553"
  },
  {
    orderId: "0001",
    orderDate: "2024-12-02",
    receiver: "Kavindu Senaviranthna",
    address: "No.123, Kandy, Sri Lanka",
    contactNumber: "0703024553"
  },
  
];

const ViewReceivedOrderTable = () => {
  return (
    <div>
      <Card>
        <CardBody>
          <CardTitle tag="h5">Received Orders</CardTitle>
          <CardSubtitle className="mb-2 text-muted" tag="h6">
            All received orders
          </CardSubtitle>

          <Table className="no-wrap mt-3 align-middle" responsive borderless>
            <thead>
              <tr>
                <th>Order ID</th>
                <th>Order Date</th>
                <th>Receiver</th>
                <th>Address</th>
                <th>Contact Number</th>
                <th className="text-center">Action</th>
              </tr>
            </thead>

            <tbody>
              {tableData.map((tdata, index) => (
                <tr key={index} className="border-top">
                  <td>
                    <div className="d-flex align-items-center p-2">
                      <div className="ms-3">
                        <h6 className="mb-0">{tdata.orderId}</h6>
                      </div>
                    </div>
                  </td>
                  <td>{tdata.orderDate}</td>
                  <td>{tdata.receiver}</td>
                  <td>{tdata.address}</td>
                  <td>{tdata.contactNumber}</td>
                  <td className="d-flex justify-content-center">
                    {/* <Button  className="btn me-2" outline color="secondary" size="sm">Edit</Button> */}
                    <Button  className="btn me-2" color="primary" size="sm">View</Button>
                    <Button  className="btn" color="success" size="sm">Assign</Button>
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

export default ViewReceivedOrderTable;
