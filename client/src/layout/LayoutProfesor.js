import React, { useState } from "react";
import { Layout } from "antd";
import { Route, Switch, Redirect } from "react-router-dom";
import MenuSiderProfe from "../components/MenuSiderProfe";
import MenuTop from "../components/MenuTop";
import useAuth from "../hooks/useAuth";
import LogInForm from "../components/LogInForm/LogInForm";
import "./LayoutProfesor.scss";

function LayoutProfesor(props) {
  const { routes } = props;
  const [menuCollapsed, setMenuCollapsed] = useState(true);
  const { Header, Footer, Content } = Layout;

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
      <div className="App">
        <Layout>
          <MenuSiderProfe menuCollapsed={menuCollapsed} />
          <Layout
            className="layout-admin"
            style={{
              marginLeft: menuCollapsed ? "10px" : "200px",
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
            <Footer className="layout-admin__footer">
              Developed by Cristian Reyes{" "}
            </Footer>
          </Layout>
        </Layout>
      </div>
    );
  }
  return null;
}
function LoadRoutes({ routes }) {
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
}

export default LayoutProfesor;
