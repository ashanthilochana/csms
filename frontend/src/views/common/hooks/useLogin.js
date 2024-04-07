import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function useLogin() {
  const navigate = useNavigate();

  let [roleId, setRoleId] = useState(0);

  useEffect(() => {
    function redirect(){
        switch (roleId) {
            case 2:
                //This should be admin
                navigate('/branch-manager/')
                break;
        
            default:
                navigate('/login')
                break;
        }
      }
      redirect();
  }, [roleId])

  function updateRoleId(value) {
    setRoleId(value);
  }
  return [updateRoleId];
}
