import React from "react";

export default function RadioButton(props) {
  const { labelText = "Option" } = props;
  return (
    <div className="radio-container">
      <input id="radio" className="radio" type="radio" />
      <label htmlFor="radio">{labelText}</label>
    </div>
  );
}
