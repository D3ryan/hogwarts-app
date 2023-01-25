import React from "react";

export default function TextField(props) {
  const { labelText = "TEXTFIELD" } = props;
  return (
    <div className="textfield-container">
      <label htmlFor="textfield">{labelText}</label>
      <input id="textfield" className="textfield" type={"text"} />
    </div>
  );
}
