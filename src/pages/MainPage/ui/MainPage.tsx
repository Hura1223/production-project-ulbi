// react
import { FC, useState } from "react";
// libs
import { useTranslation } from "react-i18next";
import { Input } from "shared/ui/Input";

interface MainPageProps {}

export const MainPage: FC<MainPageProps> = ({}) => {
  const { t } = useTranslation();
  const [value, setValue] = useState("");

  const onChange = (value: string) => {
    setValue(value);
  };
  return (
    <div>
      {t("Главная страница")}
      <Input
        placeholder={t("Введите текст")}
        onChange={onChange}
        value={value}
      />
    </div>
  );
};
