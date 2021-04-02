import React, { useState, useEffect } from "react";
import { List, Avatar, Button, Switch } from "antd";
import "./Solicitudes.scss";
import { CloseOutlined, CheckOutlined } from "@ant-design/icons";
import { getUserAPI } from "../../api/user";
/*
import ModalForm from "../ModalForm/ModalForm";
import FormEditUser from "../FormularioEditarUser/FormEditUser";*/

export default function Solicitudes(props) {
  const { userActive, userInactive } = props;

  const [user, setUser] = useState([]);

  //const [viewUserActive, setViewUserActive] = useState(true);
  /* Para mostrar los pacientes activos/inactivos*/
  //Estados para el modal
  /*Estado para mostrar/ocultar estado */
  //const [isModalVisible, setIsModalVisible] = useState(false);
  /* texto del titulo del modal ej: nombre del paciente*/
  //const [modalTitle, setModalTitle] = useState("");
  /* Estado para el contenido del modal */
  //const [modalContent, setModalContent] = useState(null);

  useEffect(() => {
    getUserAPI().then((response) => {
      setUser(response.user);
    });
  }, []);
  return (
    <div className="estilo-solicitud">
      <div className="estilo-solicitud__switch">
        <span>{"Registro de estudiantes nuevos."}</span>
      </div>

      {<UserInactive userInactive={userInactive} />}
    </div>
  );
}

function UserActive(props) {
  const { userActive } = props;
  return (
    <List
      className="user-active"
      itemLayout="horizontal"
      dataSource={userActive}
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
