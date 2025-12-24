// react
import { FC, useState } from "react";
// styles
import classes from "./Counter.module.scss";
interface CounterProps {}

export const Counter: FC<CounterProps> = ({}) => {
  const [count, setCount] = useState(0);

  const onIncreaseClick = () => {
    setCount(count + 1);
  };

  const onDecreaseClick = () => {
    setCount(count - 1);
  };

  const onResetClick = () => {
    setCount(0);
  };

  return (
    <div>
      <div className={classes.count}>{count}</div>
      <button className="increase__button" onClick={onIncreaseClick}>
        increase
      </button>
      <button onClick={onDecreaseClick}>decrease</button>
      <button onClick={onResetClick}>reset</button>
    </div>
  );
};
