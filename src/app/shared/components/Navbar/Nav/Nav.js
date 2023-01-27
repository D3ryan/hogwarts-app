import React, { useEffect } from "react";
import { getFavorites, ToggleFavorites } from "../../../../../store/features/favorites/favoriteSlice";
import AddUserIcon from "../../Icons/AddUser/AddUser";
import { useDispatch, useSelector } from "react-redux";
import BookmarkIcon from "../../Icons/Bookmark/Bookmark";
import { ToggleModal } from "../../../../../store/features/modal/modalSlice";

export default function Nav() {

  const dispatch = useDispatch();
  // const favorites = useSelector((state) => state.favorites);

  useEffect(() => {
    dispatch(getFavorites());
  }, [])
  

  const onFavClick = () => {
    dispatch(ToggleFavorites());
  };

  const onAddClick = () => {
    dispatch(ToggleModal());
  }

  return (
    <div className="nav">
      <div className="fav-container" onClick={onFavClick}>
        <span>FAVORITOS</span>
        <BookmarkIcon className="bookmark_nav" />
      </div>
      <div></div>
      <div className="add-container" onClick={onAddClick}>
        <span>AGREGAR</span>
        <AddUserIcon />
      </div>
    </div>
  );
}
