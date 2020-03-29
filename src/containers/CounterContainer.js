import React from "react";
import Counter from "../components/Counter";
import { incrementCount, decrementCount } from "../actions/counterActions";

const CounterContainer = () => {
  let count = 0

  const increment = () => {
  };

  const decrement = () => {
  };

  return (
    <Counter
      value={count}
      onIncrement={increment}
      onDecrement={decrement}
    />
  )
}

export default CounterContainer