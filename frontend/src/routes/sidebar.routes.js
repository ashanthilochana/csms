import { BranchManagerRoutes } from "./all_user.routes.js";

let SidebarRoutes = {};

// Branch Manager sideBar navigation menu
SidebarRoutes.branchManagerRoutes = [
    {
      title: "Dashboard",
      href: BranchManagerRoutes.dashboard,
      icon: "bi bi-speedometer2",
    },
    {
      title: "Order Management",
      icon: "bi bi-box",
      subItems: [
        {
          title: "Add a New Order",
          href: BranchManagerRoutes.addOrder,
          icon: "bi bi-plus",
        },
        {
          title: "All Orders",
          href: BranchManagerRoutes.viewOrders,
          icon: "bi bi-inbox",
        },
        {
          title: "Received Orders",
          href: "#",
          icon: "bi bi-box-arrow-in-down-left",
        },
        {
          title: "Track Orders",
          href: "#",
          icon: "bi bi-geo-alt",
        },
      ],
    },
    {
      title: "Client Management",
      icon: "bi bi-person",
      subItems: [
        {
          title: "Add a New Client",
          href: BranchManagerRoutes.addClient,
          icon: "bi bi-person-add",
        },
        {
          title: "All Clients",
          href: BranchManagerRoutes.viewClients,
          icon: "bi bi-person",
        },
      ],
    },
    {
      title: "Branch Management",
      icon: "bi bi-house",
      subItems: [
        {
          title: "Add a New Branch",
          href: "#",
          icon: "bi bi-house-add",
        },
        {
          title: "All Branches",
          href: "#",
          icon: "bi bi-house-check",
        },
      ],
    },
    {
      title: "Components",
      icon: "bi bi-layers",
      subItems: [
        {
          title: "Badges",
          href: "/branch-manager/badges",
          icon: "bi bi-patch-check",
        },
        {
          title: "Buttons",
          href: "/branch-manager/buttons",
          icon: "bi bi-hdd-stack",
        },
        {
          title: "Cards",
          href: "/branch-manager/cards",
          icon: "bi bi-card-text",
        },
        {
          title: "Grid",
          href: "/branch-manager/grid",
          icon: "bi bi-columns",
        },
        {
          title: "Table",
          href: "/branch-manager/table",
          icon: "bi bi-layout-split",
        },
        {
          title: "Forms",
          href: "/branch-manager/forms",
          icon: "bi bi-textarea-resize",
        },
        {
          title: "Breadcrumbs",
          href: "/branch-manager/breadcrumbs",
          icon: "bi bi-link",
        },
      ],
    },
  ];
  

export default SidebarRoutes;