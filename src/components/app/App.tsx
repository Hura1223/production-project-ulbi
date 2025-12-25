// react
import { FC, Suspense } from "react";
// styles
import "../../index.scss";
import { Route, Routes } from "react-router-dom";
import { Link } from "react-router-dom";
import { AboutPageAsync } from "../../pages/AboutPage/AboutPage.async";
import { MainPageAsync } from "../../pages/MainPage/MainPage.async";

interface AppProps {}

export const App: FC<AppProps> = ({}) => {
  return (
    <div className="app">
      <Link to={"/"}>Головна</Link>
      <Link to={"/about"}>Про сайт</Link>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path={"/about"} element={<AboutPageAsync />} />
          <Route path={"/"} element={<MainPageAsync />} />
        </Routes>
      </Suspense>
    </div>
  );
};
