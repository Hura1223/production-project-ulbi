// react
import { FC, memo } from "react";
// redux
import { profileReducer } from "entities/Profile";
// libs
import { useTranslation } from "react-i18next";
// helpers
import { classNames } from "shared/lib/classNames/classNames";
import {
  DynamicModuleLoader,
  ReducersList,
} from "shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";

interface ProfilePageProps {
  className?: string;
}

const reducers: ReducersList = {
  profile: profileReducer,
};

const ProfilePage: FC<ProfilePageProps> = memo(({ className }) => {
  const { t } = useTranslation();

  return (
    <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
      <div className={classNames("", {}, [className])}>{t("PROFILE PAGE")}</div>
    </DynamicModuleLoader>
  );
});

export default ProfilePage;
