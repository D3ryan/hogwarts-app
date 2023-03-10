import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteFavorite } from "../../../../../../store/features/favorites/favoriteSlice";
import TrashIcon from "../../../Icons/Trash/Trash";
import defaultImage from "../../../../../../assets/defaultImage.png";

export default function MenuItem(props) {
  const { favorite } = props;
  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.favorites.data);

  const onTrashIconClick = () => {
    dispatch(deleteFavorite({ character: favorite, favorites: favorites }));
  }


  return (
    <div className="menu-item">
      <div>
        <img src={`${favorite.image ? favorite.image : defaultImage}`} alt="Student" />
        <span>{favorite.name}</span>
      </div>
      <TrashIcon onClick={onTrashIconClick}/>
    </div>
  );
}
