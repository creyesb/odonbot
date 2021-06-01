import React from "react";
import { Typography } from "antd";
import "./HomeAdmin.scss";
import ButtonGridAdmin from "../../components/ButtonGridAdmin/ButtonGridAdmin";
import useAuth from "../../hooks/useAuth";
const { Title } = Typography;

export default function AdminPage() {
  const { user } = useAuth();
  return (
    <div>
      <div className="appTitle">
        <Title level={2}>Bienvenido Administrador(a)</Title>
        <Title level={3}>
          {user.nombre + " " + user.apellidoP + " " + user.apellidoM}
        </Title>
      </div>
      <ButtonGridAdmin></ButtonGridAdmin>
    </div>
  );
}
