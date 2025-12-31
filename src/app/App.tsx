// react
import { FC } from "react";
// routing
import { AppRouter } from "./providers/router";
// helpers
import { classNames } from "../shared/lib/constants/classNames/classNames";
import { useTheme } from "./providers/ThemeProvider/useTheme";
// ui
import { Navbar } from "../widgets/Navbar";
// styles
import "../app/styles/index.scss";

export const App = ({}) => {
  const { theme, toggleTheme } = useTheme();
  // const bool = true;

  return (
    <div className={classNames("app", {}, [theme])}>
      <Navbar />
      <button onClick={toggleTheme}>Toggle</button>
      <AppRouter />
    </div>
  );
};
