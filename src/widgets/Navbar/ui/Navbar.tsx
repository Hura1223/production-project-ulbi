// react
import { FC } from "react";
// routing
import { Link } from "react-router-dom";
// helpers
import { classNames } from "../../../shared/lib/classNames/classNames";
// types
import { AppLinkTheme } from "shared/ui/AppLink/ui/AppLink";
// ui
import { AppLink } from "shared/ui/AppLink";
// styles
import styles from "./Navbar.module.scss";

interface NavbarProps {
  className?: string;
}

export const Navbar: FC<NavbarProps> = ({ className }: NavbarProps) => {
  return <div className={classNames(styles.Navbar, {}, [])}></div>;
};
