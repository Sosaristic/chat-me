import { createSlice } from "@reduxjs/toolkit";
const authSlice = createSlice({
  name: "auth",
  initialState: {
    authState: false,
  },
  reducers: {
    addUser(state, action) {
      return {
        authState: action.payload,
      };
    },
    logout(state, action) {
      return {
        authState: null,
      };
    },
  },
});
export const loginActions = authSlice.actions;
export default authSlice;
