import { lazy } from "react";
import { Navigate } from "react-router-dom";
import ProtectedRoute from "../views/common/views/ProtectedRoute.js";
import LoginView from "../views/common/views/LoginView.jsx";

/****Layouts*****/
const FullLayout = lazy(() => import("../layouts/FullLayout.js"));

/***** Pages ****/

// These are my codes
const Dashboard = lazy(() => import("../views/Admin/Dashboard.js"));
const ViewOrders = lazy(() => import("../views/Admin/ViewOrders.js"));
const AddNewOrder = lazy(() => import("../views/Admin/AddNewOrder.js"));
const AddNewClient = lazy(() => import("../views/Admin/AddNewClient.js"))
const ViewClients = lazy(() => import("../views/Admin/ViewClients.js"))

const Starter = lazy(() => import("../views/Starter.js"));
const About = lazy(() => import("../views/About.js"));
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
  {
    path : "/login",
    element : <LoginView></LoginView>,
    children : [],
  },
  {
    path: "/",
    element: <ProtectedRoute><FullLayout /></ProtectedRoute>,
    children: [
      { path: "/", element: <Navigate to="/dashboard" /> },
      {path: "/dashboard", exact: true, element: <Dashboard/>},
      {path: "/view-orders", exact: true, element: <ViewOrders/>},
      {path: "/add-new-order", exact: true, element: <AddNewOrder/>},
      {path: "/add-new-client", exact: true, element: <AddNewClient/>},
      {path: "/view-clients", exact: true, element: <ViewClients/>},
      
      { path: "/starter", exact: true, element: <Starter /> },
      { path: "/about", exact: true, element: <About /> },
      { path: "/alerts", exact: true, element: <Alerts /> },
      { path: "/badges", exact: true, element: <Badges /> },
      { path: "/buttons", exact: true, element: <Buttons /> },
      { path: "/cards", exact: true, element: <Cards /> },
      { path: "/grid", exact: true, element: <Grid /> },
      { path: "/table", exact: true, element: <Tables /> },
      { path: "/forms", exact: true, element: <Forms /> },
      { path: "/breadcrumbs", exact: true, element: <Breadcrumbs /> },
    ],
  },
];

export default ThemeRoutes;
