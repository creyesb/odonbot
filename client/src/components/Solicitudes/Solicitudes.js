import React, { useState, useEffect } from "react";
import { List, Avatar, Button, notification, Modal } from "antd";
import "./Solicitudes.scss";
import { CloseOutlined, CheckOutlined } from "@ant-design/icons";
import { getUserAPI, activateUserAPI, deleteUserAPI } from "../../api/user";
const { confirm } = Modal;

/*
import ModalForm from "../ModalForm/ModalForm";
import FormEditUser from "../FormularioEditarUser/FormEditUser";*/

export default function Solicitudes(props) {
  const { userInactive, setReloadUser } = props;

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

      {
        <UserInactive
          userInactive={userInactive}
          setReloadUser={setReloadUser}
        />
      }
    </div>
  );
}

function UserInactive(props) {
  const { userInactive, setReloadUser } = props;
  /*
  const desactivarUser = (user) => {
    activateUserAPI(user._id, "false")
      .then((response) => {
        notification["success"]({
          message: response,
        });
        setReloadUser(true);
      })
      .catch((err) => {
        notification["error"]({
          message: err,
        });
      });
  };*/
  const activateUser = (user) => {
    activateUserAPI(user._id, "true")
      .then((response) => {
        notification["success"]({
          message: response,
        });
        setReloadUser(true);
      })
      .catch((err) => {
        notification["error"]({
          message: err,
        });
      });
  };
  const showDeleteConfirm = (user) => {
    confirm({
      title: `Rechazar ${user.rol ? "Profesor" : "Estudiante"}`,
      content: `Estas seguro que quieres rechazar el registro de: ${user.nombre +
        " " +
        user.apellidoP +
        " " +
        user.apellidoM}?`,
      okText: "Recahazar",
      okType: "danger",
      cancelText: "Cancelar",
      onOk() {
        deleteUserAPI(user._id)
          .then((response) => {
            notification["success"]({
              message: response,
            });
            setReloadUser(true);
          })
          .catch((err) => {
            notification["error"]({
              message: err.message,
            });
          });
      },
    });
  };
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
              onClick={() => showDeleteConfirm(item)}
            ></Button>,

            <Button
              icon={<CheckOutlined />}
              type="primary"
              onClick={() => activateUser(item)}
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
