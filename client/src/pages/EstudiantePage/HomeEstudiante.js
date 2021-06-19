import React from "react";

import { Calendar, Typography, Row, Col } from "antd";
import ButtonGridEstudiante from "../../components/ButtonGridEstudiante/ButtonGrisEstudiante";
import ConsentimientoEstudiante from "../../components/ConsentimientoEstudiante/ConsentimientoEstudiante";
import useAuth from "../../hooks/useAuth";
import moment from "moment";
import Animate from "rc-animate";

import "./HomeEstudiante.scss";
const { Title } = Typography;

function HomeEstudiante() {
  const { user } = useAuth();

  moment.updateLocale("es", {
    weekdaysMin: ["Dom", "Lun", "Mar", "Mie", "Jue", "Vie", "Sab"],
  });

  return (
    <Animate transitionName="fade" transitionAppear>
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
          <Row span={24}>
            <div className="site-calendar-demo-card">
              <Calendar fullscreen={false} />
            </div>
          </Row>
        </Col>
      </div>
    </Animate>
  );
}

export default HomeEstudiante;
