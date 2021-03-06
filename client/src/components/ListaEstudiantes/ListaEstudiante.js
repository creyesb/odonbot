import React, { useState, useEffect } from "react";
import { List, Avatar, Button, Switch } from "antd";
import "./ListaEstudiante.scss";
import {
  CloseOutlined,
  CheckOutlined,
  InfoCircleOutlined,
  EditOutlined,
} from "@ant-design/icons";
import { getUserAPI } from "../../api/user";
import ModalForm from "../ModalForm/ModalForm";

export default function Solicitudes(props) {
  const { userActive, userInactive } = props;
  const [user, setUser] = useState([]);

  const [viewUserActive, setViewUserActive] = useState(true);
  /* Para mostrar los pacientes activos/inactivos*/
  //Estados para el modal
  /*Estado para mostrar/ocultar estado */
  const [isModalVisible, setIsModalVisible] = useState(false);
  /* texto del titulo del modal ej: nombre del paciente*/
  const [modalTitle, setModalTitle] = useState("");
  /* Estado para el contenido del modal */
  const [modalContent, setModalContent] = useState(null);

  useEffect(() => {
    getUserAPI().then((response) => {
      setUser(response.user);
    });
  }, []);

  return (
    <div className="estilo-solicitud">
      {
        <UserActive
          userActive={userActive}
          isModalVisible={isModalVisible}
          setModalContent={setModalContent}
          setModalTitle={setModalTitle}
          setIsModalVisible={setIsModalVisible}
        />
      }
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

function UserActive(props) {
  const {
    userActive,
    setModalContent,
    setModalTitle,
    setIsModalVisible,
  } = props;

  const viewData = (user) => {
    setIsModalVisible(true);
    setModalTitle(
      `Datos de: ${user.nombre} ${user.apellidoP} ${user.apellidoM}`
    );
    setModalContent(`Correo: ${user.email}`);
  };
  return (
    <List
      className="user-active"
      itemLayout="horizontal"
      dataSource={userActive}
      renderItem={(item) => (
        <List.Item
          actions={[
            <Button
              icon={<EditOutlined />}
              type="dashed"
              onClick={() => console.log("editar")}
            ></Button>,

            <Button
              icon={<InfoCircleOutlined />}
              type="primary"
              onClick={() => viewData(item)}
            ></Button>,
          ]}
        >
          <List.Item.Meta
            avatar={
              <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
            }
            title={item.nombre + " " + item.apellidoP + " " + item.apellidoM}
            description={item.email}
          />
        </List.Item>
      )}
    />
  );
}
function UserInactive(props) {
  const { userInactive } = props;
  return (
    <List
      className="user-active"
      itemLayout="horizontal"
      dataSource={userInactive}
      renderItem={(item) => (
        <List.Item
          actions={[
            <Button
              icon={<CloseOutlined />}
              type="danger"
              onClick={() => console.log("Rechazar")}
            ></Button>,

            <Button
              icon={<CheckOutlined />}
              type="primary"
              onClick={() => console.log("Aceptar")}
            ></Button>,
          ]}
        >
          <List.Item.Meta
            avatar={
              <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
            }
            title={item.nombre + " " + item.apellidoP + " " + item.apellidoM}
            description={item.email}
          />
        </List.Item>
      )}
    />
  );
}
