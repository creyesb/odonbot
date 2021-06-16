import React from "react";
import { Button } from "antd";
import logo from "../../assets/png/botlogo.png";

export default function QuickReply(props) {
  if (props.reply.structValue.fields.payload) {
    return (
      <div
        style={{
          margin: 5,
          alignContent: "space-around",
        }}
      >
        <Button
          shape="round"
          onClick={(event) =>
            props.click(
              event,
              props.reply.structValue.fields.payload.stringValue,
              props.reply.structValue.fields.text.stringValue
            )
          }
        >
          {props.reply.structValue.fields.text.stringValue}
        </Button>
      </div>
    );
  } else {
    return (
      <div style={{ margin: 5, backgroundColor: "blue" }}>
        <Button
          shape="round"
          href={props.reply.structValue.fields.link.stringValue}
        >
          {props.reply.structValue.fields.text.stringValue}
        </Button>
      </div>
    );
  }
}
