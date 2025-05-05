import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getAdminDataThunk = createAsyncThunk("admin/get", async () => {
  const res = await axios.get(
    "https://6806d515e81df7060eb8305b.mockapi.io/basketAPI"
  );
  return res.data;
});

export const postAdminThunk = createAsyncThunk("admin/post", async (data) => {
  const res = await axios.post(
    "https://6806d515e81df7060eb8305b.mockapi.io/basketAPI",
    data
  );
  return res.data;
});

export const deleteAdminDataThunk = createAsyncThunk("admin/delete", async (id) => {
  const res = await axios.delete(
    `https://6806d515e81df7060eb8305b.mockapi.io/basketAPI/${id}`
  );
  return id;
});

export const adminSlice = createSlice({
  name: "admin",
  initialState: {
    products: [],
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAdminDataThunk.fulfilled, (state, action) => {
        state.loading = false;
        state.admin = action.payload;
      })
      .addCase(getAdminDataThunk.pending, (state) => {
        state.loading = true;
      })
      .addCase(getAdminDataThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
        .addCase(postAdminThunk.fulfilled, (state, action) => {
          state.loading = false;
          state.products.push(action.payload);
        })
        .addCase(postAdminThunk.pending, (state) => {
          state.loading = true;
        })
        .addCase(postAdminThunk.rejected, (state, action) => {
          state.loading = false;
          state.error = action.error.message;
        })
      .addCase(deleteAdminDataThunk.fulfilled, (state, action) => {
        state.loading = false;
        state.admin = state.admin.filter(
          (item) => item.id !== action.payload
        );
      })
  },
});

export default adminSlice.reducer;
