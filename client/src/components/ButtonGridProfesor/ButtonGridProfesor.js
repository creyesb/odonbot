import React from "react";
import { Space } from "antd";
import {
  RobotOutlined,
  OrderedListOutlined,
  NotificationOutlined,
  BookOutlined,
  UserOutlined,
  MessageOutlined,
} from "@ant-design/icons";

import { Link } from "react-router-dom";

import "./ButtonGridProfesor.scss";
export default function ButtonGridProfesor() {
  return (
    <div className="buttonGrid">
      <Space direction="vertical" size={[1, 10]} wrap="true">
        {new Array(1).fill(null).map((_, index) => (
          <div key={index}>
            <a href="/profesor/chat" className="myButtonChat">
              <MessageOutlined style={{ marginRight: "6px" }} />
              Chat
            </a>
            <Link to="/profesor/estudiantes" className="myButtonEstudiantes">
              <OrderedListOutlined style={{ marginRight: "6px" }} />
              Estudiante
            </Link>

            <Link to="/profesor/solicitudes" className="myButtonSolicitudes">
              <NotificationOutlined style={{ marginRight: "6px" }} />
              Solicitudes
            </Link>

            <Link to="/profesor/evaluaciones" className="myButtonEvaluaciones">
              <BookOutlined style={{ marginRight: "6px" }} />
              Evaluaciones
            </Link>
            <Link to="/profesor/pacientes" className="myButtonPacientes">
              <RobotOutlined style={{ marginRight: "6px" }} />
              Pacientes
            </Link>
            <Link to="/profesor/perfil" className="myButtonPerfil">
              <UserOutlined style={{ marginRight: "6px" }} />
              Perfil
            </Link>
          </div>
        ))}
      </Space>
    </div>
  );
}
