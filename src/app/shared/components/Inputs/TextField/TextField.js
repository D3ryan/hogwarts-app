import React from "react";

export default function TextField(props) {
  const { label, id, name, onChange } = props;
  return (
    <div className="textfield-container">
      {label && <label htmlFor={id}>{label}</label>}
      <input id={id} className="textfield" name={name} type={"text"} onChange={onChange}/>
    </div>
  );
}
