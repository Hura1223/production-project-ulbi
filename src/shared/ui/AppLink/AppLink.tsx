// react
import { FC } from "react";
// routing
import { Link, LinkProps } from "react-router-dom";
// helpers
import { classNames } from "../../../shared/lib/constants/classNames/classNames";
// styles
import styles from "./AppLink.module.scss";

export enum AppLinkTheme {
  PRIMARY = "primary",
  SECONDARY = "secondary",
}

interface AppLinkProps extends LinkProps {
  className?: string;
  theme?: AppLinkTheme;
}

export const AppLink: FC<AppLinkProps> = (props) => {
  const { children, className, to, theme = AppLinkTheme.PRIMARY } = props;

  return (
    <Link
      to={to}
      className={classNames(styles.AppLink, {}, [className, styles[theme]])}
    >
      {children}
    </Link>
  );
};
