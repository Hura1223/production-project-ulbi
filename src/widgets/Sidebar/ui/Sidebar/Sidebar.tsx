// react
import { FC, memo, useMemo, useState } from "react";
// helpers
import { classNames } from "shared/lib/classNames/classNames";
// types
import { ButtonSize, ButtonTheme } from "shared/ui/Button/ui/Button";
import { SideBarItemList } from "widgets/Sidebar/model/types/items";
// ui
import { SidebarItem } from "../SidebarItem/SidebarItem";
import { ThemeSwitcher } from "shared/ui/ThemeSwitcher";
import { LangSwitcher } from "shared/ui/LangSwitcher";
import { Button } from "shared/ui/Button";
// styles
import styles from "./Sidebar.module.scss";

interface SidebarProps {
  className?: string;
}

export const Sidebar: FC<SidebarProps> = memo(({ className }) => {
  const [collapsed, setCollapsed] = useState(false);

  const onToggle = () => {
    setCollapsed((prev) => !prev);
  };

  const itemsList = useMemo(
    () =>
      SideBarItemList.map((item) => (
        <SidebarItem item={item} collapsed={collapsed} key={item.path} />
      )),
    [collapsed],
  );

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
      <div className={styles.items}>{itemsList}</div>
      <div className={styles.switchers}>
        <ThemeSwitcher />
        <LangSwitcher short={collapsed} className={styles.lang} />
      </div>
    </div>
  );
});
