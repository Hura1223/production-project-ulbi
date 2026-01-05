// react
import { FC } from "react";
import { useTranslation } from "react-i18next";
// styles
// import styles from "./MainPage.module.scss";

interface MainPageProps {}

export const MainPage: FC<MainPageProps> = ({}) => {
  const { t } = useTranslation();
  return <div>{t("Главная страница")}</div>;
};
