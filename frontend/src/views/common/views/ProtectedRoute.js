import { Outlet, Navigate } from "react-router-dom";
import AxiosController from "../../../controllers/axios.controller";
import { useEffect, useState } from "react";
import LoadingIndicator from "../../../components/common/LoadingIndicator";
import { useUserData } from "../../../context/UserContext.js";
import UnauthorizedView from "./UnauthorizedView.jsx";

const ProtectedRoute = ({ allowedUsers }) => {
  let [isAuthenticated, setIsAuthenticated] = useState(false);
  let [loading, setLoading] = useState(true);
  let userData = useUserData();

  console.log(allowedUsers);

  useEffect(() => {
    const checkAuth = async () => {
      try {
        let response = await AxiosController.instance.post("/api/user/auth");
        console.log(response);
        if (response.data.status) {
          setIsAuthenticated(true);
        } else {
          setIsAuthenticated(false);
        }
      } catch (error) {
        setIsAuthenticated(false);
      } finally {
        setLoading(false);
      }
    };

    checkAuth();
  }, []);

  if (loading) {
    return (
      <div className="screen-overlay">
        <LoadingIndicator />
      </div>
    );
  } else if (isAuthenticated) {
    let roleId = userData.roleId;
    console.log(roleId);
    let userAuthorized = allowedUsers === ["*"] || allowedUsers === "*" || allowedUsers.includes(roleId);
    if (userAuthorized) {
      return <Outlet />;
    } else {
      return <Navigate to="/unauthorized" />;
    }
  } else {
    return <Navigate to="/login" />;
  }
};

export default ProtectedRoute;
