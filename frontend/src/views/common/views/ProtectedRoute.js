//This is the component which checks for authentication status 

import { Outlet, Navigate } from "react-router-dom";
import AxiosController from "../../../controllers/axios.controller";
import { useEffect, useState } from "react";
import LoadingIndicator from "../../../components/common/LoadingIndicator";

const ProtectedRoute = () => {
  let [isAuthenticated, setIsAuthenticated] = useState(false);
  let [loading, setLoading] = useState(true);
  useEffect(() => {
    const checkAuth = async () => {
      try {
        let response = await AxiosController.instance.post(
          "/api/user/auth"
        );
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
  return loading ? (
    <div className="screen-overlay">
      <LoadingIndicator />
    </div>
  ) : isAuthenticated ? (
    <Outlet />
  ) : (
    <Navigate to="/login" />
  );
};

export default ProtectedRoute;
