import { createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import FavoritesService from "../../../services/favorites.service";

export const getFavorites = createAsyncThunk(
  "/favorites/getFavorites",
  async (arg, { rejectWithValue }) => {
    try {
      const { data } = await FavoritesService.getFavorites();
      return data;
    } catch (error) {
      rejectWithValue(error.response.data);
    }
  }
);

export const addFavorite = createAsyncThunk(
  "/favorites/addFavorite",
  async (arg, { rejectWithValue }) => {
    try {
      const response = await FavoritesService.AddFavorite(arg);
      return arg;
    } catch (error) {
      rejectWithValue(error.response.data);
    }
  }
);

export const deleteFavorite = createAsyncThunk(
  "/favorites/deleteFavorite",
  async (arg, { rejectWithValue }) => {
    try {
      const response = await FavoritesService.DeleteFavorite(arg.character.id);
      return arg;
    } catch (error) {
      rejectWithValue(error.response.data);
    }
  }
);

export const favoriteSlice = createSlice({
  name: "favorites",
  initialState: {
    show: false,
    data: [],
    status: { success: false, message: "" },
    loading: false,
  },
  reducers: {
    ToggleFavorites: (state) => {
      state.show = !state.show;
    },
  },
  extraReducers: (builder) => {
    //GET ALL FAVS
    builder.addCase(getFavorites.pending, (state, action) => {
      state.loading = true;
    });

    builder.addCase(getFavorites.fulfilled, (state, action) => {
      state.loading = false;
      state.data = action.payload;
      state.status = { success: true, message: "Request Fulfilled" };
    });

    builder.addCase(getFavorites.rejected, (state, action) => {
      state.loading = false;
      state.data = action.payload;
      state.status = { success: false, message: "Request Rejected" };
    });

    //ADD FAV
    builder.addCase(addFavorite.pending, (state, action) => {
      state.loading = true;
    });

    builder.addCase(addFavorite.fulfilled, (state, action) => {
      state.loading = false;
      state.show = true;
      state.data.push(action.payload);
      state.status = { success: true, message: "Request Fulfilled" };
    });

    builder.addCase(addFavorite.rejected, (state, action) => {
      state.loading = false;
      state.status = { success: false, message: "Request Rejected" };
    });

    //Delete FAV

    builder.addCase(deleteFavorite.pending, (state, action) => {
      state.loading = true;
    });

    builder.addCase(deleteFavorite.fulfilled, (state, action) => {
      const favorites = action.payload.favorites;
      const character = action.payload.character;
      state.loading = false;
      state.show = true;
      state.data = favorites.filter((value) => { return value.id !== character.id })
      state.status = { success: true, message: "Request Fulfilled" };
    });

    builder.addCase(deleteFavorite.rejected, (state, action) => {
      state.loading = false;
      state.status = { success: false, message: "Request Rejected" };
    });
  },
});

export const { ToggleFavorites } = favoriteSlice.actions;

export default favoriteSlice.reducer;
