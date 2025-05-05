import { configureStore } from "@reduxjs/toolkit";
import basketReducer from "../redux/reducers/basketSlice";
import productReducer from "../redux/reducers/productSlice";
import adminSlice from "./reducers/adminSlice";

const store = configureStore({
  reducer: {
    basket: basketReducer,
    products: productReducer,
    admin:adminSlice
  },
});

export default store;
