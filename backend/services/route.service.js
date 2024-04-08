import { pool } from "../database/database.js";

let RouteService = {};

/////////////////////////////////////// Get all routes ////////////////////////////////////////////////

RouteService.getAllRoutes = async () => {
    let query = `
    SELECT * FROM route
    `;

    try{
        let [rows] = await pool.query(query);
        return rows;
    }
    catch (e) {
        console.error(e);
        throw e;
    }
};


export default RouteService;