// react
import { FC } from "react";
// styles
import "./Loader.scss";

interface LoaderProps {}

export const Loader: FC<LoaderProps> = ({}) => {
  return (
    <div className="lds-ellipsis">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};
