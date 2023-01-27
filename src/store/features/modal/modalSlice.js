import { createSlice} from "@reduxjs/toolkit";



export const modalSlice = createSlice({
  name: "modal",
  initialState: {
    show: false,
  },
  reducers: {
    ToggleModal: (state) => {
      state.show = !state.show;
    },
  },
});

export const { ToggleModal } = modalSlice.actions;

export default modalSlice.reducer;
