import { createSlice, PayloadAction } from "@reduxjs/toolkit";
// types
import { IUser, UserSchema } from "../types/user";
import { USER_LOCALSTORAGE_KEY } from "shared/constants/localStorage";

const initialState: UserSchema = {};

const userSlice = createSlice({
  name: "user",
  initialState: initialState,
  reducers: {
    setAuthData: (state, action: PayloadAction<IUser>) => {
      state.authData = action.payload;
    },
    initAuthData: (state) => {
      const user = localStorage.getItem(USER_LOCALSTORAGE_KEY);
      if (user) {
        state.authData = JSON.parse(user);
      }
    },
    logOut: (state) => {
      state.authData = undefined;
      localStorage.removeItem(USER_LOCALSTORAGE_KEY);
    },
  },
});

export const { actions: userActions } = userSlice;
export const { reducer: userReducer } = userSlice;
