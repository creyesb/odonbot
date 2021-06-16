import React from "react";
import "./App.scss";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import routes from "./config/routes";
import AuthProvider from "./providers/AuthProviders";
import { ConfigProvider } from "antd";
import esEs from "antd/lib/locale/es_ES";
function App() {
  return (
    <ConfigProvider locale={esEs}>
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"
      />

      <AuthProvider>
        <Router>
          <Switch>
            {routes.map((route, index) => (
              <RouterWithSubRoutes key={index} {...route} />
            ))}
          </Switch>
        </Router>
      </AuthProvider>
    </ConfigProvider>
  );
}

function RouterWithSubRoutes(route) {
  return (
    <Route
      path={route.path}
      exact={route.exact}
      render={(props) => <route.component routes={route.routes} {...props} />}
    />
  );
}

export default App;
