import { createSlice } from "@reduxjs/toolkit";
const LoginSlice = createSlice({
  name: "login",
  initialState: {
    isLogin: false,
  },
  reducers: {
    setLoninTrue: (state, action) => {
      state.isLogin = true;
    },
  },
});
export const { setLoninTrue } = LoginSlice.actions;
export default LoginSlice.reducer;
