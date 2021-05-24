import React from "react";
import { Card } from "antd";
import "./PatienPhotoCard.scss";

const { Meta } = Card;

export default function PatientPhotoCard(props) {
  return (
    <div className="cardStyle">
      <Card
        style={{
          width: 220,
          borderRadius: "20px",
          margin: "10px",
        }}
        cover={
          <img
            alt={props.payload.fields.header.stringValue}
            src={props.payload.fields.image.stringValue}
          />
        }
      >
        <Meta
          style={{ margin: "10px" }}
          title={props.payload.fields.header.stringValue}
          description={props.payload.fields.description.stringValue}
        />
      </Card>
    </div>
  );
}
