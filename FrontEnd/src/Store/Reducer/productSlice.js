import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
  name: "product",
  initialState: {
    products: [],
  },
  reducers: {
    addProduct: (state, action) => {
      state.products = [...state.products, ...action.payload];
    },
  },
});

export default productSlice.reducer;
export const { addProduct } = productSlice.actions;
