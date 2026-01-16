// react
import { FC } from "react";
// helpers
import { classNames } from "shared/lib/classNames/classNames";
// libs
import { useTranslation } from "react-i18next";
// ui
import { Input } from "shared/ui/Input";
import { Button } from "shared/ui/Button";
// styles
import styles from "./LoginForm.module.scss";

interface LoginFormProps {
  className?: string;
}

export const LoginForm: FC<LoginFormProps> = ({ className }) => {
  const { t } = useTranslation();
  return (
    <div className={classNames(styles.LoginForm, {}, [className])}>
      <Input
        type="text"
        className={styles.input}
        placeholder={t("Введите username")}
        autofocus
      />
      <Input
        type="text"
        className={styles.input}
        placeholder={t("Введите пароль")}
      />
      <Button className={styles.loginBtn}>{t("Войти")}</Button>
    </div>
  );
};
