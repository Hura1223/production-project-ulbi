// react
import { FC, Suspense, useEffect, useState } from "react";
// routing
import { AppRouter } from "./providers/router";
// helpers
import { classNames } from "../shared/lib/classNames/classNames";
import { useTheme } from "./providers/ThemeProvider";
// ui
import { Navbar } from "../widgets/Navbar";
import { Sidebar } from "widgets/Sidebar";
// styles

import { PageLoader } from "widgets/PageLoader/ui/PageLoader";

export const App = ({}) => {
  const { theme } = useTheme();

  return (
    <div className={classNames("app", {}, [theme])}>
      <Suspense fallback={<PageLoader />}>
        <Navbar />
        <div className="content-page">
          <Sidebar />
          <AppRouter />
        </div>
      </Suspense>
    </div>
  );
};
