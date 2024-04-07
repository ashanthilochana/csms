import { lazy } from "react";
import { Navigate } from "react-router-dom";
import ProtectedRoute from "../views/common/views/ProtectedRoute.js";
import LoginView from "../views/common/views/LoginView.jsx";

/****Contexts*****/
import { BranchManagerProvider } from "../views/branch_manager/context/BranchManagerContext.js";
import UnauthorizedView from "../views/common/views/UnauthorizedView.jsx";

/****Layouts*****/
const FullLayout = lazy(() => import("../layouts/FullLayout.js"));

/***** Pages ****/

// These are my codes
const BranchManagerDashboard = lazy(() =>
  import("../views/branch_manager/views/Dashboard.js")
);
const ViewOrders = lazy(() => import("../views/branch_manager/views/ViewOrders.js"));
const AddOrderView = lazy(() => import("../views/branch_manager/views/AddOrderView"));
const AddClientView = lazy(() =>
  import("../views/branch_manager/views/AddClientView")
);
const ViewClients = lazy(() =>
  import("../views/branch_manager/views/ViewClients.js")
);

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
    path: "/login",
    element: <LoginView></LoginView>,
    children: [],
  },
  {
    path: "/unauthorized",
    element: <UnauthorizedView></UnauthorizedView>,
    children: [],
  },
  {
    path: "/admin",
    element: <ProtectedRoute allowedUsers={[1]}></ProtectedRoute>,
    children: [
      {
        path: "/admin/",
        element: <FullLayout />,
        children: [
          {
            path: "/admin/",
            element: <Navigate to="/admin/dashboard" />,
          },
          {
            path: "/admin/dashboard",
            exact: true,
            element: (
              <BranchManagerProvider>
                <BranchManagerDashboard />
              </BranchManagerProvider>
            ),
          },
        ],
      },
    ],
  },
  {
    path: "/branch-manager",
    element: <ProtectedRoute allowedUsers={[2]}></ProtectedRoute>,
    children: [
      {
        path: "/branch-manager/",
        element: <FullLayout />,
        children: [
          {
            path: "/branch-manager/",
            element: <Navigate to="/branch-manager/dashboard" />,
          },
          {
            path: "/branch-manager/dashboard",
            exact: true,
            element: (
              <BranchManagerProvider>
                <BranchManagerDashboard />
              </BranchManagerProvider>
            ),
          },
          {
            path: "/branch-manager/view-orders",
            exact: true,
            element: (
              <BranchManagerProvider>
                <ViewOrders />
              </BranchManagerProvider>
            ),
          },
          {
            path: "/branch-manager/add-new-order",
            exact: true,
            element: (
              <BranchManagerProvider>
                <AddOrderView />
              </BranchManagerProvider>
            ),
          },
          {
            path: "/branch-manager/add-new-client",
            exact: true,
            element: (
              <BranchManagerProvider>
                <AddClientView />
              </BranchManagerProvider>
            ),
          },
          {
            path: "/branch-manager/view-clients",
            exact: true,
            element: (
              <BranchManagerProvider>
                <ViewClients />
              </BranchManagerProvider>
            ),
          },

          {
            path: "/branch-manager/starter",
            exact: true,
            element: <Starter />,
          },
          { path: "/branch-manager/about", exact: true, element: <About /> },
          { path: "/branch-manager/alerts", exact: true, element: <Alerts /> },
          { path: "/branch-manager/badges", exact: true, element: <Badges /> },
          {
            path: "/branch-manager/buttons",
            exact: true,
            element: <Buttons />,
          },
          { path: "/branch-manager/cards", exact: true, element: <Cards /> },
          { path: "/branch-manager/grid", exact: true, element: <Grid /> },
          { path: "/branch-manager/table", exact: true, element: <Tables /> },
          { path: "/branch-manager/forms", exact: true, element: <Forms /> },
          {
            path: "/branch-manager/breadcrumbs",
            exact: true,
            element: <Breadcrumbs />,
          },
        ],
      },
    ],
  },
];

export default ThemeRoutes;
