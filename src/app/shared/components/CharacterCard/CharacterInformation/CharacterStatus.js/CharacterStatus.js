import React from "react";
import BookmarkIcon from "../../../Icons/Bookmark/Bookmark";
import { useSelector } from "react-redux";

export default function CharacterStatus(props) {
  const CharacterType = useSelector((state) => state.characters.CharacterType);
  const { character } = props;
  return (
    <div className="details-container">
      <div className="sutdent-status-container">
        <span>
          {character.alive ? "VIVO" : "FINADO"}
          <span>/</span>
        </span>
        <span>{CharacterType}</span>
      </div>
      <BookmarkIcon />
    </div>
  );
}
