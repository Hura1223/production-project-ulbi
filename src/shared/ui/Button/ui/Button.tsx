// react
import { ButtonHTMLAttributes, FC } from "react";
// helpers
import { classNames } from "shared/lib/classNames/classNames";
// styles
import styles from "./Button.module.scss";

export enum ButtonTheme {
  CLEAR = "clear",
  CLEAR_INVERTED = "clearInverted",
  OUTLINE = "outline",
  BACKGROUND = "background",
  BACKGROUND_INVERTED = "backgroundInverted",
}

export enum ButtonSize {
  M = "size_m",
  L = "size_l",
  XL = "size_xl",
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  theme?: ButtonTheme;
  square?: boolean;
  size?: ButtonSize;
  disabled?: boolean;
}

export const Button: FC<ButtonProps> = (props) => {
  const {
    children,
    square,
    className,
    theme,
    size = ButtonSize.M,
    disabled,
    ...otherProps
  } = props;

  const mods: Record<string, boolean> = {
    [styles[theme]]: true,
    [styles[size]]: true,
    [styles.square]: square,
    [styles.disabled]: disabled,
  };

  return (
    <button
      {...otherProps}
      disabled={disabled}
      className={classNames(styles.Button, mods, [className])}
    >
      {children}
    </button>
  );
};
