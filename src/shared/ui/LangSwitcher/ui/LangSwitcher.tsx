// react
import { FC, memo } from "react";
// libs
import { useTranslation } from "react-i18next";
import { classNames } from "shared/lib/classNames/classNames";
// ui
import { Button } from "shared/ui/Button";
import { ButtonTheme } from "shared/ui/Button/ui/Button";
// styles
import styles from "./LangSwitcher.module.scss";

interface LangSwitcherProps {
  className?: string;
  short?: boolean;
}

export const LangSwitcher: FC<LangSwitcherProps> = memo(
  ({ className, short }) => {
    const { t, i18n } = useTranslation();

    const toggle = async () => {
      i18n.changeLanguage(i18n.language === "ru" ? "en" : "ru");
    };
    return (
      <Button
        className={classNames(styles.LangSwitcher, {}, [className])}
        theme={ButtonTheme.CLEAR}
        onClick={toggle}
      >
        {t(short ? "Короткий язык" : "Язык")}
      </Button>
    );
  },
);
