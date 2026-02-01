// react
import { FC, memo, useState } from "react";
// libs
import { useTranslation } from "react-i18next";

interface MainPageProps {}

export const MainPage: FC<MainPageProps> = memo(({}) => {
  const { t } = useTranslation();

  return <div>{t("Главная страница")}</div>;
});
