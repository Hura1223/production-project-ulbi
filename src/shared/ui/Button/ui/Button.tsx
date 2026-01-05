// react
import { ButtonHTMLAttributes, FC } from "react";
// helpers
import { classNames } from "shared/lib/classNames/classNames";
// styles
import styles from "./Button.module.scss";

export enum ThemeButton {
  CLEAR = "clear",
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  theme?: ThemeButton;
}

export const Button: FC<ButtonProps> = (props) => {
  const { children, className, theme, ...otherProps } = props;
  return (
    <button
      {...otherProps}
      className={classNames(styles.Button, { [styles[theme]]: true }, [
        className,
      ])}
    >
      {children}
    </button>
  );
};
