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
          href: BranchManagerRoutes.viewReceivedOrders,
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
          href: BranchManagerRoutes.addBranch,
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
      title: "Trasport Management ",
      icon: "bi bi-truck",
      subItems: [
        {
          title: "Add a New Trasport Agent",
          href: BranchManagerRoutes.addTransportAgent,
          icon: "bi bi-person-add",
        },
        {
          title: "All Transport Agents",
          href: "#",
          icon: "bi bi-person",
        },
      ],
    },
    {
      title: "Delivery Management ",
      icon: "bi bi-airplane",
      subItems: [
        {
          title: "Add a Delivery Person",
          href: BranchManagerRoutes.addDeliveryPerson,
          icon: "bi bi-person-add",
        },
        {
          title: "All Delivery Persons",
          href: "#",
          icon: "bi bi-person",
        },
      ],
    },
    {
      title: "Route Management ",
      icon: "bi bi-sign-turn-right",
      subItems: [
        {
          title: "Add a New Route",
          href: BranchManagerRoutes.addRoute,
          icon: "bi bi-sign-intersection",
        },
        {
          title: "All Routes",
          href: "#",
          icon: "bi bi-sign-intersection-y",
        },
      ],
    },
    {
      title: "C. Affair Management ",
      icon: "bi bi-telephone-inbound",
      subItems: [
        {
          title: "Add a New Ticket",
          href: BranchManagerRoutes.addTicket,
          icon: "bi bi-envelope-plus",
        },
        {
          title: "All Tickets",
          href: "#",
          icon: "bi bi-envelope",
        },
      ],
    },
    {
      title: "Quality Management ",
      icon: "bi bi-star",
      subItems: [
        {
          title: "Add a Feedback",
          href: BranchManagerRoutes.addFeedback,
          icon: "bi bi-star",
        },
        {
          title: "All Feedbacks",
          href: "#",
          icon: "bi bi-star-half",
        },
      ],
    },
    // {
    //   title: "Components",
    //   icon: "bi bi-layers",
    //   subItems: [
    //     {
    //       title: "Badges",
    //       href: "/branch-manager/badges",
    //       icon: "bi bi-patch-check",
    //     },
    //     {
    //       title: "Buttons",
    //       href: "/branch-manager/buttons",
    //       icon: "bi bi-hdd-stack",
    //     },
    //     {
    //       title: "Cards",
    //       href: "/branch-manager/cards",
    //       icon: "bi bi-card-text",
    //     },
    //     {
    //       title: "Grid",
    //       href: "/branch-manager/grid",
    //       icon: "bi bi-columns",
    //     },
    //     {
    //       title: "Table",
    //       href: "/branch-manager/table",
    //       icon: "bi bi-layout-split",
    //     },
    //     {
    //       title: "Forms",
    //       href: "/branch-manager/forms",
    //       icon: "bi bi-textarea-resize",
    //     },
    //     {
    //       title: "Breadcrumbs",
    //       href: "/branch-manager/breadcrumbs",
    //       icon: "bi bi-link",
    //     },
    //   ],
    // },
  ];
  

export default SidebarRoutes;