import React from "react";
import { Modal } from "antd";

export default function ModalForm(props) {
  const { children, title, isVisible, setIsVisible } = props;

  return (
    <Modal
      title={title}
      centered
      visible={isVisible}
      onCancel={() => setIsVisible(false)}
      //footer={false}
      okText="Actualizar"
      cancelText="Cancelar"
    >
      {children}
    </Modal>
  );
}
