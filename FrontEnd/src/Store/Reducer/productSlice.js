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
    removeFromCart: (state, action) => {
      let filterCart = state.cart.filter((p) => p.id !== action.payload);
      state.cart = filterCart;
    },
    updateCart: (state, action) => {
      switch (action.payload.type) {
        case "incrementQuantity":
          state.cart[action.payload.index].quantity += 1;
          break;
        case "decrementQuantity":
          state.cart[action.payload.index].quantity -= 1;
          break;
        case "changeSize":
          state.cart[action.payload.index].size = action.payload.size;
          break;
        default:
          state.cart;
          break;
      }
    },
  },
});

export default productSlice.reducer;
export const { addProduct, addToCart, removeFromCart, updateCart } =
  productSlice.actions;
