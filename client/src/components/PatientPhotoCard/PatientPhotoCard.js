import React from "react";
import { Card, Avatar } from "antd";
import {
  SettingOutlined,
  EditOutlined,
  EllipsisOutlined,
} from "@ant-design/icons";
import "./PatienPhotoCard.scss";
import logo from "../../assets/png/botlogo.png";

const { Meta } = Card;

export default function PatientPhotoCard(props) {
  return (
    <div className="cardStyle">
      <Card
        style={{ width: 200 }}
        cover={
          <img
            alt={props.payload.fields.header.stringValue}
            src={props.payload.fields.image.stringValue}
          />
        }
      >
        <Meta
          avatar={<Avatar src={logo} className="avatarBot" />}
          title={props.payload.fields.header.stringValue}
          description={props.payload.fields.description.stringValue}
        />
      </Card>
    </div>
  );
}
