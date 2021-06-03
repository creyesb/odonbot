import React, { Component } from "react";
import { Row, Col, Avatar } from "antd";
import QuickReply from "./QuickReply";
import logo from "../../assets/png/botlogo.png";

class QuickReplies extends Component {
  constructor(props) {
    super(props);
    this._handleClick = this._handleClick.bind(this);
  }
  _handleClick(event, payload, text) {
    this.props.replyClick(event, payload, text);
  }
  renderQuickReply(reply, i) {
    return <QuickReply key={i} click={this._handleClick} reply={reply} />;
  }

  renderQuickReplies(quickReplies) {
    if (quickReplies) {
      return quickReplies.map((reply, i) => {
        return this.renderQuickReply(reply, i);
      });
    } else {
      return null;
    }
  }

  render() {
    return (
      <div>
        <div style={{ paddingTop: 24, paddingBottom: "5px" }}>
          <Row
            gutter={24}
            style={{
              marginLeft: "2px",
              width: "270px",
              paddingBottom: "10px",
              backgroundColor: "#f0f2f5",
              borderRadius: "15px",
            }}
          >
            <Col span={4}>
              <Avatar src={logo} className="avatarBot" />
            </Col>
            <Col span={20} id="quick-replies">
              {this.props.text && <h1>{this.props.text.stringValue}</h1>}
              {this.renderQuickReplies(this.props.payload)}
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}
export default QuickReplies;
