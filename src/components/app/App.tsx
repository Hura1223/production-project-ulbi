// react
import { FC, Suspense, useContext, useState } from "react";
// routing
import { Route, Routes } from "react-router-dom";
import { Link } from "react-router-dom";
// ui
import { AboutPageAsync } from "../../pages/AboutPage/AboutPage.async";
import { MainPageAsync } from "../../pages/MainPage/MainPage.async";
// types
import { Theme, ThemeContext } from "../../theme/ThemeContext";
// styles
import "../../styles/index.scss";
import { useTheme } from "../../theme/useTheme";
import { classNames } from "../../helpers/classNames/classNames";

export const App = ({}) => {
  const { theme, toggleTheme } = useTheme();
  const bool = true;

  return (
    <div className={classNames("app", {}, [theme])}>
      <div className="topSide">
        <Link to={"/"}>Головна</Link>
        <Link to={"/about"}>Про сайт</Link>
        <button onClick={toggleTheme}>Toggle</button>
      </div>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path={"/about"} element={<AboutPageAsync />} />
          <Route path={"/"} element={<MainPageAsync />} />
        </Routes>
      </Suspense>
    </div>
  );
};
