import RouteService from "../services/route.service.js";

let RouteController = {};

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