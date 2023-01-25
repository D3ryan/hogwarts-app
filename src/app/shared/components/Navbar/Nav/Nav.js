import React from "react";
import AddUserIcon from "../../Icons/AddUser/AddUser";
import BookmarkIcon from "../../Icons/Bookmark/Bookmark";
import './Nav.scss';

export default function Nav() {
  return (
    <div className="nav">
      <div>
        <span>FAVORITOS</span>
        <BookmarkIcon className="bookmark_nav" />
      </div>
      <div></div>
      <div>
        <span>AGREGAR</span>
        <AddUserIcon />
      </div>
    </div>
  );
}
