import { createSlice, PayloadAction } from "@reduxjs/toolkit";
// types
import { LoginSchema } from "../types/loginSchema";
import { loginByUsername } from "../services/loginByUsername/loginByUsername";

const initialState: LoginSchema = {
  username: "",
  password: "",
  isLoading: false,
};

const loginSlice = createSlice({
  name: "login",
  initialState: initialState,
  reducers: {
    setUsername: (state, action: PayloadAction<LoginSchema["username"]>) => {
      state.username = action.payload;
    },
    setPassword: (state, action: PayloadAction<LoginSchema["password"]>) => {
      state.password = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginByUsername.pending, (state) => {
        state.error = undefined;
        state.isLoading = true;
      })
      .addCase(loginByUsername.fulfilled, (state, action) => {
        state.isLoading = false;
      })
      .addCase(loginByUsername.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const { actions: loginActions, reducer: loginReducer } = loginSlice;
