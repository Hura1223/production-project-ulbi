// react
import { ChangeEvent, FC, memo, useMemo } from "react";
// helpers
import { classNames, Mods } from "shared/lib/classNames/classNames";
// styles
import styles from "./Select.module.scss";

export interface SelectOption {
  value: string;
  content: string;
}

interface SelectProps {
  className?: string;
  label?: string;
  options?: SelectOption[];
  value?: string;
  onChange?: (value: string) => void;
  readonly?: boolean;
}

export const Select: FC<SelectProps> = memo((props) => {
  const { className, label, onChange, options, value, readonly } = props;

  const onChangeHandler = (e: ChangeEvent<HTMLSelectElement>) => {
    if (onChange) {
      onChange(e.target.value);
    }
  };

  const optionsList = useMemo(() => {
    return options?.map((opt) => (
      <option className={styles.option} value={opt.value} key={opt.value}>
        {opt.content}
      </option>
    ));
  }, [options]);

  const mods: Mods = {};

  return (
    <div className={classNames(styles.Wrapper, mods, [className])}>
      {label && <span className={styles.label}>{`${label}>`}</span>}
      <select
        value={value}
        onChange={onChangeHandler}
        className={styles.select}
        disabled={readonly}
      >
        {optionsList}
      </select>
    </div>
  );
});
