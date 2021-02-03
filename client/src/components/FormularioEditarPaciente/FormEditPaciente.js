import React, { useState } from "react";
import { Button, Form, Typography, Select, Col, Row, Input } from "antd";
import { UserAddOutlined } from "@ant-design/icons";
import "./FormEditPaciente.scss";

export default function FormEditPaciente(props) {
  const { paciente, ...rest } = props;
  const [dataPaciente, setDataPaciente] = useState({
    nombrePaciente: paciente.nombrePaciente,
    edad: paciente.edad,
    peso: paciente.peso,
    sintomas: paciente.sintomas,
    motivoConsulta: paciente.motivoConsulta,
    enfermedadBase: paciente.enfermedadBase,
    habitos: paciente.habitos,
    pacienteState: paciente.pacienteState,
  });

  const updateDataPaciente = (e) => {
    console.log(dataPaciente);
    e.preventDefault();
  };

  return (
    <div>
      <Typography>
        <h4> Formulario Editar Paciente</h4>
      </Typography>
      <h2> {paciente.nombrePaciente}</h2>
      <EditForm
        {...rest}
        paciente={paciente}
        dataPaciente={dataPaciente}
        setDataPaciente={setDataPaciente}
        updateDataPaciente={updateDataPaciente}
      />
    </div>
  );
}

function EditForm(props) {
  const { dataPaciente, setDataPaciente, updateDataPaciente, ...rest } = props;
  const { Option } = Select;
  return (
    <div>
      <Form className="form-edit" onSubmit={updateDataPaciente}>
        <Row gutter={24}>
          <Col span={24}>
            <Form.Item>
              <label>Nombre Paciente</label>
              <Input
                {...rest}
                placeholder="Nombre paciente"
                type="text"
                name="nombrePaciente"
                icon={<UserAddOutlined />}
                //dafaultValue={dataPaciente.nombrePaciente}
                onChange={(e) =>
                  setDataPaciente({
                    ...dataPaciente,
                    nombrePaciente: e.target.value,
                  })
                }
                {...rest}
              />
            </Form.Item>
          </Col>
          <Col span={24}></Col>
        </Row>
        <Row gutter={24}>
          <Col span={24}></Col>
          <Col span={24}></Col>
        </Row>
        <Row gutter={24}>
          <Col span={24}></Col>
          <Col span={24}></Col>
        </Row>
        <Form.Item>
          <Button
            type="primary"
            shape="round"
            htmlType="submit"
            className="paciente__addButton__button"
          >
            Actualizar datos
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}
