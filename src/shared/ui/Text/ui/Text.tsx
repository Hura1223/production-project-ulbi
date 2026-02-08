// helpers
import { classNames, Mods } from "shared/lib/classNames/classNames";
// styles
import styles from "./Text.module.scss";
import { memo } from "react";

export enum TextTheme {
  PRIMARY = "primary",
  ERROR = "error",
}

export enum TextAlign {
  RIGHT = "right",
  LEFT = "left",
  CENTER = "center",
}

interface TextProps {
  className?: string;
  title?: string;
  text?: string;
  theme?: TextTheme;
  align?: TextAlign;
}

export const Text = memo((props: TextProps) => {
  const {
    className,
    text,
    theme = TextTheme.PRIMARY,
    title,
    align = TextAlign.LEFT,
  } = props;

  const mods: Mods = {
    [styles[theme]]: true,
    [styles[align]]: true,
  };

  return (
    <div className={classNames(styles.Text, mods, [className])}>
      {title && <p className={styles.title}>{title}</p>}
      {text && <p className={styles.text}>{text}</p>}
    </div>
  );
});
