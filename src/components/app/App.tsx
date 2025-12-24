// react
import { FC } from "react";
// styles
import "../../index.scss";
// ui
import { Counter } from "../counter/Counter";

interface AppProps {}

export const App: FC<AppProps> = ({}) => {
  return (
    <div className="app">
      <Counter />
    </div>
  );
};
