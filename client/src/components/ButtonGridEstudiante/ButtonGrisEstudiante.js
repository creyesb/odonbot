import React from "react";
import { Space } from "antd";
import { BookOutlined, UserOutlined, MessageOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import "./ButtonGrisEstudiante.scss";

export default function ButtonGridEstudiante() {
  return (
    <div className="buttonGridEst">
      <Space direction="vertical" size={[2, 5]} wrap="true">
        {new Array(1).fill(null).map((_, index) => (
          <div key={index}>
            <a href="/estudiante/chat" className="myButtonChatEst">
              <MessageOutlined style={{ marginRight: "6px" }} />
              Caso
            </a>
            <Link
              to="/estudiante/show-chat"
              className="myButtonEvaluacionesEst"
            >
              <BookOutlined style={{ marginRight: "6px" }} />
              Mis Evaluaciones
            </Link>

            <Link to="/estudiante/perfil" className="myButtonPerfilEst">
              <UserOutlined style={{ marginRight: "6px" }} />
              Perfil
            </Link>
          </div>
        ))}
      </Space>
    </div>
  );
}
