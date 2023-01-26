import React from "react";
import CharacterDetailedInformation from "./CharacterDetailedInformation/CharacterDetailedInformation";
import CharacterStatus from "./CharacterStatus.js/CharacterStatus";

export default function CharacterInformation(props) {
  const { character } = props;
  return (
    <div className="information-container">
      <h1 className="student-name-text">{character.name}</h1>
      <CharacterStatus character={character}/>
      <CharacterDetailedInformation character={character}/>
    </div>
  );
}
