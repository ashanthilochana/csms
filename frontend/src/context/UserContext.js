import React, { useState, useContext } from "react";

const UserDataContext = React.createContext();
const UserDataUpdateContext = React.createContext();

export function useUserData() {
  return useContext(UserDataContext);
}

export function useUserDataUpdate() {
  return useContext(UserDataUpdateContext);
}

export function UserProvider({ children }) {
  let [userData, setUserData] = useState({ nic: "", roleId: "" });

  function updateUserData(data) {
    setUserData(data);
  }

  return (
    <UserDataContext.Provider value={userData}>
      <UserDataUpdateContext.Provider value={updateUserData}>
        {children}
      </UserDataUpdateContext.Provider>
    </UserDataContext.Provider>
  );
}
