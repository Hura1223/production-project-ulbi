// react
import { FC, lazy } from "react";
// types
import { LoginFormProps } from "./LoginForm";

export const LoginFormAsync = lazy<FC<LoginFormProps>>(
  () =>
    new Promise((resolve) => {
      //@ts-ignore
      // Так не робити!
      setTimeout(() => resolve(import("./LoginForm")), 1500);
    }),
);
