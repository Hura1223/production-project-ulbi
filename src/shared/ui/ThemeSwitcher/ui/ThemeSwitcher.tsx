// react
import { FC } from "react";
// helpers
import { classNames } from "../../../lib/classNames/classNames";
import { Theme, useTheme } from "app/providers/ThemeProvider";
// assets
import LightTheme from "../../../assets/icons/theme-light.svg";
import DarkTheme from "../../../assets/icons/theme-dark.svg";
// types
import { ButtonTheme } from "shared/ui/Button/ui/Button";
// ui
import { Button } from "shared/ui/Button";
// styles
import styles from "./ThemeSwitcher.module.scss";

interface ThemeSwitcherProps {
  className?: string;
}

export const ThemeSwitcher: FC<ThemeSwitcherProps> = ({ className }) => {
  const { theme, toggleTheme } = useTheme();
  return (
    <Button
      theme={ButtonTheme.CLEAR}
      className={classNames(styles.ThemeSwitcher, {}, [className])}
      onClick={toggleTheme}
    >
      {theme === Theme.LIGHT ? <LightTheme /> : <DarkTheme />}
    </Button>
  );
};
