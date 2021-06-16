import React from "react";

import { Link, withRouter } from "react-router-dom";

import { Layout, Menu } from "antd";

import {
  HomeOutlined,
  BookOutlined,
  UserOutlined,
  RobotOutlined,
  NotificationOutlined,
  OrderedListOutlined,
  MessageOutlined,
} from "@ant-design/icons";

import "./MenuSider.scss";

function MenuSider(props) {
  const { menuCollapsed, location } = props;
  const { Sider } = Layout;
  return (
    <Sider
      className="profe-sider"
      collapsed={menuCollapsed}
      theme="light"
      collapsedWidth={0}
      mode="vertical"
    >
      <Menu mode="inline" defaultSelectedKeys={[location.pathname]}>
        <Menu.Item key="/profesor">
          <Link to={"/profesor"}>
            <HomeOutlined />
            <span className="nav-text">Incio</span>
          </Link>
        </Menu.Item>
        <Menu.Item key="/profesor/estudiantes">
          <Link to={"/profesor/estudiantes"}>
            <OrderedListOutlined />
            <span className="nav-text">Lista estudiantes</span>
          </Link>
        </Menu.Item>
        <Menu.Item key="/profesor/solicitudes">
          <Link to={"/profesor/solicitudes"}>
            <NotificationOutlined />
            <span className="nav-text">Solicitudes</span>
          </Link>
        </Menu.Item>
        <Menu.Item key="/profesor/evaluaciones">
          <Link to={"/profesor/evaluaciones"}>
            <BookOutlined />
            <span className="nav-text">Evaluaciones</span>
          </Link>
        </Menu.Item>
        <Menu.Item key="/profesor/chat">
          <a href={"/profesor/chat"}>
            <MessageOutlined />
            <span className="nav-text">Solución de Casos</span>
          </a>
        </Menu.Item>
        <Menu.Item key="/profesor/pacientes">
          <Link to={"/profesor/pacientes"}>
            <RobotOutlined />
            <span className="nav-text">Pacientes</span>
          </Link>
        </Menu.Item>
        <Menu.Item key="/profesor/perfil">
          <Link to={"/profesor/perfil"}>
            <UserOutlined />
            <span className="nav-text">Mi Perfil</span>
          </Link>
        </Menu.Item>
      </Menu>
    </Sider>
  );
}
export default withRouter(MenuSider);
