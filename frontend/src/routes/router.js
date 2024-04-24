import { lazy } from "react";
import { Navigate } from "react-router-dom";
import ProtectedRoute from "../views/common/views/ProtectedRoute.js";
import UnauthorizedView from "../views/common/views/UnauthorizedView.jsx";
import LoginView from "../views/common/views/LoginView.jsx";

// Import sidebar routers
import SidebarRoutes from "./sidebar.routes.js";
import ViewDeliverPersonsList from "../views/branch_manager/views/ViewDeliverPersonsList.jsx";
import { element } from "prop-types";

// Layouts
const FullLayout = lazy(() => import("../layouts/FullLayout.js"));

// Import Views ---- Manger
const ManagerDashboard = lazy(() => import("../views/company_manager/views/ViewDashboardView.jsx"));
const AddBranchView = lazy(() => import("../views/company_manager/views/AddBranchView.jsx"));
const AddTransportAgentView = lazy(() => import("../views/company_manager/views/AddTrasportAgentView.jsx"));
const AddRouteView = lazy(() => import("../views/company_manager/views/AddRouteView.jsx"));

// Import Views ----- Branch Manager
const BranchManagerDashboard = lazy(() => import("../views/branch_manager/views/ViewDashboardView.jsx"));
const ViewOrders = lazy(() => import("../views/branch_manager/views/ViewOrdersView.jsx"));
const AddOrderView = lazy(() => import("../views/branch_manager/views/AddOrderView.jsx"));
const AddClientView = lazy(() => import("../views/branch_manager/views/AddClientView.jsx"));
const ViewClients = lazy(() => import("../views/branch_manager/views/ViewClientsView.jsx"));
const ViewReceivedOrders = lazy(() => import("../views/branch_manager/views/ViewReceivedOrdersView.jsx"));
const AddDeliveryPerson = lazy(() => import("../views/branch_manager/views/AddDeliveryPersonView.jsx"));
const AddTicketView = lazy(() => import("../views/branch_manager/views/AddTicketView.jsx"));
const AddFeedbackView = lazy(() => import("../views/branch_manager/views/AddFeedbackView.jsx"));
const TrackOrder = lazy(() => import("../views/branch_manager/views/TrackOrderView.jsx"));

// Import views - Delivery Person
const DeliveryPersonDashboard = lazy(() => import("../views/delivery_person/views/ViewDashboardView.jsx"));
const ViewDeliveryPersonOrder = lazy(() => import("../views/delivery_person/views/ViewOrderDetailsView.jsx"));

// Import Views - Transport Agent
const TransportAgentDashboard = lazy(() => import("../views/transport_agent/views/ViewDashboardView.jsx"))
const TrasnportAgentViewMyOrders = lazy(() => import("../views/transport_agent/views/ViewOrderDetailsView.jsx"))
const TrasportAgentMyRoute = lazy(() => import("../views/transport_agent/views/ViewMyRouteView.jsx"))

const Starter = lazy(() => import("../views/ui/Starter.js"));
const About = lazy(() => import("../views/ui/About.js"));
const Alerts = lazy(() => import("../views/ui/Alerts.js"));
const Badges = lazy(() => import("../views/ui/Badges.js"));
const Buttons = lazy(() => import("../views/ui/Buttons.js"));
const Cards = lazy(() => import("../views/ui/Cards.js"));
const Grid = lazy(() => import("../views/ui/Grid.js"));
const Tables = lazy(() => import("../views/ui/Tables.js"));
const Forms = lazy(() => import("../views/ui/Forms.js"));
const Breadcrumbs = lazy(() => import("../views/ui/Breadcrumbs.js"));

/*****Routes******/

