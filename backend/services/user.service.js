// This is the database service which handles database functionaloties for user credentials and authentication
// A common service handles authentication and registration for all user types.

import { pool } from "../database/database.js";
let UserService = {};

//Function to get user credentials when logging in
UserService.getUserCrednetials = async (nicNo) => {
  try {
    let query = `
        SELECT * FROM usercredentials
        WHERE userNic = ?
        LIMIT 1
        `;
    const [rows] = await pool.query(query, [nicNo]);
    return rows;
  } catch (e) {
    console.error("Error getting credentials : " + e);
    throw e;
  }
};

//Function to register new user credentials
UserService.registerUser = async (nicNo, password, roleId) => {
  try {
    let query = `INSERT INTO usercredentials VALUES(?,?,?)`;
    await pool.query(query, [nicNo, password, roleId]);
  } catch (e) {
    console.error("Error registering user! :" + e);
    throw e;
  }
};

export default UserService;
