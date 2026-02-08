// react
import { FC, memo, useCallback, useMemo } from "react";
// helpers
import { classNames } from "shared/lib/classNames/classNames";
// types
import { Currency } from "../../model/types/currency";
// libs
import { useTranslation } from "react-i18next";
// ui
import { Select } from "shared/ui/Select/Select";

interface CurrencySelectProps {
  className?: string;
  value?: Currency;
  onChange?: (value: Currency) => void;
  readonly?: boolean;
}

const options = [
  { value: Currency.UAH, content: Currency.UAH },
  { value: Currency.USD, content: Currency.USD },
  { value: Currency.EUR, content: Currency.EUR },
];

export const CurrencySelect: FC<CurrencySelectProps> = memo(
  ({ className, value, onChange, readonly }) => {
    const { t } = useTranslation();

    const onChangeHandler = useCallback((value: string) => {
      onChange?.(value as Currency);
    }, []);

    return (
      <Select
        className={classNames("", {}, [className])}
        label={t("Укажите валюту")}
        options={options}
        value={value}
        onChange={onChangeHandler}
        readonly={readonly}
      />
    );
  },
);
