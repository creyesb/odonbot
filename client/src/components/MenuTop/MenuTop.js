import React from "react";
import { Button, Row, Col } from "antd";
import "./MenuTop.scss";
import {
  MenuUnfoldOutlined,
  LogoutOutlined,
  MenuFoldOutlined,
} from "@ant-design/icons";
import { Link } from "react-router-dom";
//import logoBot from "../../assets/png/botlogo.png";
//import logoBot from "../../assets/png/LOGOv2.png";
import logoBot from "../../assets/png/LOGO_white.png";
import { logOut } from "../../api/auth";

export default function MenuTop(props) {
  const { menuCollapsed, setMenuCollapsed } = props;
  const logOutUser = () => {
    logOut();
    window.location.reload();
  };

  return (
    <div className="menu-top">
      <div className="menu-top__left">
        <Row span="4">
          <Col className="menu-top__col">
            <Link to="/">
              <img className="menu-top__left-logo" src={logoBot} alt="logo" />
            </Link>
          </Col>
          <Col className="menu-top__col">
            <Link to="/">
              <h3 className="menu-top__logoName">OdontoBot</h3>
            </Link>
          </Col>
          <Col className="menu-top__col">
            <Button
              type="link"
              onClick={() => setMenuCollapsed(!menuCollapsed)}
            >
              {menuCollapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            </Button>
          </Col>
        </Row>
      </div>
      <div className="menu-top__right">
        <Button type="link" onClick={logOutUser}>
          <LogoutOutlined />
        </Button>
      </div>
    </div>
  );
}
