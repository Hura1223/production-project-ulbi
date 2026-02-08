import { createAsyncThunk } from "@reduxjs/toolkit";
import { ThunkConfig } from "app/providers/StoreProvider";
import { IProfile } from "../../types/profile";
import { getProfileForm } from "../../selectors/getProfileForm/getProfileForm";

export const updateProfileData = createAsyncThunk<
  IProfile,
  void,
  ThunkConfig<string>
>("profile/updateProfileData", async (_, thunkApi) => {
  const { extra, rejectWithValue, getState } = thunkApi;

  const formData = getProfileForm(getState());

  try {
    const response = await extra.api.put<IProfile>("/profile", formData);
    console.log("fetchProfileData success:", response.data);
    return response.data;
  } catch (e) {
    console.log("fetchProfileData error:", e);
    return rejectWithValue("error");
  }
});
