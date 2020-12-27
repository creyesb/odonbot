import React from "react";
import {Typography} from "antd";
import Chatbot from "../../components/Chatbot/Chatbot";
import "./Chat.scss";
function Chat() {
    return (
        <div className="chat">
            <Typography >
                <h2 className="chat__title"> Chat</h2>
            </Typography>
            <Chatbot></Chatbot> 
        </div>
    );
}

export default Chat;