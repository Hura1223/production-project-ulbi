// react
import { FC, memo } from "react";
// lib
import { useTranslation } from "react-i18next";
// styles
import styles from "./NotFoundPage.module.scss";

interface NotFoundPageProps {}

export const NotFoundPage: FC<NotFoundPageProps> = memo(({}) => {
  const { t } = useTranslation();
  return <div className={styles.NotFoundPage}>{t("Страница не найдена")}</div>;
});
