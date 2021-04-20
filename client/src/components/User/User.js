import { Typography, notification } from "antd";
import React, { useState, useEffect } from "react";
import "./User.scss";
import Solicitudes from "../../components/Solicitudes/Solicitudes";
import { getUserByState, updateUserAPI } from "../../api/user";

function ActiveInactive() {
  const [userActive, setUserActive] = useState([]);
  const [userInactive, setUserInactive] = useState([]);
  const [reloadUser, setReloadUser] = useState(false);

  useEffect(() => {
    getUserByState(true).then((response) => {
      setUserActive(response.user);
    });
    setReloadUser(false);
    getUserByState(false).then((response) => {
      setUserInactive(response.user);
    });
    setReloadUser(false);
  }, [reloadUser]);

  return (
    <div className="paciente">
      <Typography className="paciente__typo">Solicitud de registro</Typography>

      <div className="paciente__formlist">
        <br></br>
        <Solicitudes
          userActive={userActive}
          userInactive={userInactive}
          setReloadUser={setReloadUser}
        />
      </div>
    </div>
  );
}
export default ActiveInactive;
