import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getData } from "../../services/data";

const initialState = {
  isLoading: false,
  products: [],
  error: "",
};

export const fetchProducts = createAsyncThunk(
  "productsList/getProducts",
  async (page) => {
    try {
      const response = await getData(page);
      return response.data;
    } catch (error) {
      console.error(error);
    }
  }
);


const productsSlice = createSlice({
  name: "products",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      state.isLoading = false;
      state.products = action.payload;
      state.error = "";
    });
    builder.addCase(fetchProducts.rejected, (state, action) => {
      state.isLoading = false;
      state.products = [];
      state.error = action.error.message;
    });
  },
});

export default productsSlice.reducer;
