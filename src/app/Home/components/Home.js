import React from "react";
import HarryPotterIconMobile from "../../shared/components/Icons/HarryPotter/HarryPotterIconMobile";
import HarryPotterIcon from "../../shared/components/Icons/HarryPotter/HarryPotterIcon";
import Navbar from "../../shared/components/Navbar/Navbar";
import Button from "../../shared/components/Button/Button";
import CharacterCard from "../../shared/components/CharacterCard/CharacterCard";
import "./Home.scss";

export default function Home() {
  return (
    <main>
      <div className="main-title-container">
        <HarryPotterIcon />
        <HarryPotterIconMobile /> 
        <h1>Selecciona tu filtro</h1>
      </div>
      <div className="main-buttons-container">
        <Button>ESTUDIANTES</Button>
        <Button>STAFF</Button>
      </div>
      <div className="main-cards-container">
        <CharacterCard/>
        <CharacterCard/>
        <CharacterCard/>
        <CharacterCard/>
        <CharacterCard/>
      </div>
      <Navbar></Navbar>
    </main>
  );
}
