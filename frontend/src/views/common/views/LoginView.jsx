//A simple login ui to check for authentication of jwts and conditional rendering. Test for more

import React, { useState } from "react";
import styles from "./LoginView.module.css";
import AxiosController from "../../../controllers/axios.controller";
import useLogin from "../hooks/useLogin.js";
import useCookie from "../../../hooks/useCookies";


function LoginView() {

  //useState hook to store credentials
  let [credentials, setCredentials] = useState({ nic: "", password: "" });

  //using login hook
  let [updateRoleId] = useLogin();

  let [getCookie, setCookie]  = useCookie();

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
    if (response.data.status) {
      let role_id = response.data.role_id;
      let nic_no = response.data.nic_no;
      
      //set cookies
      setCookie('user-nic', nic_no);
      setCookie('user-role-id', role_id);

      //updating login hook and redirecting
      updateRoleId(role_id);
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
