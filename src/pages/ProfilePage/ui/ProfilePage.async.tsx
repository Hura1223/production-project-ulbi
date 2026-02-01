import { lazy } from "react";

export const ProfilePageAsync = lazy(
  () =>
    new Promise((resolve) => {
      //@ts-ignore
      // Так не робити!
      setTimeout(() => resolve(import("./ProfilePage")), 1500);
    }),
);
