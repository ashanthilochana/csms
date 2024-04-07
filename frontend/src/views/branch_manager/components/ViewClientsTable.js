import { Card, CardBody, CardTitle, CardSubtitle, Table, Button, ButtonGroup } from "reactstrap";
import user from "../../../assets/images/users/user.jpg";

const tableData = [
  {
    avatar: user,
    name: "Hanna Gover",
    email: "hgover@gmail.com",
    nic: "200134701128",
    address: "No.114, Malabe, Colombo",
    contact: "0782334435",
    branch: "Colombo",
  },
  {
    avatar: user,
    name: "Hanna Gover",
    email: "hgover@gmail.com",
    nic: "200134701128",
    address: "No.114, Malabe, Colombo",
    contact: "0782334435",
    branch: "Colombo",
  },
  {
    avatar: user,
    name: "Hanna Gover",
    email: "hgover@gmail.com",
    nic: "200134701128",
    address: "No.114, Malabe, Colombo",
    contact: "0782334435",
    branch: "Colombo",
  },
  {
    avatar: user,
    name: "Hanna Gover",
    email: "hgover@gmail.com",
    nic: "200134701128",
    address: "No.114, Malabe, Colombo",
    contact: "0782334435",
    branch: "Colombo",
  },
  {
    avatar: user,
    name: "Hanna Gover",
    email: "hgover@gmail.com",
    nic: "200134701128",
    address: "No.114, Malabe, Colombo",
    contact: "0782334435",
    branch: "Colombo",
  },
];

const ViewClientsTable = () => {
  return (
    <div>
      <Card>
        <CardBody>
          <CardTitle tag="h5">Client List</CardTitle>
          <CardSubtitle className="mb-2 text-muted" tag="h6">
            Clients belongs to the branch
          </CardSubtitle>

          <Table className="no-wrap mt-3 align-middle" responsive borderless>
            <thead>
              <tr>
                <th>Name</th>
                <th>NIC</th>

                <th>Address</th>
                <th>Contact Number</th>
                <th>Branch</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {tableData.map((tdata, index) => (
                <tr key={index} className="border-top">
                  <td>
                    <div className="d-flex align-items-center p-2">
                      <img
                        src={tdata.avatar}
                        className="rounded-circle"
                        alt="avatar"
                        width="45"
                        height="45"
                      />
                      <div className="ms-3">
                        <h6 className="mb-0">{tdata.name}</h6>
                        <span className="text-muted">{tdata.email}</span>
                      </div>
                    </div>
                  </td>
                  <td>{tdata.nic}</td>
                  <td>{tdata.address}</td>
                  <td>{tdata.contact}</td>
                  <td>{tdata.branch}</td>  
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

export default ViewClientsTable;
