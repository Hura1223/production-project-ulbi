// react
import { FC, memo, useCallback, useEffect } from "react";
// redux
import {
  fetchProfileData,
  getProfileError,
  getProfileForm,
  getProfileIsLoading,
  getProfileReadonly,
  profileActions,
  ProfileCard,
  profileReducer,
} from "entities/Profile";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch/useAppDispatch";
import {
  DynamicModuleLoader,
  ReducersList,
} from "shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";
import { useSelector } from "react-redux";
import { ProfilePageHeader } from "../ProfilePageHeader/ProfilePageHeader";
import { Currency } from "entities/Currency";
import { Country } from "entities/Country";

interface ProfilePageProps {
  className?: string;
}

const reducers: ReducersList = {
  profile: profileReducer,
};

const ProfilePage: FC<ProfilePageProps> = memo(({ className }) => {
  const dispatch = useAppDispatch();
  const formData = useSelector(getProfileForm);
  const isLoading = useSelector(getProfileIsLoading);
  const error = useSelector(getProfileError);
  const readonly = useSelector(getProfileReadonly);

  useEffect(() => {
    dispatch(fetchProfileData());
  }, [dispatch]);

  const onChangeFirstname = useCallback(
    (value?: string) => {
      dispatch(
        profileActions.updateProfile({
          first: value || "",
        }),
      );
    },
    [dispatch],
  );

  const onChangeLastname = useCallback(
    (value?: string) => {
      dispatch(
        profileActions.updateProfile({
          lastname: value || "",
        }),
      );
    },
    [dispatch],
  );

  const onChangeAge = useCallback(
    (value?: string) => {
      if (value === undefined) {
        dispatch(profileActions.updateProfile({ age: undefined }));
        return;
      }
      const onlyDigits = value.replace(/\D/g, "");
      if (onlyDigits.length > 3) return;

      const num = onlyDigits === "" ? undefined : Number(onlyDigits);

      dispatch(profileActions.updateProfile({ age: num }));
    },
    [dispatch],
  );

  const onChangeCity = useCallback(
    (value?: string) => {
      dispatch(
        profileActions.updateProfile({
          city: value || "",
        }),
      );
    },
    [dispatch],
  );

  const onChangeUsername = useCallback(
    (value?: string) => {
      dispatch(
        profileActions.updateProfile({
          username: value || "",
        }),
      );
    },
    [dispatch],
  );

  const onChangeAvatar = useCallback(
    (value?: string) => {
      dispatch(
        profileActions.updateProfile({
          avatar: value || "",
        }),
      );
    },
    [dispatch],
  );

  const onChangeCurrency = useCallback(
    (currency?: Currency) => {
      dispatch(
        profileActions.updateProfile({
          currency,
        }),
      );
    },
    [dispatch],
  );

  const onChangeCountry = useCallback(
    (country: Country) => {
      dispatch(
        profileActions.updateProfile({
          country,
        }),
      );
    },
    [dispatch],
  );
  return (
    <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
      <ProfilePageHeader />
      <ProfileCard
        data={formData}
        isLoading={isLoading}
        error={error}
        onChangeFirstname={onChangeFirstname}
        onChangeLastname={onChangeLastname}
        onChangeAge={onChangeAge}
        onChangeCity={onChangeCity}
        onChangeUsername={onChangeUsername}
        onChangeAvatar={onChangeAvatar}
        onChangeCurrency={onChangeCurrency}
        onChangeCountry={onChangeCountry}
        readonly={readonly}
      />
    </DynamicModuleLoader>
  );
});

export default ProfilePage;
