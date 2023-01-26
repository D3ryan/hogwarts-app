import React from "react";
import HarryPotterIconMobile from "../../shared/components/Icons/HarryPotter/HarryPotterIcon";
import HarryPotterIcon from "../../shared/components/Icons/HarryPotter/HarryPotterIcon";
import Navbar from "../../shared/components/Navbar/Navbar";
import "./Home.scss";

export default function Home() {
  return (
    <main>
      <div>
        <HarryPotterIcon />
        <HarryPotterIconMobile />
        <h1>Selecciona tu filtro</h1>
      </div>
      <Navbar></Navbar>
    </main>
  );
}
