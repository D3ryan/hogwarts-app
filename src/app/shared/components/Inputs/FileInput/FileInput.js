import React from "react";
import UploadIcon from "../../Icons/Upload/UploadIcon";

export default function FileInput(props) {
  const { id, name } = props;
  return (
    <div className="file-input-container">
      <div className="label-container">
        <label htmlFor={id}>
          <UploadIcon />
          <span>SUBIR IMAGEN</span>
        </label>
        <span>archivo.jpg</span>
      </div>
      <input
        accept="image/jpg,image/png,image/jpeg"
        type="file"
        id={id}
        name={name}
        className="file-input"
      />
    </div>
  );
}
