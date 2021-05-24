import React, { useEffect, useState } from "react";
import { Typography } from "antd";
import { findChatsAPI } from "../../api/chat";
const { Title } = Typography;

export default function ShowChat() {
  useEffect(() => {
    findChatsAPI().then((response) => {
      console.log(response.chat);
    });
  }, []);

  return (
    <div>
      <Title level={4}>Evaluación 1</Title>
    </div>
  );
}
