import { createSlice } from "@reduxjs/toolkit";

import {
  getUserFromStorage,
  removeUserFromStorage,
  saveUserToStorage,
} from "../../utils/helpers/auth.helpers";

const initialState: any = {
  user: null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    saveUser: (state, { payload }) => {
      state.user = payload;
      saveUserToStorage(payload);
    },
    logout: (state) => {
      state.user = null;
      removeUserFromStorage();
    },
  },
});

export const authActions = authSlice.actions;
export const authReducer = authSlice;
