import React, { useState } from "react";
import { Descriptions } from "antd";
import { getUserAPI } from "../../api/user";
export default function ShowUserInfo(props) {
  const { user } = props;

  return (
    <div>
      <Descriptions
        title="Informacion de Estudiante"
        bordered={true}
        column={1}
      >
        <Descriptions.Item label="Nombre">
          {user.nombre + " " + user.apellidoP + " " + user.apellidoM}
        </Descriptions.Item>
        <Descriptions.Item label="Correo">{user.email}</Descriptions.Item>
        <Descriptions.Item label="Rut">{user.rut}</Descriptions.Item>
        <Descriptions.Item label="Estado">
          {user.usrState ? "Activo" : "Inactivo"}
        </Descriptions.Item>
      </Descriptions>
    </div>
  );
}
