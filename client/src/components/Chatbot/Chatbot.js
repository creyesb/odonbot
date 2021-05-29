import React, { Component } from "react";
import { Typography, Input, Row, Avatar, Col, Statistic, Form } from "antd";

import "./Chatbot.scss";
import axios from "axios/index";
import Message from "./Message";
import logo from "../../assets/png/botlogo.png";
import { basePath, apiVersion } from "../../api/config";
/* Para sesiones unicas de usuarios */
import { v4 as uuid } from "uuid";
import Cookies from "universal-cookie";
/* Para fotos y quick replies */
import PatientPhotoCard from "../PatientPhotoCard/PatientPhotoCard";
import QuickReplies from "../QuickReplies/QuickReplies";

/**Store Chat  */
import { createChatAPI } from "../../api/chat";
const cookies = new Cookies();
/* Fin de imports para sesiones unicas */
const { Countdown } = Statistic;

const deadline = Date.now() + 17 * 60 * 60 * 10 * 2 + 1000 * 0; // Moment is also OK

class Chatbot extends Component {
  messagesEnd;

  constructor(props) {
    super(props);
    this.msg = React.createRef();
    this._handleInputKeyPress = this._handleInputKeyPress.bind(this);
    this._onClicked = this._onClicked.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this._handleQuickReplyPayload = this._handleQuickReplyPayload.bind(this);
    this.storeChat = this.storeChat.bind(this);
    this.state = {
      message: [],
    };

    if (cookies.get("userID") === undefined) {
      cookies.set("userID", uuid(), { path: "/" });
    }
    //console.log(cookies.get("userID"));
  }

  async df_text_query(queyText) {
    let says = {
      speaks: "",
      msg: {
        text: {
          text: queyText,
        },
      },
    };

    this.setState({ messages: [...this.state.messages, says] });
    const res = await axios.post("/api/v1/df-text-query", {
      text: queyText,
      userID: cookies.get("userID"),
    });
    //console.log(res);
    //this.storeChat(res);
    for (let msg of res.data.fulfillmentMessages) {
      //console.log(JSON.stringify(msg));
      says = {
        speaks: "bot",
        msg: msg,
      };
      this.setState({ messages: [...this.state.messages, says] });
    }
  }
  handleChange(event) {
    this.setState({ text: event.target.value });
  }

  async df_event_query(event) {
    const res = await axios.post(`/xapi/v1/df-event-query`, {
      event,
      userID: cookies.get("userID"),
    });
    for (let msg of res.data.fulfillmentMessages) {
      let says = {
        speaks: "bot",
        msg: msg,
      };
      this.setState({
        messages: [...this.state.message, says],
      });
    }

    //console.log(res);
  }

  storeChat(data) {
    //console.log(data);
    const result = data;
    createChatAPI(result);
  }
  _handleQuickReplyPayload(event, payload, text) {
    event.preventDefault();
    event.stopPropagation();
    this.df_text_query(text);
  }
  resolveAfterXseconds(x) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(x);
      }, x * 1000);
    });
  }
  async componentDidMount() {
    this.df_event_query("Bienvenidos");
    this.msg.current.focus();
    await this.resolveAfterXseconds(2);
  }
  renderCards(cards) {
    return cards.map((card, i) => (
      <PatientPhotoCard key={i} payload={card.structValue} />
    ));
  }
  renderOneMessage(message, i) {
    if (message.msg && message.msg.text && message.msg.text.text) {
      return (
        <Message key={i} speaks={message.speaks} text={message.msg.text.text} />
      );
    } else if (
      message.msg &&
      message.msg.payload &&
      message.msg.payload.fields &&
      message.msg.payload.fields.cards
    ) {
      return (
        <div key={i}>
          <div className="ant-card-contain-grid">
            <div style={{ overflow: "auto" }}>
              <Avatar src={logo} className="avatarBot" />
              {message.speaks}
            </div>

            <div
              style={{
                overflow: "auto",
                overflowY: "scroll",
                height: "400px",
                paddingBottom: "30px",
              }}
            >
              <div
                style={{
                  maxWidth: "300px",
                  /*message.msg.payload.fields.cards.listValue.values.length *
                    270,*/
                }}
              >
                {this.renderCards(
                  message.msg.payload.fields.cards.listValue.values
                )}
              </div>
            </div>
          </div>
        </div>
      );
    } else if (
      message.msg &&
      message.msg.payload &&
      message.msg.payload.fields &&
      message.msg.payload.fields.quick_replies
    ) {
      return (
        <QuickReplies
          text={
            message.msg.payload.fields.text
              ? message.msg.payload.fields.text
              : null
          }
          key={i}
          replyClick={this._handleQuickReplyPayload}
          speaks={message.speaks}
          payload={message.msg.payload.fields.quick_replies.listValue.values}
        />
      );
    }
  }
  renderMessages(stateMessages) {
    if (stateMessages) {
      return stateMessages.map((message, i) => {
        return this.renderOneMessage(message, i);
      });
    } else {
      return null;
    }
  }

  _handleInputKeyPress(e) {
    if (e.key === "Enter") {
      this.df_text_query(e.target.value);
      this.setState({
        send_message: this.state.text,
        text: "",
      });
      e.target.value = "";
    }
  }

  _onClicked(e) {
    console.log("enviar**");
    /*this.df_text_query(e.target.value);
    e.target.value = "";*/
  }

  componentDidUpdate() {
    this.messagesEnd.scrollIntoView({ behavior: "smooth" });
  }
  render() {
    return (
      <div className="chatbotContainer">
        <Row>
          <Col flex="auto">
            <Typography className="chatbot__h4">
              <h5>Paciente Virtual</h5>
            </Typography>
          </Col>
          <div className="chatbot__h4">
            <Col>
              <Col span={4}>
                <Countdown title="Tiempo" value={deadline} />
              </Col>
            </Col>
          </div>
        </Row>
        <div className="chatbot">
          <div className="chatbot__messagecontainter">
            {this.renderMessages(this.state.messages)}
            <Row span="24">
              <Col span="24">
                <div
                  ref={(el) => {
                    this.messagesEnd = el;
                  }}
                  syle={{
                    float: "left",
                    clear: "both",
                  }}
                ></div>
              </Col>
            </Row>
          </div>
        </div>
        <Form className="inputMsg">
          <Row gutter={24}>
            <Col span={24}>
              <Input
                className="chatbot__inputContainer"
                onKeyDown={this._handleInputKeyPress}
                name="msg"
                type="text"
                placeholder="Escribe tu mensaje aqui..."
                ref={this.msg}
                onChange={this.handleChange}
                value={this.state.text}
              />
            </Col>
          </Row>
        </Form>
        <br></br>
      </div>
    );
  }
}
export default Chatbot;
