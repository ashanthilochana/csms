//A simple login ui to check for authentication of jwts and conditional rendering. Test for more

import React, { useState } from "react";
import styles from "./LoginView.module.css";
import AxiosController from "../../../controllers/axios.controller";
import { useNavigate } from "react-router-dom";

function LoginView() {

  //useState hook to store credentials
  let [credentials, setCredentials] = useState({ nic: "", password: "" });

  //navigator to do conditional navigating based on role_id of the user
  const navigate = useNavigate();

  //input change handle function
  function handleChange(event) {
    let { name, value } = event.target;
    setCredentials((prevOptions) => ({
      ...prevOptions,
      [name]: value,
    }));
  }

  //submit handler. move axios instance code to a seperate controller if possible
  const handleSubmit = async (event) => {
    event.preventDefault();
    let response = await AxiosController.instance.post(
      "/api/user/login",
      {
        nic_no: credentials.nic,
        password: credentials.password,
      }
    );

    //conditional rendering/navigating based on role id. Find a better way if possible
    if (response.data.status && response.data.role_id === 1) {
      navigate("/");
    }
  };

  return (
    <div className={styles.main_cont}>
      <form className={styles.form_cont} onSubmit={handleSubmit}>
        <label>
          NIC:
          <input
            name="nic"
            type="text"
            value={credentials.nic}
            onChange={handleChange}
          />
        </label>
        <label>
          Password:
          <input
            name="password"
            type="password"
            value={credentials.password}
            onChange={handleChange}
          />
        </label>
        <input type="submit" value="Submit" style={{ width: "100px" }} />
      </form>
    </div>
  );
}

export default LoginView;
