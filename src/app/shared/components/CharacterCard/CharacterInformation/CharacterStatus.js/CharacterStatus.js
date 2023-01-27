import React from "react";
import BookmarkIcon from "../../../Icons/Bookmark/Bookmark";
import { useSelector, useDispatch } from "react-redux";
import {
  addFavorite,
  deleteFavorite,
} from "../../../../../../store/features/favorites/favoriteSlice";

export default function CharacterStatus(props) {
  const CharacterType = useSelector((state) => state.characters.CharacterType);
  const favorites = useSelector((state) => state.favorites.data);
  const dispatch = useDispatch();
  const { character } = props;

  const isCharacterInFavorites = () => {
    if (favorites.filter((value) => value.id === character.id).length > 0)
      return true;
    else return false;
  };

  const onFavoriteClick = (e) => {
    //If character is not found in favorites
    if (!isCharacterInFavorites()) {
      //And they are below 5
      if (favorites.length < 5) dispatch(addFavorite(character));
    } else {
      dispatch(deleteFavorite({ character: character, favorites: favorites }));
    }
  };

  return (
    <div className="details-container">
      <div className="sutdent-status-container">
        <span>
          {character.alive ? "VIVO" : "FINADO"}
          <span>/</span>
        </span>
        <span>{CharacterType}</span>
      </div>
      <BookmarkIcon onClick={onFavoriteClick} className={ `${ isCharacterInFavorites() ? "bookmark_active" : "bookmark_inactive"}` } />
    </div>
  );
}
