import React, { Component } from "react";
import {
  Typography,
  Input,
  Row,
  Avatar,
  Col,
  Statistic,
  Button,
  Form,
} from "antd";

import "./Chatbot.scss";
import axios from "axios/index";
import Message from "./Message";
import logo from "../../assets/png/botlogo.png";

import { SendOutlined } from "@ant-design/icons";
/* Para sesiones unicas de usuarios */
import { v4 as uuid } from "uuid";
import Cookies from "universal-cookie";
import PatientPhotoCard from "../PatientPhotoCard/PatientPhotoCard";
const cookies = new Cookies();
/* Fin de imports para sesiones unicas */
const { Countdown } = Statistic;

const deadline = Date.now() + 1000 * 60 * 60 * 10 * 2 + 1000 * 0; // Moment is also OK

class Chatbot extends Component {
  messagesEnd;
  constructor(props) {
    super(props);
    this.msg = React.createRef();
    this._handleInputKeyPress = this._handleInputKeyPress.bind(this);
    this._onClicked = this._onClicked.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      message: [],
    };

    if (cookies.get("userID") === undefined) {
      cookies.set("userID", uuid(), { path: "/" });
    }
    console.log(cookies.get("userID"));
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
    for (let msg of res.data.fulfillmentMessages) {
      console.log(JSON.stringify(msg));
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
    const res = await axios.post("/api/v1/df-event-query", {
      event,
      userID: cookies.get("userID"),
    });

    for (let msg of res.data.fulfillmentMessages) {
      let says = {
        speaks: "bot",
        msg: msg,
      };
      this.setState({ messages: [...this.state.message, says] });
    }
    //console.log(res);
  }

  componentDidMount() {
    this.df_event_query("Bienvenidos");
    this.msg.current.focus();
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
            <div style={{ overflow: "hidden" }}>
              <Avatar src={logo} className="avatarBot" />
              {message.speaks}
            </div>
            <div style={{ overflow: "auto", overflowY: "scroll" }}>
              <div
                style={{
                  height: "300px",
                  width:
                    message.msg.payload.fields.cards.listValue.values.length *
                    270,
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
              <h5>Paciente: Chatbot</h5>
            </Typography>
          </Col>
          <div className="chatbot__h4">
            <Col>
              <Col span={4}>
                <Countdown title="Tiempo" value={deadline} />
              </Col>
              <Typography></Typography>
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
          <Row gutter={22}>
            <Col span={20}>
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
            <Col span={2}>
              <Button type="primary" onClick={this._onClicked}>
                {<SendOutlined />}
              </Button>
            </Col>
          </Row>
        </Form>
      </div>
    );
  }
}
export default Chatbot;
