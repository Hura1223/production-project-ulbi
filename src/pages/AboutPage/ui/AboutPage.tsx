// react
import { FC, memo } from "react";
// libs
import { useTranslation } from "react-i18next";

interface AboutPageProps {}

export const AboutPage: FC<AboutPageProps> = memo(({}) => {
  const { t } = useTranslation("about");
  return <div>{t("О сайте")}</div>;
});
