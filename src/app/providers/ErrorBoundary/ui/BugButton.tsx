// react
import { FC, useEffect, useState } from "react";
// lib
import { useTranslation } from "react-i18next";
// ui
import { Button } from "shared/ui/Button";

export const BugButton = () => {
  const [error, setError] = useState(false);
  const { t } = useTranslation();

  const throwError = () => setError(true);

  useEffect(() => {
    if (error) {
      throw new Error();
    }
  }, [error]);

  return <Button onClick={throwError}>{t("Прокинуть ошибку")}</Button>;
};
