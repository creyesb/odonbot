import React from 'react';

import { Link } from 'react-router-dom';

import { Layout, Menu } from 'antd';

import { HomeOutlined, MenuOutlined, UserOutlined, MessageOutlined } from '@ant-design/icons';

import "./MenuSider.scss";

export default function MenuSider(props) {
    const { menuCollapsed } = props;
    const { Sider } = Layout;
    return (

        <Sider className="estudiante-sider" collapsed={menuCollapsed} theme="light" collapsedWidth={0} >
            <Menu mode="inline" defaultSelectedKeys={["1"]}>
                <Menu.Item key="1">
                    <Link to={"/profesor"}>
                        <HomeOutlined />
                        <span className="nav-text">Incio</span>
                    </Link>
                </Menu.Item>
                <Menu.Item key="2">
                    <Link to={"/profesor/evaluaciones"}>
                        <MenuOutlined />
                        <span className="nav-text">Evaluaciones</span>
                    </Link>
                </Menu.Item>
                <Menu.Item key="3">
                    <Link to={"/profesor/solicitudes"}>
                        <MessageOutlined />
                        <span className="nav-text">Solicitudes</span>
                    </Link>
                </Menu.Item>
                <Menu.Item key="4">
                    <Link to={"/profesor/perfil"}>
                        <UserOutlined />
                        <span className="nav-text">Mi Perfil</span>
                    </Link>
                </Menu.Item>
                <Menu.Item key="5">
                    <Link to={"/profesor/pacientes"}>
                        <UserOutlined />
                        <span className="nav-text">Pacientes</span>
                    </Link>
                </Menu.Item>
            </Menu>

        </Sider>

    );
}