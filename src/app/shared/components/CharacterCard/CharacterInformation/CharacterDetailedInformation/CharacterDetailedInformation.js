import React from "react";

export default function CharacterDetailedInformation(props) {
  const { character } = props;
  return (
    <div className="student-information-container">
      <p>
        Cumpleaños: <span>{character.dateOfBirth}</span>
      </p>
      <p>
        Género: <span>{character.gender}</span>
      </p>
      <p>
        Color de ojos: <span>{character.eyeColour}</span>
      </p>
      <p>
        Color de pelo: <span>{character.hairColour}</span>
      </p>
    </div>
  );
}
