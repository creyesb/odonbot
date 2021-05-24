import { Typography } from "antd";
import React, { useState, useEffect } from "react";
import "./Profesor.scss";
import ListaProfesores from "../ListaProfesores/ListaProfesores";
import { getUserByRol } from "../../api/user";

export default function Profesor() {
  const [userActive, setUserActive] = useState([]);
  const [userInactive] = useState([]);
  const [reloadUser, setReloadUser] = useState(false);

  useEffect(() => {
    getUserByRol(1).then((response) => {
      setUserActive(response.user);
    });
    setReloadUser(false);
  }, [reloadUser]);

  return (
    <div className="paciente">
      <Typography className="paciente__typo">Lista de Profesores</Typography>

      <div className="paciente__formlist">
        <br></br>
        <ListaProfesores
          userActive={userActive}
          userInactive={userInactive}
          setReloadUser={setReloadUser}
        />
      </div>
    </div>
  );
}
