// react
import { BugButton } from "app/providers/ErrorBoundary";
import { Counter } from "entities/Counter";
import { FC } from "react";
import { useTranslation } from "react-i18next";

interface MainPageProps {}

export const MainPage: FC<MainPageProps> = ({}) => {
  const { t } = useTranslation();
  return (
    <div>
      {t("Главная страница")}
      <Counter />
    </div>
  );
};
