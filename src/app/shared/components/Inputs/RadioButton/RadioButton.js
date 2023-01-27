import React from "react";

export default function RadioButton(props) {
  const { label, name, id, value, onChange } = props;
  return (
    <div className="radio-container">
      <input id={id} className="radio" type="radio" name={name} value={value} onChange={onChange}/>
      {label && <label htmlFor={id}>{label}</label>}
    </div>
  );
}
