import React, { useState } from "react";
import { Typography, Row, Col, Button, Checkbox, Divider, Space } from "antd";
import ConsentimientoEstudiante from "../ConsentimientoEstudiante/ConsentimientoEstudiante";
import { Link } from "react-router-dom";
import Animate from "rc-animate";

import "./Consent.scss";
const { Title } = Typography;

export default function Consent() {
  const [checkboxState, setCheckboxState] = useState(false);
  const [checkboxState2, setCheckboxState2] = useState(false);

  return (
    <Animate transitionName="fade" transitionAppear>
      <div className="outerCont">
        <div className="consentContainer">
          <div className="testContainer">
            <ConsentimientoEstudiante></ConsentimientoEstudiante>
          </div>

          <Divider />
          <div className="bottomContainer">
            <div className="checkboxCells">
              <Checkbox.Group>
                <Space direction="vertical">
                  <Checkbox
                    value="1"
                    onChange={() => setCheckboxState(!checkboxState)}
                  >
                    Acepto ser parte y comprendo que puedo dejar el estudio si
                    así estimo conveniente.
                  </Checkbox>
                  {checkboxState ? (
                    <Checkbox
                      value="2"
                      onChange={() => setCheckboxState2(!checkboxState2)}
                    >
                      Entiendo la importancia de mi participación y lo que se
                      hará con los datos.
                    </Checkbox>
                  ) : null}
                </Space>
              </Checkbox.Group>
            </div>

            {checkboxState2 ? (
              <RenderContinue></RenderContinue>
            ) : (
              <RenderButton></RenderButton>
            )}
          </div>
        </div>
      </div>
    </Animate>
  );
}

function RenderButton(props) {
  return (
    <div>
      <Row className="buttonRow">
        <Col span={12}>
          <Button type="default">
            <Link to="/"> Atrás</Link>
          </Button>
        </Col>
        <Col span={12}>
          <Button type="disabled" disabled>
            Continuar
          </Button>
        </Col>
      </Row>
    </div>
  );
}
function RenderContinue(props) {
  return (
    <div>
      <Row className="buttonRow">
        <Col span={12}>
          <Button type="default">
            <Link to="/">Atrás</Link>
          </Button>
        </Col>
        <Col span={12}>
          <Button type="primary">
            <Link to="/login"> Continuar</Link>
          </Button>
        </Col>
      </Row>
    </div>
  );
}
