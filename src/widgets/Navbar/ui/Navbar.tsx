// react
import { FC, useCallback, useState } from "react";
// redux
import { useDispatch, useSelector } from "react-redux";
import { getUserAuthData, userActions } from "entities/User";
// routing
import { Link } from "react-router-dom";
// helpers
import { classNames } from "../../../shared/lib/classNames/classNames";
// types
import { ButtonTheme } from "shared/ui/Button/ui/Button";
// libs
import { useTranslation } from "react-i18next";
// ui
import { Button } from "shared/ui/Button";
import { LoginModal } from "features/AuthByUsername";
// styles
import styles from "./Navbar.module.scss";

interface NavbarProps {
  className?: string;
}

export const Navbar: FC<NavbarProps> = ({ className }: NavbarProps) => {
  const [isAuthModal, setIsAuthModal] = useState(false);

  const { t } = useTranslation();

  const authData = useSelector(getUserAuthData);

  const dispatch = useDispatch();

  const onCloseModal = useCallback(() => {
    setIsAuthModal(false);
  }, []);

  const onShowModal = useCallback(() => {
    setIsAuthModal(true);
  }, []);

  const onLogOut = useCallback(() => {
    dispatch(userActions.logOut());
  }, [dispatch]);

  if (authData) {
    return (
      <div className={classNames(styles.Navbar, {}, [className])}>
        <Button
          theme={ButtonTheme.CLEAR_INVERTED}
          className={styles.links}
          onClick={onLogOut}
        >
          {t("Выйти")}
        </Button>
      </div>
    );
  }

  return (
    <div className={classNames(styles.Navbar, {}, [className])}>
      <Button
        theme={ButtonTheme.CLEAR_INVERTED}
        className={styles.links}
        onClick={onShowModal}
      >
        {t("Войти")}
      </Button>
      {isAuthModal && (
        <LoginModal isOpen={isAuthModal} onClose={onCloseModal} />
      )}
    </div>
  );
};
