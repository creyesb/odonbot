import React, { useState } from "react";
import { Upload, Typography, Input, Form, Button, Divider } from "antd";
import useAuth from "../../hooks/useAuth";
import "./PerfilEstudiante.scss";
import {
  InboxOutlined,
  IdcardOutlined,
  MailOutlined,
  LockOutlined,
} from "@ant-design/icons";

const { Dragger } = Upload;

export default function PerfilEstudiante(props) {
  const { user, isLoading } = useAuth();

  /*const [dataUser, setDataUser] = useState({
    nombre: user.nombre,
    apellidoP: user.apellidoP,
    apellidoM: user.apellidoM,
    rut: user.rut,
    email: user.email,
    password: user.password,
    passwordConfirmation: user.passwordConfirmation,
    rol: user.rol,
    usrState: user.userState,
  });*/

  console.log(user);
  return (
    <div className="main">
      <div className="formbox">
        <Typography className="typoClass">Mi Perfil</Typography>

        <div className="formbox__innerContainer">
          <Form className="registerForm">
            <Typography>
              <h3>Datos del estudiante</h3>
            </Typography>
            <Form.Item>
              <label>Nombre</label>
              <Input
                disabled={true}
                prefix={<MailOutlined className="site-form-item-icon" />}
                type="name"
                name="name"
                placeholder={
                  user.nombre + " " + user.apellidoP + " " + user.apellidoM
                }
                className="register-form__input"
              />
            </Form.Item>

            <Form.Item>
              <label>Correo</label>
              <Input
                disabled={true}
                prefix={<MailOutlined className="site-form-item-icon" />}
                type="email"
                name="email"
                placeholder={user.email}
                className="register-form__input"
              />
            </Form.Item>
            <Form.Item>
              <label>Rut</label>
              <Input
                disabled={true}
                prefix={<IdcardOutlined className="site-form-item-icon" />}
                placeholder={user.rut}
                className="register-form__input"
              />
            </Form.Item>
            <Divider />
            <Typography>
              <h3>Contraseña</h3>
            </Typography>
            <Form.Item>
              <label>Contraseña Actual</label>
              <Input
                prefix={<LockOutlined className="site-form-item-icon" />}
                type="password"
                name="password"
                placeholder="*******"
                className="register-form__input"
              />
            </Form.Item>
            <Form.Item>
              <label>Contraseña</label>
              <Input
                prefix={<LockOutlined className="site-form-item-icon" />}
                type="password"
                name="password"
                placeholder="Ingrese nueva contraseña"
                className="register-form__input"
              />
            </Form.Item>
            <Form.Item>
              <label>Confirme contraseña</label>
              <Input
                prefix={<LockOutlined className="site-form-item-icon" />}
                type="password"
                name="passwordConfirmation"
                placeholder="Confirme nueva contraseña"
                className="register-form__input"
              />
            </Form.Item>
            <Form.Item>
              <Dragger>
                <InboxOutlined />
              </Dragger>
            </Form.Item>
            <Form.Item>
              <Button type="primary" htmlType="Submit">
                Actualizar datos
              </Button>
            </Form.Item>
            <Form.Item>
              <Button href="/estudiante/">Atras</Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    </div>
  );
}
