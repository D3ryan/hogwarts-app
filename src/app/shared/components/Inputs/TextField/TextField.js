import React from "react";

export default function TextField(props) {
  const { label } = props;
  return (
    <div className="textfield-container">
      {label && <label htmlFor="textfield">{label}</label>}
      <input id="textfield" className="textfield" type={"text"} />
    </div>
  );
}
