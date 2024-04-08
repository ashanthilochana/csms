import RouteService from "../services/route.service.js";

let RouteController = {};

/////////////////////////////////////// Add a route ////////////////////////////////////////////////

RouteController.addRoute = async (req, res) => {

    try {
        const {
            routeName,
            fBranchId,
            sBranchId
        } = req.body;

        let routeExist = await RouteService.checkRouteExistStatus(fBranchId, sBranchId);

        if (!routeExist) {
            await RouteService.addRoute(
                routeName,
                fBranchId,
                sBranchId
            );

            res.status(201).send({ message: "Route added successfully" });
        }
        else {
            res.status(422).send({ message: "Route already Exists!" })
        }
    } catch (e) {
        console.error(e);
        res.status(500).send({ error: "Internal Server Error" });
    }
};

/////////////////////////////////////// Get all routes ////////////////////////////////////////////////

RouteController.getAllRoutes = async (req, res) => {
    try {
        let data = await RouteService.getAllRoutes();
        res.status(200).send(data);
    } catch (e) {
        res.status(500).send({ error: "Internal Server Error" });
    }
}

export default RouteController;