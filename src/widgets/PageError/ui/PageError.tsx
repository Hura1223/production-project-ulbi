// react
import { FC } from "react";
// libs
import { classNames } from "shared/lib/classNames/classNames";
import { useTranslation } from "react-i18next";
// ui
import { Button } from "shared/ui/Button";
// styles
import styles from "./PageError.module.scss";

interface PageErrorProps {
  className?: string;
}

export const PageError: FC<PageErrorProps> = ({ className }) => {
  const { t } = useTranslation();

  const reloadPage = () => {
    location.reload();
  };

  return (
    <div className={classNames(styles.PageError, {}, [className])}>
      <p>{t("Произошла непридвиденная ошибка.")}</p>
      <Button onClick={reloadPage}>{t("Обновить страницу")}</Button>
    </div>
  );
};
