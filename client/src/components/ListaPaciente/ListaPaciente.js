import React, { useState, useEffect } from "react";
import { List, Avatar, Button, Switch } from "antd";
import "./ListaPaciente.scss";
import {
  EditOutlined,
  DeleteOutlined,
  UserSwitchOutlined,
} from "@ant-design/icons";
import { getPaciente } from "../../api/paciente";
import ModalForm from "../ModalForm/ModalForm";
import FormEditPaciente from "../FormularioEditarPaciente/FormEditPaciente";

export default function ListaPaciente(props) {
  const [paciente, setPaciente] = useState([]);
  const { pacienteActivo, pacienteInactivo } = props;
  /* Para mostrar los pacientes activos/inactivos*/
  const [viewPacienteActivo, setViewPacienteActivo] = useState(false);
  //Estados para el modal
  /*Estado para mostrar/ocultar estado */
  const [isModalVisible, setIsModalVisible] = useState(false);
  /* texto del titulo del modal ej: nombre del paciente*/
  const [modalTitle, setModalTitle] = useState("");
  /* Estado para el contenido del modal */
  const [modalContent, setModalContent] = useState(null);

  useEffect(() => {
    getPaciente().then((response) => {
      setPaciente(response.paciente);
    });
  }, []);

  return (
    <div className="listapaciente">
      <div className="listapaciente__switch">
        <Switch
          className="listapaciente__switchButton"
          defaultChecked
          onChange={() => setViewPacienteActivo(!viewPacienteActivo)}
        />
        <span>
          {viewPacienteActivo ? "Usuarios Inactivos" : "Usuarios Activos "}
        </span>
      </div>
      {viewPacienteActivo ? (
        <PacienteActivos
          pacienteActivo={pacienteActivo}
          isModalVisible={isModalVisible}
          setModalContent={setModalContent}
          setModalTitle={setModalTitle}
          setIsModalVisible={setIsModalVisible}
        />
      ) : (
        <PacienteInactivos
          pacienteInactivo={pacienteInactivo}
          isModalVisible={isModalVisible}
          setModalContent={setModalContent}
          setModalTitle={setModalTitle}
          setIsModalVisible={setIsModalVisible}
        />
      )}

      <ModalForm
        title={modalTitle}
        isVisible={isModalVisible}
        setIsVisible={setIsModalVisible}
      >
        {modalContent}
      </ModalForm>
    </div>
  );
}

function PacienteActivos(props) {
  const {
    pacienteActivo,
    setModalContent,
    setModalTitle,
    setIsModalVisible,
  } = props;

  const editPaciente = (paciente) => {
    setIsModalVisible(true);
    setModalTitle(`Editar ${paciente.nombrePaciente}`);
    setModalContent(<FormEditPaciente paciente={paciente} />);

    //setModalContent("Formulario de paciente");
    console.log({ paciente });
  };

  return (
    <div>
      <List
        className="pacienteActivo"
        itemLayout="horizontal"
        dataSource={pacienteActivo}
        renderItem={(item) => (
          <List.Item
            actions={[
              <Button
                icon={<UserSwitchOutlined />}
                type="dashed"
                onClick={() => console.log("Desactivar")}
              ></Button>,
              <Button
                icon={<EditOutlined />}
                type="primary"
                onClick={() => editPaciente(item)}
              ></Button>,
              <Button
                icon={<DeleteOutlined />}
                type="danger"
                onClick={() => console.log("Eliminar")}
              ></Button>,
            ]}
          >
            <List.Item.Meta
              avatar={
                <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
              }
              title={item.nombrePaciente}
              description={item.sintomas}
            />
          </List.Item>
        )}
      />
    </div>
  );
}
function PacienteInactivos(props) {
  const {
    pacienteInactivo,
    setModalContent,
    setModalTitle,
    setIsModalVisible,
  } = props;

  const editPaciente = (paciente) => {
    setIsModalVisible(true);
    setModalTitle(`Editar ${paciente.nombrePaciente}`);
    setModalContent(<FormEditPaciente paciente={paciente} />);

    //setModalContent("Formulario de paciente");
    console.log({ paciente });
  };
  return (
    <div>
      <List
        className="pacienteActivo"
        itemLayout="horizontal"
        dataSource={pacienteInactivo}
        renderItem={(item) => (
          <List.Item
            actions={[
              <Button
                icon={<UserSwitchOutlined />}
                type="default"
                onClick={() => console.log("Desactivar")}
              ></Button>,
              <Button
                icon={<EditOutlined />}
                type="primary"
                onClick={() => editPaciente(item)}
              ></Button>,
              <Button
                icon={<DeleteOutlined />}
                type="danger"
                onClick={() => console.log("Eliminar")}
              ></Button>,
            ]}
          >
            <List.Item.Meta
              avatar={
                <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
              }
              title={item.nombrePaciente}
              description={item.sintomas}
            />
          </List.Item>
        )}
      />
    </div>
  );
}
