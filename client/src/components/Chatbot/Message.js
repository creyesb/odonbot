import React from "react";
import { Col, Row, Avatar } from "antd";
import "./Message.scss";
import logo from "../../assets/png/botlogo.png";
import stan from "../../assets/jpeg/stan.jpeg";
export default function Message(props) {
  const { actionName } = props;
  console.log(actionName);
  return (
    <div className="scrollable-container">
      {props.speaks === "bot" && (
        <div className="boxMsgBot">
          <Row className="boxMsgBot">
            <div className="mensajeBot" gutter={20}>
              <Col span={4}>
                <Avatar src={stan} className="avatarBot" />
              </Col>
              <Col span={18} className="botText">
                {props.text}
              </Col>
            </div>
          </Row>
        </div>
      )}
      <div className="boxMsg">
        {props.speaks === "" && (
          <Row className="boxMsgEstudiante" gutter={20}>
            <div className="msgContent">
              <Col span={18} className="estText">
                {props.text}
              </Col>
              <Col span={4} className="avatarEstudiante">
                <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
              </Col>
            </div>
          </Row>
        )}
      </div>
    </div>
  );
}
