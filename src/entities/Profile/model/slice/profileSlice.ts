import { createSlice } from "@reduxjs/toolkit";
import { ProfileSchema } from "../types/profile";

const initialState: ProfileSchema = {
  // data : undefined до тих пір поки не отримаю дані з сервера
  data: undefined,
  isLoading: false,
  error: undefined,
  readonly: true,
};

export const profileSlice = createSlice({
  name: "profile",
  initialState: initialState,
  reducers: {},
});

export const { actions: profileActions, reducer: profileReducer } =
  profileSlice;
