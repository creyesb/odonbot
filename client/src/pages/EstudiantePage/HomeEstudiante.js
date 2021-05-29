import React from "react";
import "./HomeEstudiante.scss";
import { Calendar, Steps, Button, message, Typography, Row, Col } from "antd";
import ButtonGridEstudiante from "../../components/ButtonGridEstudiante/ButtonGrisEstudiante";
import useAuth from "../../hooks/useAuth";
import moment from "moment";
const { Title } = Typography;

function HomeEstudiante() {
  const { user } = useAuth();

  moment.updateLocale("es", {
    weekdaysMin: ["Dom", "Lun", "Mar", "Mie", "Jue", "Vie", "Sab"],
  });

  return (
    <div className="homeEstudiante">
      <Typography className="homeEstudiante__typo">
        Bienvenido Estudiante
        <Title level={4}>
          {user.nombre + " " + user.apellidoP + " " + user.apellidoM}
        </Title>
      </Typography>
      <Col>
        <Row>
          <ButtonGridEstudiante />
        </Row>
        <Row>
          <div className="site-calendar-demo-card">
            <Calendar fullscreen={false} />
          </div>
        </Row>
      </Col>
    </div>
  );
}

export default HomeEstudiante;
