// react
import { FC, memo } from "react";
// libs
import { useTranslation } from "react-i18next";
// helpers
import { classNames } from "shared/lib/classNames/classNames";
// types
import { AppLinkTheme } from "shared/ui/AppLink/ui/AppLink";
import { SidebarItemType } from "widgets/Sidebar/model/types/items";
// ui
import { AppLink } from "shared/ui/AppLink";
// styles
import styles from "./SidebarItem.module.scss";

interface SidebarItemProps {
  item: SidebarItemType;
  collapsed: boolean;
}

export const SidebarItem: FC<SidebarItemProps> = memo(({ item, collapsed }) => {
  const { t } = useTranslation();
  return (
    <AppLink
      to={item.path}
      theme={AppLinkTheme.SECONDARY}
      className={classNames(styles.item, { [styles.collapsed]: collapsed })}
    >
      <item.Icon className={styles.icon} />
      <span className={styles.link}>{t(item.text)}</span>
    </AppLink>
  );
});
