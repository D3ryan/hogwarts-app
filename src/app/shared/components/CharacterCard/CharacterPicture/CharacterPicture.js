import React from "react";

export default function CharacterPicture(props) {
  const { character } = props;

  const renderHouseColor = () => {
    switch (character.house) {
      case "Gryffindor":
        return 'picture-container gryffindor';
      case "Slytherin": 
        return 'picture-container slytherin';
      case "Ravenclaw":
        return 'picture-container ravenclaw';
      case "Hufflepuff":
        return 'picture-container hufflepuff';
      default:
        return 'picture-container gryffindor';
    }
  };

  return (
    <div className={renderHouseColor()}>
      <img className="picture" src={character.image} alt="Student" />
    </div>
  );
}
