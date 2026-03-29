import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
  name: "product",
  initialState: {
    products: [],
    cart: [],
  },
  reducers: {
    addProduct: (state, action) => {
      state.products = [...state.products, ...action.payload];
    },
    addToCart: (state, action) => {
      state.cart = [...state.cart, action.payload];
    },
  },
});

export default productSlice.reducer;
export const { addProduct } = productSlice.actions;
