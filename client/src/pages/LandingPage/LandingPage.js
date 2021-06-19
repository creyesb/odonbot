import React from "react";
import logo from "../../assets/png/botlogo.png";
import { Typography, Card } from "antd";
import Animate from "rc-animate";

import "./LandingPage.scss";

const { Title } = Typography;
export default function LandingPage() {
  return (
    <Animate transitionName="fade" transitionAppear>
      <div className="landingPage">
        <div className="landingPage__content">
          <Card className="landingPage__content__card">
            <Typography>
              <div className="title">
                <Title level={1}>Bienvenidos</Title>
              </div>
            </Typography>

            <div className="imgContainer">
              <img
                className="landingPage__content__card__logoImg"
                src={logo}
                alt="logo"
              />
            </div>
            <Typography>
              <Title
                style={{ paddingBottom: "5px", textAlign: "center" }}
                level={3}
              >
                ¿Qué es OdontoBot?
              </Title>
              <Title level={5}>
                OdontoBot es un paciente virtual con el que podrás poner a
                prueba tus conocimintos. Solo debes entrevistar a través de un
                Chat al paciente virtual y preguntarle todo lo que encuentres
                necesario para diagnosticar.
              </Title>
              <br></br>
              <p>
                Si te interesa y quieres obtener más información, presiona
                Continuar
              </p>
            </Typography>
          </Card>
        </div>
        <a className="landingPage__continueButton" href="/consent">
          <div className="buttonText">
            <h4> Continuar</h4>
          </div>
        </a>
      </div>
    </Animate>
  );
}
