
// Branch manger routes define as a variable
let BranchManagerRoutes = {};
let DeliveryPersonRoutes = {};
let TransportAgentRoutes = {};
let ClientRoutes = {};
let ManagerRoutes = {};

// Declare Branch Manager routes
BranchManagerRoutes.main = "/branch-manager";
BranchManagerRoutes.dashboard = "/branch-manager/dashboard";
BranchManagerRoutes.addOrder = "/branch-manager/add-new-order";
BranchManagerRoutes.viewOrders = "/branch-manager/view-orders";
BranchManagerRoutes.viewReceivedOrders = "/branch-manager/view-received-orders";
BranchManagerRoutes.addClient = "/branch-manager/add-new-client";
BranchManagerRoutes.viewClients = "/branch-manager/view-clients";
BranchManagerRoutes.addBranch = "/branch-manager/add-branch";
BranchManagerRoutes.addTransportAgent = "/branch-manager/add-transport-agent";
BranchManagerRoutes.addDeliveryPerson = "/branch-manager/add-delivery-person";
BranchManagerRoutes.allDeliveryPersons = "/branch-manager/all-delivery-persons"
BranchManagerRoutes.addRoute = "/branch-manager/add-route";
BranchManagerRoutes.addTicket = "/branch-manager/add-ticket";
BranchManagerRoutes.addFeedback = "/branch-manager/add-feedback";
BranchManagerRoutes.trackOrder = "/branch-manager/track-order";

// Declare Delivery Person routes
DeliveryPersonRoutes.main = "/delivery-person";
DeliveryPersonRoutes.dashboard = "/delivery-person/dashboard";
DeliveryPersonRoutes.viewMyOrders = "/delivery-person/view-my-orders";

// Declare Manager routes
ManagerRoutes.main = "/manager";
ManagerRoutes.dashboard = "/manager/dashboard";

// Declare Transport Agent routes
TransportAgentRoutes.main = "/transport-agent";
TransportAgentRoutes.dashboard = "/transport-agent/dashboard";
TransportAgentRoutes.viewMyOrders = "/transport-agent/view-my-orders";

// Declare Client routes
ClientRoutes.main = "/client";
ClientRoutes.dashboard = "/client/dashboard";

// Export high level variables
export {BranchManagerRoutes, DeliveryPersonRoutes, ManagerRoutes, TransportAgentRoutes, ClientRoutes};