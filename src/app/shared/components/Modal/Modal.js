import React from "react";
import CancelIcon from "../Icons/Cancel/Cancel";
import Button from "../Button/Button";
import TextField from "../Inputs/TextField/TextField";
import RadioButton from "../Inputs/RadioButton/RadioButton";
import FileInput from "../Inputs/FileInput/FileInput";
import "./Modal.scss";

export default function Modal() {
  return (
    <div className="modal">
      <div className="title-container">
        <h1>Agrega un personaje</h1>
        <CancelIcon />
      </div>
      <div>
        <div className="textfields-container">
          <TextField label="NOMBRE" />
          <TextField label="CUMPLEAÑOS" />
          <TextField label="COLOR DE OJOS" />
          <TextField label="COLOR DE PELO" />
        </div>
        <div className="radio-groups-container">
          <div className="radio-group-container">
            <h2>GÉNERO</h2>
            <div className="radio-group">
              <RadioButton label="Mujer" />
              <RadioButton label="Hombre" />
            </div>
          </div>
          <div className="radio-group-container">
            <h2>POSICIÓN</h2>
            <div className="radio-group">
              <RadioButton label="Estudiante" />
              <RadioButton label="Staff" />
            </div>
          </div>
        </div>
        <FileInput />
      </div>
      <div className="save-button-container">
        <Button>GUARDAR</Button>
      </div>
    </div>
  );
}
