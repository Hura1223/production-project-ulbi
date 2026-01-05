// react
import { FC, Suspense } from "react";
// routing
import { AppRouter } from "./providers/router";
// helpers
import { classNames } from "../shared/lib/classNames/classNames";
import { useTheme } from "./providers/ThemeProvider";
// ui
import { Navbar } from "../widgets/Navbar";
import { Sidebar } from "widgets/Sidebar";
// styles
import "../app/styles/index.scss";

export const App = ({}) => {
  const { theme } = useTheme();

  return (
    <div className={classNames("app", {}, [theme])}>
      <Suspense fallback="">
        <Navbar />
        <div className="content-page">
          <Sidebar />
          <AppRouter />
        </div>
      </Suspense>
    </div>
  );
};
