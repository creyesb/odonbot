import React, { useState } from "react";
import { Button, Form, Input, notification, Radio, Typography } from "antd";
import {
  UserOutlined,
  IdcardOutlined,
  MailOutlined,
  LockOutlined,
} from "@ant-design/icons";
import {
  emailValidation,
  minLengthValidation,
} from "../../utils/formValidation";
import { signUpApi } from "../../api/user";
import "./Registro.scss";

function Registro() {
  const [inputs, setInputs] = useState({
    nombre: "",
    apellidoP: "",
    apellidoM: "",
    rut: "",
    email: "",
    password: "",
    passwordConfirmation: "",
    rol: "",
    usrState: "",
  });

  const [formValid, setFormValid] = useState({
    nombre: false,
    apellidoP: false,
    apellidoM: false,
    rut: false,
    email: false,
    password: false,
    passwordConfirmation: false,
    rol: false,
    usrState: true,
  });

  const inputValidation = (e) => {
    const { type, name } = e.target;

    if (type === "email") {
      setFormValid({
        ...formValid,
        [name]: emailValidation(e.target),
      });
    }
    if (type === "password") {
      setFormValid({
        ...formValid,
        [name]: minLengthValidation(e.target, 6),
      });
    }
  };

  const changeForm = (e) => {
    setInputs({
      ...inputs,
      [e.target.name]: e.target.value,
    });
  };

  const register = async (e) => {
    const emailValue = inputs.email;
    const passwordValue = inputs.password;
    const passwordConfirmationValue = inputs.passwordConfirmation;
    const rolValue = inputs.rol;
    const nombreValue = inputs.nombre;
    const apellidoPValue = inputs.apellidoP;
    const apellidoMValue = inputs.apellidoM;
    const rutValue = inputs.rut;

    if (
      !emailValue ||
      !passwordValue ||
      !passwordConfirmationValue ||
      !rolValue ||
      !nombreValue ||
      !apellidoMValue ||
      !apellidoPValue ||
      !rutValue
    ) {
      notification["error"]({
        message: "Todos los campos son obligatorios",
      });
    } else {
      if (passwordConfirmationValue !== passwordValue) {
        notification["error"]({
          message: "Las contraseñas deben ser iguales",
        });
      } else {
        const result = await signUpApi(inputs);
        if (!result.ok) {
          notification["success"]({
            message: result.message,
          });
        } else {
          notification["success"]({
            message: result.message,
          });
        }
        resetForm();
      }
    }
  };

  const resetForm = () => {
    const inputs = document.getElementsByTagName("input");
    for (let i = 0; i < inputs.length; i++) {
      inputs[i].classList.remove("success");
      inputs[i].classList.remove("error");
    }

    setInputs({
      nombre: "",
      apellidoP: "",
      apellidoM: "",
      rut: "",
      email: "",
      password: "",
      passwordConfirmation: "",
      rol: "",
      usrState: "",
    });
    setFormValid({
      nombre: false,
      apellidoP: false,
      apellidoM: false,
      rut: false,
      email: false,
      password: false,
      passwordConfirmation: false,
      rol: true,
      usrState: false,
    });
  };
  return (
    <div className="formbox">
      <Typography className="typoClass">Registro de Usuarios</Typography>

      <Form className="registerForm" onChange={changeForm} onFinish={register}>
        <Form.Item>
          <label>Nombre</label>
          <Input
            prefix={<UserOutlined className="site-form-item-icon" />}
            type="text"
            name="nombre"
            placeholder="Ingrese su nombre"
            className="register-form__input"
            //value={inputs.nombre}
            value="carlos"
            onChange={inputValidation}
          />
        </Form.Item>
        <Form.Item>
          <label>Primer apellido</label>
          <Input
            prefix={<UserOutlined className="site-form-item-icon" />}
            type="text"
            name="apellidoP"
            placeholder="Ingrese su primer apellido"
            className="register-form__input"
            value={inputs.apellidoP}
            onChange={inputValidation}
          />
        </Form.Item>
        <Form.Item>
          <label>Segundo apellido</label>
          <Input
            prefix={<UserOutlined className="site-form-item-icon" />}
            type="text"
            name="apellidoM"
            placeholder="Ingrese su segundo apellido"
            className="register-form__input"
            value={inputs.apellidoM}
            onChange={inputValidation}
          />
        </Form.Item>
        <Form.Item>
          <label>Correo</label>
          <Input
            prefix={<MailOutlined className="site-form-item-icon" />}
            type="email"
            name="email"
            placeholder="Ingrese su correo"
            className="register-form__input"
            value={inputs.email}
            onChange={inputValidation}
          />
        </Form.Item>
        <Form.Item>
          <label>Rut</label>

          <Input
            prefix={<IdcardOutlined className="site-form-item-icon" />}
            type="text"
            name="rut"
            placeholder="Ingrese su rut"
            className="register-form__input"
            value={inputs.rut}
          />
        </Form.Item>
        <Form.Item>
          <label>Contraseña</label>
          <Input
            prefix={<LockOutlined className="site-form-item-icon" />}
            type="password"
            name="password"
            placeholder="Ingrese su contraseña"
            className="register-form__input"
            value={inputs.password}
            onChange={inputValidation}
          />
        </Form.Item>
        <Form.Item>
          <label>Confirme contraseña</label>
          <Input
            prefix={<LockOutlined className="site-form-item-icon" />}
            type="password"
            name="passwordConfirmation"
            placeholder="Confirme su contraseña"
            className="register-form__input"
            value={inputs.passwordConfirmation}
            onChange={inputValidation}
          />
        </Form.Item>
        <Form.Item name="rol">
          <Radio.Group name="rol" value={inputs.rol} onChange={inputValidation}>
            <Radio value={0}>Estudiante</Radio>
            <Radio value={1}>Profesor</Radio>
          </Radio.Group>
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="Submit">
            Crear cuenta
          </Button>
        </Form.Item>
        <Form.Item>
          <Button href="/">Atras</Button>
        </Form.Item>
      </Form>
    </div>
  );
}

export default Registro;
