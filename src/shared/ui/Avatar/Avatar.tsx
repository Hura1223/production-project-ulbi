// react
import { CSSProperties, FC, useMemo } from "react";
// helpers
import { classNames, Mods } from "shared/lib/classNames/classNames";
// styles
import styles from "./Avatar.module.scss";

interface AvatarProps {
  src?: string;
  className?: string;
  size?: number;
  alt?: string;
}

export const Avatar: FC<AvatarProps> = ({ src, className, size, alt }) => {
  const mods: Mods = {};
  const style = useMemo<CSSProperties>(() => {
    return {
      width: size || 100,
      height: size || 100,
    };
  }, [size]);
  return (
    <img
      src={src}
      className={classNames(styles.Avatar, mods, [className])}
      style={style}
      alt={alt}
    />
  );
};