const ThemeRoutes = [


  ///////////////////////////////////////// Common Routers /////////////////////////////////////////////////
  {
    path : "/",
    element : <Navigate to="/login" />,
    children : [],
  },
  {
    path: "/login",
    element: <LoginView></LoginView>,
    children: [],
  },
  {
    path: "/unauthorized",
    element: <UnauthorizedView></UnauthorizedView>,
    children: [],
  },


  ///////////////////////////////////////// Manager Routers /////////////////////////////////////////////////
  {
    path: "/manager",
    element: <ProtectedRoute allowedUsers={["1"]}></ProtectedRoute>,
    children: [
      {
        path: "/manager/",
        element: (
          <FullLayout sidebarNavigation={SidebarRoutes.managerRoutes} /> // Change side bar router here - Ashan
        ),
        children: [
          {
            path: "/manager/",
            element: <Navigate to="/manager/dashboard" />,
          },
          {
            path: "/manager/dashboard",
            exact: true,
            element: <ManagerDashboard />,
          },
          {
            path: "/manager/add-branch",
            exact: true,
            element: <AddBranchView />,
          },
          {
            path: "/manager/add-transport-agent",
            exact: true,
            element: <AddTransportAgentView />,
          },
          {
            path: "/manager/add-route",
            exact: true,
            element: <AddRouteView />,
          },
        ],
      },
    ],
  },

  ///////////////////////////////////////// Branch Manager Routers /////////////////////////////////////////////////
  {
    path: "/branch-manager",
    element: <ProtectedRoute allowedUsers={["2"]}></ProtectedRoute>,
    children: [
      {
        path: "/branch-manager/",
        element: (
          <FullLayout sidebarNavigation={SidebarRoutes.branchManagerRoutes} /> // Change side bar router here - Ashan
        ),
        children: [
          {
            path: "/branch-manager/",
            element: <Navigate to="/branch-manager/dashboard" />,
          },
          {
            path: "/branch-manager/dashboard",
            exact: true,
            element: <BranchManagerDashboard />,
          },
          {
            path: "/branch-manager/view-orders",
            exact: true,
            element: <ViewOrders />,
          },
          {
            path: "/branch-manager/view-received-orders",
            exact: true,
            element: <ViewReceivedOrders />,
          },
          {
            path: "/branch-manager/add-new-order",
            exact: true,
            element: <AddOrderView />,
          },
          {
            path: "/branch-manager/track-order",
            exact: true,
            element: <TrackOrder />,
          },
          {
            path: "/branch-manager/add-new-client",
            exact: true,
            element: <AddClientView />,
          },
          {
            path: "/branch-manager/view-clients",
            exact: true,
            element: <ViewClients />,
          },
          {
            path: "/branch-manager/add-delivery-person",
            exact: true,
            element: <AddDeliveryPerson />,
          },
          {
            path: "/branch-manager/all-delivery-persons",
            exact: true,
            element: <ViewDeliverPersonsList />,
          },
          {
            path: "/branch-manager/add-ticket",
            exact: true,
            element: <AddTicketView />,
          },
          {
            path: "/branch-manager/add-feedback",
            exact: true,
            element: <AddFeedbackView />,
          },

          {
            path: "/branch-manager/starter",
            exact: true,
            element: <Starter />,
          },
          { path: "/branch-manager/about", exact: true, element: <About /> },
          { path: "/branch-manager/alerts", exact: true, element: <Alerts /> },
          { path: "/branch-manager/badges", exact: true, element: <Badges /> },
          { path: "/branch-manager/buttons", exact: true, element: <Buttons /> },
          { path: "/branch-manager/cards", exact: true, element: <Cards /> },
          { path: "/branch-manager/grid", exact: true, element: <Grid /> },
          { path: "/branch-manager/table", exact: true, element: <Tables /> },
          { path: "/branch-manager/forms", exact: true, element: <Forms /> },
          { path: "/branch-manager/breadcrumbs", exact: true, element: <Breadcrumbs /> },
        ],
      },
    ],
  },


  ///////////////////////////////////////// Delivery Person Routers /////////////////////////////////////////////////
  {
    path: "/delivery-person",
    element: <ProtectedRoute allowedUsers={["4"]}></ProtectedRoute>,
    children: [
      {
        path: "/delivery-person/",
        element: (
          <FullLayout sidebarNavigation={SidebarRoutes.deliveryPersonRoutes} /> // Change side bar router here - Ashan
        ),
        children: [
          {
            path: "/delivery-person/",
            element: <Navigate to="/delivery-person/dashboard" />,
          },
          {
            path: "/delivery-person/dashboard",
            exact: true,
            element: <DeliveryPersonDashboard />,
          },
          {
            path: "/delivery-person/view-my-orders",
            exact: true,
            element: <ViewDeliveryPersonOrder />,
          },
        ],
      },
    ],
  },

  /////////////////////////////////////// Transport Agent Routers /////////////////////////////////////////////////
  {
    path: "/transport-agent",
    element: <ProtectedRoute allowedUsers={["5"]}></ProtectedRoute>,
    children: [
      {
        path: "/transport-agent/", 
        element: (
          <FullLayout sidebarNavigation={SidebarRoutes.transportAgentRoutes} /> // Change side bar router here - Ashan
        ),
        children: [
          {
            path: "/transport-agent/",
            element: <Navigate to="/transport-agent/dashboard" />,
          },
          {
            path: "/transport-agent/dashboard",
            exact: true,
            element: <TransportAgentDashboard />,
          },
          {
            path: "/transport-agent/view-my-orders",
            exact: true,
            element: <TrasnportAgentViewMyOrders />,
          },
          {
            path: "/transport-agent/view-my-route",
            exact: true,
            element: <TrasportAgentMyRoute />,
          },
        ],
      },
    ],
  },
];

export default ThemeRoutes;
