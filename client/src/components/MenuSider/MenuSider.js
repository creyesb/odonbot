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
                    <Link to={"/estudiante"}>
                        <HomeOutlined />
                        <span className="nav-text">Incio</span>
                    </Link>
                </Menu.Item>
                <Menu.Item key="2">
                    <Link to={"/estudiante/evaluaciones"}>
                        <MenuOutlined />
                        <span className="nav-text">Mis Evaluaciones</span>
                    </Link>
                </Menu.Item>
                <Menu.Item key="3">
                    <Link to={"/estudiante/chat"}>
                        <MessageOutlined />
                        <span className="nav-text">Chat</span>
                    </Link>
                </Menu.Item>
                <Menu.Item key="4">
                    <Link to={"/estudiante/perfil"}>
                        <UserOutlined />
                        <span className="nav-text">Mi Perfil</span>
                    </Link>
                </Menu.Item>
            </Menu>

        </Sider>

    );
}