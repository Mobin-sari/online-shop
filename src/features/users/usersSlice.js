import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { choseData } from "../../services/data";

const initialState = {
  isLoading: false,
  users: [],
  error: "",
};

export const fetchUsers = createAsyncThunk("userssList/getUsers", async () => {
  try {
    const response = await choseData();
    return response.data;
  } catch (error) {
    console.error(error);
  }
});

const usersSlice = createSlice({
  name: "users",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchUsers.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchUsers.fulfilled, (state, action) => {
      state.isLoading = false;
      state.users = action.payload;
      state.error = "";
    });
    builder.addCase(fetchUsers.rejected, (state, action) => {
      state.isLoading = false;
      state.users = [];
      state.error = action.error.message;
    });
  },
});

export default usersSlice.reducer;
