import React, { useState, useEffect } from "react";
import { List, Avatar, Button, Modal, notification } from "antd";
import "./ListaProfesores.scss";
import {
  InfoCircleOutlined,
  EditOutlined,
  DeleteOutlined,
} from "@ant-design/icons";
import { getUserAPI, deleteUserAPI } from "../../api/user";
import ModalForm from "../ModalForm/ModalForm";
import ShowUserInfo from "../ShowUserInfo/ShowUserInfo";
import FormularioEditarUser from "../FormularioEditarUser/FormEditUser";
const { confirm } = Modal;

export default function Solicitudes(props) {
  const { userActive, setReloadUser } = props;
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
          setReloadUser={setReloadUser}
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
    setReloadUser,
  } = props;

  const viewData = (user) => {
    setIsModalVisible(true);
    setModalTitle("");
    setModalContent(<ShowUserInfo user={user} />);
  };
  const editData = (user) => {
    setIsModalVisible(true);
    setModalTitle("Editar Profesor");
    setModalContent(
      <FormularioEditarUser
        user={user}
        setIsModalVisible={setIsModalVisible}
        setReloadUser={setReloadUser}
      />
    );
  };
  const showDeleteConfirm = (user) => {
    confirm({
      title: "Eliminar Usuario",
      content: `Estas seguro que quieres eliminar a ${user.nombre +
        " " +
        user.apellidoP +
        " " +
        user.apellidoM}?`,
      okText: "Eliminar",
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
      dataSource={userActive}
      renderItem={(item) => (
        <List.Item
          actions={[
            <Button
              icon={<EditOutlined />}
              type="dashed"
              onClick={() => editData(item)}
            ></Button>,

            <Button
              icon={<InfoCircleOutlined />}
              type="primary"
              onClick={() => viewData(item)}
            ></Button>,
            <Button
              icon={<DeleteOutlined />}
              type="danger"
              onClick={() => showDeleteConfirm(item)}
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
