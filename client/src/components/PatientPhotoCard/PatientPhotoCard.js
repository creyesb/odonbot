import React from "react";
import { Card } from "antd";
import "./PatienPhotoCard.scss";

const { Meta } = Card;

export default function PatientPhotoCard(props) {
  return (
    <div className="cardStyle">
      <Card
        style={{ width: 280, borderRadius: "20px" }}
        cover={
          <img
            alt={props.payload.fields.header.stringValue}
            src={props.payload.fields.image.stringValue}
          />
        }
      >
        <Meta
          title={props.payload.fields.header.stringValue}
          description={props.payload.fields.description.stringValue}
        />
      </Card>
    </div>
  );
}
