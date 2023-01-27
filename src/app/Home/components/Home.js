import React, { useEffect, useState } from "react";
import HarryPotterIconMobile from "../../shared/components/Icons/HarryPotter/HarryPotterIconMobile";
import HarryPotterIcon from "../../shared/components/Icons/HarryPotter/HarryPotterIcon";
import Navbar from "../../shared/components/Navbar/Navbar";
import Button from "../../shared/components/Button/Button";
import Modal from "../../shared/components/Modal/Modal";
import CharacterCard from "../../shared/components/CharacterCard/CharacterCard";
import { useDispatch, useSelector } from "react-redux";
import {
  getStaff,
  getStudents,
} from "../../../store/features/characters/characterSlice";
import "./Home.scss";

export default function Home() {
  const dispatch = useDispatch();
  const characters = useSelector((state) => state.characters);
  const showModal = useSelector((state) => state.modal.show)

  const onStudentClick = () => {
    dispatch(getStudents());
  };

  const onStaffClick = () => {
    dispatch(getStaff());
  };

  useEffect(() => {
    dispatch(getStudents());
  }, []);

  return (
    <>
      <main>
        <div className="main-title-container">
          <HarryPotterIcon />
          <HarryPotterIconMobile />
          <h1>Selecciona tu filtro</h1>
        </div>
        <div className="main-buttons-container">
          <Button onClick={onStudentClick}>ESTUDIANTES</Button>
          <Button onClick={onStaffClick}>STAFF</Button>
        </div>
        <div className="main-cards-container">
          {characters.data.map((character, index) => {
            return <CharacterCard character={character} key={index} />;
          })}
        </div>
        <Navbar></Navbar>
      </main>
      {showModal && <Modal/>}
    </>
  );
}
