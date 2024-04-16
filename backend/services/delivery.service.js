import { pool } from "../database/database.js";
import UserController from "../controllers/user.controller.js";

let DeliveryPersonService = {};

// Client already existing validation
DeliveryPersonService.checkUserExistStatus = async (nic) => {
    let query = `
        SELECT * FROM deliveryperson
        WHERE nic = ?
        LIMIT 1
        `;

    try {
        const [rows] = await pool.query(query, [nic]);

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

// Add a delivery person
DeliveryPersonService.addDeliveryPerson = async (
    nic,
    email,
    fullName,
    address,
    contactNumber,
    vehicleNumber,
    branchId
) => {
    let query = `
      INSERT INTO deliveryperson
      VALUES(?, ?, ?, ?, ?, ?, ?)
      `;

    try {
        const [rows] = await pool.query(query, [
            nic,
            email,
            fullName,
            address,
            contactNumber,
            vehicleNumber,
            branchId
        ]);

        await UserController.signUpUser(nic, nic, 4); // Role id 4 = delivery person

    } catch (e) {
        console.error(e);
        throw e;
    }
};

export default DeliveryPersonService;