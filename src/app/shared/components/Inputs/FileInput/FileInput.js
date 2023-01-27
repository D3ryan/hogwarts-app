import React, { useState } from "react";
import UploadIcon from "../../Icons/Upload/UploadIcon";

export default function FileInput(props) {
  const { id, name, onChange = () => {} } = props;
  const [fileName, setFileName] = useState("")

  const readFile = (file) => new Promise((resolve, reject) => {
    if (file) {
      setFileName(file.name);
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result)
      reader.onerror = error => reject(error);
    }


    })
    
  const onFileChange = async (e) => {
    const base64Image = await readFile(e.target.files[0]);
    onChange(base64Image);
  };

  return (
    <div className="file-input-container">
      <div className="label-container" data-testid="label-container">
        <label htmlFor={id}>
          <UploadIcon />
          <span>SUBIR IMAGEN</span>
        </label>
        <span className="filename">{fileName}</span>
      </div>
      <input
        data-testid="file"
        accept="image/jpg,image/png,image/jpeg"
        type="file"
        id={id}
        name={name}
        className="file-input"
        onChange={onFileChange}
      />
    </div>
  );
}
