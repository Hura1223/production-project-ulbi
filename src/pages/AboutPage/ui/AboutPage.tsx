// react
import { FC } from "react";
// libs
import { useTranslation } from "react-i18next";
// styles
// import styles from "./AboutPage.module.scss";

interface AboutPageProps {}

export const AboutPage: FC<AboutPageProps> = ({}) => {
  const { t } = useTranslation("about");
  return <div>{t("О сайте")}</div>;
};
