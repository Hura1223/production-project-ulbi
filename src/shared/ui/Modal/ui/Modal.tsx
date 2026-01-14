// react
import { FC, ReactNode, useCallback, useEffect, useRef, useState } from "react";
// libs
import { classNames } from "shared/lib/classNames/classNames";
// ui
import { Portal } from "shared/ui/Portal";
// styles
import styles from "./Modal.module.scss";

interface ModalProps {
  className?: string;
  children?: ReactNode;
  isOpen: boolean;
  onClose: () => void;
}

const ANIMATION_DELAY = 300;

export const Modal: FC<ModalProps> = ({
  className,
  children,
  isOpen,
  onClose,
}) => {
  const [isClosing, setIsClosing] = useState(false);
  const timerRef = useRef<ReturnType<typeof setTimeout>>();

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
    [closeHadler]
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

  const mods: Record<string, boolean> = {
    [styles.opened]: isOpen,
    [styles.isClosing]: isClosing,
  };

  return (
    <Portal>
      <div className={classNames(styles.Modal, mods, [className])}>
        <div className={styles.overlay} onClick={closeHadler}>
          <div className={styles.content} onClick={onContentClick}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi,
            fugiat assumenda velit eos eum hic sed doloribus ullam recusandae
            vero iure, sequi architecto nulla soluta.
          </div>
        </div>
      </div>
    </Portal>
  );
};
