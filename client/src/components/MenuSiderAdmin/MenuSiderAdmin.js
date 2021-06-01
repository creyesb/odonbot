import React from "react";

import { Link, withRouter } from "react-router-dom";

import { Layout, Menu } from "antd";

import {
  HomeOutlined,
  UserOutlined,
  RobotOutlined,
  NotificationOutlined,
  OrderedListOutlined,
  TeamOutlined,
} from "@ant-design/icons";

import "./MenuSiderAdmin.scss";

function MenuSider(props) {
  const { menuCollapsed, location } = props;
  const { Sider } = Layout;
  return (
    <Sider
      className="admin-sider"
      collapsed={menuCollapsed}
      theme="dark"
      collapsedWidth={0}
    >
      <Menu
        mode="inline"
        theme="dark"
        defaultSelectedKeys={[location.pathname]}
      >
        <Menu.Item key="/admin">
          <Link to={"/admin"}>
            <HomeOutlined />
            <span className="nav-text">Incio</span>
          </Link>
        </Menu.Item>

        <Menu.Item key="/admin/estudiantes">
          <Link to={"/admin/estudiantes"}>
            <OrderedListOutlined />
            <span className="nav-text">Lista estudiantes</span>
          </Link>
        </Menu.Item>
        <Menu.Item key="/admin/profesores">
          <Link to={"/admin/profesores"}>
            <TeamOutlined />
            <span className="nav-text">Lista Profesores</span>
          </Link>
        </Menu.Item>
        <Menu.Item key="/admin/solicitudes">
          <Link to={"/admin/solicitudes"}>
            <NotificationOutlined />
            <span className="nav-text">Solicitudes</span>
          </Link>
        </Menu.Item>
        <Menu.Item key="/admin/pacientes">
          <Link to={"/admin/pacientes"}>
            <RobotOutlined />
            <span className="nav-text">Pacientes</span>
          </Link>
        </Menu.Item>
        <Menu.Item key="/admin/perfil">
          <Link to={"/admin/perfil"}>
            <UserOutlined />
            <span className="nav-text">Mi Perfil</span>
          </Link>
        </Menu.Item>
      </Menu>
    </Sider>
  );
}
export default withRouter(MenuSider);
