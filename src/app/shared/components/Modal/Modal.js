import React from "react";
import CancelIcon from "../Icons/Cancel/Cancel";
import Button from "../Button/Button";
import TextField from "../Inputs/TextField/TextField";
import RadioButton from "../Inputs/RadioButton/RadioButton";
import FileInput from "../Inputs/FileInput/FileInput";
import './Modal.scss';

export default function Modal() {
  return (
    <div>
      <div>
        <h1>Agrega un personaje</h1>
        <CancelIcon />
      </div>
      <div>
        <div>
          <TextField/>
        </div>
        <div>
          <RadioButton/>
        </div>
        <FileInput/>
      </div>
      <Button>GUARDAR</Button>
    </div>
  );
}
