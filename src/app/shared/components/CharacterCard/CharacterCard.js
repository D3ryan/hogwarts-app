import React from "react";
import "./CharacterCard.scss";
import CharacterInformation from "./CharacterInformation/CharacterInformation";
import CharacterPicture from "./CharacterPicture/CharacterPicture";

export default function CharacterCard() {
  return (
    <div className="card active">
      <CharacterPicture/>
      <CharacterInformation/>
    </div>
  );
}
