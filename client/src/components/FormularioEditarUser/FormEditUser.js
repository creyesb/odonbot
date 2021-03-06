import React, { useState } from "react";

import "./FormEditUser.scss";

export default function FormEditUser(props) {
  const { user, setIsModalVisible, setReloadUser } = props;

  const [dataUser, setDataUser] = useState({
    nombre: user.nombre,
    apellidoP: user.apellidoP,
    apellidoM: user.apellidoM,
    rut: user.rut,
    email: user.email.toLowerCase(),
    password: user.password,
    passwordConfirmation: user.passwordConfirmation,
    rol: user.rol,
    usrState: user.usrState,
  });
  return (
    <div>
      <h2> {user.email}</h2>
    </div>
  );
}
