import React from "react";
import { Space } from "antd";
import {
  RobotOutlined,
  OrderedListOutlined,
  NotificationOutlined,
  BookOutlined,
  UserOutlined,
} from "@ant-design/icons";

import "./ButtonGridProfesor.scss";
export default function ButtonGridProfesor() {
  return (
    <div className="buttonGrid">
      <Space direction="vertical" size={[1, 10]} wrap="true">
        {new Array(1).fill(null).map((_, index) => (
          <div key={index}>
            <a href="/profesor/estudiantes" className="myButtonEstudiantes">
              <OrderedListOutlined style={{ marginRight: "6px" }} />
              Estudiante
            </a>
            <a href="/profesor/solicitudes" className="myButtonSolicitudes">
              <NotificationOutlined style={{ marginRight: "6px" }} />
              Solicitudes
            </a>
            <a href="/profesor/evaluaciones" className="myButtonEvaluaciones">
              <BookOutlined style={{ marginRight: "6px" }} />
              Evaluaciones
            </a>
            <a href="/profesor/pacientes" className="myButtonPacientes">
              <RobotOutlined style={{ marginRight: "6px" }} />
              Pacientes
            </a>
            <a href="/profesor/perfil" className="myButtonPerfil">
              <UserOutlined style={{ marginRight: "6px" }} />
              Perfil
            </a>
          </div>
        ))}
      </Space>
    </div>
  );
}
