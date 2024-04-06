import { Col, Row } from "reactstrap";
import DashboardFeeds from "./components/DashboardFeeds";
import DashboardOrdersTable from "./components/DashboardOrdersTable";
import DashboardTopCards from "./components/DashboardTopCards";
import DashboardSalesChart from "./components/DashboardSalesChart";


// Data map
let topCardData = {
  availableOrders: "400",
  receivedOrder: "100",
  tickets: "10",
  feedbacks: "34"
}

const Dashboard = () => {
  return (
    <div>
      {/***Top Cards***/}
      <Row>
        <Col sm="6" lg="3">
          <DashboardTopCards
            bg="bg-light-success text-success"
            title="Profit"
            subtitle="Available Orders"
            earning= {topCardData.availableOrders}
            icon="bi bi-box"
          />
        </Col>
        <Col sm="6" lg="3">
          <DashboardTopCards
            bg="bg-light-danger text-danger"
            title="Refunds"
            subtitle="Received Orders"
            earning= {topCardData.receivedOrder}
            icon="bi bi-box-seam-fill"
          />
        </Col>
        <Col sm="6" lg="3">
          <DashboardTopCards
            bg="bg-light-info text-info"
            title="Tickets"
            subtitle="New Tickets"
            earning= {topCardData.tickets}
            icon="bi bi-chat"
          />
        </Col>
        <Col sm="6" lg="3">
          <DashboardTopCards
            bg="bg-light-warning text-warning"
            title="Feedbacks"
            subtitle="New Feedbacks"
            earning= {topCardData.feedbacks}
            icon="bi bi-star"
          />
        </Col>
      </Row>
      {/***Sales & Feed***/}
      <Row>
        <Col sm="6" lg="6" xl="7" xxl="8">
          <DashboardSalesChart/>
        </Col>
        <Col sm="6" lg="6" xl="5" xxl="4">
          <DashboardFeeds />
        </Col>
      </Row>
      {/***Table ***/}
      <Row>
        <Col lg="12">
          <DashboardOrdersTable />
        </Col>
      </Row>
      {/***Blog Cards***/}
      {/* <Row>
        {BlogData.map((blg, index) => (
          <Col sm="6" lg="6" xl="3" key={index}>
            <Blog
              image={blg.image}
              title={blg.title}
              subtitle={blg.subtitle}
              text={blg.description}
              color={blg.btnbg}
            />
          </Col>
        ))}
      </Row> */}
    </div>
  );
};

export default Dashboard;
