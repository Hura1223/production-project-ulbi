// react
import { FC, memo, useCallback, useEffect } from "react";
// redux
import { useDispatch, useSelector, useStore } from "react-redux";
import { ReduxStoreWithManager } from "app/providers/StoreProvider";
import {
  loginActions,
  loginReducer,
} from "features/AuthByUsername/model/slice/loginSlice";
import { getLoginUsername } from "../../model/selectors/getLoginUsername/getLoginUsername";
import { getLoginPassword } from "../../model/selectors/getLoginPassword/getLoginPassword";
import { getLoginIsLoading } from "../../model/selectors/getLoginIsLoading/getLoginIsLoading";
import { getLoginError } from "../../model/selectors/getLoginError/getLoginError";
// helpers
import { classNames } from "shared/lib/classNames/classNames";
// types
import { ButtonTheme } from "shared/ui/Button/ui/Button";
import { TextTheme } from "shared/ui/Text/ui/Text";
// libs
import { useTranslation } from "react-i18next";
// services
import { loginByUsername } from "features/AuthByUsername/model/services";
// ui
import { Input } from "shared/ui/Input";
import { Button } from "shared/ui/Button";
import { Text } from "shared/ui/Text";
// styles
import styles from "./LoginForm.module.scss";
import {
  DynamicModuleLoader,
  ReducersList,
} from "shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";

export interface LoginFormProps {
  className?: string;
}

const initialReducers: ReducersList = {
  loginForm: loginReducer,
};

const LoginForm = memo(({ className }: LoginFormProps) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const username = useSelector(getLoginUsername);
  const password = useSelector(getLoginPassword);
  const isLoading = useSelector(getLoginIsLoading);
  const error = useSelector(getLoginError);

  const onChangeUsername = useCallback(
    (value: string) => {
      dispatch(loginActions.setUsername(value));
    },
    [dispatch],
  );

  const onChangePassword = useCallback(
    (value: string) => {
      dispatch(loginActions.setPassword(value));
    },
    [dispatch],
  );

  const onLoginClick = useCallback(() => {
    dispatch(loginByUsername({ username, password }));
  }, [dispatch, password, username]);

  return (
    <DynamicModuleLoader removeAfterUnmount reducers={initialReducers}>
      <div className={classNames(styles.LoginForm, {}, [className])}>
        <Text title={t("Форма авторизации")} />
        {error && <Text text={error} theme={TextTheme.ERROR} />}
        <Input
          type="text"
          className={styles.input}
          placeholder={t("Введите username")}
          autofocus
          onChange={onChangeUsername}
          value={username}
        />
        <Input
          type="text"
          className={styles.input}
          placeholder={t("Введите пароль")}
          onChange={onChangePassword}
          value={password}
        />
        <Button
          theme={ButtonTheme.OUTLINE}
          className={styles.loginBtn}
          onClick={onLoginClick}
          disabled={isLoading}
        >
          {t("Войти")}
        </Button>
      </div>
    </DynamicModuleLoader>
  );
});

export default LoginForm;
