import { pool } from "../database/database.js";

let RouteService = {};

/////////////////////////////////////// Check router existing status ////////////////////////////////////////////////


RouteService.checkRouteExistStatus = async (fBranchId, sBranchId) => {
    let query = `
        SELECT * FROM route
        WHERE firstBranchId = ? AND secondBranchId = ?
        LIMIT 1
        `;

    try {
        const [rows] = await pool.query(query, [fBranchId, sBranchId]);

        if (rows.length !== 0) {
            return true;
        }
        else {
            return false;
        }
    }
    catch (e) {
        console.error(e);
        throw e;
    }
};


/////////////////////////////////////// Add a route ////////////////////////////////////////////////

RouteService.addRoute = async (
    routeName,
    fBranchId,
    sBranchId
) => {
    let query = `
      INSERT INTO route(routeName, firstBranchId, secondBranchId)
      VALUES(?, ?, ?)
      `;

    try {
        const [rows] = await pool.query(query, [
            routeName,
            fBranchId,
            sBranchId
        ]);
    } catch (e) {
        console.error(e);
        throw e;
    }
};


/////////////////////////////////////// Get all routes ////////////////////////////////////////////////

RouteService.getAllRoutes = async () => {
    let query = `
    SELECT * FROM route
    `;

    try {
        let [rows] = await pool.query(query);
        return rows;
    }
    catch (e) {
        console.error(e);
        throw e;
    }
};


export default RouteService;