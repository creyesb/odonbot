import React, { useState } from "react";
import { Button, Form, Input, notification, Modal, Radio } from "antd";
import {
  UserOutlined,
  IdcardOutlined,
  UserAddOutlined,
} from "@ant-design/icons";

import { crearPaciente } from "../../api/paciente";
import "./FormularioPaciente.scss";

const { TextArea } = Input;

function FormularioPacinte() {
  const [inputs, setInputs] = useState({
    nombrePaciente: "",
    edad: "",
    peso: "",
    sintomas: "",
    motivoConsulta: "",
    enfermedadBase: "",
    habitos: "",
    pacienteState: "",
  });
  /*
  const [formValid, setFormValid] = useState({
    nombrePaciente: false,
    edad: false,
    peso: false,
    sintomas: false,
    motivoConsulta: false,
    enfermedadBase: false,
    habitos: false,
    pacienteState: false,
  });
*/
  const changeForm = (e) => {
    setInputs({
      ...inputs,
      [e.target.name]: e.target.value,
    });
  };

  const register = async (e) => {
    const result = await crearPaciente(inputs);
    if (!result.ok) {
      notification["success"]({
        message: result.message,
      });
    } else {
      notification["error"]({
        message: result.message,
      });
      //resetForm();
    }
  };

  const [visible, setVisible] = React.useState(false);
  const [confirmLoading, setConfirmLoading] = React.useState(false);
  const [modalText, setModalText] = React.useState("");

  const showModal = () => {
    setVisible(true);
  };

  const handleCancel = () => {
    console.log("Cancelando");
    setVisible(false);
  };
  const onChangeEstado = (value) => {
    console.log(value);
  };
  return (
    <div className="">
      <div className="paciente__addButton">
        <Button
          type="primary"
          shape="round"
          icon={<UserAddOutlined />}
          onClick={showModal}
          className="paciente__addButton__button"
        />
      </div>

      <Modal
        title="Nuevo paciente virtual"
        visible={visible}
        onOk={register}
        confirmLoading={confirmLoading}
        onCancel={handleCancel}
        okText="Crear"
        cancelText="Cancelar"
      >
        <Form
          className="registerForm"
          onChange={changeForm}
          onFinish={register}
        >
          <Form.Item>
            <label>Nombre Paciente</label>
            <Input
              prefix={<UserOutlined className="site-form-item-icon" />}
              type="text"
              name="nombrePaciente"
              placeholder="Ingrese nombre del paciente"
              className="register-form__input"
              value={inputs.nombrePaciente}
            />
          </Form.Item>
          <Form.Item>
            <label>Edad</label>
            <Input
              prefix={<UserOutlined className="site-form-item-icon" />}
              type="text"
              name="edad"
              placeholder="Ingrese edad del paciente"
              className="register-form__input"
              value={inputs.edad}
            />
          </Form.Item>
          <Form.Item>
            <label>Peso</label>
            <Input
              prefix={<UserOutlined className="site-form-item-icon" />}
              type="text"
              name="peso"
              placeholder="Ingrese peso del paciente"
              className="register-form__input"
              value={inputs.peso}
            />
          </Form.Item>

          <Form.Item>
            <label>Motivo Consulta</label>
            <Input
              prefix={<IdcardOutlined className="site-form-item-icon" />}
              type="text"
              name="motivoConsulta"
              placeholder="Ingrese motivo de consulta"
              className="register-form__input"
              value={inputs.motivoConsulta}
            />
          </Form.Item>
          <Form.Item>
            <label>Sintomas</label>
            <TextArea
              rows={2}
              prefix={<IdcardOutlined className="site-form-item-icon" />}
              type="text"
              name="sintomas"
              placeholder="Ingrese sintomas"
              className="register-form__input"
              value={inputs.sintomas}
            />
          </Form.Item>

          <Form.Item>
            <label>Enfermedades Base</label>
            <TextArea
              rows={2}
              prefix={<IdcardOutlined className="site-form-item-icon" />}
              type="text"
              name="enfermedadBase"
              placeholder="Ingrese enfermedades base"
              className="register-form__input"
              value={inputs.enfermedadBase}
            />
          </Form.Item>
          <Form.Item>
            <label>Hábitos</label>
            <TextArea
              rows={2}
              prefix={<IdcardOutlined className="site-form-item-icon" />}
              type="text"
              name="habitos"
              placeholder="Ingrese hábitos"
              className="register-form__input"
              value={inputs.habitos}
            />
          </Form.Item>
          <Form.Item>
            <label>Estado paciente</label>
            <br></br>

            <Radio.Group
              value={inputs.pacienteState}
              type="number"
              name="pacienteState"
            >
              <Radio value={0}>Activo</Radio>
              <Radio value={1}>Inactivo</Radio>
            </Radio.Group>
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
}

export default FormularioPacinte;
