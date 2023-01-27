import { configureStore } from "@reduxjs/toolkit";
import charactersReducer from "./features/characters/characterSlice";
import favoritesReducer from "./features/favorites/favoriteSlice";
import modalReducer from "./features/modal/modalSlice"

export default configureStore({
  reducer: {
    characters: charactersReducer,
    favorites: favoritesReducer,
    modal: modalReducer,
  },
});
