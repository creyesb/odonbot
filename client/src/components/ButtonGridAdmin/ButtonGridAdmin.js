import React from "react";
import { Space } from "antd";
import {
  RobotOutlined,
  OrderedListOutlined,
  NotificationOutlined,
  TeamOutlined,
  UserOutlined,
} from "@ant-design/icons";

import { Link } from "react-router-dom";

import "./ButtonGridAdmin.scss";
export default function ButtonGridAdmin() {
  return (
    <div className="buttonGrid">
      <Space direction="vertical" size={[1, 10]} wrap="true">
        {new Array(1).fill(null).map((_, index) => (
          <div key={index}>
            <Link to="/admin/estudiantes" className="myButtonEstudiantes">
              <OrderedListOutlined style={{ marginRight: "6px" }} />
              Estudiantes
            </Link>
            <Link to="/admin/profesores" className="myButtonProf">
              <TeamOutlined style={{ marginRight: "6px" }} />
              Profesores
            </Link>

            <Link to="/admin/solicitudes" className="myButtonSolicitudes">
              <NotificationOutlined style={{ marginRight: "6px" }} />
              Solicitudes
            </Link>

            <Link to="/admin/pacientes" className="myButtonPacientes">
              <RobotOutlined style={{ marginRight: "6px" }} />
              Pacientes
            </Link>
            <Link to="/admin/perfil" className="myButtonPerfil">
              <UserOutlined style={{ marginRight: "6px" }} />
              Mi Perfil
            </Link>
          </div>
        ))}
      </Space>
    </div>
  );
}
