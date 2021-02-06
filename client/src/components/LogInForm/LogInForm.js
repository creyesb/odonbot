import React, { useState } from "react";
import { Form, Input, Button, notification, Typography } from "antd";
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import botLogo from "../../assets/png/botlogo.png";
import { signInApi } from "../../api/user";
import { REFRESH_TOKEN, ACCESS_TOKEN } from "../../utils/constants";
import "./LogInForm.scss";
import { getAccessTokenApi } from "../../api/auth";
import { Redirect } from "react-router-dom";

function LogInForm() {


    const [inputs, setInputs] = useState({
        email: "",
        password: ""
    });

    const changeForm = e => {
        setInputs({
            ...inputs,
            [e.target.name]: e.target.value
        });
    };

    const login = async e => {
        const result = await signInApi(inputs);
        if (result.message) {
            notification["error"]({
                message: result.message
            });
        } else {
            const { accessToken, refreshToken } = result;
            localStorage.setItem(ACCESS_TOKEN, accessToken);
            localStorage.setItem(REFRESH_TOKEN, refreshToken);

            notification["success"]({
                message: "Login exitoso."
            });

            window.location.href = "/estudiante";
        }
    };


    if (getAccessTokenApi()) {
        return <Redirect to="/estudiante" />;
    }


    return (
        <div className="formbox" >
            <h1 className="typoClass">
                Iniciar Sesión
            </h1>
            <img
                className="imglogin"
                src={botLogo}
                alt="login"
            />
            <Form className="loginForm" onChange={changeForm} onFinish={login}>
                <Form.Item>
                    <label>Correo</label>
                    <Input
                        prefix={
                            <UserOutlined />
                        }
                        name="email"
                        type="email"
                        placeholder="Ingrese su correo institucional"
                        className="login-form__input"
                    ></Input>
                </Form.Item>
                <Form.Item>
                    <label>Contraseña</label>
                    <Input
                        prefix={
                            <LockOutlined />
                        }
                        name="password"
                        type="password"
                        placeholder="Ingrese su contraseña"
                        className="login-form__input"
                    ></Input>
                </Form.Item>

                <Form.Item>
                    <Button
                        htmlType="submit"
                        className="loginbutton"
                        type="primary"
                    > Iniciar sesión
                    </Button>
                </Form.Item>
                <a className="reglink" href="/registro">No estoy registrado</a>

            </Form>
        </div>
    );
}

export default LogInForm;