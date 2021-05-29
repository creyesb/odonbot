import React, { useState } from "react";
import { Layout } from "antd";
import { Redirect, Route, Switch } from "react-router-dom";
import MenuSider from "../components/MenuSider";
import MenuTop from "../components/MenuTop";
import useAuth from "../hooks/useAuth";
import "./LayoutEstudiante.scss";
import LogInForm from "../components/LogInForm/LogInForm";
//import MainLogin from "../pages/MainLogin";

export default function LayoutEstudiante(props) {
  const { routes } = props;
  const [menuCollapsed, setMenuCollapsed] = useState(true);
  const { Header, Footer, Content } = Layout;
  //Open & close Sider menu

  const { user, isLoading } = useAuth();

  if (!user && !isLoading) {
    return (
      <>
        <Route path="/" component={LogInForm} />
        <Redirect to="/" />
      </>
    );
  }

  if (user && !isLoading) {
    return (
      <Layout>
        <MenuSider menuCollapsed={menuCollapsed} />
        <Layout
          className="layout-admin"
          style={{
            marginLeft: menuCollapsed ? "10px" : "200px",
            zIndex: 999,
          }}
        >
          <Header className="layout-admin__header">
            <MenuTop
              menuCollapsed={menuCollapsed}
              setMenuCollapsed={setMenuCollapsed}
            />
          </Header>
          <Content className="layout-admin__content">
            <LoadRoutes routes={routes} />
          </Content>
        </Layout>
      </Layout>
    );
  }

  return null;
}

function LoadRoutes({ routes }) {
  const { user } = useAuth();
  if (user.rol === 0) {
    return (
      <Switch>
        {routes.map((route, index) => (
          <Route
            key={index}
            path={route.path}
            exact={route.exact}
            component={route.component}
          />
        ))}
      </Switch>
    );
  } else if (user.rol === 1) {
    return <Redirect to="/profesor" />;
  } else if (user.rol === 2) {
    return <Redirect to="/admin" />;
  } else {
    return null;
  }
}
