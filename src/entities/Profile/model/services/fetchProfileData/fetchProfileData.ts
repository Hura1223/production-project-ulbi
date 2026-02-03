import { createAsyncThunk } from "@reduxjs/toolkit";
import { ThunkConfig } from "app/providers/StoreProvider";
import { IProfile } from "../../types/profile";

export const fetchProfileData = createAsyncThunk<
  IProfile,
  void,
  ThunkConfig<string>
>("profile/fetchProfileData", async (_, thunkApi) => {
  console.log("fetchProfileData started");
  const { extra, rejectWithValue } = thunkApi;

  try {
    const response = await extra.api.get<IProfile>("/profile");
    console.log("fetchProfileData success:", response.data);
    return response.data;
  } catch (e) {
    console.log("fetchProfileData error:", e);
    return rejectWithValue("error");
  }
});
