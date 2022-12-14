import React, { useEffect, useState } from "react";

export const AuthContext = React.createContext({});

export const AuthProvider = (props) => {
  const [user, setUser] = useState(null);
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState(null);
  const [openCreate, setOpenCreate] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("userLogged")) {
      let person = localStorage.getItem("userLogged");
      person = JSON.parse(person);
      setUser(person);
    }
  }, []);

  const logout = () => {
    setUser(null);
    localStorage.removeItem("userLogged");
    window.location.reload();
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
        open,
        setOpen,
        selected,
        setSelected,
        openCreate,
        setOpenCreate,
        logout,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => React.useContext(AuthContext);
