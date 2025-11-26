import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    data: [],
    isLogout: false,
  },
  reducers: {
    loginAction: (state, action) => {
      state.data = action.payload;
      state.isLogout = true;
    },
    logOutAction: (state) => {
      state.data = [];
      state.isLogout = true;
    },
  },
});

export default userSlice.reducer;
export const { loginAction } = userSlice.actions;
