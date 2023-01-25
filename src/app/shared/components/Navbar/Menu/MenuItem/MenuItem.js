import React from "react";
import TrashIcon from "../../../Icons/Trash/Trash";
import profilePicture from "../../../../../../assets/prfile_pic.png"
import './MenuItem.scss'

export default function MenuItem() {
  return (
    <div className="menu-item">
      <div>
        <img src={profilePicture} alt="Student Image" />
        <span>Harry Potter</span>
      </div>
      <TrashIcon />
    </div>
  );
}
