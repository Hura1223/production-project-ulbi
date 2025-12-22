// react
import { FC, useState } from "react";
import "./Counter.scss";

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
      <div>{count}</div>
      <button onClick={onIncreaseClick}>increase</button>
      <button onClick={onDecreaseClick}>decrease</button>
      <button onClick={onResetClick}>reset</button>
    </div>
  );
};
