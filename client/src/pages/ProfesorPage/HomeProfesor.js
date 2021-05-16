import React from "react";
import { Typography } from "antd";
import ButtonGridProfesor from "../../components/ButtonGridProfesor/ButtonGridProfesor";
import "./HomeProfesor.scss";
import useAuth from "../../hooks/useAuth";

const { Title } = Typography;
function HomeProfesor(props) {
  const { user } = useAuth();
  return (
    <div className="App">
      <div className="appTitle">
        <Title level={2}>Bienvenido Profesor(a)</Title>
        <Title level={4}>
          {user.nombre + " " + user.apellidoP + " " + user.apellidoM}
        </Title>
      </div>
      <ButtonGridProfesor />
    </div>
  );
}

export default HomeProfesor;
