import React from "react";
import CharacterDetailedInformation from "./CharacterDetailedInformation/CharacterDetailedInformation";

import CharacterStatus from "./CharacterStatus.js/CharacterStatus";

export default function CharacterInformation() {
  return (
    <div className="information-container">
      <h1 className="student-name-text">Harry Potter</h1>
      <CharacterStatus/>
      <CharacterDetailedInformation/>
    </div>
  );
}
