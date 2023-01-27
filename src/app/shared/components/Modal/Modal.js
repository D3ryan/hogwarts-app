import React, { useState } from "react";
import CancelIcon from "../Icons/Cancel/Cancel";
import Button from "../Button/Button";
import TextField from "../Inputs/TextField/TextField";
import RadioButton from "../Inputs/RadioButton/RadioButton";
import FileInput from "../Inputs/FileInput/FileInput";
import CharacterType from "../../../../utils/enums/CharacterType";
import { useDispatch, useSelector } from "react-redux";
import { ToggleModal } from "../../../../store/features/modal/modalSlice";
import "./Modal.scss";
import {
  addStudent,
  addStaff,
} from "../../../../store/features/characters/characterSlice";

export default function Modal() {
  const dispatch = useDispatch();
  const actualCharacterType = useSelector(
    (state) => state.characters.CharacterType
  );

  const randomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

  const hatChooseHouse = () => {
    const number = randomNumber(1, 4);
    switch (number) {
      case 1:
        return "Gryffindor";
      case 2:
        return "Slytherin";
      case 3:
        return "Ravenclaw";
      case 4:
        return "Hufflepuff";
      default:
        return "Gryffindor";
    }
  };

  const [character, setCharacter] = useState({
    name: "",
    dateOfBirth: "",
    eyeColour: "",
    hairColour: "",
    gender: "",
    image: "",
    status: CharacterType.STUDENT,
    alive: true,
    house: hatChooseHouse(),
  });

  const onCancelClick = () => {
    dispatch(ToggleModal());
  };

  const onSaveClick = () => {
    let shouldUpdate = false;

    if (actualCharacterType === character.status) {
      shouldUpdate = true;
    } else {
      shouldUpdate = false;
    }

    if (character.status === CharacterType.STUDENT) {
      dispatch(
        addStudent({ character: character, shouldUpdate: shouldUpdate })
      );
    } else {
      dispatch(addStaff({ character: character, shouldUpdate: shouldUpdate }));
    }

    dispatch(ToggleModal())
  };

  const onInputChange = (e) => {
    const { name, value } = e.target;
    setCharacter((old) => {
      return { ...old, [name]: value };
    });
  };

  return (
    <section className="modal-section">
      <div className="overlay"></div>
      <div className="modal">
        <div className="title-container">
          <h1>Agrega un personaje</h1>
          <CancelIcon onClick={onCancelClick} />
        </div>
        <div>
          <div className="textfields-container">
            <TextField
              label="NOMBRE"
              id="name"
              name="name"
              onChange={onInputChange}
            />
            <TextField
              label="CUMPLEAÑOS"
              id="dateOfBirth"
              name="dateOfBirth"
              onChange={onInputChange}
            />
            <TextField
              label="COLOR DE OJOS"
              id="eyeColour"
              name="eyeColour"
              onChange={onInputChange}
            />
            <TextField
              label="COLOR DE PELO"
              id="hairColour"
              name="hairColour"
              onChange={onInputChange}
            />
          </div>
          <div className="radio-groups-container">
            <div className="radio-group-container">
              <h2>GÉNERO</h2>
              <div className="radio-group">
                <RadioButton
                  label="Mujer"
                  name="gender"
                  id="female"
                  value="female"
                  onChange={onInputChange}
                />
                <RadioButton
                  label="Hombre"
                  name="gender"
                  id="male"
                  value="male"
                  onChange={onInputChange}
                />
              </div>
            </div>
            <div className="radio-group-container">
              <h2>POSICIÓN</h2>
              <div className="radio-group">
                <RadioButton
                  label="Estudiante"
                  name="status"
                  id="student"
                  value={CharacterType.STUDENT}
                  onChange={onInputChange}
                />
                <RadioButton
                  label="Staff"
                  name="status"
                  id="staff"
                  value={CharacterType.STAFF}
                  onChange={onInputChange}
                />
              </div>
            </div>
          </div>
          <FileInput id="file" name="file" />
        </div>
        <div className="save-button-container">
          <Button onClick={onSaveClick}>GUARDAR</Button>
        </div>
      </div>
    </section>
  );
}
