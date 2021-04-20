import React, { useState } from "react";
import { Form, Row, Col, notification, Input, Button, Select } from "antd";
import { updateUserAPI } from "../../api/user";
import { UserAddOutlined } from "@ant-design/icons";
import "./FormEditUser.scss";
const { Option } = Select;

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
              <label>Nombres</label>
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
          <Col span={12}>
            <Form.Item>
              <label>Apellido Paterno</label>
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

          <Col span={12}>
            <Form.Item>
              <label>Apellido Materno</label>
              <Input
                placeholder="apellidoM"
                value={dataUser.apellidoM}
                type="text"
                name="apellidoM"
                icon={<UserAddOutlined />}
                onChange={(e) =>
                  setDataUser({
                    ...dataUser,
                    apellidoM: e.target.value,
                  })
                }
              />
            </Form.Item>
          </Col>
        </Row>

        <Row gutter={24}>
          <Col
            span={24}
            onChange={(e) =>
              setDataUser({
                ...dataUser,
                usrState: e.target.usrState,
              })
            }
          >
            <Select labelInValue style={{ width: 220 }} defaultValue="true">
              <Option value="true">Activo</Option>
              <Option value="false">Inactivo</Option>
            </Select>
          </Col>
        </Row>
        <br></br>
        <Button type="primary" htmlType="submit">
          Actualizar datos
        </Button>
      </Form>
    </div>
  );
}
