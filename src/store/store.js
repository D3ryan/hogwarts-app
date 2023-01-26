import { configureStore } from "@reduxjs/toolkit";
import charactersReducer from "./features/characters/characterSlice";

export default configureStore({
  reducer: {
    characters: charactersReducer,
  },
});
