import React, { useState, useEffect } from "react";
import { Button, Form, Select, Col, Row, Input, notification } from "antd";
import { UserAddOutlined } from "@ant-design/icons";
import "./FormEditPaciente.scss";
import { updatePacienteAPI } from "../../api/paciente";
const { TextArea } = Input;

export default function FormEditPaciente(props) {
  const { paciente } = props;
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

  const updateDataPaciente = () => {
    const pacienteUpdate = dataPaciente;

    updatePacienteAPI(pacienteUpdate, paciente._id).then((result) => {
      notification["success"]({
        message: result.message,
      });
    });
  };

  return (
    <div>
      <EditForm
        paciente={paciente}
        dataPaciente={dataPaciente}
        setDataPaciente={setDataPaciente}
        updateDataPaciente={updateDataPaciente}
      />
    </div>
  );
}

function EditForm(props) {
  const { dataPaciente, setDataPaciente, updateDataPaciente, paciente } = props;
  const { Option } = Select;
  return (
    <div>
      <Form className="form-edit" onFinish={updateDataPaciente}>
        <Row gutter={24}>
          <Col span={24}>
            <Form.Item>
              <label>Nombre Paciente</label>
              <Input
                placeholder="Nombre paciente"
                value={dataPaciente.nombrePaciente}
                type="text"
                name="nombrePaciente"
                icon={<UserAddOutlined />}
                onChange={(e) =>
                  setDataPaciente({
                    ...dataPaciente,
                    nombrePaciente: e.target.value,
                  })
                }
              />
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={24}>
          <Col span={8}>
            <Form.Item>
              <label>Peso</label>
              <Input
                placeholder="Edad"
                value={dataPaciente.peso}
                type="text"
                name="peso"
                icon={<UserAddOutlined />}
                onChange={(e) =>
                  setDataPaciente({
                    ...dataPaciente,
                    peso: e.target.value,
                  })
                }
              />
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item>
              <label>Edad</label>
              <Input
                value={dataPaciente.edad}
                type="text"
                name="edad"
                icon={<UserAddOutlined />}
                onChange={(e) =>
                  setDataPaciente({
                    ...dataPaciente,
                    edad: e.target.value,
                  })
                }
              />
            </Form.Item>
          </Col>
          <Col span={8}>
            <label>Estado</label>
            <Select
              placeholder="Estado"
              onChange={(e) =>
                setDataPaciente({ ...dataPaciente, pacienteState: e })
              }
              value={dataPaciente.pacienteState ? "Activo" : "Inactivo"}
            >
              <Option value="1">Activo</Option>
              <Option value="0">Inactivo</Option>
            </Select>
          </Col>
        </Row>

        <Row gutter={24}>
          <Col span={24}>
            <Form.Item>
              <label>Sintomas</label>
              <TextArea
                rows={2}
                value={dataPaciente.sintomas}
                type="text"
                name="sintomas"
                icon={<UserAddOutlined />}
                onChange={(e) =>
                  setDataPaciente({
                    ...dataPaciente,
                    sintomas: e.target.value,
                  })
                }
              />
            </Form.Item>
          </Col>
        </Row>

        <Row gutter={24}>
          <Col span={24}>
            <Form.Item>
              <label>Motivo de Consulta</label>
              <TextArea
                rows={2}
                value={dataPaciente.motivoConsulta}
                type="text"
                name="motivoConsulta"
                icon={<UserAddOutlined />}
                onChange={(e) =>
                  setDataPaciente({
                    ...dataPaciente,
                    motivoConsulta: e.target.value,
                  })
                }
              />
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={24}>
          <Col span={24}>
            <Form.Item>
              <label>Enfermedad base</label>
              <TextArea
                rows={2}
                placeholder="Enfermedad base"
                value={dataPaciente.enfermedadBase}
                type="text"
                name="enfermedadBase"
                icon={<UserAddOutlined />}
                onChange={(e) =>
                  setDataPaciente({
                    ...dataPaciente,
                    enfermedadBase: e.target.value,
                  })
                }
              />
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={24}>
          <Col span={24}>
            <Form.Item>
              <label>Hábitos</label>
              <TextArea
                rows={2}
                placeholder="hábitos"
                value={dataPaciente.habitos}
                type="text"
                name="habitos"
                icon={<UserAddOutlined />}
                onChange={(e) =>
                  setDataPaciente({
                    ...dataPaciente,
                    habitos: e.target.value,
                  })
                }
              />
            </Form.Item>
          </Col>
        </Row>
        <Button type="primary" htmlType="submit">
          Actualizar datos
        </Button>
      </Form>
    </div>
  );
}
