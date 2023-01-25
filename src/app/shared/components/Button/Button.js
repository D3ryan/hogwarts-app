import React from "react";
import "./Button.scss";

export default function Button(props) {
  const { onClick, children = "BUTTON" } = props;
  return (
    <button onClick={onClick} className="button">
      {children}
    </button>
  );
}
