import React from "react";
import { Layout } from 'antd';
import { Route, Switch } from 'react-router-dom';

import "./LayoutBasic.scss";

function LayoutBasic(props) {
    const { routes } = props;
    const { Footer, Content } = Layout;

    return (
        <Layout>
            <Layout>
                <Layout>
                    <Content>
                        <LoadRouters routes={routes} />
                    </Content>
                    <Footer>
                        Developed by Cristian Reyes
                </Footer>
                </Layout>
            </Layout>
        </Layout>
    );
}
function LoadRouters({ routes }) {

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
export default LayoutBasic;
