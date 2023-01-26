import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import CharacterType from "../../../utils/enums/CharacterType";
import StudentService from "../../../services/student.service";
import StaffService from "../../../services/staff.service";

export const getStudents = createAsyncThunk(
  "/characters/getStudents",
  async (arg, { rejectWithValue }) => {
    try {
      const { data } = await StudentService.getStudents();
      return data;
    } catch (error) {
      console.log(error)
      rejectWithValue(error.response.data);
    }
  }
);

export const getStaff = createAsyncThunk(
  "/characters/getStaff",
  async (arg, { rejectWithValue }) => {
    try {
      const { data } = await StaffService.getStaff();
      return data;

    } catch (error) {
      rejectWithValue(error.response.data);
    }
  }
);

export const characterSlice = createSlice({
  name: "characters",
  initialState: {
    CharacterType: CharacterType.STUDENT,
    data: [],
    status: { success: false, message: "" },
    loading: false,
  },
  reducers: {},
  extraReducers:  (builder) => {
    //STUDENTS
    builder.addCase(getStudents.pending, (state, action) =>{
      state.loading = true;
    })

    builder.addCase(getStudents.fulfilled, (state, action) =>{
      state.CharacterType = CharacterType.STUDENT;
      state.loading = false;
      state.data = action.payload;
      state.status = { success: true, message: "Request Fulfilled" };
    })

    builder.addCase(getStudents.rejected, (state, action) =>{
      state.loading = false;
      state.data = action.payload;
      state.status = { success: false, message: "Request Rejected" };
    })

    //STAFF
    builder.addCase(getStaff.pending, (state, action) =>{
      state.loading = true;
    })

    builder.addCase(getStaff.fulfilled, (state, action) =>{
      state.CharacterType = CharacterType.STAFF;
      state.loading = false;
      state.data = action.payload;
      state.status = { success: true, message: "Request Fulfilled" };
    })

    builder.addCase(getStaff.rejected, (state, action) =>{
      state.loading = false;
      state.data = action.payload;
      state.status = { success: false, message: "Request Rejected" };
    })
  },
});

// Action creators are generated for each case reducer function
// export const { increment, decrement, incrementByAmount } = characterSlice.actions

export default characterSlice.reducer;
