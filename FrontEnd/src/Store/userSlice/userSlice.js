import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    data: [],
  },
  reducers: {
    loginAction: (state, action) => {
      console.log({ state: state.data }, { action: action.payload });
    },
  },
});

export default userSlice.reducer;
export const { loginAction } = userSlice.actions;
