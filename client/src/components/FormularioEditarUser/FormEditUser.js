import React, { useState } from "react";
import { Form, Row, Col, notification, Input, Button } from "antd";
import { updateUserAPI } from "../../api/user";
import { UserAddOutlined } from "@ant-design/icons";

import "./FormEditUser.scss";

export default function FormEditUser(props) {
  const { user, setIsModalVisible, setReloadUser } = props;

  const [dataUser, setDataUser] = useState({
    nombre: user.nombre,
    apellidoP: user.apellidoP,
    apellidoM: user.apellidoM,
    rut: user.rut,
    email: user.email.toLowerCase(),
    password: user.password,
    passwordConfirmation: user.passwordConfirmation,
    rol: user.rol,
    usrState: user.usrState,
  });

  const updateDataUser = () => {
    const userUpdate = dataUser;

    updateUserAPI(userUpdate, user._id).then((response) => {
      notification["success"]({
        message: response,
      });
      setReloadUser(true);
    });

    setIsModalVisible(false);
  };
  return (
    <div>
      <EditForm
        user={user}
        dataUser={dataUser}
        setDataUser={setDataUser}
        updateDataUser={updateDataUser}
      />
    </div>
  );
}

function EditForm(props) {
  const { dataUser, setDataUser, updateDataUser } = props;

  return (
    <div>
      <Form onFinish={updateDataUser}>
        <Row gutter={24}>
          <Col span={24}>
            <Form.Item>
              <label>Nombre</label>
              <Input
                placeholder="Nombre"
                value={dataUser.nombre}
                type="text"
                name="nombre"
                icon={<UserAddOutlined />}
                onChange={(e) =>
                  setDataUser({
                    ...dataUser,
                    nombre: e.target.value,
                  })
                }
              />
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={24}>
          <Col span={24}>
            <Form.Item>
              <label>apellido paterno</label>
              <Input
                placeholder="apellidoP"
                value={dataUser.apellidoP}
                type="text"
                name="apellidoP"
                icon={<UserAddOutlined />}
                onChange={(e) =>
                  setDataUser({
                    ...dataUser,
                    apellidoP: e.target.value,
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
