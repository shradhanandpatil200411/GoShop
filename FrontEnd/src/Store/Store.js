import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./Reducer/userSlice";
import productReducer from "./Reducer/productSlice";
const Store = configureStore({
  reducer: {
    user: userReducer,
    product: productReducer,
  },
});

export default Store;
