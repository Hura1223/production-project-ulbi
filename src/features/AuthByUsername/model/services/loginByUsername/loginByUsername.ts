import { createAsyncThunk } from "@reduxjs/toolkit";
import { GetThunkAPI } from "@reduxjs/toolkit/dist/createAsyncThunk";
import { ThunkConfig } from "app/providers/StoreProvider";
import { IUser, userActions } from "entities/User";
import { USER_LOCALSTORAGE_KEY } from "shared/constants/localStorage";

interface LoginByUsernameProps {
  username: string;
  password: string;
}

export const loginByUsername = createAsyncThunk<
  IUser,
  LoginByUsernameProps,
  ThunkConfig<string>
>(
  "login/loginByUsername",
  async (
    authData: LoginByUsernameProps,
    thunkApi: GetThunkAPI<ThunkConfig<string>>,
  ) => {
    const { dispatch, extra, rejectWithValue } = thunkApi;

    try {
      const response = await extra.api.post<IUser>("/login", authData);
      if (!response.data) {
        throw new Error();
      }
      localStorage.setItem(
        USER_LOCALSTORAGE_KEY,
        JSON.stringify(response.data),
      );
      dispatch(userActions.setAuthData(response.data));

      return response.data;
    } catch (e) {
      console.log(e);
      return rejectWithValue("error");
    }
  },
);
