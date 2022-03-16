import React from "react";
import { Badge } from "react-bootstrap";

const MyBadge = (props) => {
  return (
    <Badge
      style={{
        color: props.color,
        backgroundColor: props.bgColor,
        padding: props.padding,
        position: props.position,
      }}
    >
      {props.text}
    </Badge>
  );
};

export default MyBadge;
