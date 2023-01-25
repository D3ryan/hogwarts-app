import React from "react";
import profilePic from "../../../../../assets/prfile_pic.png";

export default function CharacterPicture() {
  return (
    <div className="picture-container gryffindor">
      <img className="picture" src={profilePic} alt="Imagen del estudiante" />
    </div>
  );
}
