import React from "react";
import { Typography } from "antd";
import Chatbot from "../../components/Chatbot/Chatbot";

import "./Chat.scss";
function Chat() {
  return (
    <div className="chat">
      <Typography className="chat__title">Caso</Typography>

      <Chatbot></Chatbot>
    </div>
  );
}

export default Chat;
