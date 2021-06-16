import React from "react";

import { Link, withRouter } from "react-router-dom";

import { Layout, Menu } from "antd";

import {
  HomeOutlined,
  UserOutlined,
  MessageOutlined,
  BookOutlined,
} from "@ant-design/icons";

import "./MenuSider.scss";

function MenuSider(props) {
  const { menuCollapsed, location } = props;
  const { Sider } = Layout;
  return (
    <Sider
      className="estudiante-sider"
      collapsed={menuCollapsed}
      theme="light"
      collapsedWidth={0}
    >
      <Menu mode="inline" defaultSelectedKeys={[location.pathname]}>
        <Menu.Item key="/estudiante">
          <Link to={"/estudiante"}>
            <HomeOutlined />
            <span className="nav-text">Incio</span>
          </Link>
        </Menu.Item>
        <Menu.Item key="/estudiante/show-chat">
          <Link to={"/estudiante/show-chat"}>
            <BookOutlined />
            <span className="nav-text">Mis Evaluaciones</span>
          </Link>
        </Menu.Item>
        <Menu.Item key="/estudiante/chat">
          <a href={"/estudiante/chat"}>
            <MessageOutlined />
            <span className="nav-text">Solución de casos</span>
          </a>
        </Menu.Item>
        <Menu.Item key="/estudiante/perfil">
          <Link to={"/estudiante/perfil"}>
            <UserOutlined />
            <span className="nav-text">Mi Perfil</span>
          </Link>
        </Menu.Item>
      </Menu>
    </Sider>
  );
}

export default withRouter(MenuSider);
