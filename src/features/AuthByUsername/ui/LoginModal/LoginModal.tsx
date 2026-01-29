// react
import { FC, Suspense } from "react";
// helpers
import { classNames } from "shared/lib/classNames/classNames";
// ui
import { Modal } from "shared/ui/Modal";
import { LoginFormAsync } from "../LoginForm/LoginForm.async";
import { Loader } from "shared/ui/Loader/ui/Loader";
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
      <Suspense fallback={<Loader />}>
        <LoginFormAsync />
      </Suspense>
    </Modal>
  );
};
