
// Branch manger routes define as a variable
let BranchManagerRoutes = {};

// Declare Branch Manager routes
BranchManagerRoutes.main = "/branch-manager";
BranchManagerRoutes.dashboard = "/branch-manager/dashboard";
BranchManagerRoutes.viewOrders = "/branch-manager/view-orders";
BranchManagerRoutes.viewReceivedOrders = "/branch-manager/view-received-orders";
BranchManagerRoutes.addOrder = "/branch-manager/add-new-order";
BranchManagerRoutes.addClient = "/branch-manager/add-new-client";
BranchManagerRoutes.viewClients = "/branch-manager/view-clients";
BranchManagerRoutes.addBranch = "/branch-manager/add-branch";
BranchManagerRoutes.addTransportAgent = "/branch-manager/add-transport-agent";

// Export high level variables
export {BranchManagerRoutes};