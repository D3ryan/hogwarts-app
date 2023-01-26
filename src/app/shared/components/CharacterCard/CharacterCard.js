import React from "react";
import "./CharacterCard.scss";
import CharacterInformation from "./CharacterInformation/CharacterInformation";
import CharacterPicture from "./CharacterPicture/CharacterPicture";

export default function CharacterCard(props) {
  const { character } = props;

  const renderIsDeadOrAliveColor = () => {
    switch (character.alive) {
      case true:
        return 'card_active';
      case false: 
        return 'card_inactive';
      default:
        return 'card_active';
    }
  };

  return (
    <div className={renderIsDeadOrAliveColor()}>
      <CharacterPicture character={character} />
      <CharacterInformation character={character} />
    </div>
  );
}
