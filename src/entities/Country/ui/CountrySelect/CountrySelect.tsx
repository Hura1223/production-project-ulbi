// react
import { FC, memo, useCallback, useMemo } from "react";
// helpers
import { classNames } from "shared/lib/classNames/classNames";
// types
import { Country } from "entities/Country/model/types/country";
// libs
import { useTranslation } from "react-i18next";
// ui
import { Select } from "shared/ui/Select/Select";

interface CountrySelectProps {
  className?: string;
  value?: Country;
  onChange?: (value: Country) => void;
  readonly?: boolean;
}

const options = [
  { value: Country.Armenia, content: Country.Armenia },
  { value: Country.Kazakhstan, content: Country.Kazakhstan },
  { value: Country.Ukraine, content: Country.Ukraine },
];

export const CountrySelect: FC<CountrySelectProps> = memo(
  ({ className, value, onChange, readonly }) => {
    const { t } = useTranslation();

    const onChangeHandler = useCallback((value: string) => {
      onChange?.(value as Country);
    }, []);

    return (
      <Select
        className={classNames("", {}, [className])}
        label={t("Укажите страну")}
        options={options}
        value={value}
        onChange={onChangeHandler}
        readonly={readonly}
      />
    );
  },
);
