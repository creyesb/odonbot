import React from "react";
import { Layout } from "antd";
import botLogo from "../assets/png/botlogo.png";
import { Form, Input, Button, Checkbox } from "antd";
import "./MainLogin.scss";
import { UserOutlined, LockOutlined } from "@ant-design/icons";

function MainLogin() {
  const onFinish = (values) => {
    console.log("Received values of form: ", values);
  };
  return (
    <Layout className="sign-in">
      <div>
        <div className="login-layout">
          <h1 className="login-layout__text"> Iniciar sesión</h1>
          <img className="login-layout__img" src={botLogo} alt="login" />

          <Form
            name="normal_login"
            className="login-form"
            initialValues={{ remember: true }}
            onFinish={onFinish}
          >
            <Form.Item
              name="username"
              rules={[
                {
                  required: true,
                  message: "Ingresa el correo institucional",
                },
              ]}
            >
              <Input
                prefix={<UserOutlined className="site-form-item-icon" />}
                placeholder="Correo"
              />
            </Form.Item>
            <Form.Item
              name="password"
              rules={[
                {
                  required: true,
                  message: "Ingresa la contraseña",
                },
              ]}
            >
              <Input
                prefix={<LockOutlined className="site-form-item-icon" />}
                type="password"
                placeholder="Contraseña"
              />
            </Form.Item>
            <Form.Item>
              <Form.Item name="remember" valuePropName="checked" noStyle>
                <Checkbox>Recuérdame!</Checkbox>
              </Form.Item>

              <a className="login-form-forgot" href="">
                Olvidé la contraseña
              </a>
            </Form.Item>
            <div className="login-form-registro">
              <Form.Item>
                <Button
                  type="primary"
                  htmlType="submit"
                  className="login-form-button"
                  href="/estudiante"
                >
                  Iniciar sesión
                </Button>
                O <a href="/registro">Registrate!</a>
              </Form.Item>
            </div>
          </Form>
        </div>
      </div>
    </Layout>
  );
}

export default MainLogin;
