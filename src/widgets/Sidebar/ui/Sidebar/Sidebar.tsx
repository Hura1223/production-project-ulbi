// react
import { FC, useState } from "react";
// helpers
import { classNames } from "shared/lib/classNames/classNames";
// types
import { ButtonSize, ButtonTheme } from "shared/ui/Button/ui/Button";
import { AppLinkTheme } from "shared/ui/AppLink/ui/AppLink";
// libs
import { useTranslation } from "react-i18next";
// constants
import { RoutePath } from "shared/config/routeConfig/routeConfig";
// ui
import { ThemeSwitcher } from "shared/ui/ThemeSwitcher";
import { LangSwitcher } from "shared/ui/LangSwitcher";
import { Button } from "shared/ui/Button";
import { AppLink } from "shared/ui/AppLink";
// assets
import MainIcon from "../../../../shared/assets/icons/main-20-20.svg";
import AboutIcon from "../../../../shared/assets/icons/about-20-20.svg";
// styles
import styles from "./Sidebar.module.scss";

interface SidebarProps {
  className?: string;
}

export const Sidebar: FC<SidebarProps> = ({ className }) => {
  const [collapsed, setCollapsed] = useState(false);
  const { t } = useTranslation();

  const onToggle = () => {
    setCollapsed((prev) => !prev);
  };

  return (
    <div
      className={classNames(styles.Sidebar, { [styles.collapsed]: collapsed }, [
        className,
      ])}
    >
      <Button
        onClick={onToggle}
        className={styles.collapsedBtn}
        theme={ButtonTheme.BACKGROUND_INVERTED}
        square
        size={ButtonSize.L}
      >
        {collapsed ? ">" : "<"}
      </Button>
      <div className={styles.items}>
        <AppLink
          to={RoutePath.main}
          theme={AppLinkTheme.SECONDARY}
          className={styles.item}
        >
          <MainIcon className={styles.icon} />
          <span className={styles.link}>{t("Главная")}</span>
        </AppLink>
        <AppLink
          to={RoutePath.about}
          theme={AppLinkTheme.SECONDARY}
          className={styles.item}
        >
          <AboutIcon className={styles.icon} />
          <span className={styles.link}>{t("О сайте")}</span>
        </AppLink>
      </div>

      <div className={styles.switchers}>
        <ThemeSwitcher />
        <LangSwitcher short={collapsed} className={styles.lang} />
      </div>
    </div>
  );
};
