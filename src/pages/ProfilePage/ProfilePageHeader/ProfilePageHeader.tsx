// react
import { FC, useCallback } from "react";
// helpers
import { classNames } from "shared/lib/classNames/classNames";
// styles
import styles from "./ProfilePageHeader.module.scss";
import { Button } from "shared/ui/Button";
import { ButtonTheme } from "shared/ui/Button/ui/Button";
import { useTranslation } from "react-i18next";
import { Text } from "shared/ui/Text";
import { useSelector } from "react-redux";
import {
  getProfileReadonly,
  profileActions,
  updateProfileData,
} from "entities/Profile";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch/useAppDispatch";

interface ProfilePageHeaderProps {
  className?: string;
}

export const ProfilePageHeader: FC<ProfilePageHeaderProps> = (props) => {
  const { className } = props;
  const { t } = useTranslation("profile");
  const readonly = useSelector(getProfileReadonly);
  const dispatch = useAppDispatch();

  const onEdit = useCallback(() => {
    dispatch(profileActions.setReadonly(false));
  }, [dispatch]);

  const onCancelEdit = useCallback(() => {
    dispatch(profileActions.cancelEdit());
  }, [dispatch]);

  const onSave = useCallback(() => {
    dispatch(updateProfileData());
  }, [dispatch]);

  return (
    <div className={classNames(styles.ProfilePageHeader, {}, [className])}>
      <Text title={t("Профиль")} />
      {readonly ? (
        <Button
          className={styles.editBtn}
          theme={ButtonTheme.OUTLINE}
          onClick={onEdit}
        >
          {t("Редактировать")}
        </Button>
      ) : (
        <>
          <Button
            className={styles.editBtn}
            theme={ButtonTheme.OUTLINE_RED}
            onClick={onCancelEdit}
          >
            {t("Отменить")}
          </Button>
          <Button
            className={styles.saveBtn}
            theme={ButtonTheme.OUTLINE}
            onClick={onSave}
          >
            {t("Сохранить")}
          </Button>
        </>
      )}
    </div>
  );
};
