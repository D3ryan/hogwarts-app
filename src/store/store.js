import { configureStore } from "@reduxjs/toolkit";
import charactersReducer from "./features/characters/characterSlice";
import favoritesReducer from "./features/favorites/favoriteSlice";

export default configureStore({
  reducer: {
    characters: charactersReducer,
    favorites: favoritesReducer,
  },
});
