import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const MOCK_API_URL = "https://6806d515e81df7060eb8305b.mockapi.io/basketAPI";

export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async () => {
    const response = await axios.get("https://dummyjson.com/products");
    return response.data.products.slice(1, 9);
  }
);

export const addProductAPI = createAsyncThunk(
  "products/addProductAPI",
  async (product) => {
    const response = await axios.post(MOCK_API_URL, product);
    return response.data;
  }
);

const productSlice = createSlice({
  name: "products",
  initialState: {
    items: [],
    loading: false,
    error: null,
  },
  reducers: {
    addProductLocally: (state, action) => {
      state.items.push(action.payload);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(addProductAPI.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(addProductAPI.fulfilled, (state, action) => {
        state.loading = false;
        state.items.push(action.payload);
      })
      .addCase(addProductAPI.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const { addProductLocally } = productSlice.actions;
export default productSlice.reducer;
