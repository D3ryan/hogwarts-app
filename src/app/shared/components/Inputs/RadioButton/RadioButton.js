import React from "react";

export default function RadioButton(props) {
  const { label } = props;
  return (
    <div className="radio-container">
      <input id="radio" className="radio" type="radio" />
      {label && <label htmlFor="radio">{label}</label>}
    </div>
  );
}
