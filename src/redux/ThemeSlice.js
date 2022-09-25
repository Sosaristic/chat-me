import { createSlice } from "@reduxjs/toolkit";
import { Theme } from "../components/styled/Theme";

const themeSlice = createSlice({
  name: "theme",
  initialState: {
    theme: Theme.light,
  },
  reducers: {
    lightTheme(state, action) {
      return {
        theme: action.payload,
      };
    },
    darkTheme(state, action) {
      return {
        theme: action.payload,
      };
    },
  },
});

export const themeActions = themeSlice.actions;
export default themeSlice;
