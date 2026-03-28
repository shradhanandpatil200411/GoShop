import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    data: null,
    isLoading: true,
    isAuthenticated: false,
  },
  reducers: {
    loginAction: (state, action) => {
      state.data = action.payload;
      state.isLoading = false;
      state.isAuthenticated = state.data !== null;
    },
    logOutAction: (state) => {
      state.data = null;
      state.isLoading = true;
      state.isAuthenticated = state.data !== null;
    },
    updateUserAction: (state, action) => {
      state.data = { ...state.data, ...action.payload };
    },
  },
});

export default userSlice.reducer;
export const { loginAction, logOutAction, updateUserAction } =
  userSlice.actions;
