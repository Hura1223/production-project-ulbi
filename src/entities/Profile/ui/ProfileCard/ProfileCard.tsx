// react
import { FC } from "react";
// redux
import { useSelector } from "react-redux";
import { getProfileData } from "entities/Profile/model/selectors/getProfileData/getProfileData";
import { getProfileIsLoading } from "entities/Profile/model/selectors/getProfileIsLoading/getProfileIsLoading";
import { getProfileError } from "entities/Profile/model/selectors/getProfileError/getProfileError";
// libs
import { useTranslation } from "react-i18next";
// helpers
import { classNames } from "shared/lib/classNames/classNames";
// types
import { ButtonTheme } from "shared/ui/Button/ui/Button";
// ui
import { Text } from "shared/ui/Text";
import { Button } from "shared/ui/Button";
import { Input } from "shared/ui/Input";
// styles
import styles from "./ProfileCard.module.scss";

interface ProfileCardProps {
  className?: string;
}

export const ProfileCard: FC<ProfileCardProps> = ({ className }) => {
  const { t } = useTranslation("profile");
  const data = useSelector(getProfileData);
  const isLoading = useSelector(getProfileIsLoading);
  const error = useSelector(getProfileError);

  return (
    <div className={classNames(styles.ProfileCard, {}, [className])}>
      <div className={styles.header}>
        <Text title={t("Профиль")} />
        <Button className={styles.editBtn} theme={ButtonTheme.OUTLINE}>
          {t("Редактировать")}
        </Button>
      </div>
      <div className={styles.data}>
        <Input
          className={styles.input}
          value={data?.first}
          placeholder={t("Ваше имя")}
        />
        <Input
          className={styles.input}
          value={data?.lastname}
          placeholder={t("Ваша фамилия")}
        />
      </div>
    </div>
  );
};
