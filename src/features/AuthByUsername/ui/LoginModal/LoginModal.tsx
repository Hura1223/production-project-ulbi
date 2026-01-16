// react
import { FC } from "react";
// helpers
import { classNames } from "shared/lib/classNames/classNames";
// ui
import { Modal } from "shared/ui/Modal";
import { LoginForm } from "../LoginForm/LoginForm";
// styles
import styles from "./LoginModal.module.scss";

interface LoginModalProps {
  className?: string;
  isOpen: boolean;
  onClose: () => void;
}

export const LoginModal: FC<LoginModalProps> = (props) => {
  const { className, isOpen, onClose } = props;
  return (
    <Modal
      className={classNames(styles.LoginModal, {}, [className])}
      isOpen={isOpen}
      onClose={onClose}
      lazy
    >
      <LoginForm />
    </Modal>
  );
};
