import React, { Component } from "react";
import { Typography, Input, Row, Col, Statistic } from "antd";

import "./Chatbot.scss";
import axios from "axios/index";
import Message from "./Message";
const { Countdown } = Statistic;

const deadline = Date.now() + 1000 * 60 * 60 * 10 * 2 + 1000 * 0; // Moment is also OK

class Chatbot extends Component {
  messagesEnd;
  constructor(props) {
    super(props);
    this.msg = React.createRef();
    this._handleInputKeyPress = this._handleInputKeyPress.bind(this);
    this.state = {
      message: [],
    };
  }

  async df_text_query(text) {
    let says = {
      speaks: "",
      msg: {
        text: {
          text: text,
        },
      },
    };

    this.setState({ messages: [...this.state.messages, says] });
    const res = await axios.post("/api/v1/df-text-query", { text });
    for (let msg of res.data.fulfillmentMessages) {
      says = {
        speaks: "bot",
        msg: msg,
      };
      this.setState({ messages: [...this.state.messages, says] });
    }
  }

  async df_event_query(event) {
    const res = await axios.post("/api/v1/df-event-query", { event });

    for (let msg of res.data.fulfillmentMessages) {
      let says = {
        speaks: "bot",
        msg: msg,
      };
      this.setState({ messages: [...this.state.message, says] });
    }
    console.log(res);
  }

  componentDidMount() {
    this.df_event_query("Bienvenidos");
    this.msg.current.focus();
  }

  renderMessages(stateMessages) {
    if (stateMessages) {
      return stateMessages.map((message, i) => {
        return (
          <Message
            key={i}
            speaks={message.speaks}
            text={message.msg.text.text}
          />
        );
      });
    } else {
      return null;
    }
  }

  _handleInputKeyPress(e) {
    if (e.key === "Enter") {
      this.df_text_query(e.target.value);
      e.target.value = "";
    }
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

                <Input
                  className="chatbot__inputContainer"
                  onKeyDown={this._handleInputKeyPress}
                  name="msg"
                  type="text"
                  placeholder="Escribe tu mensaje aqui..."
                  ref={this.msg}
                ></Input>
              </Col>
            </Row>
          </div>
        </div>
      </div>
    );
  }
}
export default Chatbot;
