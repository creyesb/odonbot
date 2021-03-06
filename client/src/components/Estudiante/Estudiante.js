import { Typography } from "antd";
import React, { useState, useEffect } from "react";
import "./Estudiante.scss";
import ListaEstudiante from "../ListaEstudiantes/ListaEstudiante";
import { getUserByState } from "../../api/user";

function Estudiante() {
  const [userActive, setUserActive] = useState([]);
  const [userInactive] = useState([]);
  const [reloadUser, setReloadUser] = useState(false);

  useEffect(() => {
    getUserByState(true).then((response) => {
      setUserActive(response.user);
    });
    setReloadUser(false);
  }, [reloadUser]);

  return (
    <div className="paciente">
      <Typography className="paciente__typo">Lista de Estudiantes</Typography>

      <div className="paciente__formlist">
        <br></br>
        <ListaEstudiante
          userActive={userActive}
          userInactive={userInactive}
          setReloadUser={setReloadUser}
        />
      </div>
    </div>
  );
}
export default Estudiante;
