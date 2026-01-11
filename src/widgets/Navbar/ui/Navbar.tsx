// react
import { FC, useCallback, useState } from "react";
// routing
import { Link } from "react-router-dom";
// helpers
import { classNames } from "../../../shared/lib/classNames/classNames";
// types
import { ButtonTheme } from "shared/ui/Button/ui/Button";
// ui
import { Button } from "shared/ui/Button";
import { Modal } from "shared/ui/Modal";
// styles
import styles from "./Navbar.module.scss";
import { useTranslation } from "react-i18next";

interface NavbarProps {
  className?: string;
}

export const Navbar: FC<NavbarProps> = ({ className }: NavbarProps) => {
  const [isAuthModal, setIsAuthModal] = useState(false);
  const { t } = useTranslation();

  const onToggleModal = useCallback(() => {
    setIsAuthModal((prev) => !prev);
  }, [isAuthModal]);

  return (
    <div className={classNames(styles.Navbar, {}, [className])}>
      <Button
        theme={ButtonTheme.CLEAR_INVERTED}
        className={styles.links}
        onClick={onToggleModal}
      >
        {t("Войти")}
      </Button>
      <Modal isOpen={isAuthModal} onClose={onToggleModal} />
    </div>
  );
};
