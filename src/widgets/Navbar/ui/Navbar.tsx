// react
import { FC } from "react";
// routing
import { Link } from "react-router-dom";
// helpers
import { classNames } from "../../../shared/lib/constants/classNames/classNames";
// styles
import styles from "./Navbar.module.scss";
import { AppLink, AppLinkTheme } from "../../../shared/ui/AppLink/AppLink";

interface NavbarProps {
  className?: string;
}

export const Navbar: FC<NavbarProps> = ({ className }: NavbarProps) => {
  return (
    <div className={classNames(styles.Navbar, {}, [])}>
      <div className={styles.links}>
        <AppLink
          to={"/"}
          className={styles.mainLink}
          theme={AppLinkTheme.SECONDARY}
        >
          Головна
        </AppLink>
        <AppLink to={"/about"} theme={AppLinkTheme.SECONDARY}>
          Про сайт
        </AppLink>
      </div>
    </div>
  );
};
