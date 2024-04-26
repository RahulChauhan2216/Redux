import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSline";
import productReducer from "./productSlice"

const Store = configureStore({
  reducer: {
    cart: cartReducer,
    product: productReducer,
  },
});

export default Store;
