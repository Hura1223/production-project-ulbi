// react
import {
  MutableRefObject,
  ReactNode,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
// constants
import { useTheme } from "app/providers/ThemeProvider";
// libs
import { classNames, Mods } from "shared/lib/classNames/classNames";
// ui
import { Portal } from "shared/ui/Portal";
// styles
import styles from "./Modal.module.scss";

interface ModalProps {
  className?: string;
  children?: ReactNode;
  isOpen?: boolean;
  onClose: () => void;
  lazy?: boolean;
}

const ANIMATION_DELAY = 300;

export const Modal = (props: ModalProps) => {
  const { isOpen, onClose, className, children, lazy } = props;

  const [isClosing, setIsClosing] = useState(false);

  const [isMounted, setIsMounted] = useState(false);

  const timerRef = useRef<ReturnType<typeof setTimeout>>() as MutableRefObject<
    ReturnType<typeof setTimeout>
  >;

  const { theme } = useTheme();

  useEffect(() => {
    if (isOpen) {
      setIsMounted(true);
    }
  }, [isOpen]);

  const closeHadler = useCallback(() => {
    if (onClose) {
      setIsClosing(true);
      timerRef.current = setTimeout(() => {
        onClose();
        setIsClosing(false);
      }, ANIMATION_DELAY);
    }
  }, [onClose]);

  const onContentClick = (e: React.MouseEvent) => {
    e.stopPropagation();
  };

  const onKeyDownClick = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        closeHadler();
      }
    },
    [closeHadler],
  );

  useEffect(() => {
    if (isOpen) {
      window.addEventListener("keydown", onKeyDownClick);
    }
    return () => {
      clearTimeout(timerRef.current);
      window.removeEventListener("keydown", onKeyDownClick);
    };
  }, [isOpen, onKeyDownClick]);

  const mods: Mods = {
    [styles.opened]: isOpen,
    [styles.isClosing]: isClosing,
  };

  if (lazy && !isMounted) {
    return null;
  }

  return (
    <Portal>
      <div className={classNames(styles.Modal, mods, [className, theme])}>
        <div className={styles.overlay} onClick={closeHadler}>
          <div className={styles.content} onClick={onContentClick}>
            {children}
          </div>
        </div>
      </div>
    </Portal>
  );
};
